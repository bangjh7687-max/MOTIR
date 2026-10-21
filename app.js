// === 신규 기능: "나는 이 기관으로부터 어떤 도움을 받을 수 있을까?" 설문 & 체크리스트 === //
const surveyQuestionsData = {
  citizen: [
    { id: "c1", label: "여름철 냉방비나 겨울철 난방비(가스·전기 등) 부담이 크거나 취약계층 혜택 대상이다", tag: "에너지 복지" },
    { id: "c2", label: "우리 집 전기요금을 절약하고, 절약한 만큼 현금이나 포인트로 캐시백을 받고 싶다", tag: "전력 절약" },
    { id: "c3", label: "냉장고·에어컨 등 노후 가전을 고효율 1등급 가전으로 교체할 계획이 있다", tag: "환급 혜택" },
    { id: "c4", label: "가정 내 노후 전기설비나 도시가스 배관의 무상 안전 점검이 필요하다", tag: "생활 안전" }
  ],
  youth: [
    { id: "y1", label: "반도체, 이차전지(배터리), 미래차 등 첨단 전략기술 분야로 취업을 희망한다", tag: "취업 준비" },
    { id: "y2", label: "대학/대학원에서 첨단 공학 실무 장비(클린룸 등)를 다뤄보는 국비 실습 교육을 원한다", tag: "부트캠프" },
    { id: "y3", label: "이공계 연구자로서 정부 R&D 과제에 연구원으로 참여해 인건비 지원을 받고 싶다", tag: "청년 연구원" },
    { id: "y4", label: "공공기관(한전, 무역보험공사, KOTRA, 가스공사 등) 인턴십에 관심이 있다", tag: "공공 인턴" }
  ],
  sme: [
    { id: "s1", label: "소재·부품·장비(소부장) 제조업체로서 설비투자나 원자재 구매 대출 금리가 부담스럽다", tag: "저리 금융" },
    { id: "s2", label: "스마트공장 도입(AI 공정 자동화, 불량률 감소)을 통해 생산성을 높이고 싶다", tag: "디지털 전환" },
    { id: "s3", label: "신제품 개발을 위한 정부 R&D 기술개발 지원금(출연금/보조금)이 필요하다", tag: "기술 R&D" },
    { id: "s4", label: "지방으로 공장이나 본사를 이전/증설하여 세제 혜택과 보조금을 받고 싶다", tag: "지방 이전" }
  ],
  exporter: [
    { id: "e1", label: "수출 대금을 떼일까 봐 불안하거나, 수출용 완제품 제작 자금이 필요하다", tag: "무역보험" },
    { id: "e2", label: "CE(유럽), FDA/FCC(미국) 등 필수 해외 인증 획득 비용이 많이 든다", tag: "해외 인증" },
    { id: "e3", label: "해외 바이어를 직접 만나고 싶거나 글로벌 유명 박람회 참가를 희망한다", tag: "판로 개척" },
    { id: "e4", label: "해외 물류비 급등 및 환율 변동 위험을 헷지하고 싶다", tag: "물류·환변동" }
  ]
};

// 혜택 상세 데이터 매핑
const benefitResultsData = {
  c1: {
    title: "💡 에너지바우처 (냉·난방비 지원)",
    dept: "자원안보정책과 / 한국에너지공단",
    target: "기초생활수급 가구 중 노인, 영유아, 장애인, 임산부 등",
    desc: "여름에는 전기요금 차감, 겨울에는 도시가스·연탄·등유 등을 결제할 수 있는 전자바우처(가구당 평균 수십만 원)를 전액 무상 지원합니다.",
    action: "신청 방법: 거주지 읍·면·동 행정복지센터 방문 또는 복지로(bokjiro.go.kr) 온라인 신청",
    url: "https://www.energyv.or.kr"
  },
  c2: {
    title: "⚡ 한전 에너지캐시백 (전기요금 절감 환급)",
    dept: "전력산업정책과 / 한국전력공사",
    target: "주택용 전기를 사용하는 모든 일반 가정",
    desc: "지난 2개년 동월 평균 대비 전기를 3% 이상 절감하면 절감량에 따라 1kWh당 최대 100원까지 다음 달 전기요금에서 자동 차감해드립니다.",
    action: "신청 방법: 한전ON 누리집(online.kepco.co.kr) 접속 후 '에너지캐시백' 가입 (1분 소요)",
    url: "https://online.kepco.co.kr"
  },
  c3: {
    title: "❄️ 으뜸효율 고효율 가전제품 구매비용 환급",
    dept: "에너지효율과 / 한국에너지공단",
    target: "에너지효율 1등급 가전을 구매한 국민 (한전 복지할인가구 등)",
    desc: "냉장고, 김치냉장고, 에어컨, 세탁기 등 대상 품목 구매 시 결제금액의 10%~20%(가구당 수십만 원 한도)를 현금 환급해 드립니다.",
    action: "신청 방법: '한전 고효율 가전 구매비용 지원사업' 전용 웹사이트에서 영수증 등록",
    url: "https://en-ter.co.kr"
  },
  c4: {
    title: "🛡️ 한국전기안전공사 & 가스안전공사 무상 안전점검",
    dept: "산업안전과 / 한국전기안전공사 · 한국가스안전공사",
    target: "노후 주택, 전통시장 점포, 취약시설 거주 국민",
    desc: "누전차단기 불량, 노후 배선, 가스 밸브 누출 여부를 국가 기술진이 직접 방문하여 무상 진단하고 노후 소모품을 교체 지원합니다.",
    action: "신청 방법: 전기안전공사 콜센터(1588-7500) 및 가스안전 콜센터(1544-4500) 접수",
    url: "https://www.kesco.or.kr"
  },
  y1: {
    title: "🎓 국가첨단전략산업 부트캠프 & 특성화대학원",
    dept: "산업기술인력혁신과 / 한국산업기술진흥원(KIAT)",
    target: "이공계 재학생, 졸업예정자 및 취업준비생",
    desc: "반도체·배터리·미래차·바이오 분야 실무 중심 단기 집중 교육(등록금 전액 무료, 월 실습장려금 지급) 및 국내 굴지 대·중견기업 우선 채용 매칭 기회를 제공합니다.",
    action: "신청 방법: 한국산업기술진흥원(kiat.or.kr) 교육공고 또는 협약 대학교 사업단 문의",
    url: "https://www.kiat.or.kr"
  },
  y2: {
    title: "🔬 첨단 반도체 클린룸 & 나노팹 실습 교육 지원",
    dept: "반도체과 / 나노종합기술원",
    target: "차세대 반도체 공정/설계 엔지니어를 꿈꾸는 청년",
    desc: "국가 공공 나노팹(대전/수원 등) 시설을 활용해 실제 웨이퍼 공정 장비를 직접 다루는 첨단 장비 실습 과정을 무상으로 이수할 수 있습니다.",
    action: "신청 방법: 나노인프라혁신플랫폼(nano-infra.re.kr) 실습 교육 신청",
    url: "https://www.nnfc.re.kr"
  },
  y3: {
    title: "💼 청년 연구자 R&D 과제 연구비 & 인건비 매칭",
    dept: "산업기술개발과 / 한국산업기술기획평가원(KEIT)",
    target: "정부 R&D 수행 산학협력단 및 기업 연구소 청년 연구원",
    desc: "국가 산업기술 R&D 프로젝트에 참여하는 청년 연구자의 법정 인건비를 100% 국비 보조하여 안정적인 연구 환경과 취업을 보장합니다.",
    action: "신청 방법: 범부처통합연구지원시스템(IRIS, iris.go.kr) 과제 참여연구원 등록",
    url: "https://www.keit.re.kr"
  },
  y4: {
    title: "🏛️ 산업부 산하 41개 공공기관 청년 체험형 인턴십",
    dept: "기획조정실 / 산하 공공기관",
    target: "공기업·공공기관 취업을 준비하는 대한민국 청년",
    desc: "KOTRA, 한국무역보험공사, 한국전력, 한국가스공사, 디자인진흥원 등 핵심 경제 공공기관에서 실무 경력을 쌓고 공채 서류전형 가점을 받습니다.",
    action: "신청 방법: 공공기관 알리오(alio.go.kr) 채용정보 및 각 기관 채용 누리집",
    url: "https://job.alio.go.kr"
  },
  s1: {
    title: "💰 2조 원 규모 소부장 상생 보증 프로그램 & 무역금융",
    dept: "산업공급망정책과 / 한국무역보험공사 · 시중은행",
    target: "반도체·디스플레이·이차전지 등 소부장 1·2차 협력 중소·중견기업",
    desc: "대기업 및 정부 출연을 바탕으로 보증료 최대 100% 지원 및 시중 금리 대비 최대 2.5%p 우대 저금리 대출을 최대 수십억 원까지 공급합니다.",
    action: "신청 방법: 한국무역보험공사 고객센터(1588-3884) 또는 협약 시중은행(신한·하나·국민·우리) 창구",
    url: "https://www.ksure.or.kr"
  },
  s2: {
    title: "🤖 스마트제조혁신 & AI 자율제조 선도 프로젝트",
    dept: "산업디지털융합과 / 중소벤처기업진흥공단 · 산업기술진흥원",
    target: "제조 공정 디지털화·스마트공장 고도화를 희망하는 기업",
    desc: "생산 공정에 IoT 센서, 머신비전, 산업용 로봇 도입 비용을 최대 50%~70%(최대 2억~5억 원) 매칭 보조금 형태로 직접 지원합니다.",
    action: "신청 방법: 스마트공장사업관리시스템(smart-factory.kr) 사업 공고 확인",
    url: "https://www.smart-factory.kr"
  },
  s3: {
    title: "🔬 산업기술 알키미스트 프로젝트 & 상용화 R&D 출연금",
    dept: "산업기술정책과 / 한국산업기술기획평가원(KEIT)",
    target: "혁신 기술을 보유한 중소·중견 벤처기업 연구소",
    desc: "글로벌 시장을 선점할 수 있는 신제품 개발 비용을 과제당 연 5억~30억 원 규모의 비환수성 정부 출연 연구개발비로 지원합니다.",
    action: "신청 방법: 산업기술 R&D 정보포털(itech.keit.re.kr) 접수",
    url: "https://itech.keit.re.kr"
  },
  s4: {
    title: "🏙️ 기회발전특구 이전 투자 인센티브 (파격적 세제 감면)",
    dept: "지역경제정책과 / 산업통상자원부",
    target: "비수도권 거점 지역으로 공장 신·증설 및 본사 이전을 추진하는 기업",
    desc: "소득세·법인세 5년간 100% 감면(이후 2년간 50%), 취득세·재산세 최대 감면 및 가업상속공제 한도 폐지급 혜택을 부여합니다.",
    action: "신청 방법: 해당 시·도 자치단체 투자유치과 또는 산업부 지역경제정책과 상담",
    url: "https://www.motie.go.kr"
  },
  e1: {
    title: "🛡️ 무역보험공사 단기수출보험 & 수출 신용보증",
    dept: "무역정책과 / 한국무역보험공사(K-SURE)",
    target: "해외 바이어와 수출 계약을 체결했거나 진행 중인 기업",
    desc: "바이어의 파산·대금 미지급 시 결제 대금의 최대 100%를 무역보험공사가 대신 보상해주며, 수출용 완제품 제조 자금 대출 보증서를 발급합니다.",
    action: "신청 방법: 무역보험공사 사이버영업점(cyber.ksure.or.kr) 또는 1588-3884 상담",
    url: "https://cyber.ksure.or.kr"
  },
  e2: {
    title: "🔖 해외규격인증 획득 지원사업 (수출바우처)",
    dept: "수출입과 / KOTRA · 한국화학융합시험연구원(KTR)",
    target: "해외 인증이 없어 수출길이 막힌 중소·중견기업",
    desc: "CE, FDA, RoHS, CCC 등 500여 개 해외 기술규격 인증 취득에 소요되는 시험비, 인증비, 컨설팅 비용의 최대 70%(연간 최대 1억 원)를 지원합니다.",
    action: "신청 방법: 해외규격인증지원시스템(certi.or.kr) 또는 수출바우처닷컴(exportvoucher.com)",
    url: "https://www.exportvoucher.com"
  },
  e3: {
    title: "🌐 KOTRA 지사화 사업 & 해외 유명 전시회 단체관 참가",
    dept: "무역진흥과 / 대한무역투자진흥공사(KOTRA)",
    target: "해외에 독자 지사를 설립하기 어려운 유망 수출 중소기업",
    desc: "전 세계 84개국 129개 KOTRA 무역관이 우리 기업의 전담 지사가 되어 현지 1:1 바이어 발굴, 샘플 시연, 수출 계약 체결을 대행합니다.",
    action: "신청 방법: 코트라 무역투자24 누리집(kotra.or.kr)에서 지사화사업 신청",
    url: "https://www.kotra.or.kr"
  },
  e4: {
    title: "📦 수출애로 해소 3종 세트 (물류비 바우처 & 환변동보험)",
    dept: "통상교섭본부 / 무역협회 · 무역보험공사",
    target: "해상·항공 물류비 폭등 및 급격한 환율 하락으로 고통받는 수출사",
    desc: "국제 물류비 긴급 바우처 최대 2,000만 원 지급 및 환율 급변 시 손실을 보전해주는 중소기업 전용 무역 환변동보험료를 최대 90% 지원합니다.",
    action: "신청 방법: 트레이드내비(tradenavi.or.kr) 및 무역협회 트레이드콜센터(1566-5114)",
    url: "https://www.tradenavi.or.kr"
  }
};

let currentSurveyCategory = 'citizen';

function renderChecklist(category) {
  const container = document.getElementById('checklistItems');
  if (!container) return;

  const items = surveyQuestionsData[category] || [];
  container.innerHTML = items.map(item => `
    <label class="check-item-card" for="chk_${item.id}">
      <input type="checkbox" id="chk_${item.id}" value="${item.id}" class="survey-chk">
      <div class="chk-content">
        <span class="chk-badge">${item.tag}</span>
        <span class="chk-text">${item.label}</span>
      </div>
    </label>
  `).join('');
}

function selectSurveyCategory(cat) {
  currentSurveyCategory = cat;
  
  // 라디오 카드 UI 토글
  const cards = document.querySelectorAll('.radio-card');
  cards.forEach(card => {
    card.classList.remove('selected');
    const radio = card.querySelector('input[type="radio"]');
    if (radio && radio.value === cat) {
      radio.checked = true;
      card.classList.add('selected');
    }
  });

  renderChecklist(cat);
  
  // 기존 결과 닫기
  const resultBox = document.getElementById('surveyResultBox');
  if (resultBox) resultBox.style.display = 'none';
}

function calculateBenefits() {
  const checkedBoxes = document.querySelectorAll('.survey-chk:checked');
  const resultBox = document.getElementById('surveyResultBox');
  const container = document.getElementById('resultCardsContainer');
  const summaryTitle = document.getElementById('resultSummaryTitle');
  const summaryDesc = document.getElementById('resultSummaryDesc');

  if (checkedBoxes.length === 0) {
    alert("현재 관심 있거나 겪고 계신 항목을 1개 이상 체크해 주세요!");
    return;
  }

  const selectedIds = Array.from(checkedBoxes).map(cb => cb.value);
  
  // 결과 생성
  const matchedBenefits = selectedIds.map(id => benefitResultsData[id]).filter(Boolean);

  summaryTitle.innerText = `총 ${matchedBenefits.length}개의 맞춤 혜택 & 지원 사업이 발견되었습니다! 🎉`;
  summaryDesc.innerText = `체크하신 요구사항에 적합한 산업통상자원부 소관 핵심 프로그램 목록입니다. 바로 신청 가능한 창구까지 안내해 드립니다.`;

  container.innerHTML = matchedBenefits.map(item => `
    <div class="benefit-card">
      <div class="benefit-head">
        <div class="b-title">${item.title}</div>
        <div class="b-dept">${item.dept}</div>
      </div>
      <div class="b-target"><strong>지원 대상:</strong> ${item.target}</div>
      <div class="b-desc">${item.desc}</div>
      <div class="b-action">${item.action}</div>
      <div class="b-btn-wrap">
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="b-link">관련 공식 신청/안내 누리집 바로가기 ↗</a>
      </div>
    </div>
  `).join('');

  resultBox.style.display = 'block';
  resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function resetSurvey() {
  const checkboxes = document.querySelectorAll('.survey-chk');
  checkboxes.forEach(cb => cb.checked = false);
  const resultBox = document.getElementById('surveyResultBox');
  if (resultBox) resultBox.style.display = 'none';
}

// === 부드러운 스크롤 이동 및 네비게이션 활성화 === //
function navigateTo(elementId) {
  const target = document.getElementById(elementId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // 네비 링크 활성화 상태 동기화
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('onclick')?.includes(elementId)) {
      link.classList.add('active');
    }
  });
}

// === 4대 핵심 업무 영역 탭 전환 === //
function switchTab(tabId) {
  // 모든 탭 버튼 및 패널 초기화
  const buttons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  buttons.forEach(btn => btn.classList.remove('active'));
  panels.forEach(panel => panel.classList.remove('active'));

  // 선택된 탭 활성화
  const targetPanel = document.getElementById(tabId);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }

  // 버튼 활성화
  const clickedBtn = Array.from(buttons).find(b => b.getAttribute('onclick')?.includes(tabId));
  if (clickedBtn) {
    clickedBtn.classList.add('active');
  }
}

// === 최신 뉴스 카테고리 필터링 === //
function filterNews(category) {
  // 필터 버튼 활성화 토글
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => btn.classList.remove('active'));

  const activeBtn = Array.from(filterButtons).find(b => b.getAttribute('onclick')?.includes(category));
  if (activeBtn) activeBtn.classList.add('active');

  // 뉴스 카드 보이기/숨기기
  const cards = document.querySelectorAll('.news-card');
  cards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// === 국민 상식 OX 퀴즈 데이터 및 로직 === //
const quizList = [
  {
    q: "산업통상자원부는 원자력 발전뿐 아니라 태양광·풍력 등 신재생에너지 정책도 함께 총괄한다?",
    a: true,
    desc: "정답은 O입니다! 산업통상자원부는 원자력, 석탄, LNG 등 전통 에너지원뿐 아니라 태양광, 풍력, 수소 등 무탄소 청정에너지 정책과 국가 전력망 인프라 전체를 총괄합니다."
  },
  {
    q: "우리나라의 수출 활성화를 돕기 위한 무역보험과 무역금융 지원은 산업통상자원부 산하 기관이 담당한다?",
    a: true,
    desc: "정답은 O입니다! 산업부 산하 '한국무역보험공사' 및 KOTRA(대한무역투자진흥공사) 등을 통해 수출 기업들에게 보증, 보험, 해외 바이어 발굴 등을 종합 지원합니다."
  },
  {
    q: "산업통상자원부는 오직 서울과 수도권의 대기업만을 위한 지원 정책을 만든다?",
    a: false,
    desc: "정답은 X입니다! 산업통상자원부는 '지방 기회발전특구' 지정, 소부장(소재·부품·장비) 중소기업 금융 지원 등 지역 균형 발전과 대·중소기업 상생에 핵심을 두고 정책을 추진합니다."
  },
  {
    q: "전기·가스 요금 부담을 덜어주는 저소득 취약계층용 '에너지바우처' 사업도 산업부 소관이다?",
    a: true,
    desc: "정답은 O입니다! 여름철 냉방비와 겨울철 난방비를 바우처 형태로 국민에게 지원하는 대표적인 민생 에너지 복지 사업입니다."
  }
];

let currentQuizIndex = 0;

function checkQuiz(userAnswer) {
  const currentQuiz = quizList[currentQuizIndex];
  const resultBox = document.getElementById('quizResult');
  const nextBtn = document.getElementById('nextQuizBtn');

  resultBox.style.display = 'block';

  if (userAnswer === currentQuiz.a) {
    resultBox.className = 'quiz-result-box correct';
    resultBox.innerHTML = `<strong>🎉 정답입니다!</strong><br>${currentQuiz.desc}`;
  } else {
    resultBox.className = 'quiz-result-box incorrect';
    resultBox.innerHTML = `<strong>💡 아쉽지만 오답입니다!</strong><br>${currentQuiz.desc}`;
  }

  nextBtn.style.display = 'inline-block';
}

function nextQuiz() {
  currentQuizIndex = (currentQuizIndex + 1) % quizList.length;
  document.getElementById('quizQuestion').innerText = quizList[currentQuizIndex].q;
  document.getElementById('quizResult').style.display = 'none';
  document.getElementById('nextQuizBtn').style.display = 'none';
}

// === 맞춤형 정책 추천 인터랙션 === //
const policyData = {
  student: {
    title: "🎓 첨단산업 인재양성 & 혁신 융합대학 지원",
    content: "반도체, 배터리, 바이오, 미래차 등 국가첨단전략산업 특성화대학 및 부트캠프를 통해 등록금 및 실무 교육비를 지원받고 유망 기업 채용 연계 기회를 얻을 수 있습니다.",
    tip: "Tip: KIAT(한국산업기술진흥원) 인재양성 통합정보망에서 상시 모집 중인 교육과정을 확인해보세요."
  },
  sme: {
    title: "🏭 2조 원 규모 소부장 상생 보증 & 스마트공장 보급",
    content: "대기업과 연계한 무역보험 저금리 대출 우대(최대 2.5%p 인하)를 받을 수 있으며, 생산 공정 디지털화 및 R&D 바우처를 신청할 수 있습니다.",
    tip: "Tip: 한국무역보험공사 및 산업단지공단을 통해 상생보증과 공정혁신 지원을 바로 문의할 수 있습니다."
  },
  exporter: {
    title: "🚢 역대 최대 252조 무역보험 & 수출 3종 바우처",
    content: "해외 인증 획득 비용 지원, 해외 물류비 절감 바우처, KOTRA 해외 무역관을 통한 1:1 현지 바이어 매칭 및 수출상담회 참가를 지원합니다.",
    tip: "Tip: '수출지원기반활용사업(수출바우처.com)'에서 바우처 포인트를 신청하세요."
  },
  citizen: {
    title: "💡 에너지바우처 & 고효율 가전제품 환급 사업",
    content: "취약계층을 위한 냉·난방 에너지바우처 지급과 함께, 일반 가구를 대상으로 1등급 으뜸효율 가전제품 구매 시 구매비용의 10%를 환급해주는 국민 생활 밀착형 혜택입니다.",
    tip: "Tip: 거주지 행정복지센터(주민센터) 또는 한전 고효율 가전 환급 지원사업 누리집에서 신청 가능합니다."
  }
};

function recommendPolicy() {
  const selected = document.getElementById('userType').value;
  const resultCard = document.getElementById('recommendationResult');
  const policy = policyData[selected];

  if (policy) {
    resultCard.innerHTML = `
      <h4>${policy.title}</h4>
      <p>${policy.content}</p>
      <div class="sub-tip">${policy.tip}</div>
    `;
  }
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
  renderChecklist('citizen');
  recommendPolicy();
});
