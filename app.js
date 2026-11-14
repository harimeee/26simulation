const STORAGE_KEY = "concept-grove-state-v1";

const starterConcepts = [
  {
    id: "ecosystem-energy",
    title: "생태계의 에너지 흐름",
    subject: "과학",
    grade: "중학교",
    icon: "🌿",
    summary: "에너지는 생태계 안에서 어떤 길을 따라 이동할까요?",
    question: "생태계에서 에너지는 어떻게 이동하며, 왜 처음과 같은 모습으로 돌아오지 않을까?",
    keyIdea: "에너지는 주로 태양에서 시작해 생산자와 소비자로 이동하고, 각 단계에서 일부가 열로 퍼져 나가요. 물질은 다시 순환하지만 에너지는 한 방향으로 흐른다는 점이 핵심이에요.",
    connections: ["태양", "생산자", "소비자", "분해자", "열에너지"],
    explore: "풀밭의 풀, 메뚜기, 개구리, 뱀을 떠올려 보세요. 에너지가 이동하는 순서를 화살표로 나타내고, 화살표가 가리키는 방향을 설명해 보세요.",
    transfer: "가뭄으로 풀의 양이 크게 줄어든다면 메뚜기와 개구리에는 어떤 변화가 이어질까요? 먹이 관계와 에너지의 이동을 근거로 예측해 보세요.",
    quiz: [
      { question: "대부분의 생태계에서 에너지의 출발점이 되는 것은 무엇인가요?", options: ["흙 속의 무기물", "태양", "분해자"], answer: 1, explanation: "식물과 같은 생산자가 태양 에너지를 받아 양분을 만들며, 에너지 흐름이 시작돼요." },
      { question: "먹이 관계에서 화살표가 나타내는 것은 무엇인가요?", options: ["에너지와 물질이 이동하는 방향", "동물의 이동 경로", "개체 수의 많고 적음"], answer: 0, explanation: "먹이 관계의 화살표는 먹이가 되는 생물에서 먹는 생물 쪽으로 에너지가 이동하는 방향을 나타내요." },
      { question: "생태계의 에너지와 물질을 바르게 설명한 것은 무엇인가요?", options: ["둘 다 생태계 안에서 완전히 순환해요.", "에너지는 흐르고, 물질은 순환할 수 있어요.", "물질은 흐르고, 에너지는 순환해요."], answer: 1, explanation: "에너지는 단계마다 일부가 열로 퍼져 나가 한 방향으로 흐르고, 물질은 생물과 환경 사이에서 순환해요." }
    ]
  },
  {
    id: "fractions",
    title: "분수의 크기 비교",
    subject: "수학",
    grade: "초등학교",
    icon: "🧩",
    summary: "분모가 다른 분수, 어떤 기준으로 비교할까요?",
    question: "분모가 다른 두 분수의 크기를 공정하게 비교하려면 어떤 기준이 필요할까?",
    keyIdea: "분수는 같은 크기의 전체를 몇 부분으로 나누고 그중 몇 부분을 나타낸 수예요. 분모를 같게 만들거나, 기준이 되는 1과 비교하면 크기를 판단할 수 있어요.",
    connections: ["전체의 크기", "분자", "분모", "단위분수", "통분"],
    explore: "크기가 같은 종이 띠 두 장을 준비했다고 상상해 보세요. 한 장은 2등분해 1칸, 다른 한 장은 4등분해 3칸을 색칠했어요. 어떤 양이 더 큰지 그림이나 말로 설명해 보세요.",
    transfer: "피자 한 판의 3/8과 같은 크기의 피자 2/5 중 어느 쪽을 더 많이 먹은 것일까요? 비교 방법을 골라 근거와 함께 설명해 보세요.",
    quiz: [
      { question: "전체의 크기가 같을 때 1/4과 1/6 중 더 큰 분수는 무엇인가요?", options: ["1/4", "1/6", "둘의 크기는 같아요."], answer: 0, explanation: "같은 전체를 더 적은 수의 조각으로 나누면 한 조각의 크기가 커져요. 그래서 1/4이 1/6보다 커요." },
      { question: "분모가 다른 분수의 크기를 비교하는 방법으로 알맞은 것은 무엇인가요?", options: ["분자만 비교해요.", "분모를 같게 만들거나 같은 기준과 비교해요.", "분모가 큰 분수가 항상 커요."], answer: 1, explanation: "통분을 하면 같은 크기의 단위로 비교할 수 있어요. 1과 같은 기준을 활용하는 방법도 있어요." },
      { question: "같은 전체를 8등분한 5/8과 4/8을 비교하면?", options: ["5/8이 더 커요.", "4/8이 더 커요.", "크기가 같아요."], answer: 0, explanation: "단위의 크기(분모)가 같으므로 몇 조각인지(분자)를 비교하면 돼요. 다섯 조각이 네 조각보다 커요." }
    ]
  },
  {
    id: "democracy",
    title: "민주주의와 시민 참여",
    subject: "사회",
    grade: "중학교",
    icon: "🗣️",
    summary: "시민의 참여는 공동체의 결정을 어떻게 바꿀까요?",
    question: "다수의 의견을 모으는 것만으로 모두에게 좋은 결정을 만들 수 있을까?",
    keyIdea: "민주주의는 시민이 공동체의 결정에 참여하는 원리예요. 다수결은 결정을 돕는 방법이지만, 소수의 권리와 서로 다른 의견을 존중하는 과정도 함께 필요해요.",
    connections: ["시민", "참여", "다수결", "소수 의견", "공동체"],
    explore: "학교 공간을 새로 꾸미는 상황을 생각해 보세요. 학생마다 필요한 공간이 다를 때, 의견을 모으는 방법과 결정 뒤에 살펴볼 점을 적어 보세요.",
    transfer: "우리 동네 공원에 새로운 시설을 하나 놓기로 했어요. 어린이, 노인, 장애인, 인근 주민의 의견을 어떻게 듣고 조정하면 좋을까요?",
    quiz: [
      { question: "민주주의의 의미를 가장 잘 설명한 것은 무엇인가요?", options: ["한 사람이 모든 결정을 내리는 것", "시민이 공동체의 일에 참여하는 것", "언제나 다수의 의견만 따르는 것"], answer: 1, explanation: "민주주의에서 시민은 공동체의 결정에 참여해요. 참여는 투표뿐 아니라 토론, 제안, 감시 등 다양한 방식으로 이루어져요." },
      { question: "다수결로 결정할 때 함께 고려해야 할 것은 무엇인가요?", options: ["소수 의견과 권리", "결정 속도만 높이기", "토론을 생략하기"], answer: 0, explanation: "다수결은 유용한 결정 방식이지만, 소수의 권리와 의견을 존중하는 절차가 함께 필요해요." },
      { question: "공동체의 문제를 해결하는 참여 방식으로 알맞은 것은 무엇인가요?", options: ["의견을 모으고 근거를 나누며 대안을 조정해요.", "목소리가 가장 큰 사람의 의견을 따라요.", "다른 의견은 듣지 않아요."], answer: 0, explanation: "서로 다른 필요를 듣고 근거를 바탕으로 대안을 조정하면 더 많은 사람에게 책임 있는 결정을 만들 수 있어요." }
    ]
  }
];

function createInitialState() {
  return {
    concepts: starterConcepts,
    progress: {},
    xp: 0,
    completedDates: [],
    records: [],
    weeklyCompletions: []
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createInitialState();
    const saved = JSON.parse(raw);
    if (!saved || !Array.isArray(saved.concepts) || !saved.progress) throw new Error("저장 형식이 올바르지 않습니다.");
    return { ...createInitialState(), ...saved };
  } catch (error) {
    console.error("학습 기록을 불러오지 못했습니다.", error);
    setTimeout(() => showToast("저장된 학습 기록을 읽지 못해 예시 개념으로 시작합니다.", true), 0);
    return createInitialState();
  }
}

let state = loadState();
let activeView = "home";
let activeConceptId = null;
let activeStage = "question";
let quizSession = null;
let toastTimer;

const content = document.getElementById("app-content");
const modalRoot = document.getElementById("modal-root");

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (error) {
    console.error("학습 기록을 저장하지 못했습니다.", error);
    showToast("저장 공간에 문제가 있어 기록을 저장하지 못했어요.", true);
    return false;
  }
}

function showToast(message, isError = false) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.toggle("error", isError);
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function getConcept(id) {
  return state.concepts.find((concept) => concept.id === id);
}

function getConceptProgress(id) {
  return state.progress[id] || { done: [], notes: {}, bestScore: null, completed: false };
}

function stageCompletion(id) {
  const progress = getConceptProgress(id);
  return Math.round((progress.done.length / 4) * 100);
}

function getStreak() {
  const dates = new Set(state.completedDates || []);
  let count = 0;
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  if (!dates.has(toDateKey(cursor))) cursor.setDate(cursor.getDate() - 1);
  while (dates.has(toDateKey(cursor))) {
    count += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return count;
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function updateHeader() {
  document.getElementById("xp-count").textContent = state.xp;
  document.getElementById("streak-count").textContent = getStreak();
  const today = new Date();
  const mondayOffset = (today.getDay() + 6) % 7;
  const monday = new Date(today);
  monday.setHours(0, 0, 0, 0);
  monday.setDate(today.getDate() - mondayOffset);
  const weekCount = (state.weeklyCompletions || []).filter((entry) => new Date(`${entry.date}T00:00:00`) >= monday).length;
  document.getElementById("weekly-progress").style.width = `${Math.min(weekCount / 3 * 100, 100)}%`;
  document.getElementById("weekly-label").textContent = `이번 주 ${weekCount}개 개념 완료`;
}

function goTo(view) {
  activeView = view;
  if (view !== "learn") {
    activeConceptId = null;
    quizSession = null;
  }
  document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.view === view || (view === "learn" && button.dataset.view === "home")));
  const names = { home: "오늘의 학습", library: "내 개념 노트", records: "학습 기록", learn: "개념 탐구" };
  document.getElementById("breadcrumb-current").textContent = names[view] || names.home;
  render();
}

function startLearning(id) {
  activeConceptId = id;
  activeView = "learn";
  activeStage = "question";
  quizSession = null;
  document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.view === "home"));
  document.getElementById("breadcrumb-current").textContent = "개념 탐구";
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function subjectClass(subject) {
  if (subject === "과학") return "science";
  if (subject === "수학") return "math";
  if (subject === "사회") return "social";
  return "";
}

function conceptCard(concept) {
  const progress = stageCompletion(concept.id);
  return `
    <article class="concept-card">
      <div class="concept-card-top"><span class="subject-tag ${subjectClass(concept.subject)}">${escapeHTML(concept.subject)} · ${escapeHTML(concept.grade)}</span><button class="card-more" aria-label="개념 메뉴">···</button></div>
      <h3>${escapeHTML(concept.title)}</h3>
      <p>${escapeHTML(concept.summary)}</p>
      <div class="card-bottom"><div class="progress-meta"><span>${progress === 100 ? "탐구 완료" : progress ? "탐구 중" : "새 개념"}</span><strong>${progress}%</strong></div><div class="progress-track"><span style="width:${progress}%"></span></div></div>
      <button class="card-start" data-start="${escapeHTML(concept.id)}" aria-label="${escapeHTML(concept.title)} 학습하기"></button>
    </article>`;
}

function renderHome() {
  const concepts = state.concepts;
  const inProgress = concepts.find((concept) => stageCompletion(concept.id) > 0 && stageCompletion(concept.id) < 100);
  const featured = inProgress || concepts.find((concept) => stageCompletion(concept.id) < 100) || concepts[0];
  const completedThisWeek = (state.weeklyCompletions || []).length;
  content.innerHTML = `
    <div class="page-heading">
      <div><div class="eyebrow">YOUR LEARNING GARDEN</div><h1>오늘은 어떤 개념을<br>키워 볼까요?</h1><p>질문하고, 연결하고, 내 말로 설명하며 개념을 깊이 이해해요.</p></div>
      <button class="secondary-button" data-action="add-concept"><span>＋</span> 개념 추가</button>
    </div>
    <section class="intro-film" aria-label="개념의 숲 소개 영상">
      <video controls autoplay muted loop playsinline preload="metadata" aria-label="생각의 씨앗, 개념의 숲 소개 영상">
        <source src="intro.mp4" type="video/mp4">
        브라우저에서 소개 영상을 재생할 수 없어요.
      </video>
    </section>
    <section class="welcome-banner">
      <div class="welcome-copy"><div class="eyebrow">오늘의 탐구</div><h2>${inProgress ? "이어가던 탐구를 마무리해요" : "질문 하나가 이해를 바꿔요"}</h2><p>${featured ? `「${escapeHTML(featured.title)}」${inProgress ? "에서 멈춘 곳부터 이어서 탐구해요." : "의 핵심 질문을 따라가며 새롭게 살펴보세요."}` : "첫 개념을 추가하고 나만의 학습을 시작해 보세요."}</p>${featured ? `<button class="primary-button" data-start="${escapeHTML(featured.id)}">탐구 이어가기 <span aria-hidden="true">→</span></button>` : `<button class="primary-button" data-action="add-concept">첫 개념 만들기 <span aria-hidden="true">→</span></button>`}</div>
      <div class="banner-art" aria-hidden="true"><div class="banner-orbit"></div><div class="banner-sun"></div><div class="banner-leaf leaf-one"></div><div class="banner-leaf leaf-two"></div><div class="banner-leaf leaf-three"></div></div>
    </section>
    <section>
      <div class="section-heading"><div><h2>나의 개념 모음</h2><p>알고 있는 것을 연결해 나만의 개념 지도를 만들어요.</p></div><button class="text-button" data-view="library">모두 보기 →</button></div>
      ${concepts.length ? `<div class="concept-grid">${concepts.slice(0, 3).map(conceptCard).join("")}</div>` : `<div class="empty-state"><strong>아직 개념 노트가 없어요</strong><p>배우고 싶은 교과서 개념을 추가해 첫 탐구를 시작해 보세요.</p><button class="primary-button" data-action="add-concept">개념 추가하기</button></div>`}
    </section>
    <div class="dashboard-lower">
      <section class="panel"><div class="panel-title"><h3>오늘의 생각 질문</h3><span>잠깐 멈춰 생각해 봐요</span></div><div class="question-of-day"><span class="question-icon">？</span><div><p>${featured ? escapeHTML(featured.question) : "최근 배운 개념 중 다른 상황에도 적용할 수 있는 것은 무엇인가요?"}<small>정답을 찾기보다, 나만의 이유를 적어 보세요.</small></p></div></div></section>
      <section class="panel"><div class="panel-title"><h3>이번 주 작은 성취</h3><span>주 3개 목표</span></div><div class="question-of-day"><span class="question-icon">✦</span><div><p>개념을 마칠 때마다 한 그루씩 자라나요.<small>이번 주 ${completedThisWeek}개 완료 · 목표 3개</small></p></div></div></section>
    </div>`;
}

function renderLibrary(query = "") {
  const normalized = query.trim().toLocaleLowerCase();
  const concepts = state.concepts.filter((concept) => `${concept.title} ${concept.subject} ${concept.grade}`.toLocaleLowerCase().includes(normalized));
  content.innerHTML = `
    <div class="page-heading"><div><div class="eyebrow">MY CONCEPT NOTES</div><h1>내 개념 노트</h1><p>교과서에서 만난 개념을 저장하고, 탐구하며 내 것으로 만들어요.</p></div><button class="primary-button" data-action="add-concept">＋ 개념 추가</button></div>
    <div class="library-tools"><label class="search-box"><span>⌕</span><input id="concept-search" type="search" value="${escapeHTML(query)}" placeholder="개념이나 교과를 검색해 보세요" aria-label="개념 검색"></label><span class="library-count">${concepts.length}개 개념</span></div>
    ${concepts.length ? `<div class="concept-grid">${concepts.map(conceptCard).join("")}</div>` : `<div class="empty-state"><strong>${state.concepts.length ? "검색 결과가 없어요" : "아직 개념 노트가 없어요"}</strong><p>${state.concepts.length ? "다른 단어나 교과로 다시 찾아보세요." : "교과서에서 배우고 싶은 개념을 직접 추가해 보세요."}</p>${state.concepts.length ? "" : `<button class="primary-button" data-action="add-concept">개념 추가하기</button>`}</div>`}`;
}

function stageName(stage) {
  return ({ question: "질문", explore: "개념 연결", apply: "새 상황에 적용", check: "확인 퀴즈" })[stage];
}

function markStageDone(concept, stage) {
  const progress = getConceptProgress(concept.id);
  if (progress.done.includes(stage)) return false;
  progress.done.push(stage);
  state.progress[concept.id] = progress;
  if (stage !== "check") state.xp += 5;
  saveState();
  updateHeader();
  return true;
}

function saveNote(concept, stage, value) {
  const progress = getConceptProgress(concept.id);
  progress.notes[stage] = value;
  state.progress[concept.id] = progress;
  saveState();
}

function renderLearning() {
  const concept = getConcept(activeConceptId);
  if (!concept) {
    goTo("home");
    return;
  }
  const stages = ["question", "explore", "apply", "check"];
  const progress = getConceptProgress(concept.id);
  const percent = stageCompletion(concept.id);
  const stageTabs = stages.map((stage, index) => `<button class="stage-tab ${activeStage === stage ? "active" : ""} ${progress.done.includes(stage) ? "done" : ""}" data-stage="${stage}"><span class="stage-number">${progress.done.includes(stage) ? "✓" : index + 1}</span><span>${stageName(stage)}</span></button>`).join("");
  content.innerHTML = `
    <div class="learning-layout">
      <div class="learning-main">
        <div class="learning-head"><button class="back-link" data-view="home">← 오늘의 학습으로</button><div class="learning-title-row"><span class="learning-title-icon">${escapeHTML(concept.icon || "🌱")}</span><div><span class="subject-tag ${subjectClass(concept.subject)}">${escapeHTML(concept.subject)} · ${escapeHTML(concept.grade)}</span><h1>${escapeHTML(concept.title)}</h1><p>${escapeHTML(concept.summary)}</p></div></div></div>
        <div class="stage-list" role="tablist" aria-label="학습 단계">${stageTabs}</div>
        <div id="lesson-content"></div>
      </div>
      <aside class="learning-aside">
        <section class="aside-card"><div class="learning-progress-row"><span>탐구 진행</span><strong>${percent}%</strong></div><div class="progress-track"><span style="width:${percent}%"></span></div><p style="margin-top:10px">한 단계씩 내 생각을 더해 보세요.</p></section>
        <section class="aside-card"><span class="tip-icon">✳</span><h3>깊이 생각하는 팁</h3><p>“왜 그렇게 생각했나요?”라고 스스로에게 한 번 더 물어보면, 개념 사이의 연결이 보여요.</p></section>
      </aside>
    </div>`;
  document.getElementById("lesson-content").innerHTML = lessonMarkup(concept, activeStage, progress);
}

function lessonMarkup(concept, stage, progress) {
  if (stage === "question") {
    return `<article class="lesson-card"><div class="eyebrow">01 · 질문에서 시작해요</div><h2>먼저, 나의 생각을 꺼내 볼까요?</h2><p class="lesson-copy">정답을 찾기 전에 지금 알고 있는 것, 궁금한 것을 떠올려 보세요. 생각이 완벽하지 않아도 괜찮아요.</p><div class="question-prompt">${escapeHTML(concept.question)}</div><label class="reflection-label" for="reflection-question">이 질문에 대한 나의 생각</label><textarea class="reflection-input" id="reflection-question" data-note="question" placeholder="떠오르는 생각이나 궁금한 점을 자유롭게 적어 보세요.">${escapeHTML(progress.notes.question || "")}</textarea><div class="lesson-actions"><span class="saved-hint">생각은 이 기기에 자동 저장돼요.</span><button class="primary-button" data-complete-stage="question">생각을 남기고 다음으로 →</button></div></article>`;
  }
  if (stage === "explore") {
    return `<article class="lesson-card"><div class="eyebrow">02 · 개념을 연결해요</div><h2>핵심 개념은 서로 어떻게 이어질까요?</h2><div class="idea-box"><strong>핵심 개념 한눈에 보기</strong><p>${escapeHTML(concept.keyIdea)}</p></div><div class="concept-words">${(concept.connections || []).map((word) => `<span class="concept-word">${escapeHTML(word)}</span>`).join("")}</div><div class="question-prompt">${escapeHTML(concept.explore)}</div><label class="reflection-label" for="reflection-explore">내가 찾은 연결과 근거</label><textarea class="reflection-input" id="reflection-explore" data-note="explore" placeholder="개념을 연결하고, 그렇게 생각한 이유를 적어 보세요.">${escapeHTML(progress.notes.explore || "")}</textarea><div class="lesson-actions"><button class="quiet-button" data-stage="question">← 이전 단계</button><button class="primary-button" data-complete-stage="explore">개념 연결 완료 →</button></div></article>`;
  }
  if (stage === "apply") {
    return `<article class="lesson-card"><div class="eyebrow">03 · 새로운 상황에 적용해요</div><h2>이 개념을 다른 상황에서도 써 볼까요?</h2><p class="lesson-copy">개념을 잘 이해했는지는 새로운 사례에 적용해 볼 때 드러나요. 무엇이 같고 다른지 살펴보세요.</p><div class="question-prompt">${escapeHTML(concept.transfer)}</div><label class="reflection-label" for="reflection-apply">나의 예측과 설명</label><textarea class="reflection-input" id="reflection-apply" data-note="apply" placeholder="무슨 일이 일어날지, 개념을 근거로 설명해 보세요.">${escapeHTML(progress.notes.apply || "")}</textarea><div class="lesson-actions"><button class="quiet-button" data-stage="explore">← 이전 단계</button><button class="primary-button" data-complete-stage="apply">적용 완료 →</button></div></article>`;
  }
  return quizMarkup(concept, progress);
}

function quizMarkup(concept, progress) {
  if (!quizSession || quizSession.conceptId !== concept.id) {
    quizSession = { conceptId: concept.id, index: 0, correct: 0, answered: false, lastAnswer: null, finished: false };
  }
  if (quizSession.finished) {
    const score = Math.round((quizSession.correct / concept.quiz.length) * 100);
    return `<article class="complete-card"><span class="complete-symbol">✦</span><h2>${progress.completed ? "이번 탐구도 잘 마쳤어요!" : "개념 탐구를 마쳤어요!"}</h2><p>질문을 만들고, 개념을 연결하고, 새로운 상황에 적용해 봤어요.<br>내가 적은 생각을 다시 읽으며 배움을 돌아봐요.</p><strong>정답 ${quizSession.correct}/${concept.quiz.length} · +${quizSession.xpAwarded || 0} XP</strong><div style="margin-top:17px"><button class="primary-button" data-view="home">학습 화면으로 돌아가기 →</button></div></article>`;
  }
  const index = quizSession.index;
  const item = concept.quiz[index];
  if (!item) return "";
  const selected = quizSession.lastAnswer;
  const options = item.options.map((option, optionIndex) => {
    let style = "";
    if (quizSession.answered && optionIndex === item.answer) style = "correct";
    else if (quizSession.answered && optionIndex === selected) style = "incorrect";
    return `<button class="quiz-option ${style}" data-answer="${optionIndex}" ${quizSession.answered ? "disabled" : ""}><strong>${String.fromCharCode(65 + optionIndex)}.</strong> ${escapeHTML(option)}</button>`;
  }).join("");
  const feedback = quizSession.answered ? `<div class="quiz-feedback ${selected === item.answer ? "" : "wrong"}">${selected === item.answer ? "맞았어요! " : "괜찮아요. "} ${escapeHTML(item.explanation)}</div>` : "";
  return `<article class="lesson-card"><div class="eyebrow">04 · 배움을 확인해요</div><div class="lesson-actions" style="margin-top:5px"><h2 style="margin:0">개념 확인 퀴즈</h2><span class="quiz-progress">${index + 1} / ${concept.quiz.length}</span></div><p class="lesson-copy" style="margin-top:8px">외운 답보다, 개념을 이해한 만큼 풀어 보세요.</p><div class="question-prompt">${escapeHTML(item.question)}</div><div class="quiz-options">${options}</div>${feedback}<div class="lesson-actions"><button class="quiet-button" data-stage="apply">← 이전 단계</button>${quizSession.answered ? `<button class="primary-button" data-quiz-next>${index === concept.quiz.length - 1 ? "결과 보기 →" : "다음 문제 →"}</button>` : ""}</div></article>`;
}

function finishQuiz(concept) {
  const progress = getConceptProgress(concept.id);
  const wasComplete = progress.completed;
  const score = Math.round((quizSession.correct / concept.quiz.length) * 100);
  markStageDone(concept, "check");
  progress.bestScore = progress.bestScore === null || progress.bestScore === undefined ? score : Math.max(progress.bestScore, score);
  progress.completed = true;
  state.progress[concept.id] = progress;
  const reward = wasComplete ? 0 : 20 + quizSession.correct * 5;
  if (!wasComplete) {
    state.xp += reward;
    const today = toDateKey(new Date());
    state.completedDates = [...new Set([...(state.completedDates || []), today])];
    state.weeklyCompletions = [...(state.weeklyCompletions || []), { id: `${concept.id}-${Date.now()}`, date: today, title: concept.title, score }];
    state.records = [...(state.records || []), { id: `${concept.id}-${Date.now()}`, conceptId: concept.id, date: today, title: concept.title, subject: concept.subject, score, xp: reward }];
  }
  quizSession.xpAwarded = reward;
  quizSession.finished = true;
  saveState();
  updateHeader();
}

function renderRecords() {
  const completed = state.records || [];
  const conceptsCompleted = new Set(completed.map((record) => record.conceptId || record.title)).size;
  const best = completed.length ? Math.max(...completed.map((record) => record.score)) : 0;
  const recent = [...completed].reverse().slice(0, 8);
  content.innerHTML = `
    <div class="page-heading"><div><div class="eyebrow">YOUR GROWTH</div><h1>배움이 자란 기록</h1><p>정답의 개수보다, 내가 생각을 확장해 온 과정을 돌아봐요.</p></div></div>
    <div class="stats-grid"><div class="stat-card"><span>누적 경험치</span><strong>${state.xp} <small style="font-size:10px;color:#879087">XP</small></strong></div><div class="stat-card"><span>완료한 개념</span><strong>${conceptsCompleted}<small style="font-size:10px;color:#879087"> 개</small></strong></div><div class="stat-card"><span>최고 퀴즈 점수</span><strong>${best}<small style="font-size:10px;color:#879087"> 점</small></strong></div></div>
    <section class="panel"><div class="panel-title"><h3>최근 탐구</h3><span>마지막 8개 기록</span></div>${recent.length ? `<div class="record-list">${recent.map((record) => `<div class="record-row"><span class="record-icon">🌱</span><div class="record-copy"><strong>${escapeHTML(record.title)}</strong><small>${escapeHTML(record.subject)} · ${escapeHTML(record.date)}</small></div><span class="record-score">${record.score}점 · +${record.xp} XP</span></div>`).join("")}</div>` : `<div class="empty-state" style="margin-top:14px"><strong>첫 탐구를 기다리고 있어요</strong><p>개념을 질문부터 퀴즈까지 완료하면 여기에 기록돼요.</p><button class="primary-button" data-view="home">개념 둘러보기</button></div>`}</section>`;
}

function render() {
  updateHeader();
  if (activeView === "learn") renderLearning();
  else if (activeView === "library") renderLibrary();
  else if (activeView === "records") renderRecords();
  else renderHome();
}

function closeConceptModal() {
  modalRoot.innerHTML = "";
  document.body.classList.remove("modal-open");
}

function openConceptModal() {
  document.body.classList.add("modal-open");
  modalRoot.innerHTML = `
    <div class="modal-backdrop">
      <section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal-head"><div><h2 id="modal-title">나만의 개념 추가</h2><p>교과서에서 배운 내용을 적으면 탐구 노트가 만들어져요.</p></div><button class="modal-close" data-close-modal aria-label="닫기">×</button></div>
        <form id="concept-form">
          <div class="form-grid">
            <div class="form-field"><label for="new-subject">교과</label><input id="new-subject" name="subject" required placeholder="예: 과학"></div>
            <div class="form-field"><label for="new-grade">학년/수준</label><input id="new-grade" name="grade" placeholder="예: 초등학교 5학년"></div>
            <div class="form-field full"><label for="new-title">배울 개념</label><input id="new-title" name="title" required maxlength="45" placeholder="예: 물의 순환"></div>
            <div class="form-field full"><label for="new-summary">개념 한 줄 소개</label><input id="new-summary" name="summary" required maxlength="90" placeholder="이 개념을 생각하게 하는 짧은 안내"></div>
            <div class="form-field full"><label for="new-question">핵심 질문</label><textarea id="new-question" name="question" required placeholder="왜 / 어떻게 / 무엇이 달라질까?"></textarea></div>
            <div class="form-field full"><label for="new-key-idea">핵심 개념 설명</label><textarea id="new-key-idea" name="keyIdea" required placeholder="교과서의 개념을 나만의 말로 짧게 정리해요."></textarea></div>
            <div class="form-field full"><label for="new-connections">연결되는 낱말</label><input id="new-connections" name="connections" placeholder="쉼표로 구분 (예: 증발, 응결, 강수)"></div>
            <div class="form-field full"><label for="new-explore">생각해 볼 탐구 활동</label><textarea id="new-explore" name="explore" required placeholder="개념 사이의 관계를 찾아볼 활동이나 질문"></textarea></div>
            <div class="form-field full"><label for="new-transfer">새로운 상황에 적용할 질문</label><textarea id="new-transfer" name="transfer" required placeholder="실생활 사례에 개념을 적용하는 질문"></textarea></div>
            <div class="form-field full"><label for="new-quiz">확인 퀴즈 질문</label><input id="new-quiz" name="quizQuestion" required placeholder="개념을 이해했는지 확인하는 문제"></div>
            <div class="form-field"><label for="new-option-a">선택지 A</label><input id="new-option-a" name="optionA" required></div>
            <div class="form-field"><label for="new-option-b">선택지 B</label><input id="new-option-b" name="optionB" required></div>
            <div class="form-field"><label for="new-option-c">선택지 C</label><input id="new-option-c" name="optionC" required></div>
            <div class="form-field"><label for="new-answer">정답</label><select id="new-answer" name="answer"><option value="0">A</option><option value="1">B</option><option value="2">C</option></select></div>
            <div class="form-field full"><label for="new-explanation">정답 해설</label><input id="new-explanation" name="explanation" required placeholder="왜 이 답이 맞는지 개념으로 설명해요."></div>
          </div>
          <p class="form-hint">추가한 개념과 학습 기록은 이 브라우저에 저장돼요.</p>
          <div class="modal-actions"><button type="button" class="secondary-button" data-close-modal>취소</button><button type="submit" class="primary-button">개념 노트 만들기</button></div>
        </form>
      </section>
    </div>`;
  document.getElementById("new-subject").focus();
}

document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const viewButton = target.closest("[data-view]");
  if (viewButton) {
    goTo(viewButton.dataset.view);
    return;
  }
  const startButton = target.closest("[data-start]");
  if (startButton) {
    startLearning(startButton.dataset.start);
    return;
  }
  const addButton = target.closest('[data-action="add-concept"]');
  if (addButton) {
    openConceptModal();
    return;
  }
  if (target.classList.contains("modal-backdrop")) {
    closeConceptModal();
    return;
  }
  if (target.closest("[data-close-modal]")) {
    if (target.closest(".modal-close") || target.tagName === "BUTTON") closeConceptModal();
    return;
  }
  const stageButton = target.closest("[data-stage]");
  if (stageButton) {
    activeStage = stageButton.dataset.stage;
    if (activeStage !== "check") quizSession = null;
    render();
    return;
  }
  const completeButton = target.closest("[data-complete-stage]");
  if (completeButton) {
    const concept = getConcept(activeConceptId);
    const stage = completeButton.dataset.completeStage;
    const input = document.querySelector(`[data-note="${stage}"]`);
    if (input) saveNote(concept, stage, input.value);
    const firstCompletion = markStageDone(concept, stage);
    if (firstCompletion) showToast("좋아요! 생각을 기록했어요. +5 XP");
    activeStage = stage === "question" ? "explore" : stage === "explore" ? "apply" : "check";
    render();
    return;
  }
  const answerButton = target.closest("[data-answer]");
  if (answerButton && quizSession && !quizSession.answered) {
    const concept = getConcept(activeConceptId);
    const item = concept.quiz[quizSession.index];
    const answer = Number(answerButton.dataset.answer);
    quizSession.lastAnswer = answer;
    quizSession.answered = true;
    if (answer === item.answer) quizSession.correct += 1;
    render();
    return;
  }
  if (target.closest("[data-quiz-next]")) {
    const concept = getConcept(activeConceptId);
    if (quizSession.index < concept.quiz.length - 1) {
      quizSession.index += 1;
      quizSession.answered = false;
      quizSession.lastAnswer = null;
    } else {
      finishQuiz(concept);
    }
    render();
  }
});

document.addEventListener("input", (event) => {
  const target = event.target;
  if (target.matches("#concept-search")) {
    const position = target.selectionStart;
    renderLibrary(target.value);
    const replacement = document.getElementById("concept-search");
    replacement.focus();
    replacement.setSelectionRange(position, position);
    return;
  }
  const noteStage = target.dataset.note;
  if (noteStage && activeConceptId) {
    saveNote(getConcept(activeConceptId), noteStage, target.value);
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.id !== "concept-form") return;
  event.preventDefault();
  const form = new FormData(event.target);
  const title = String(form.get("title")).trim();
  const subject = String(form.get("subject")).trim();
  if (!title || !subject) return;
  const id = `custom-${Date.now()}`;
  const concept = {
    id,
    title,
    subject,
    grade: String(form.get("grade")).trim() || "나만의 개념",
    icon: "📖",
    summary: String(form.get("summary")).trim(),
    question: String(form.get("question")).trim(),
    keyIdea: String(form.get("keyIdea")).trim(),
    connections: String(form.get("connections")).split(",").map((word) => word.trim()).filter(Boolean).slice(0, 8),
    explore: String(form.get("explore")).trim(),
    transfer: String(form.get("transfer")).trim(),
    quiz: [{
      question: String(form.get("quizQuestion")).trim(),
      options: [String(form.get("optionA")).trim(), String(form.get("optionB")).trim(), String(form.get("optionC")).trim()],
      answer: Number(form.get("answer")),
      explanation: String(form.get("explanation")).trim()
    }]
  };
  state.concepts.unshift(concept);
  state.progress[id] = { done: [], notes: {}, bestScore: null, completed: false };
  if (!saveState()) {
    state.concepts.shift();
    delete state.progress[id];
    return;
  }
  closeConceptModal();
  showToast("새 개념 노트를 만들었어요. 이제 탐구를 시작해 보세요!");
  goTo("library");
});

render();
