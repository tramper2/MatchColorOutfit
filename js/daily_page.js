/**
 * MatchFit Color - Daily Outfits Page Logic
 */

import { DAILY_OUTFITS, WEEKDAY_THEMES, COLOR_MAP } from './data.js';

let currentTpo = 'all';
let outfitMode = localStorage.getItem('matchfit_outfit_mode') || 'layered';

function renderWeekdayBanner() {
  const today = new Date().getDay(); // 0(일) ~ 6(토)
  const theme = WEEKDAY_THEMES.find(t => t.day === today) || WEEKDAY_THEMES[1];

  const badgeEl = document.getElementById('weekdayNameBadge');
  const moodEl = document.getElementById('weekdayMoodText');
  const tipEl = document.getElementById('weekdayTipText');

  if (badgeEl) badgeEl.textContent = `📅 오늘(${theme.name})의 추천 테마: ${theme.mood}`;
  if (moodEl) moodEl.textContent = `💡 스타일 팁: ${theme.tip}`;
  if (tipEl) tipEl.textContent = `추천 TPO: ${getTpoKorean(theme.recommendTpo)}`;
}

function getTpoKorean(tpoKey) {
  const map = {
    office: '출근/비즈니스',
    casual: '데일리/캠퍼스',
    date: '데이트/소개팅',
    formal: '격식/하객룩',
    onemile: '원마일웨어'
  };
  return map[tpoKey] || '전체';
}

function renderOutfits() {
  const container = document.getElementById('dailyOutfitsContainer');
  if (!container) return;

  const filtered = currentTpo === 'all' 
    ? DAILY_OUTFITS 
    : DAILY_OUTFITS.filter(item => item.tpo === currentTpo);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
        해당 상황에 맞는 추천 코디를 준비 중입니다.
      </div>
    `;
    return;
  }

  const isLayeredActive = outfitMode === 'layered';

  container.innerHTML = filtered.map(item => {
    const canLayer = Boolean(item.outerId && item.innerId);
    const useLayered = isLayeredActive && canLayer;

    const outerObj = item.outerId ? (COLOR_MAP.get(item.outerId) || { hex: '#1B2A4A', name: item.outerName }) : null;
    const innerObj = item.innerId ? (COLOR_MAP.get(item.innerId) || { hex: '#FFFFFF', name: item.innerName }) : null;
    const topObj = COLOR_MAP.get(item.topId) || { hex: '#9E9E9E', name: item.topName };
    const bottomObj = COLOR_MAP.get(item.bottomId) || { hex: '#383B3E', name: item.bottomName };

    // 3벌(외투+이너+하의) 또는 2벌 스와치 구성
    const swatchHtml = useLayered ? `
      <div class="daily-color-pairing-preview layered-3swatches">
        <div class="color-swatch-box">
          <span class="swatch-circle" style="background-color: ${outerObj.hex};"></span>
          <div class="swatch-meta">
            <span class="swatch-part">외투</span>
            <span class="swatch-title">${item.outerName}</span>
          </div>
        </div>
        <span class="swatch-plus">+</span>
        <div class="color-swatch-box">
          <span class="swatch-circle" style="background-color: ${innerObj.hex};"></span>
          <div class="swatch-meta">
            <span class="swatch-part">이너</span>
            <span class="swatch-title">${item.innerName}</span>
          </div>
        </div>
        <span class="swatch-plus">+</span>
        <div class="color-swatch-box">
          <span class="swatch-circle" style="background-color: ${bottomObj.hex};"></span>
          <div class="swatch-meta">
            <span class="swatch-part">하의</span>
            <span class="swatch-title">${item.bottomName}</span>
          </div>
        </div>
      </div>
    ` : `
      <div class="daily-color-pairing-preview">
        <div class="color-swatch-box">
          <span class="swatch-circle" style="background-color: ${topObj.hex};"></span>
          <div class="swatch-meta">
            <span class="swatch-part">상의</span>
            <span class="swatch-title">${item.topName}</span>
          </div>
        </div>
        <span class="swatch-plus">+</span>
        <div class="color-swatch-box">
          <span class="swatch-circle" style="background-color: ${bottomObj.hex};"></span>
          <div class="swatch-meta">
            <span class="swatch-part">하의</span>
            <span class="swatch-title">${item.bottomName}</span>
          </div>
        </div>
      </div>
    `;

    const fitUrl = useLayered
      ? `./?topMode=layered&outer=${item.outerId}&inner=${item.innerId}&bottom=${item.bottomId}`
      : `./?topMode=single&top=${item.topId}&bottom=${item.bottomId}`;

    const fitLabel = useLayered
      ? '외투+이너+하의 마네킹에 피팅하기 &rarr;'
      : '상의+하의 마네킹에 피팅하기 &rarr;';

    const fitIcon = useLayered ? '🧥👕👖' : '👕👖';

    return `
      <article class="daily-outfit-card">
        <div>
          <div class="daily-card-top-row">
            <span class="daily-tpo-badge">${item.tpoName}</span>
            <span class="daily-vibe-tag">✨ ${item.vibe}</span>
          </div>
          <h3 class="daily-card-title">${item.title}</h3>
          <p class="daily-card-subtitle">${item.subtitle}</p>

          <!-- Color Pairing Swatch (3-piece or 2-piece) -->
          ${swatchHtml}

          <div style="margin: 0.85rem 0; padding: 0.65rem 0.85rem; background: rgba(255,255,255,0.03); border-radius: var(--radius-sm); border-left: 3px solid #38bdf8;">
            <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">핵심 아이템</div>
            <div style="font-size: 0.85rem; font-weight: 600; color: #fff; margin-top: 2px;">${item.keyItem}</div>
          </div>

          <!-- Styling Points -->
          <ul class="daily-points-list">
            ${item.stylingPoints.map(point => `<li>${point}</li>`).join('')}
          </ul>
        </div>

        <a href="${fitUrl}" class="btn-fit-in-mannequin" title="이 코디를 메인 마네킹에 피팅해보기">
          <span>${fitIcon}</span>
          <span>${fitLabel}</span>
        </a>
      </article>
    `;
  }).join('');
}

function setupOutfitModeToggle() {
  const modeGroup = document.getElementById('dailyOutfitModeGroup');
  if (!modeGroup) return;

  const buttons = modeGroup.querySelectorAll('.btn-outfit-mode');
  
  const updateButtons = () => {
    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-mode') === outfitMode);
    });
  };

  updateButtons();

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-mode');
      if (outfitMode === mode) return;
      outfitMode = mode;
      localStorage.setItem('matchfit_outfit_mode', outfitMode);
      updateButtons();
      renderOutfits();
    });
  });
}

function setupTpoFilter() {
  const buttons = document.querySelectorAll('#tpoFilterTabs .btn-tpo-tab');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tpo = btn.getAttribute('data-tpo');
      if (currentTpo === tpo) return;
      currentTpo = tpo;
      buttons.forEach(b => b.classList.toggle('active', b.getAttribute('data-tpo') === tpo));
      renderOutfits();
    });
  });
}

// Init
function init() {
  renderWeekdayBanner();
  setupOutfitModeToggle();
  setupTpoFilter();
  renderOutfits();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
