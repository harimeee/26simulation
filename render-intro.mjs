import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "playwright-core";
import ffmpegPath from "ffmpeg-static";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PAGE = path.join(ROOT, "intro.html");
const OUTPUT = path.join(ROOT, "intro.mp4");
const STORYBOARD = path.join(ROOT, "intro-storyboard.jpg");
const isStoryboard = process.argv.includes("--storyboard");
const renderDir = fs.mkdtempSync(path.join(os.tmpdir(), "concept-grove-intro-"));
const frameDir = path.join(renderDir, "frames");
fs.mkdirSync(frameDir);

function findBrowser() {
  const candidates = [
    process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE,
    process.env.ProgramFiles && path.join(process.env.ProgramFiles, "Microsoft", "Edge", "Application", "msedge.exe"),
    process.env["ProgramFiles(x86)"] && path.join(process.env["ProgramFiles(x86)"], "Microsoft", "Edge", "Application", "msedge.exe"),
    process.env.ProgramFiles && path.join(process.env.ProgramFiles, "Google", "Chrome", "Application", "chrome.exe"),
    process.platform === "darwin" && "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    process.platform === "linux" && "/usr/bin/chromium",
    process.platform === "linux" && "/usr/bin/google-chrome"
  ].filter(Boolean);
  return candidates.find((candidate) => fs.existsSync(candidate));
}

function runFfmpeg(args) {
  const result = spawnSync(ffmpegPath, args, { stdio: "inherit", windowsHide: true });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`FFmpeg failed with exit code ${result.status}.`);
}

async function openPage() {
  const executablePath = findBrowser();
  if (!executablePath) {
    throw new Error("Chrome or Edge was not found. Set PLAYWRIGHT_CHROMIUM_EXECUTABLE to its executable path.");
  }
  const browser = await chromium.launch({ executablePath, headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
    acceptDownloads: true
  });
  const page = await context.newPage();
  page.on("pageerror", (error) => console.error("Page error:", error.message));
  await page.goto(pathToFileURL(PAGE).href, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => window.seek(0));
  return { browser, context, page };
}

async function renderBeatSheet(page) {
  for (let beat = 0; beat < 30; beat += 1) {
    await page.evaluate((time) => window.seek(time), beat * 0.5);
    const file = path.join(frameDir, `beat-${String(beat).padStart(2, "0")}.jpg`);
    await page.locator("#frame").screenshot({ path: file, type: "jpeg", quality: 92 });
  }
  runFfmpeg([
    "-hide_banner", "-loglevel", "error", "-y",
    "-framerate", "1",
    "-i", path.join(frameDir, "beat-%02d.jpg"),
    "-vf", "scale=384:216,tile=5x6:padding=5:margin=5",
    "-frames:v", "1", "-update", "1", STORYBOARD
  ]);
  console.log(`30-beat storyboard: ${STORYBOARD}`);
}

async function renderSoundtrack(page, file) {
  const [download] = await Promise.all([
    page.waitForEvent("download", { timeout: 120000 }),
    page.evaluate(() => window.downloadWav())
  ]);
  await download.saveAs(file);
}

async function renderFilm(page, wavPath) {
  const frameCount = 15 * 60 * 3;
  for (let frame = 0; frame < frameCount; frame += 1) {
    const time = frame / 180;
    await page.evaluate((value) => window.seek(value), time);
    const file = path.join(frameDir, `frame-${String(frame).padStart(5, "0")}.jpg`);
    await page.locator("#frame").screenshot({ path: file, type: "jpeg", quality: 91 });
    if ((frame + 1) % 300 === 0) {
      console.log(`Rendered ${frame + 1}/${frameCount} subframes`);
    }
  }

  const silentVideo = path.join(renderDir, "picture.mp4");
  runFfmpeg([
    "-hide_banner", "-loglevel", "warning", "-y",
    "-framerate", "180",
    "-start_number", "0",
    "-i", path.join(frameDir, "frame-%05d.jpg"),
    "-vf", "tmix=frames=3:weights='1 1 1':scale=1/3,fps=60",
    "-an", "-c:v", "libx264", "-preset", "medium", "-crf", "18",
    "-pix_fmt", "yuv420p", "-movflags", "+faststart",
    silentVideo
  ]);
  runFfmpeg([
    "-hide_banner", "-loglevel", "warning", "-y",
    "-i", silentVideo, "-i", wavPath,
    "-map", "0:v:0", "-map", "1:a:0",
    "-c:v", "copy", "-c:a", "aac", "-b:a", "192k",
    "-t", "15", "-movflags", "+faststart",
    OUTPUT
  ]);
  console.log(`Final video: ${OUTPUT}`);
}

let browser;
try {
  const opened = await openPage();
  browser = opened.browser;
  const { page } = opened;

  const firstFrame = await page.locator("#frame").screenshot({ type: "png" });
  await page.evaluate(() => window.seek(14.999));
  const lastFrame = await page.locator("#frame").screenshot({ type: "png" });
  if (!firstFrame.equals(lastFrame)) {
    throw new Error("The opening and closing frames do not match.");
  }
  await page.evaluate(() => window.seek(0));

  if (isStoryboard) {
    await renderBeatSheet(page);
  } else {
    const wavPath = path.join(renderDir, "soundtrack.wav");
    await renderSoundtrack(page, wavPath);
    console.log("Rendering the 15-second film at 60 fps (3 subframes per frame)...");
    await renderFilm(page, wavPath);
  }
} finally {
  if (browser) await browser.close();
  fs.rmSync(renderDir, { recursive: true, force: true });
}
