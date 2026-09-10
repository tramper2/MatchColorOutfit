/**
 * MatchFit Color - Interactive Application Logic
 * Partner: 3LOOK (https://looklooklook.pe.kr/)
 */

import { FASHION_COLORS, COLOR_MAP, SHOP_INFO, getCurrentSeasonConfig } from './data.js';

// --- State Management ---
const state = {
  activeMode: 'top',       // 'top' | 'bottom' (현재 선택 기준 부위)
  bottomType: 'pants',     // 'pants' | 'skirt'
  activeTab: 'standard',   // 'standard' | 'warm' | 'cool' | 'pastel' | 'denim'
  selectedTop: COLOR_MAP.get('navy'),
  selectedBottom: {
    id: 'beige',
    name: '베이지',
    hex: '#D7C9AA',
    textColor: '#1E1E1E',
    vibe: '클래식 캐주얼 정석',
    tip: '네이비 상의 + 베이지 하의는 언제나 정답인 불패의 조합'
  }
};

// 추천 컬러 다이나믹 순환 미리보기 타이머
let recCycleTimer = null;

// --- DOM Elements Cache ---
const DOM = {
  mainPreviewStage: document.getElementById('mainPreviewStage'),
  mobileStickyBar: document.getElementById('mobileStickyBar'),
  stickyTopDot: document.getElementById('stickyTopDot'),
  stickyTopName: document.getElementById('stickyTopName'),
  stickyBottomDot: document.getElementById('stickyBottomDot'),
  stickyBottomName: document.getElementById('stickyBottomName'),
  btnStickySwap: document.getElementById('btnStickySwap'),
  btnStickyShuffle: document.getElementById('btnStickyShuffle'),

  btnDockSwap: document.getElementById('btnDockSwap'),
  btnDockShuffle: document.getElementById('btnDockShuffle'),
  btnDockCopy: document.getElementById('btnDockCopy'),

  svgTopContainer: document.getElementById('svgTopContainer'),
  svgBottomContainer: document.getElementById('svgBottomContainer'),
  topColorBadge: document.getElementById('topColorBadge'),
  bottomColorBadge: document.getElementById('bottomColorBadge'),
  
  btnPants: document.getElementById('btnPants'),
  btnSkirt: document.getElementById('btnSkirt'),
  
  btnSwap: document.getElementById('btnSwap'),
  btnShuffle: document.getElementById('btnShuffle'),
  btnCopy: document.getElementById('btnCopy'),
  btnReset: document.getElementById('btnReset'),
  
  paletteGrid: document.getElementById('paletteGrid'),
  themeTabBtns: document.querySelectorAll('.theme-tab-btn'),
  metaColorPill: document.getElementById('metaColorPill'),
  metaColorName: document.getElementById('metaColorName'),
  metaHex: document.getElementById('metaHex'),
  metaDesc: document.getElementById('metaDesc'),
  
  recSectionTitle: document.getElementById('recSectionTitle'),
  recSectionSubtitle: document.getElementById('recSectionSubtitle'),
  recCardsGrid: document.getElementById('recCardsGrid'),
  
  harmonyDesc: document.getElementById('harmonyDesc'),
  harmonyChips: document.getElementById('harmonyChips'),
  toastContainer: document.getElementById('toastContainer'),

  // 계절별 트렌드 추천 컬러 DOM 캐시
  seasonBadge: document.getElementById('seasonBadge'),
  seasonTitle: document.getElementById('seasonTitle'),
  seasonGuideText: document.getElementById('seasonGuideText'),
  seasonSubText: document.getElementById('seasonSubText'),
  trendColorChips: document.getElementById('trendColorChips'),
  seasonQuickStyles: document.getElementById('seasonQuickStyles')
};

// --- Toast Notification Helper ---
function showToast(message, icon = '✨') {
  if (!DOM.toastContainer) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  DOM.toastContainer.appendChild(toast);
  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 3000);
}

// --- Vector Graphic Generators (SVG) ---

/**
 * 상의 T-Shirt / Crewneck SVG 렌더러
 * 명암 및 주름 오버레이 레이어로 입체감 극대화
 */
function renderTopSVG(colorHex) {
  return `
    <svg class="svg-garment svg-top" viewBox="0 0 240 210" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="상의 일러스트">
      <defs>
        <linearGradient id="topBodyShade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.12"/>
          <stop offset="50%" stop-color="#000000" stop-opacity="0"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0.22"/>
        </linearGradient>
      </defs>

      <!-- 1. 기본 바디 베이스 컬러 -->
      <path class="garment-fill-target"
            d="M 50,45 L 85,22 Q 120,48 155,22 L 190,45 L 175,85 L 152,72 L 150,195 Q 120,200 90,195 L 88,72 L 65,85 Z"
            fill="${colorHex}"
            stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>

      <!-- 2. 입체 명암 오버레이 -->
      <path d="M 50,45 L 85,22 Q 120,48 155,22 L 190,45 L 175,85 L 152,72 L 150,195 Q 120,200 90,195 L 88,72 L 65,85 Z"
            fill="url(#topBodyShade)"/>

      <!-- 3. 넥라인 (칼라 립) -->
      <path d="M 85,22 Q 120,48 155,22 Q 120,54 85,22 Z"
            fill="#000000" fill-opacity="0.15"
            stroke="#1e293b" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 85,22 Q 120,38 155,22"
            fill="none" stroke="#ffffff" stroke-opacity="0.2" stroke-width="1.5"/>

      <!-- 4. 소매 접힘선 & 주름 디테일 -->
      <line x1="65" y1="85" x2="88" y2="72" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="175" y1="85" x2="152" y2="72" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
      
      <!-- 주름 음영 -->
      <path d="M 90,75 C 92,110 94,150 92,185" stroke="#000000" stroke-opacity="0.12" stroke-width="3" stroke-linecap="round"/>
      <path d="M 150,75 C 148,110 146,150 148,185" stroke="#000000" stroke-opacity="0.14" stroke-width="3" stroke-linecap="round"/>
      <path d="M 115,80 Q 120,135 116,180" stroke="#000000" stroke-opacity="0.08" stroke-width="2" stroke-linecap="round"/>

      <!-- 밑단 스티치 라인 -->
      <path d="M 92,188 Q 120,193 148,188" stroke="#000000" stroke-opacity="0.2" stroke-width="1.5" stroke-dasharray="3 3"/>
    </svg>
  `;
}

/**
 * 하의 Pants (슬랙스) SVG 렌더러
 */
function renderPantsSVG(colorHex) {
  return `
    <svg class="svg-garment svg-bottom" viewBox="0 0 240 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="바지 일러스트">
      <defs>
        <linearGradient id="pantsShade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.1"/>
          <stop offset="60%" stop-color="#000000" stop-opacity="0"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0.25"/>
        </linearGradient>
      </defs>

      <!-- 1. 바지 메인 바디 -->
      <path class="garment-fill-target"
            d="M 75,12 L 165,12 L 172,245 L 132,245 L 120,78 L 108,245 L 68,245 Z"
            fill="${colorHex}"
            stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>

      <!-- 2. 음영 오버레이 -->
      <path d="M 75,12 L 165,12 L 172,245 L 132,245 L 120,78 L 108,245 L 68,245 Z"
            fill="url(#pantsShade)"/>

      <!-- 3. 허리 밴드라인 & 벨트 루프 -->
      <line x1="75" y1="12" x2="165" y2="12" stroke="#1e293b" stroke-width="4"/>
      <line x1="77" y1="28" x2="163" y2="28" stroke="#1e293b" stroke-width="2" stroke-opacity="0.7"/>
      
      <line x1="90" y1="12" x2="90" y2="28" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="110" y1="12" x2="110" y2="28" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="130" y1="12" x2="130" y2="28" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="150" y1="12" x2="150" y2="28" stroke="#1e293b" stroke-width="2.5"/>

      <!-- 4. 앞 지퍼 플라이 -->
      <path d="M 120,28 L 120,68 Q 115,75 110,75" stroke="#1e293b" stroke-width="2" fill="none"/>

      <!-- 5. 센터 프레스 라인 -->
      <line x1="95" y1="35" x2="90" y2="240" stroke="#000000" stroke-opacity="0.2" stroke-width="2"/>
      <line x1="94" y1="35" x2="89" y2="240" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1"/>

      <line x1="145" y1="35" x2="150" y2="240" stroke="#000000" stroke-opacity="0.2" stroke-width="2"/>
      <line x1="146" y1="35" x2="151" y2="240" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1"/>

      <!-- 6. 포켓 및 밑단 -->
      <line x1="80" y1="32" x2="92" y2="60" stroke="#000000" stroke-opacity="0.25" stroke-width="2"/>
      <line x1="160" y1="32" x2="148" y2="60" stroke="#000000" stroke-opacity="0.25" stroke-width="2"/>
      <line x1="68" y1="235" x2="108" y2="235" stroke="#000000" stroke-opacity="0.2" stroke-width="1.5"/>
      <line x1="132" y1="235" x2="172" y2="235" stroke="#000000" stroke-opacity="0.2" stroke-width="1.5"/>
    </svg>
  `;
}

/**
 * 하의 Skirt (A라인 스커트) SVG 렌더러
 */
function renderSkirtSVG(colorHex) {
  return `
    <svg class="svg-garment svg-bottom" viewBox="0 0 240 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="치마 일러스트">
      <defs>
        <linearGradient id="skirtShade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.12"/>
          <stop offset="70%" stop-color="#000000" stop-opacity="0"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0.25"/>
        </linearGradient>
      </defs>

      <!-- 1. 스커트 메인 바디 -->
      <path class="garment-fill-target"
            d="M 85,12 L 155,12 L 195,225 Q 120,245 45,225 Z"
            fill="${colorHex}"
            stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>

      <!-- 2. 음영 오버레이 -->
      <path d="M 85,12 L 155,12 L 195,225 Q 120,245 45,225 Z"
            fill="url(#skirtShade)"/>

      <!-- 3. 허리 밴드 -->
      <line x1="85" y1="12" x2="155" y2="12" stroke="#1e293b" stroke-width="4"/>
      <line x1="86" y1="26" x2="154" y2="26" stroke="#1e293b" stroke-width="2" stroke-opacity="0.6"/>

      <!-- 4. 플리츠 세로 드레이프 주름 -->
      <path d="M 98,26 C 92,90 85,160 78,228" stroke="#000000" stroke-opacity="0.18" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M 99,26 C 93,90 86,160 79,228" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1" stroke-linecap="round"/>

      <path d="M 120,26 C 120,95 120,165 120,234" stroke="#000000" stroke-opacity="0.22" stroke-width="3" stroke-linecap="round"/>
      <path d="M 121,26 C 121,95 121,165 121,234" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1.2" stroke-linecap="round"/>

      <path d="M 142,26 C 148,90 155,160 162,228" stroke="#000000" stroke-opacity="0.18" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M 143,26 C 149,90 156,160 163,228" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1" stroke-linecap="round"/>

      <!-- 5. 밑단 곡선 -->
      <path d="M 52,218 Q 120,237 188,218" stroke="#000000" stroke-opacity="0.2" stroke-width="1.5" stroke-dasharray="4 3"/>
    </svg>
  `;
}

// --- UI Updaters ---

/**
 * 상/하의 실루엣 및 색상 갱신
 */
function updateGarmentVisuals() {
  if (DOM.svgTopContainer) {
    DOM.svgTopContainer.innerHTML = renderTopSVG(state.selectedTop.hex);
  }

  if (DOM.svgBottomContainer) {
    DOM.svgBottomContainer.innerHTML = state.bottomType === 'pants'
      ? renderPantsSVG(state.selectedBottom.hex)
      : renderSkirtSVG(state.selectedBottom.hex);
  }

  updateColorOnlyVisuals();

  // 상의 / 하의 프리뷰 컨테이너 및 뱃지 활성 하이라이트 반영
  const isTopActive = state.activeMode === 'top';
  if (DOM.svgTopContainer) {
    DOM.svgTopContainer.classList.toggle('is-active-target', isTopActive);
    DOM.svgTopContainer.setAttribute('title', isTopActive ? '현재 상의 선택 중 (컬러를 고르면 상의에 반영됩니다)' : '상의를 클릭하여 상의 기준 모드로 전환');
  }
  if (DOM.svgBottomContainer) {
    DOM.svgBottomContainer.classList.toggle('is-active-target', !isTopActive);
    DOM.svgBottomContainer.setAttribute('title', !isTopActive ? '현재 하의 선택 중 (컬러를 고르면 하의에 반영됩니다)' : '하의를 클릭하여 하의 기준 모드로 전환');
  }
  if (DOM.topColorBadge) {
    DOM.topColorBadge.classList.toggle('is-active-target', isTopActive);
  }
  if (DOM.bottomColorBadge) {
    DOM.bottomColorBadge.classList.toggle('is-active-target', !isTopActive);
  }

  // 하의 형태 버튼 활성화 표시
  if (DOM.btnPants && DOM.btnSkirt) {
    DOM.btnPants.classList.toggle('active', state.bottomType === 'pants');
    DOM.btnSkirt.classList.toggle('active', state.bottomType === 'skirt');
  }
}

/**
 * 색상만 바뀌었을 때의 경량 갱신 (배지·모바일 스티키 바·하모니)
 * SVG 전체를 재렌더링하지 않으므로 fill CSS transition으로 색이 부드럽게 변합니다.
 */
function updateColorOnlyVisuals() {
  // 플로팅 뱃지 갱신
  if (DOM.topColorBadge) {
    DOM.topColorBadge.innerHTML = `
      <span class="badge-color-dot" style="background-color: ${state.selectedTop.hex};"></span>
      <span>상의: ${state.selectedTop.name}</span>
    `;
  }

  if (DOM.bottomColorBadge) {
    DOM.bottomColorBadge.innerHTML = `
      <span class="badge-color-dot" style="background-color: ${state.selectedBottom.hex};"></span>
      <span>하의: ${state.selectedBottom.name}</span>
    `;
  }

  // 모바일 스티키 바 갱신
  if (DOM.stickyTopDot) DOM.stickyTopDot.style.backgroundColor = state.selectedTop.hex;
  if (DOM.stickyTopName) DOM.stickyTopName.textContent = state.selectedTop.name;
  if (DOM.stickyBottomDot) DOM.stickyBottomDot.style.backgroundColor = state.selectedBottom.hex;
  if (DOM.stickyBottomName) DOM.stickyBottomName.textContent = state.selectedBottom.name;

  // 조화도 & 대비 분석 갱신
  updateHarmonyStatus();
}

/**
 * 배색 조화도 및 무드 분석
 */
function updateHarmonyStatus() {
  if (!DOM.harmonyDesc || !DOM.harmonyChips) return;

  const currentVibe = state.selectedBottom.vibe || '스타일리시 데일리룩';
  DOM.harmonyDesc.innerHTML = `<span>✨</span><span>${currentVibe}</span>`;
  
  DOM.harmonyChips.innerHTML = `
    <span class="harmony-chip" style="background-color: ${state.selectedTop.hex};" title="상의: ${state.selectedTop.name}"></span>
    <span class="harmony-chip" style="background-color: ${state.selectedBottom.hex};" title="하의: ${state.selectedBottom.name}"></span>
  `;
}

/**
 * 컬러 테마 탭별 패션 컬러 팔레트 렌더링
 */
function renderPalette() {
  if (!DOM.paletteGrid) return;

  const activeTargetColor = state.activeMode === 'top' ? state.selectedTop : state.selectedBottom;

  // 현재 활성화된 탭의 컬러 목록
  const tabColors = FASHION_COLORS.filter(color => color.tab === state.activeTab);

  DOM.paletteGrid.innerHTML = tabColors.map(color => {
    const isSelected = activeTargetColor.id === color.id;
    return `
      <button type="button" 
              class="swatch-card ${isSelected ? 'active' : ''}" 
              data-color-id="${color.id}"
              style="--swatch-text: ${color.textColor};"
              title="${color.name} (${color.hex}) - ${color.desc}">
        <div class="swatch-circle" style="background-color: ${color.hex};"></div>
        <span class="swatch-name">${color.name}</span>
        <span class="swatch-hex">${color.hex}</span>
      </button>
    `;
  }).join('');

  // 스와치 클릭 이벤트 바인딩
  DOM.paletteGrid.querySelectorAll('.swatch-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const colorId = btn.getAttribute('data-color-id');
      handleSelectBaseColor(colorId);
    });
  });

  // 선택된 기준 컬러 메타 카드 갱신
  updateSelectedColorMeta(activeTargetColor);
}

/**
 * 팔레트 스크롤 영역 높이를 마네킹 존 높이와 동일하게 동기화
 * 3분할 레이아웃에서 팔레트가 마네킹 창 높이만큼만 차지하고,
 * 그 안에서 세로 스크롤로 컬러를 탐색·터치 선택하도록 합니다.
 */
function syncPaletteScrollHeight() {
  if (!DOM.paletteGrid) return;
  const manZone = document.querySelector('.mannequin-zone');
  const palZone = document.querySelector('.palette-zone');
  if (!manZone || !palZone) return;

  const manHeight = manZone.getBoundingClientRect().height;
  const header = palZone.querySelector('.step-label-group');
  const meta = palZone.querySelector('.selected-color-meta');
  const headerHeight = header ? header.getBoundingClientRect().height : 0;
  const metaHeight = meta ? meta.getBoundingClientRect().height : 0;
  const rowGap = parseFloat(getComputedStyle(palZone).rowGap) || 0;

  const maxHeight = Math.max(100, manHeight - headerHeight - metaHeight - rowGap * 2);
  DOM.paletteGrid.style.maxHeight = `${maxHeight}px`;
}

/**
 * 기준 컬러 메타 정보 업데이트
 */
function updateSelectedColorMeta(color) {
  if (DOM.metaColorPill) DOM.metaColorPill.style.backgroundColor = color.hex;
  if (DOM.metaColorName) DOM.metaColorName.textContent = color.name;
  if (DOM.metaHex) DOM.metaHex.textContent = color.hex;
  if (DOM.metaDesc) DOM.metaDesc.textContent = color.desc || '패션 기본 컬러';
}

/**
 * 기준 색상 변경 처리 함수
 * 기준 컬러가 실제로 바뀌면 추천 1순위를 반대편 부위에 즉시 적용하고,
 * 이어서 5가지 추천 컬러를 차례로 입혀 보여주는 다이나믹 순환 미리보기를 시작합니다.
 */
function handleSelectBaseColor(colorId) {
  const chosenColor = COLOR_MAP.get(colorId);
  if (!chosenColor) return;

  const isTopMode = state.activeMode === 'top';
  const currentBase = isTopMode ? state.selectedTop : state.selectedBottom;
  const baseChanged = currentBase.id !== chosenColor.id;
  const recs = chosenColor.recommendations || [];

  if (isTopMode) {
    state.selectedTop = chosenColor;
    if (baseChanged) {
      state.selectedBottom = recs[0] || state.selectedBottom;
    } else if (!recs.some(r => r.id === state.selectedBottom.id)) {
      state.selectedBottom = recs[0] || state.selectedBottom;
    }
  } else {
    state.selectedBottom = chosenColor;
    if (baseChanged) {
      state.selectedTop = recs[0] || state.selectedTop;
    } else if (!recs.some(r => r.id === state.selectedTop.id)) {
      state.selectedTop = recs[0] || state.selectedTop;
    }
  }

  updateGarmentVisuals();
  renderPalette();
  renderRecommendations();

  if (baseChanged) {
    startRecommendationCycle();
  } else {
    stopRecommendationCycle();
  }
}

/**
 * 하단 스마트 추천 카드 리스트 렌더링
 */
function renderRecommendations() {
  if (!DOM.recCardsGrid) return;

  const isTopMode = state.activeMode === 'top';
  const baseColor = isTopMode ? state.selectedTop : state.selectedBottom;
  const oppositeColor = isTopMode ? state.selectedBottom : state.selectedTop;
  const recList = baseColor.recommendations || [];

  // 제목 및 부제목 동적 갱신
  if (DOM.recSectionTitle) {
    DOM.recSectionTitle.innerHTML = `
      <span>선택한 ${isTopMode ? '상의' : '하의'}</span>
      <span class="target-highlight">[${baseColor.name}]</span>
      <span>에 어울리는 ${isTopMode ? '하의' : '상의'} ${recList.length}가지 색상입니다</span>
    `;
  }

  if (DOM.recSectionSubtitle) {
    DOM.recSectionSubtitle.textContent = `색채학 및 룩룩룩 스타일리스트가 검증한 ${recList.length}가지 추천 매칭 조합입니다.`;
  }

  DOM.recCardsGrid.innerHTML = recList.map(rec => {
    const isCurrentApplied = oppositeColor.id === rec.id;
    return `
      <div class="rec-card ${isCurrentApplied ? 'active' : ''}" data-rec-id="${rec.id}">
        <div class="rec-card-top">
          <div class="rec-color-preview-group">
            <div class="rec-swatch-chip" style="background-color: ${rec.hex};" title="${rec.name}"></div>
          </div>
          <span class="rec-active-badge">✓ 적용 중</span>
          <span class="rec-vibe-tag">#${rec.vibe}</span>
        </div>

        <div class="rec-card-body">
          <div class="rec-color-name">
            <span>${rec.name}</span>
            <span class="rec-color-hex">${rec.hex}</span>
          </div>
          <p class="rec-style-tip">${rec.tip}</p>
        </div>

        <div class="rec-card-footer">
          <button type="button" class="btn-apply-rec" data-rec-id="${rec.id}">
            ${isCurrentApplied ? '✓ 현재 입어보는 중' : '이 색상 입어보기'}
          </button>
        </div>
      </div>
    `;
  }).join('');

  // 추천 카드 클릭 이벤트 바인딩
  DOM.recCardsGrid.querySelectorAll('.rec-card').forEach(card => {
    card.addEventListener('click', () => {
      const recId = card.getAttribute('data-rec-id');
      applyRecommendation(recId);
    });
  });
}

/**
 * 추천 카드에서 선택된 컬러를 반대편 부위에 즉시 적용
 */
function applyRecommendation(recId) {
  const isTopMode = state.activeMode === 'top';
  const baseColor = isTopMode ? state.selectedTop : state.selectedBottom;
  const targetRec = baseColor.recommendations.find(r => r.id === recId);

  if (!targetRec) return;

  stopRecommendationCycle();

  if (isTopMode) {
    state.selectedBottom = targetRec;
  } else {
    state.selectedTop = targetRec;
  }

  updateGarmentVisuals();
  renderRecommendations();
  showToast(`${targetRec.name} 색상이 ${isTopMode ? '하의' : '상의'}에 적용되었습니다!`, '🎨');
}

// --- 다이나믹 추천 컬러 순환 미리보기 (Auto-Cycle) ---

/**
 * 추천 카드 목록의 '적용 중' 하이라이트만 갱신 (카드 재렌더링 없이)
 */
function updateRecCardActiveState() {
  if (!DOM.recCardsGrid) return;

  const isTopMode = state.activeMode === 'top';
  const oppositeColor = isTopMode ? state.selectedBottom : state.selectedTop;

  DOM.recCardsGrid.querySelectorAll('.rec-card').forEach(card => {
    const isActive = card.getAttribute('data-rec-id') === oppositeColor.id;
    card.classList.toggle('active', isActive);
    const applyBtn = card.querySelector('.btn-apply-rec');
    if (applyBtn) {
      applyBtn.textContent = isActive ? '✓ 현재 입어보는 중' : '이 색상 입어보기';
    }
  });
}

/**
 * 반대편 부위 색상을 SVG 재렌더링 없이 부드럽게 변경
 * (기존 SVG의 fill 속성만 교체해 CSS transition으로 다이나믹한 색 변환 연출)
 */
function setOppositeGarmentColor(rec) {
  const isTopMode = state.activeMode === 'top';

  if (isTopMode) {
    state.selectedBottom = rec;
  } else {
    state.selectedTop = rec;
  }

  // 기존 SVG가 있으면 fill 속성만 교체 (부드러운 색 전환)
  const container = isTopMode ? DOM.svgBottomContainer : DOM.svgTopContainer;
  const fillTarget = container?.querySelector('.garment-fill-target');
  if (fillTarget) {
    fillTarget.setAttribute('fill', rec.hex);
  } else {
    updateGarmentVisuals();
  }

  updateColorOnlyVisuals();
  updateRecCardActiveState();
}

/**
 * 추천 컬러 순환 미리보기 종료 (타이머 정리 + 순환 표시 해제)
 */
function stopRecommendationCycle() {
  if (recCycleTimer) {
    clearInterval(recCycleTimer);
    recCycleTimer = null;
  }
  DOM.svgTopContainer?.classList.remove('is-cycling');
  DOM.svgBottomContainer?.classList.remove('is-cycling');
}

/**
 * 기준 컬러 선택 시, 5가지 추천 컬러를 반대편 부위에 차례로 적용하는
 * 다이나믹 미리보기 순환 시작 (마지막에 베스트 추천 1순위로 확정)
 */
function startRecommendationCycle() {
  stopRecommendationCycle();

  const isTopMode = state.activeMode === 'top';
  const baseColor = isTopMode ? state.selectedTop : state.selectedBottom;
  const recs = baseColor.recommendations || [];
  if (recs.length <= 1) return;

  const targetContainer = isTopMode ? DOM.svgBottomContainer : DOM.svgTopContainer;
  targetContainer?.classList.add('is-cycling');

  const STEP_MS = 650;
  let step = 1; // 0번째(베스트)는 이미 즉시 적용된 상태 → 나머지 4개 순환 후 베스트로 복귀

  recCycleTimer = setInterval(() => {
    if (step >= recs.length) {
      stopRecommendationCycle();
      setOppositeGarmentColor(recs[0]);
      renderRecommendations();
      showToast(`추천 미리보기 완료! 가장 잘 어울리는 '${recs[0].name}'를 ${isTopMode ? '하의' : '상의'}에 적용했어요.`, '🎨');
      return;
    }
    setOppositeGarmentColor(recs[step]);
    step++;
  }, STEP_MS);
}

// --- Auxiliary Features (Swap, Shuffle, Copy, Reset) ---

/**
 * 상·하의 색상 맞바꾸기 (Swap)
 */
function handleSwap() {
  stopRecommendationCycle();
  const prevTop = state.selectedTop;
  const prevBottom = state.selectedBottom;

  const newTop = COLOR_MAP.get(prevBottom.id) || prevBottom;
  const newBottom = COLOR_MAP.get(prevTop.id) || prevTop;

  state.selectedTop = newTop;
  state.selectedBottom = newBottom;

  updateGarmentVisuals();
  renderPalette();
  renderRecommendations();
  showToast('상의와 하의 색상을 맞바꿨습니다!', '⇄');
}

/**
 * 랜덤 추천 조합 (Shuffle)
 */
function handleShuffle() {
  stopRecommendationCycle();
  const randomBaseIndex = Math.floor(Math.random() * FASHION_COLORS.length);
  const randomBase = FASHION_COLORS[randomBaseIndex];

  const recList = randomBase.recommendations;
  const randomRecIndex = Math.floor(Math.random() * recList.length);
  const randomRec = recList[randomRecIndex];

  if (state.activeMode === 'top') {
    state.selectedTop = randomBase;
    state.selectedBottom = randomRec;
  } else {
    state.selectedBottom = randomBase;
    state.selectedTop = randomRec;
  }

  updateGarmentVisuals();
  renderPalette();
  renderRecommendations();
  showToast(`새로운 룩: ${state.selectedTop.name} & ${state.selectedBottom.name}`, '🎲');
}

/**
 * 코디 조합 클립보드 복사 (Share / Copy)
 */
function handleCopyCombination() {
  const vibe = state.selectedBottom.vibe || '스타일리시 데일리룩';
  const shareText = `[MatchFit Color 코디 제안]\n👕 상의: ${state.selectedTop.name} (${state.selectedTop.hex})\n👖 하의: ${state.selectedBottom.name} (${state.selectedBottom.hex})\n✨ 무드: #${vibe}\n🛍️ 쇼핑몰 룩룩룩: ${SHOP_INFO.url}`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(shareText).then(() => {
      showToast('코디 정보가 클립보드에 복사되었습니다!', '📋');
    }).catch(() => {
      fallbackCopy(shareText);
    });
  } else {
    fallbackCopy(shareText);
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    showToast('코디 정보가 클립보드에 복사되었습니다!', '📋');
  } catch (err) {
    showToast('복사에 실패했습니다.', '⚠️');
  }
  document.body.removeChild(textArea);
}

/**
 * 초기화 (Reset)
 */
function handleReset() {
  stopRecommendationCycle();
  state.activeMode = 'top';
  state.bottomType = 'pants';
  state.activeTab = 'standard';
  state.selectedTop = COLOR_MAP.get('navy');
  state.selectedBottom = state.selectedTop.recommendations[0];

  DOM.themeTabBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === 'standard');
  });

  updateGarmentVisuals();
  renderPalette();
  renderRecommendations();
  showToast('기본 코디(네이비 + 베이지)로 초기화되었습니다.', '↺');
}

// --- Mode & Silhouette Switch Handlers ---

function setTargetMode(mode) {
  if (state.activeMode === mode) return;
  stopRecommendationCycle();
  state.activeMode = mode;

  // 기준 부위가 추천 카드 객체(rec)면 COLOR_MAP의 전체 컬러 객체로 정규화하여
  // 해당 색의 recommendations 목록을 확보 (추천 리스트/개수 표시 정상화)
  if (mode === 'bottom' && !state.selectedBottom.recommendations) {
    state.selectedBottom = COLOR_MAP.get(state.selectedBottom.id) || state.selectedBottom;
  }
  if (mode === 'top' && !state.selectedTop.recommendations) {
    state.selectedTop = COLOR_MAP.get(state.selectedTop.id) || state.selectedTop;
  }

  updateGarmentVisuals();
  renderPalette();
  renderRecommendations();
  showToast(`${mode === 'top' ? '상의' : '하의'}를 기준으로 색상을 선택합니다.`, '👕');
}

function setBottomType(type) {
  if (state.bottomType === type) return;
  state.bottomType = type;
  updateGarmentVisuals();
  showToast(`하의 형태가 ${type === 'pants' ? '바지' : '치마'}로 변경되었습니다.`, '✨');
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  // 비주얼 코디 프리뷰에서 상의나 하의를 직접 클릭/터치하여 모드 전환
  DOM.svgTopContainer?.addEventListener('click', () => setTargetMode('top'));
  DOM.topColorBadge?.addEventListener('click', () => setTargetMode('top'));

  DOM.svgBottomContainer?.addEventListener('click', () => setTargetMode('bottom'));
  DOM.bottomColorBadge?.addEventListener('click', () => setTargetMode('bottom'));

  // 하의 실루엣 (바지 vs 치마)
  DOM.btnPants?.addEventListener('click', () => setBottomType('pants'));
  DOM.btnSkirt?.addEventListener('click', () => setBottomType('skirt'));

  // 메인 툴바 액션
  DOM.btnSwap?.addEventListener('click', handleSwap);
  DOM.btnShuffle?.addEventListener('click', handleShuffle);
  DOM.btnCopy?.addEventListener('click', handleCopyCombination);
  DOM.btnReset?.addEventListener('click', handleReset);

  // 모바일 스티키 바 액션
  DOM.btnStickySwap?.addEventListener('click', handleSwap);
  DOM.btnStickyShuffle?.addEventListener('click', handleShuffle);

  // 모바일 하단 플로팅 독 액션
  DOM.btnDockSwap?.addEventListener('click', handleSwap);
  DOM.btnDockShuffle?.addEventListener('click', handleShuffle);
  DOM.btnDockCopy?.addEventListener('click', handleCopyCombination);

  // 컬러 테마 탭 전환 (대표/표준, 웜톤&얼씨, 쿨톤&모던, 파스텔&포인트, 데님&빈티지)
  DOM.themeTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      if (state.activeTab === tabId) return;
      state.activeTab = tabId;
      DOM.themeTabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === tabId));
      renderPalette();
    });
  });

  // 팔레트 스크롤 높이를 마네킹 존에 동기화 (리사이즈/폰트 로드 시 재계산)
  window.addEventListener('resize', syncPaletteScrollHeight);
  window.addEventListener('load', syncPaletteScrollHeight);
}

// --- Seasonal Trend Recommendation Logic ---
function renderSeasonalTrend() {
  const seasonConfig = getCurrentSeasonConfig();
  if (!seasonConfig) return;

  if (DOM.seasonBadge) DOM.seasonBadge.textContent = seasonConfig.badge;
  if (DOM.seasonTitle) DOM.seasonTitle.textContent = seasonConfig.title;
  if (DOM.seasonGuideText) {
    DOM.seasonGuideText.innerHTML = `“${seasonConfig.guideText}”`;
  }
  if (DOM.seasonSubText) DOM.seasonSubText.textContent = seasonConfig.subText;

  // 트렌드 컬러 칩 렌더링
  if (DOM.trendColorChips && seasonConfig.colors) {
    DOM.trendColorChips.innerHTML = seasonConfig.colors.map(c => `
      <button type="button" class="btn-trend-color" data-color-id="${c.id}" title="${c.name} (${c.hex}) - ${c.desc}">
        <span class="trend-swatch-dot" style="background-color: ${c.hex};"></span>
        <span class="trend-color-name">${c.name}</span>
        <span class="trend-color-tag">${c.tag}</span>
      </button>
    `).join('');

    DOM.trendColorChips.querySelectorAll('.btn-trend-color').forEach(btn => {
      btn.addEventListener('click', () => {
        const colorId = btn.getAttribute('data-color-id');
        const colorObj = COLOR_MAP.get(colorId);
        if (colorObj) {
          // 해당 컬러의 테마 탭으로 자동 이동
          if (colorObj.tab && state.activeTab !== colorObj.tab) {
            state.activeTab = colorObj.tab;
            DOM.themeTabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === colorObj.tab));
          }
          handleSelectBaseColor(colorId);
          showToast(`${state.activeMode === 'top' ? '상의' : '하의'}에 '${colorObj.name}'을 피팅했습니다!`, '🍂');
          
          // 활성 칩 스타일 표시
          DOM.trendColorChips.querySelectorAll('.btn-trend-color').forEach(b => {
            b.classList.toggle('is-active', b.getAttribute('data-color-id') === colorId);
          });
        }
      });
    });
  }

  // 원클릭 시즌 베스트 코디 버튼 렌더링
  if (DOM.seasonQuickStyles && seasonConfig.quickStyles) {
    DOM.seasonQuickStyles.innerHTML = seasonConfig.quickStyles.map(qs => `
      <button type="button" class="btn-quick-style" data-top-id="${qs.topId}" data-bottom-id="${qs.bottomId}" data-name="${qs.name}" title="${qs.name} (${qs.topName} + ${qs.bottomName}) 즉시 착용">
        <span>👕👖</span>
        <span>${qs.name}</span>
        <span class="quick-style-vibe">${qs.vibe}</span>
      </button>
    `).join('');

    DOM.seasonQuickStyles.querySelectorAll('.btn-quick-style').forEach(btn => {
      btn.addEventListener('click', () => {
        const topId = btn.getAttribute('data-top-id');
        const bottomId = btn.getAttribute('data-bottom-id');
        const styleName = btn.getAttribute('data-name');
        applyQuickSeasonStyle(topId, bottomId, styleName);
      });
    });
  }
}

function applyQuickSeasonStyle(topId, bottomId, styleName) {
  const topColor = COLOR_MAP.get(topId);
  const bottomColor = COLOR_MAP.get(bottomId);
  if (!topColor || !bottomColor) return;

  stopRecommendationCycle();
  state.selectedTop = topColor;
  state.selectedBottom = bottomColor;

  updateGarmentVisuals();
  renderPalette();
  renderRecommendations();
  showToast(`시즌 베스트 코디 [${styleName}]을 마네킹에 피팅했습니다!`, '✨');
}

// --- URL Parameters Handling (타 페이지에서 마네킹 피팅 연동) ---
function handleUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const topId = params.get('top');
  const bottomId = params.get('bottom');
  let updated = false;

  if (topId && COLOR_MAP.has(topId)) {
    state.selectedTop = COLOR_MAP.get(topId);
    if (state.selectedTop.tab) {
      state.activeTab = state.selectedTop.tab;
      DOM.themeTabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === state.activeTab));
    }
    updated = true;
  }

  if (bottomId && COLOR_MAP.has(bottomId)) {
    state.selectedBottom = COLOR_MAP.get(bottomId);
    updated = true;
  } else if (updated && state.selectedTop.recommendations && state.selectedTop.recommendations.length > 0) {
    state.selectedBottom = state.selectedTop.recommendations[0];
  }

  if (updated) {
    setTimeout(() => {
      showToast(`추천 코디 [${state.selectedTop.name} + ${state.selectedBottom.name}]를 마네킹에 피팅했습니다!`, '✨');
    }, 300);
  }
}

// --- App Initialization ---
function init() {
  handleUrlParams();
  setupEventListeners();
  syncPaletteScrollHeight();
  updateGarmentVisuals();
  renderPalette();
  renderRecommendations();
  renderSeasonalTrend();
}

// DOM 준비 완료 시 실행
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

