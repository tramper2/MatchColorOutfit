/**
 * MatchFit Color - Interactive Application Logic
 * Partner: 3LOOK (https://looklooklook.pe.kr/)
 */

import { FASHION_COLORS, COLOR_MAP, SHOP_INFO, getCurrentSeasonConfig } from './data.js';

// --- State Management ---
const state = {
  topMode: 'layered',       // 'single' (1벌) | 'layered' (2벌: 외투 + 이너)
  activePart: 'outer',      // 'outer' | 'inner' | 'bottom' | 'top' (현재 선택 기준 부위)
  bottomType: 'pants',      // 'pants' | 'skirt'
  activeTab: 'standard',    // 'standard' | 'warm' | 'cool' | 'pastel' | 'denim'
  recTarget: 'bottom',      // 'outer' | 'inner' | 'bottom' | 'top' (추천 카드 클릭 시 적용할 대상 부위)
  selectedOuter: COLOR_MAP.get('camel') || COLOR_MAP.get('navy'),
  selectedInner: COLOR_MAP.get('cream') || COLOR_MAP.get('white'),
  selectedBottom: COLOR_MAP.get('dark_brown') || COLOR_MAP.get('beige'),
  selectedTop: COLOR_MAP.get('navy')
};

// 추천 컬러 다이나믹 순환 미리보기 타이머
let recCycleTimer = null;

// --- DOM Elements Cache ---
const DOM = {
  mainPreviewStage: document.getElementById('mainPreviewStage'),
  mobileStickyBar: document.getElementById('mobileStickyBar'),
  
  // 모바일 스티키 바 칩들
  stickyOuterChip: document.getElementById('stickyOuterChip'),
  stickyOuterDot: document.getElementById('stickyOuterDot'),
  stickyOuterName: document.getElementById('stickyOuterName'),
  stickyOuterDivider: document.getElementById('stickyOuterDivider'),
  stickyInnerChip: document.getElementById('stickyInnerChip'),
  stickyInnerDot: document.getElementById('stickyInnerDot'),
  stickyInnerName: document.getElementById('stickyInnerName'),
  stickyTopChip: document.getElementById('stickyTopChip'),
  stickyTopDot: document.getElementById('stickyTopDot'),
  stickyTopName: document.getElementById('stickyTopName'),
  stickyBottomChip: document.getElementById('stickyBottomChip'),
  stickyBottomDot: document.getElementById('stickyBottomDot'),
  stickyBottomName: document.getElementById('stickyBottomName'),
  btnStickySwap: document.getElementById('btnStickySwap'),
  btnStickyShuffle: document.getElementById('btnStickyShuffle'),

  btnDockSwap: document.getElementById('btnDockSwap'),
  btnDockShuffle: document.getElementById('btnDockShuffle'),
  btnDockCopy: document.getElementById('btnDockCopy'),

  svgTopContainer: document.getElementById('svgTopContainer'),
  svgBottomContainer: document.getElementById('svgBottomContainer'),
  
  // 마네킹 플로팅 배지들
  outerColorBadge: document.getElementById('outerColorBadge'),
  innerColorBadge: document.getElementById('innerColorBadge'),
  topColorBadge: document.getElementById('topColorBadge'),
  bottomColorBadge: document.getElementById('bottomColorBadge'),
  mannequinClickHintText: document.getElementById('mannequinClickHintText'),
  
  // 상의/하의 옵션 셀렉터 버튼들
  btnTopSingle: document.getElementById('btnTopSingle'),
  btnTopLayered: document.getElementById('btnTopLayered'),
  btnPants: document.getElementById('btnPants'),
  btnSkirt: document.getElementById('btnSkirt'),
  
  // 툴바 액션 버튼들
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
  
  // 추천 섹션 DOM
  recSectionTitle: document.getElementById('recSectionTitle'),
  recSectionSubtitle: document.getElementById('recSectionSubtitle'),
  recCardsGrid: document.getElementById('recCardsGrid'),
  recTargetSelector: document.getElementById('recTargetSelector'),
  btnRecTargets: document.querySelectorAll('.btn-rec-target'),
  
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
 * 외투 + 이너 2벌 레이어드 상의 SVG 렌더러
 * - 외투(오픈 자켓/블레이저/가디건) + 안쪽 이너(티셔츠/탑) 입체 그래픽
 * - 외투와 이너 영역을 개별 클릭하여 기준 부위를 자유롭게 선택 가능
 */
function renderLayeredTopSVG(outerHex, innerHex, activePart) {
  const isOuterActive = activePart === 'outer';
  const isInnerActive = activePart === 'inner';

  return `
    <svg class="svg-garment svg-top svg-layered-top" viewBox="0 0 240 210" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="외투 및 이너 상의 일러스트">
      <defs>
        <!-- 외투 바깥 외곽선 전용 네온 글로우 필터 (이너 영역에 전혀 닿지 않음) -->
        <filter id="outerEdgeGlow" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <!-- 외투 입체 음영 -->
        <linearGradient id="outerShadeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.14"/>
          <stop offset="50%" stop-color="#000000" stop-opacity="0"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0.25"/>
        </linearGradient>

        <!-- 이너 음영 (색상 왜곡 없는 가벼운 입체감) -->
        <linearGradient id="innerShadeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.08"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0.16"/>
        </linearGradient>
      </defs>

      <!-- 0. 외투 바깥 외곽선 전용 글로우 언더레이 (이너와 맞닿는 안쪽 V존은 관통하지 않고 맨 바깥 둘레만 감쌈) -->
      <path class="outer-perimeter-glow"
            d="M 78,20 L 38,44 L 56,120 L 80,104 L 82,198 L 96,198 L 144,198 L 158,198 L 160,104 L 184,120 L 202,44 L 162,20 Q 120,12 78,20 Z"
            fill="none"
            stroke="#38bdf8"
            stroke-width="8"
            stroke-linejoin="round"
            stroke-linecap="round"
            filter="url(#outerEdgeGlow)"
            opacity="${isOuterActive ? '0.9' : '0'}"
            style="transition: opacity 0.25s ease;" />

      <!-- 1. 이너 (Inner Top 레이어: 외투 안쪽 V존에 깔끔히 안착되도록 정밀 피팅) -->
      <g id="layerInnerGroup" class="svg-interactive-part layer-inner-target ${isInnerActive ? 'is-active-target' : ''}" data-part="inner" title="이너를 클릭하여 이너 색상 선택">
        <!-- 모바일 터치 친화적 투명 히트박스 -->
        <rect x="88" y="16" width="64" height="184" fill="transparent" style="cursor: pointer;"/>

        <!-- 이너 바디 베이스: 외투 소매/옆구리 밖으로 삐져나오지 않도록 x=88~152로 완벽 밀착 설계 -->
        <path class="garment-fill-target inner-fill-target"
              d="M 88,24 Q 120,44 152,24 L 150,198 Q 120,202 90,198 Z"
              fill="${innerHex}"
              stroke="${isInnerActive ? '#38bdf8' : '#1e293b'}" stroke-width="${isInnerActive ? '2.5' : '2'}" stroke-linejoin="round"/>
        
        <!-- 이너 음영 -->
        <path d="M 88,24 Q 120,44 152,24 L 150,198 Q 120,202 90,198 Z"
              fill="url(#innerShadeGrad)"/>

        <!-- 이너 넥라인 립 -->
        <path d="M 92,25 Q 120,48 148,25 Q 120,56 92,25 Z"
              fill="#000000" fill-opacity="0.1"
              stroke="${isInnerActive ? '#38bdf8' : '#1e293b'}" stroke-width="1.8"/>

        <!-- 이너 넥 스티치 라인 -->
        <path d="M 96,34 Q 120,50 144,34" fill="none" stroke="#ffffff" stroke-opacity="0.25" stroke-width="1.2"/>

        <!-- 이너 가슴 입체 주름선 -->
        <path d="M 116,68 Q 120,110 118,165" stroke="#000000" stroke-opacity="0.07" stroke-width="1.8" stroke-linecap="round"/>
      </g>

      <!-- 2. 외투 (Outer Jacket/Cardigan 레이어: 안쪽 라펠은 다크 라인으로 단정하게 유지하여 이너 침범 방지) -->
      <g id="layerOuterGroup" class="svg-interactive-part layer-outer-target ${isOuterActive ? 'is-active-target' : ''}" data-part="outer" title="외투를 클릭하여 외투 색상 선택">
        <!-- 외투 메인 바디: 좌측 몸판 및 소매 (중앙 x=96까지 시원하게 오픈) -->
        <path class="garment-fill-target outer-fill-target"
              d="M 78,20 L 38,44 L 56,120 L 80,104 L 82,200 L 96,200 L 98,72 L 78,20 Z"
              fill="${outerHex}"
              stroke="#1e293b" stroke-width="2.8" stroke-linejoin="round"/>
        
        <!-- 외투 메인 바디: 우측 몸판 및 소매 (중앙 x=144까지 시원하게 오픈) -->
        <path class="garment-fill-target outer-fill-target"
              d="M 162,20 L 202,44 L 184,120 L 160,104 L 158,200 L 144,200 L 142,72 L 162,20 Z"
              fill="${outerHex}"
              stroke="#1e293b" stroke-width="2.8" stroke-linejoin="round"/>

        <!-- 뒷목 외투 카라 라인 -->
        <path class="garment-fill-target outer-fill-target"
              d="M 78,20 Q 120,12 162,20 Q 120,26 78,20 Z"
              fill="${outerHex}"
              stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round"/>

        <!-- 테일러드 라펠 (좌측 카라 플랩: 다크 라인으로 이너와 깔끔 분리) -->
        <path class="garment-fill-target outer-fill-target"
              d="M 78,20 L 96,68 L 82,78 L 98,135 L 96,200 L 88,200 L 86,142 L 78,88 Z"
              fill="${outerHex}" fill-opacity="0.96"
              stroke="#1e293b" stroke-width="2" stroke-linejoin="round"/>

        <!-- 테일러드 라펠 (우측 카라 플랩: 다크 라인으로 이너와 깔끔 분리) -->
        <path class="garment-fill-target outer-fill-target"
              d="M 162,20 L 144,68 L 158,78 L 142,135 L 144,200 L 152,200 L 154,142 L 162,88 Z"
              fill="${outerHex}" fill-opacity="0.96"
              stroke="#1e293b" stroke-width="2" stroke-linejoin="round"/>

        <!-- 외투 입체 음영 오버레이 -->
        <path d="M 78,20 L 38,44 L 56,120 L 80,104 L 82,200 L 96,200 L 98,72 Z"
              fill="url(#outerShadeGrad)"/>
        <path d="M 162,20 L 202,44 L 184,120 L 160,104 L 158,200 L 144,200 L 142,72 Z"
              fill="url(#outerShadeGrad)"/>

        <!-- 소매 접힘선 & 솔기 -->
        <line x1="56" y1="120" x2="80" y2="104" stroke="#1e293b" stroke-width="2.2" stroke-linecap="round"/>
        <line x1="184" y1="120" x2="160" y2="104" stroke="#1e293b" stroke-width="2.2" stroke-linecap="round"/>

        <!-- 소매 주름 음영 -->
        <path d="M 52,80 Q 68,94 74,114" stroke="#000000" stroke-opacity="0.18" stroke-width="2" stroke-linecap="round"/>
        <path d="M 188,80 Q 172,94 166,114" stroke="#000000" stroke-opacity="0.18" stroke-width="2" stroke-linecap="round"/>

        <!-- 자켓 포켓 디테일 -->
        <rect x="74" y="152" width="16" height="3" rx="1.5" fill="#1e293b" fill-opacity="0.7"/>
        <rect x="150" y="152" width="16" height="3" rx="1.5" fill="#1e293b" fill-opacity="0.7"/>

        <!-- 단추 디테일 -->
        <circle cx="92" cy="136" r="2.5" fill="#1e293b" stroke="#ffffff" stroke-opacity="0.3" stroke-width="0.8"/>
        <circle cx="92" cy="162" r="2.5" fill="#1e293b" stroke="#ffffff" stroke-opacity="0.3" stroke-width="0.8"/>
      </g>
    </svg>
  `;
}

/**
 * 단일 상의 (T-Shirt / Crewneck) SVG 렌더러 (1벌 모드 전용)
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
      <path class="garment-fill-target top-fill-target"
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
      <path class="garment-fill-target bottom-fill-target"
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
      <path class="garment-fill-target bottom-fill-target"
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

// --- Helper: 현재 활성화된 기준 컬러 및 부위 한글명 반환 ---
function getCurrentBaseColor() {
  if (state.topMode === 'layered') {
    if (state.activePart === 'outer') return state.selectedOuter;
    if (state.activePart === 'inner') return state.selectedInner;
    return state.selectedBottom;
  } else {
    return state.activePart === 'bottom' ? state.selectedBottom : state.selectedTop;
  }
}

function getPartKoreanName(part) {
  switch (part) {
    case 'outer': return '외투';
    case 'inner': return '이너';
    case 'bottom': return state.bottomType === 'pants' ? '바지' : '치마';
    case 'top': return '상의';
    default: return '의상';
  }
}

// --- UI Updaters ---

/**
 * 상/하의 실루엣 및 색상 갱신
 */
function updateGarmentVisuals() {
  const isLayered = state.topMode === 'layered';

  // 1. 상의 SVG 렌더링 (단일 1벌 vs 외투+이너 2벌 레이어드)
  if (DOM.svgTopContainer) {
    if (isLayered) {
      DOM.svgTopContainer.innerHTML = renderLayeredTopSVG(
        state.selectedOuter.hex,
        state.selectedInner.hex,
        state.activePart
      );
      // 외투 및 이너 개별 클릭 이벤트 바인딩
      DOM.svgTopContainer.querySelector('#layerOuterGroup')?.addEventListener('click', (e) => {
        e.stopPropagation();
        setActivePart('outer');
      });
      DOM.svgTopContainer.querySelector('#layerInnerGroup')?.addEventListener('click', (e) => {
        e.stopPropagation();
        setActivePart('inner');
      });
    } else {
      DOM.svgTopContainer.innerHTML = renderTopSVG(state.selectedTop.hex);
      DOM.svgTopContainer.onclick = () => setActivePart('top');
    }
  }

  // 2. 하의 SVG 렌더링 (바지 vs 치마)
  if (DOM.svgBottomContainer) {
    DOM.svgBottomContainer.innerHTML = state.bottomType === 'pants'
      ? renderPantsSVG(state.selectedBottom.hex)
      : renderSkirtSVG(state.selectedBottom.hex);
    DOM.svgBottomContainer.onclick = () => setActivePart('bottom');
  }

  // 3. 플로팅 배지 및 모바일 스티키 바 갱신
  updateColorOnlyVisuals();

  // 4. 상의/하의 옵션 버튼 활성화 상태 표시
  DOM.btnTopSingle?.classList.toggle('active', state.topMode === 'single');
  DOM.btnTopLayered?.classList.toggle('active', isLayered);
  DOM.btnPants?.classList.toggle('active', state.bottomType === 'pants');
  DOM.btnSkirt?.classList.toggle('active', state.bottomType === 'skirt');

  // 5. 마네킹 클릭 힌트 문구
  if (DOM.mannequinClickHintText) {
    DOM.mannequinClickHintText.textContent = isLayered
      ? '외투, 이너, 하의를 직접 클릭(터치)하여 기준 옷을 바꿀 수 있습니다'
      : '상의나 하의를 직접 클릭(터치)하여 기준 옷을 바꿀 수 있습니다';
  }

  // 6. 하의 컨테이너 활성화 테두리
  if (DOM.svgBottomContainer) {
    DOM.svgBottomContainer.classList.toggle('is-active-target', state.activePart === 'bottom');
  }
}

/**
 * 색상 및 배지 경량 갱신
 */
function updateColorOnlyVisuals() {
  const isLayered = state.topMode === 'layered';

  // 플로팅 뱃지 표시 및 텍스트 갱신
  if (isLayered) {
    if (DOM.topColorBadge) DOM.topColorBadge.style.display = 'none';

    if (DOM.outerColorBadge) {
      DOM.outerColorBadge.style.display = 'inline-flex';
      DOM.outerColorBadge.innerHTML = `
        <span class="badge-color-dot" style="background-color: ${state.selectedOuter.hex};"></span>
        <span>외투: ${state.selectedOuter.name}</span>
      `;
      DOM.outerColorBadge.classList.toggle('is-active-target', state.activePart === 'outer');
    }

    if (DOM.innerColorBadge) {
      DOM.innerColorBadge.style.display = 'inline-flex';
      DOM.innerColorBadge.innerHTML = `
        <span class="badge-color-dot" style="background-color: ${state.selectedInner.hex};"></span>
        <span>이너: ${state.selectedInner.name}</span>
      `;
      DOM.innerColorBadge.classList.toggle('is-active-target', state.activePart === 'inner');
    }
  } else {
    if (DOM.outerColorBadge) DOM.outerColorBadge.style.display = 'none';
    if (DOM.innerColorBadge) DOM.innerColorBadge.style.display = 'none';

    if (DOM.topColorBadge) {
      DOM.topColorBadge.style.display = 'inline-flex';
      DOM.topColorBadge.innerHTML = `
        <span class="badge-color-dot" style="background-color: ${state.selectedTop.hex};"></span>
        <span>상의: ${state.selectedTop.name}</span>
      `;
      DOM.topColorBadge.classList.toggle('is-active-target', state.activePart === 'top');
    }
  }

  if (DOM.bottomColorBadge) {
    const bottomLabel = state.bottomType === 'pants' ? '바지' : '치마';
    DOM.bottomColorBadge.innerHTML = `
      <span class="badge-color-dot" style="background-color: ${state.selectedBottom.hex};"></span>
      <span>${bottomLabel}: ${state.selectedBottom.name}</span>
    `;
    DOM.bottomColorBadge.classList.toggle('is-active-target', state.activePart === 'bottom');
  }

  // 모바일 스티키 바 갱신
  if (isLayered) {
    if (DOM.stickyTopChip) DOM.stickyTopChip.style.display = 'none';
    if (DOM.stickyOuterChip) {
      DOM.stickyOuterChip.style.display = 'inline-flex';
      if (DOM.stickyOuterDot) DOM.stickyOuterDot.style.backgroundColor = state.selectedOuter.hex;
      if (DOM.stickyOuterName) DOM.stickyOuterName.textContent = state.selectedOuter.name;
    }
    if (DOM.stickyOuterDivider) DOM.stickyOuterDivider.style.display = 'inline';
    if (DOM.stickyInnerChip) {
      DOM.stickyInnerChip.style.display = 'inline-flex';
      if (DOM.stickyInnerDot) DOM.stickyInnerDot.style.backgroundColor = state.selectedInner.hex;
      if (DOM.stickyInnerName) DOM.stickyInnerName.textContent = state.selectedInner.name;
    }
  } else {
    if (DOM.stickyOuterChip) DOM.stickyOuterChip.style.display = 'none';
    if (DOM.stickyOuterDivider) DOM.stickyOuterDivider.style.display = 'none';
    if (DOM.stickyInnerChip) DOM.stickyInnerChip.style.display = 'none';
    if (DOM.stickyTopChip) {
      DOM.stickyTopChip.style.display = 'inline-flex';
      if (DOM.stickyTopDot) DOM.stickyTopDot.style.backgroundColor = state.selectedTop.hex;
      if (DOM.stickyTopName) DOM.stickyTopName.textContent = state.selectedTop.name;
    }
  }

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

  const isLayered = state.topMode === 'layered';

  if (isLayered) {
    const vibe = state.selectedBottom.vibe || '스타일리시 레이어드 무드';
    DOM.harmonyDesc.innerHTML = `<span>✨</span><span>${vibe}</span>`;
    DOM.harmonyChips.innerHTML = `
      <span class="harmony-chip" style="background-color: ${state.selectedOuter.hex};" title="외투: ${state.selectedOuter.name}"></span>
      <span class="harmony-chip" style="background-color: ${state.selectedInner.hex};" title="이너: ${state.selectedInner.name}"></span>
      <span class="harmony-chip" style="background-color: ${state.selectedBottom.hex};" title="하의: ${state.selectedBottom.name}"></span>
    `;
  } else {
    const vibe = state.selectedBottom.vibe || '클래식 캐주얼 정석';
    DOM.harmonyDesc.innerHTML = `<span>✨</span><span>${vibe}</span>`;
    DOM.harmonyChips.innerHTML = `
      <span class="harmony-chip" style="background-color: ${state.selectedTop.hex};" title="상의: ${state.selectedTop.name}"></span>
      <span class="harmony-chip" style="background-color: ${state.selectedBottom.hex};" title="하의: ${state.selectedBottom.name}"></span>
    `;
  }
}

/**
 * 컬러 테마 탭별 패션 컬러 팔레트 렌더링
 */
function renderPalette() {
  if (!DOM.paletteGrid) return;

  const activeTargetColor = getCurrentBaseColor();

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
 * 상단 헤더의 실제 높이를 감지하여 모바일 스티키 바의 top 위치를 완벽하게 동기화
 */
function syncStickyBarTopOffset() {
  const header = document.querySelector('.site-header');
  if (header) {
    const h = header.offsetHeight;
    document.documentElement.style.setProperty('--header-actual-height', `${h}px`);
  }
}

/**
 * 팔레트 스크롤 영역 높이를 마네킹 존 높이와 동일하게 동기화
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
 * 부위별 SVG fill 속성 즉각 변경 (CSS transition을 통한 부드러운 색상 전환)
 */
function applyColorToGarment(part, colorObj) {
  if (!colorObj) return;
  const hex = colorObj.hex;

  if (part === 'outer') {
    state.selectedOuter = colorObj;
    const outerEls = DOM.svgTopContainer?.querySelectorAll('.outer-fill-target');
    if (outerEls && outerEls.length > 0) {
      outerEls.forEach(el => el.setAttribute('fill', hex));
    }
  } else if (part === 'inner') {
    state.selectedInner = colorObj;
    const innerEls = DOM.svgTopContainer?.querySelectorAll('.inner-fill-target');
    if (innerEls && innerEls.length > 0) {
      innerEls.forEach(el => el.setAttribute('fill', hex));
    }
  } else if (part === 'bottom') {
    state.selectedBottom = colorObj;
    const bottomEls = DOM.svgBottomContainer?.querySelectorAll('.bottom-fill-target, .garment-fill-target');
    if (bottomEls && bottomEls.length > 0) {
      bottomEls.forEach(el => el.setAttribute('fill', hex));
    }
  } else if (part === 'top') {
    state.selectedTop = colorObj;
    const topEls = DOM.svgTopContainer?.querySelectorAll('.top-fill-target, .garment-fill-target');
    if (topEls && topEls.length > 0) {
      topEls.forEach(el => el.setAttribute('fill', hex));
    }
  }
}

/**
 * 부위별 특화 추천 컬러 선별 함수 (패션 스타일링 공식 기반)
 * - 이너: V존을 화사하게 밝혀주는 뉴트럴/소프트 톤 (화이트, 크림, 멜란지 그레이, 스카이블루 등)
 * - 하의: 하체의 무게중심과 실루엣을 안정적으로 잡아주는 톤 (슬랙스/치노/데님: 베이지, 다크브라운, 차콜, 블랙, 중청, 생지 등)
 * - 외투: 도회적 품격과 계절감을 주는 아우터 톤 (네이비, 카멜, 차콜, 블랙, 올리브 카키, 브라운 등)
 */
function getTargetSpecificRecommendations(baseColor, targetPart) {
  const allRecs = baseColor.recommendations || [];
  if (state.topMode !== 'layered') {
    return allRecs.slice(0, 3);
  }

  const innerKeywords = ['cream', 'white', 'melange_gray', 'sky_blue', 'oatmeal', 'soft_beige', 'soft_pink', 'ivory'];
  const bottomKeywords = ['dark_brown', 'beige', 'black', 'charcoal', 'mid_denim', 'deep_denim', 'light_denim', 'olive_khaki', 'mocha_brown', 'brown'];
  const outerKeywords = ['navy', 'camel', 'charcoal', 'black', 'olive_khaki', 'brown', 'mocha_brown', 'burgundy'];

  let preferredKeywords;
  if (targetPart === 'inner') {
    preferredKeywords = innerKeywords;
  } else if (targetPart === 'bottom') {
    preferredKeywords = bottomKeywords;
  } else {
    preferredKeywords = outerKeywords;
  }

  // 1. 해당 컬러의 추천 목록(allRecs) 중에서 목표 부위에 가장 적합한 컬러 우선 필터
  const matchedRecs = allRecs.filter(r => preferredKeywords.includes(r.id));
  const remainingRecs = allRecs.filter(r => !preferredKeywords.includes(r.id));
  const result = [...matchedRecs, ...remainingRecs];

  // 2. 만약 부위별 전문 컬러가 부족할 경우, 기본 대표 컬러로 보강하여 항상 최적의 3가지 차별화 제공
  if (result.length < 3) {
    if (targetPart === 'inner') {
      const fallbacks = ['cream', 'white', 'melange_gray', 'sky_blue'];
      for (const fid of fallbacks) {
        if (!result.some(r => r.id === fid) && COLOR_MAP.has(fid) && fid !== baseColor.id) {
          result.push(COLOR_MAP.get(fid));
        }
      }
    } else if (targetPart === 'bottom') {
      const fallbacks = ['dark_brown', 'beige', 'mid_denim', 'charcoal', 'black'];
      for (const fid of fallbacks) {
        if (!result.some(r => r.id === fid) && COLOR_MAP.has(fid) && fid !== baseColor.id) {
          result.push(COLOR_MAP.get(fid));
        }
      }
    } else {
      const fallbacks = ['navy', 'camel', 'charcoal', 'black', 'olive_khaki'];
      for (const fid of fallbacks) {
        if (!result.some(r => r.id === fid) && COLOR_MAP.has(fid) && fid !== baseColor.id) {
          result.push(COLOR_MAP.get(fid));
        }
      }
    }
  }

  return result.slice(0, 3);
}

/**
 * 추천 컬러 짝(외투, 이너, 하의) 동시 적용 헬퍼 (차별화된 부위별 패션 공식 적용)
 * - 외투 선택 시: 하의는 하의 전문 추천(다크브라운, 데님, 슬랙스 등), 이너는 이너 전문 추천(크림, 화이트 등) 동시 적용!
 * - 바지 선택 시: 외투는 아우터 전문 추천, 이너는 이너 전문 추천 동시 적용!
 * - 이너 선택 시: 외투는 아우터 전문 추천, 하의는 하의 전문 추천 동시 적용!
 * - 1벌 모드: 상의 ↔ 하의 1:1 반응
 */
function applyBestRecommendationPair(baseColor, index = 0, isDirectDOM = false) {
  if (state.topMode === 'layered') {
    if (state.activePart === 'outer') {
      // 외투 기준: 하의 추천 목록과 이너 추천 목록을 각각 다르게 적용!
      const bottomRecs = getTargetSpecificRecommendations(baseColor, 'bottom');
      const innerRecs = getTargetSpecificRecommendations(baseColor, 'inner');
      const bColor = bottomRecs[index % bottomRecs.length];
      const iColor = innerRecs[index % innerRecs.length];

      if (isDirectDOM) {
        applyColorToGarment('bottom', bColor);
        applyColorToGarment('inner', iColor);
      } else {
        state.selectedBottom = bColor;
        state.selectedInner = iColor;
      }
    } else if (state.activePart === 'inner') {
      // 이너 기준: 외투 추천 목록과 하의 추천 목록을 각각 다르게 적용!
      const outerRecs = getTargetSpecificRecommendations(baseColor, 'outer');
      const bottomRecs = getTargetSpecificRecommendations(baseColor, 'bottom');
      const oColor = outerRecs[index % outerRecs.length];
      const bColor = bottomRecs[index % bottomRecs.length];

      if (isDirectDOM) {
        applyColorToGarment('outer', oColor);
        applyColorToGarment('bottom', bColor);
      } else {
        state.selectedOuter = oColor;
        state.selectedBottom = bColor;
      }
    } else {
      // 하의 기준: 외투 추천 목록과 이너 추천 목록을 각각 다르게 적용!
      const outerRecs = getTargetSpecificRecommendations(baseColor, 'outer');
      const innerRecs = getTargetSpecificRecommendations(baseColor, 'inner');
      const oColor = outerRecs[index % outerRecs.length];
      const iColor = innerRecs[index % innerRecs.length];

      if (isDirectDOM) {
        applyColorToGarment('outer', oColor);
        applyColorToGarment('inner', iColor);
      } else {
        state.selectedOuter = oColor;
        state.selectedInner = iColor;
      }
    }
  } else {
    // 단일 상의 모드
    const recs = (baseColor.recommendations || []).slice(0, 3);
    if (recs.length === 0) return;
    const r1 = recs[index % recs.length];
    const c1 = COLOR_MAP.get(r1.id) || r1;

    if (state.activePart === 'top') {
      if (isDirectDOM) applyColorToGarment('bottom', c1);
      else state.selectedBottom = c1;
    } else {
      if (isDirectDOM) applyColorToGarment('top', c1);
      else state.selectedTop = c1;
    }
  }

  updateColorOnlyVisuals();
  updateRecCardActiveState();
}

/**
 * 기준 색상 변경 처리 함수
 * - 기준 컬러 선택 시 나머지 부위들이 조화로운 추천 컬러로 일제히 반응
 * - 베스트 3가지 추천 조합을 차례로 입혀 보여주는 다이나믹 순환 미리보기를 거쳐 1순위에서 딱 멈춤!
 */
function handleSelectBaseColor(colorId) {
  const chosenColor = COLOR_MAP.get(colorId);
  if (!chosenColor) return;

  const currentBase = getCurrentBaseColor();
  const baseChanged = currentBase.id !== chosenColor.id;

  // 1. 선택한 기준 부위 색상 업데이트
  if (state.topMode === 'layered') {
    if (state.activePart === 'outer') state.selectedOuter = chosenColor;
    else if (state.activePart === 'inner') state.selectedInner = chosenColor;
    else state.selectedBottom = chosenColor;
  } else {
    if (state.activePart === 'top') state.selectedTop = chosenColor;
    else state.selectedBottom = chosenColor;
  }

  // 2. 나머지 부위들에 1순위 베스트 추천 페어 즉시 적용
  applyBestRecommendationPair(chosenColor, 0, false);

  updateGarmentVisuals();
  renderPalette();
  renderRecommendations();

  // 3. 기준 색상이 실제로 바뀌었으면 다이나믹 추천 컬러 순환 미리보기 발동!
  if (baseChanged) {
    startRecommendationCycle();
  } else {
    stopRecommendationCycle();
  }
}

/**
 * 하단 스마트 추천 카드 리스트 렌더링 (타겟 부위별 차별화된 베스트 3개 추천)
 */
function renderRecommendations() {
  if (!DOM.recCardsGrid) return;

  const baseColor = getCurrentBaseColor();
  const recList = getTargetSpecificRecommendations(baseColor, state.recTarget);
  const partName = getPartKoreanName(state.activePart);
  const targetName = getPartKoreanName(state.recTarget);

  // 제목 및 부제목 동적 갱신
  if (DOM.recSectionTitle) {
    const targetLabel = state.topMode === 'layered' ? ` ${targetName}` : '';
    DOM.recSectionTitle.innerHTML = `
      <span>선택한 ${partName}</span>
      <span class="target-highlight">[${baseColor.name}]</span>
      <span>에 어울리는 추천 3가지${targetLabel} 색상입니다</span>
    `;
  }

  if (DOM.recSectionSubtitle) {
    DOM.recSectionSubtitle.textContent = `색채학 및 룩룩룩 스타일리스트가 엄선한 베스트 ${recList.length}가지 추천 컬러를 [${targetName}]에 바로 입혀보세요.`;
  }

  // 추천 피팅 부위 셀렉터 동기화
  syncRecTargetSelectorUI();

  // 현재 타겟 부위에 입혀진 색상 확인
  let currentTargetColor;
  if (state.topMode === 'layered') {
    if (state.recTarget === 'outer') currentTargetColor = state.selectedOuter;
    else if (state.recTarget === 'inner') currentTargetColor = state.selectedInner;
    else currentTargetColor = state.selectedBottom;
  } else {
    currentTargetColor = state.recTarget === 'bottom' ? state.selectedBottom : state.selectedTop;
  }

  DOM.recCardsGrid.innerHTML = recList.map(rec => {
    const isCurrentApplied = currentTargetColor && currentTargetColor.id === rec.id;
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
            ${isCurrentApplied ? '✓ 현재 입어보는 중' : `이 색상 ${targetName}에 입혀보기`}
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
 * 추천 피팅 부위 셀렉터 UI 동기화
 */
function syncRecTargetSelectorUI() {
  if (!DOM.recTargetSelector) return;
  const isLayered = state.topMode === 'layered';

  DOM.btnRecTargets.forEach(btn => {
    const target = btn.dataset.target;
    if (!isLayered && (target === 'outer' || target === 'inner')) {
      btn.style.display = 'none';
    } else {
      btn.style.display = 'inline-flex';
    }
    btn.classList.toggle('active', target === state.recTarget);
  });
}

/**
 * 추천 카드에서 선택된 컬러를 타겟 부위에 즉시 적용
 */
function applyRecommendation(recId) {
  stopRecommendationCycle();

  const baseColor = getCurrentBaseColor();
  const availableRecs = getTargetSpecificRecommendations(baseColor, state.recTarget);
  const targetRec = availableRecs.find(r => r.id === recId) || COLOR_MAP.get(recId);
  if (!targetRec) return;

  const targetPart = state.recTarget;

  if (state.topMode === 'layered') {
    if (targetPart === 'outer') state.selectedOuter = targetRec;
    else if (targetPart === 'inner') state.selectedInner = targetRec;
    else state.selectedBottom = targetRec;
  } else {
    if (targetPart === 'top') state.selectedTop = targetRec;
    else state.selectedBottom = targetRec;
  }

  updateGarmentVisuals();
  renderRecommendations();
  showToast(`${targetRec.name} 색상이 ${getPartKoreanName(targetPart)}에 적용되었습니다!`, '🎨');
}

// --- 다이나믹 추천 컬러 순환 미리보기 (Auto-Cycle) ---

/**
 * 추천 카드 목록의 '적용 중' 하이라이트만 갱신
 */
function updateRecCardActiveState() {
  if (!DOM.recCardsGrid) return;

  let currentTargetColor;
  if (state.topMode === 'layered') {
    if (state.recTarget === 'outer') currentTargetColor = state.selectedOuter;
    else if (state.recTarget === 'inner') currentTargetColor = state.selectedInner;
    else currentTargetColor = state.selectedBottom;
  } else {
    currentTargetColor = state.recTarget === 'bottom' ? state.selectedBottom : state.selectedTop;
  }

  const targetName = getPartKoreanName(state.recTarget);

  DOM.recCardsGrid.querySelectorAll('.rec-card').forEach(card => {
    const isActive = currentTargetColor && card.getAttribute('data-rec-id') === currentTargetColor.id;
    card.classList.toggle('active', isActive);
    const applyBtn = card.querySelector('.btn-apply-rec');
    if (applyBtn) {
      applyBtn.textContent = isActive ? '✓ 현재 입어보는 중' : `이 색상 ${targetName}에 입혀보기`;
    }
  });
}

/**
 * 추천 컬러 순환 미리보기 종료
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
 * 기준 컬러 선택 시 엄선된 3가지 추천 조합을 마네킹에 춤추듯 입혀 보여주는 다이나믹 순환 미리보기
 * (마지막에 베스트 1순위 조합에서 '딱!' 멈추며 확정)
 */
function startRecommendationCycle() {
  stopRecommendationCycle();

  const baseColor = getCurrentBaseColor();
  const recs = getTargetSpecificRecommendations(baseColor, state.recTarget);
  if (recs.length <= 1) return;

  // 순환 애니메이션 표시 대상 컨테이너
  const targetContainers = [];
  if (state.topMode === 'layered') {
    if (state.activePart === 'inner') {
      targetContainers.push(DOM.svgTopContainer);
      targetContainers.push(DOM.svgBottomContainer);
    } else if (state.activePart === 'outer') {
      targetContainers.push(DOM.svgTopContainer);
      targetContainers.push(DOM.svgBottomContainer);
    } else {
      targetContainers.push(DOM.svgTopContainer);
    }
  } else {
    targetContainers.push(state.activePart === 'top' ? DOM.svgBottomContainer : DOM.svgTopContainer);
  }

  targetContainers.forEach(c => c?.classList.add('is-cycling'));

  const STEP_MS = 650;
  let step = 1; // 0번째(베스트 1)는 이미 즉시 1차 피팅됨 -> 1, 2 순환 후 베스트(0번째)에서 딱 멈춤!

  recCycleTimer = setInterval(() => {
    if (step >= recs.length) {
      stopRecommendationCycle();
      // 1순위 베스트 코디 세트로 최종 확정!
      applyBestRecommendationPair(baseColor, 0, true);
      updateGarmentVisuals();
      renderRecommendations();
      showToast(`추천 미리보기 완료! 가장 잘 어울리는 베스트 코디를 마네킹에 적용했어요.`, '🎨');
      return;
    }

    // 중간 추천 스텝 적용 (시각적 순환 연출)
    applyBestRecommendationPair(baseColor, step, true);
    step++;
  }, STEP_MS);
}

// --- Auxiliary Features (Swap, Shuffle, Copy, Reset) ---

/**
 * 색상 맞바꾸기 (Swap)
 * - 2벌 레이어드 모드: 외투 ⇄ 이너 ⇄ 하의 3벌 순환 스왑!
 * - 1벌 모드: 상의 ⇄ 하의 맞바꾸기
 */
function handleSwap() {
  stopRecommendationCycle();

  if (state.topMode === 'layered') {
    const prevOuter = state.selectedOuter;
    const prevInner = state.selectedInner;
    const prevBottom = state.selectedBottom;

    state.selectedOuter = COLOR_MAP.get(prevBottom.id) || prevBottom;
    state.selectedInner = COLOR_MAP.get(prevOuter.id) || prevOuter;
    state.selectedBottom = COLOR_MAP.get(prevInner.id) || prevInner;

    showToast('외투 ⇄ 이너 ⇄ 하의 색상을 순환 스왑했습니다!', '⇄');
  } else {
    const prevTop = state.selectedTop;
    const prevBottom = state.selectedBottom;

    state.selectedTop = COLOR_MAP.get(prevBottom.id) || prevBottom;
    state.selectedBottom = COLOR_MAP.get(prevTop.id) || prevTop;

    showToast('상의와 하의 색상을 맞바꿨습니다!', '⇄');
  }

  updateGarmentVisuals();
  renderPalette();
  renderRecommendations();
}

/**
 * 랜덤 추천 조합 (Shuffle)
 */
function handleShuffle() {
  stopRecommendationCycle();

  if (state.topMode === 'layered') {
    // 1. 외투 컬러 랜덤 선정
    const randomOuterIndex = Math.floor(Math.random() * FASHION_COLORS.length);
    const randomOuter = FASHION_COLORS[randomOuterIndex];
    state.selectedOuter = randomOuter;

    // 2. 외투의 추천 중 1개를 이너로 선정
    const outerRecs = randomOuter.recommendations || [];
    const randomInnerRec = outerRecs.length > 0 ? outerRecs[Math.floor(Math.random() * outerRecs.length)] : COLOR_MAP.get('cream');
    state.selectedInner = COLOR_MAP.get(randomInnerRec.id) || randomInnerRec;

    // 3. 이너 또는 외투의 추천 중 1개를 하의로 선정
    const innerRecs = (state.selectedInner.recommendations && state.selectedInner.recommendations.length > 0)
      ? state.selectedInner.recommendations
      : outerRecs;
    const randomBottomRec = innerRecs.length > 0 ? innerRecs[Math.floor(Math.random() * innerRecs.length)] : COLOR_MAP.get('dark_brown');
    state.selectedBottom = COLOR_MAP.get(randomBottomRec.id) || randomBottomRec;

    showToast(`새로운 레이어드 룩: ${state.selectedOuter.name} + ${state.selectedInner.name} + ${state.selectedBottom.name}`, '🎲');
  } else {
    // 단일 상의 모드
    const randomBaseIndex = Math.floor(Math.random() * FASHION_COLORS.length);
    const randomBase = FASHION_COLORS[randomBaseIndex];
    const recList = randomBase.recommendations || [];
    const randomRec = recList.length > 0 ? recList[Math.floor(Math.random() * recList.length)] : COLOR_MAP.get('beige');

    if (state.activePart === 'top') {
      state.selectedTop = randomBase;
      state.selectedBottom = randomRec;
    } else {
      state.selectedBottom = randomBase;
      state.selectedTop = randomRec;
    }

    showToast(`새로운 룩: ${state.selectedTop.name} & ${state.selectedBottom.name}`, '🎲');
  }

  updateGarmentVisuals();
  renderPalette();
  renderRecommendations();
}

/**
 * 코디 조합 클립보드 복사 (Share / Copy)
 */
function handleCopyCombination() {
  const bottomLabel = state.bottomType === 'pants' ? '👖 바지' : '👗 치마';
  let shareText = '';

  if (state.topMode === 'layered') {
    const vibe = state.selectedBottom.vibe || '스타일리시 레이어드 무드';
    shareText = `[MatchFit Color 레이어드 코디 제안]\n🧥 외투: ${state.selectedOuter.name} (${state.selectedOuter.hex})\n👕 이너: ${state.selectedInner.name} (${state.selectedInner.hex})\n${bottomLabel}: ${state.selectedBottom.name} (${state.selectedBottom.hex})\n✨ 무드: #${vibe}\n🛍️ 쇼핑몰 룩룩룩: ${SHOP_INFO.url}`;
  } else {
    const vibe = state.selectedBottom.vibe || '클래식 캐주얼 정석';
    shareText = `[MatchFit Color 코디 제안]\n👕 상의: ${state.selectedTop.name} (${state.selectedTop.hex})\n${bottomLabel}: ${state.selectedBottom.name} (${state.selectedBottom.hex})\n✨ 무드: #${vibe}\n🛍️ 쇼핑몰 룩룩룩: ${SHOP_INFO.url}`;
  }

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
  state.topMode = 'layered';
  state.activePart = 'outer';
  state.bottomType = 'pants';
  state.activeTab = 'standard';
  state.recTarget = 'bottom';

  state.selectedOuter = COLOR_MAP.get('camel') || COLOR_MAP.get('navy');
  state.selectedInner = COLOR_MAP.get('cream') || COLOR_MAP.get('white');
  state.selectedBottom = COLOR_MAP.get('dark_brown') || COLOR_MAP.get('beige');
  state.selectedTop = COLOR_MAP.get('navy');

  DOM.themeTabBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === 'standard');
  });

  updateGarmentVisuals();
  renderPalette();
  renderRecommendations();
  showToast('기본 레이어드 코디(카멜 외투 + 크림 이너 + 다크브라운 바지)로 초기화되었습니다.', '↺');
}

// --- Mode & Silhouette Switch Handlers ---

function setTopMode(mode) {
  if (state.topMode === mode) return;
  stopRecommendationCycle();
  state.topMode = mode;

  if (mode === 'single') {
    if (state.activePart === 'outer' || state.activePart === 'inner') {
      state.activePart = 'top';
    }
    state.recTarget = 'bottom';
  } else {
    if (state.activePart === 'top') {
      state.activePart = 'outer';
    }
    state.recTarget = 'bottom';
  }

  updateGarmentVisuals();
  renderPalette();
  renderRecommendations();
  showToast(`${mode === 'layered' ? '상의 2벌 (외투 + 이너)' : '상의 1벌 (단품)'} 모드로 전환되었습니다.`, '🧥');
}

function setActivePart(part) {
  if (state.activePart === part) return;
  stopRecommendationCycle();
  state.activePart = part;

  // 기준 부위 컬러 정규화 (recommendations 목록 확보)
  if (part === 'outer' && !state.selectedOuter.recommendations) {
    state.selectedOuter = COLOR_MAP.get(state.selectedOuter.id) || state.selectedOuter;
  }
  if (part === 'inner' && !state.selectedInner.recommendations) {
    state.selectedInner = COLOR_MAP.get(state.selectedInner.id) || state.selectedInner;
  }
  if (part === 'bottom' && !state.selectedBottom.recommendations) {
    state.selectedBottom = COLOR_MAP.get(state.selectedBottom.id) || state.selectedBottom;
  }
  if (part === 'top' && !state.selectedTop.recommendations) {
    state.selectedTop = COLOR_MAP.get(state.selectedTop.id) || state.selectedTop;
  }

  // 추천 적용 대상(recTarget) 스마트 자동 전환
  if (state.topMode === 'layered') {
    if (part === 'outer') state.recTarget = 'bottom';
    else if (part === 'inner') state.recTarget = 'outer';
    else state.recTarget = 'outer';
  } else {
    state.recTarget = part === 'top' ? 'bottom' : 'top';
  }

  updateGarmentVisuals();
  renderPalette();
  renderRecommendations();
  showToast(`${getPartKoreanName(part)}를 기준으로 색상을 선택합니다.`, '👕');
}

function setBottomType(type) {
  if (state.bottomType === type) return;
  state.bottomType = type;
  updateGarmentVisuals();
  showToast(`하의 형태가 ${type === 'pants' ? '바지' : '치마'}로 변경되었습니다.`, '✨');
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  // 상의 옵션 (1벌 vs 2벌)
  DOM.btnTopSingle?.addEventListener('click', () => setTopMode('single'));
  DOM.btnTopLayered?.addEventListener('click', () => setTopMode('layered'));

  // 하의 옵션 (바지 vs 치마)
  DOM.btnPants?.addEventListener('click', () => setBottomType('pants'));
  DOM.btnSkirt?.addEventListener('click', () => setBottomType('skirt'));

  // 마네킹 플로팅 배지 클릭
  DOM.outerColorBadge?.addEventListener('click', () => setActivePart('outer'));
  DOM.innerColorBadge?.addEventListener('click', () => setActivePart('inner'));
  DOM.topColorBadge?.addEventListener('click', () => setActivePart('top'));
  DOM.bottomColorBadge?.addEventListener('click', () => setActivePart('bottom'));

  // 추천 피팅 부위 셀렉터 버튼
  DOM.btnRecTargets.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      if (state.recTarget === target) return;
      state.recTarget = target;
      syncRecTargetSelectorUI();
      renderRecommendations();
      showToast(`추천 컬러 피팅 대상을 [${getPartKoreanName(target)}]로 변경했습니다.`, '🎯');
    });
  });

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

  // 팔레트 스크롤 높이 및 상단 헤더 높이를 동기화 (리사이즈/폰트 로드 시 재계산)
  const handleSyncLayout = () => {
    syncPaletteScrollHeight();
    syncStickyBarTopOffset();
  };
  window.addEventListener('resize', handleSyncLayout);
  window.addEventListener('load', handleSyncLayout);
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
          showToast(`${getPartKoreanName(state.activePart)}에 '${colorObj.name}'을 피팅했습니다!`, '🍂');
          
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

  if (state.topMode === 'layered') {
    state.selectedOuter = topColor;
    // 추천 이너로 크림/화이트 또는 톤온톤 매칭
    const innerRec = (topColor.recommendations && topColor.recommendations[0]) || COLOR_MAP.get('cream');
    state.selectedInner = innerRec;
    state.selectedBottom = bottomColor;
  } else {
    state.selectedTop = topColor;
    state.selectedBottom = bottomColor;
  }

  updateGarmentVisuals();
  renderPalette();
  renderRecommendations();
  showToast(`시즌 베스트 코디 [${styleName}]을 마네킹에 피팅했습니다!`, '✨');
}

// --- URL Parameters Handling (타 페이지에서 마네킹 피팅 연동) ---
function handleUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const modeParam = params.get('topMode');
  const outerId = params.get('outer');
  const innerId = params.get('inner');
  const topId = params.get('top');
  const bottomId = params.get('bottom');
  let updated = false;

  if (modeParam === 'single' || modeParam === 'layered') {
    state.topMode = modeParam;
    updated = true;
  }

  if (outerId && COLOR_MAP.has(outerId)) {
    state.selectedOuter = COLOR_MAP.get(outerId);
    state.topMode = 'layered';
    updated = true;
  }

  if (innerId && COLOR_MAP.has(innerId)) {
    state.selectedInner = COLOR_MAP.get(innerId);
    state.topMode = 'layered';
    updated = true;
  }

  if (topId && COLOR_MAP.has(topId)) {
    if (state.topMode === 'layered' && !outerId) {
      state.selectedOuter = COLOR_MAP.get(topId);
    } else {
      state.selectedTop = COLOR_MAP.get(topId);
    }
    updated = true;
  }

  if (bottomId && COLOR_MAP.has(bottomId)) {
    state.selectedBottom = COLOR_MAP.get(bottomId);
    updated = true;
  }

  if (updated) {
    setTimeout(() => {
      showToast('요청하신 컬러 조합을 마네킹에 피팅했습니다!', '✨');
    }, 300);
  }
}

// --- App Initialization ---
function init() {
  handleUrlParams();
  setupEventListeners();
  syncPaletteScrollHeight();
  syncStickyBarTopOffset();
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

