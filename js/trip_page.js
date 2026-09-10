/**
 * MatchFit Color - 7-Day Trip & Business Packing Planner Logic
 * Powered by Open-Meteo Daily Forecast API
 */

import { TRIP_CITIES, CAPSULE_PACKING_GUIDE, WMO_WEATHER_CODES, COLOR_MAP } from './data.js';

let currentRegion = 'asia';
let currentCity = TRIP_CITIES.find(c => c.id === 'tokyo') || TRIP_CITIES[0];
let dailyForecast = null;

const STORAGE_KEY = 'matchfit_trip_packing_checklist';

const DOM = {
  regionTabs: document.getElementById('regionTabs'),
  tripCityChips: document.getElementById('tripCityChips'),
  forecastHeaderCity: document.getElementById('forecastHeaderCity'),
  tripForecastCardsWrap: document.getElementById('tripForecastCardsWrap'),
  tripScheduleGrid: document.getElementById('tripScheduleGrid'),
  capsuleChecklistGrid: document.getElementById('capsuleChecklistGrid'),
  packingPercentLabel: document.getElementById('packingPercentLabel'),
  packingProgressFill: document.getElementById('packingProgressFill'),
  btnResetChecklist: document.getElementById('btnResetChecklist')
};

// 1. 지역 탭 및 도시 칩 렌더링
function renderCityChips() {
  if (!DOM.tripCityChips) return;
  const filtered = TRIP_CITIES.filter(c => c.type === currentRegion);

  DOM.tripCityChips.innerHTML = filtered.map(city => `
    <button type="button" class="btn-city-chip ${city.id === currentCity.id ? 'active' : ''}" data-city-id="${city.id}">
      <span>${city.flag}</span>
      <span>${city.name}</span>
    </button>
  `).join('');

  DOM.tripCityChips.querySelectorAll('.btn-city-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const cityId = btn.getAttribute('data-city-id');
      const target = TRIP_CITIES.find(c => c.id === cityId);
      if (target) {
        currentCity = target;
        updateCityChipsActive();
        fetchTripForecast();
      }
    });
  });
}

function updateCityChipsActive() {
  DOM.tripCityChips?.querySelectorAll('.btn-city-chip').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-city-id') === currentCity.id);
  });
}

function setupRegionTabs() {
  DOM.regionTabs?.querySelectorAll('.btn-city-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const reg = btn.getAttribute('data-region');
      if (currentRegion === reg) return;
      currentRegion = reg;
      DOM.regionTabs.querySelectorAll('.btn-city-chip').forEach(b => b.classList.toggle('active', b.getAttribute('data-region') === reg));
      const firstOfRegion = TRIP_CITIES.find(c => c.type === reg);
      if (firstOfRegion) currentCity = firstOfRegion;
      renderCityChips();
      fetchTripForecast();
    });
  });
}

// 2. Open-Meteo 7일 일별 예보 호출
async function fetchTripForecast() {
  if (DOM.forecastHeaderCity) {
    DOM.forecastHeaderCity.textContent = `${currentCity.flag} ${currentCity.name}`;
  }

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${currentCity.lat}&longitude=${currentCity.lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('예보 응답 오류');
    const data = await res.json();
    dailyForecast = data.daily;
    renderForecastCards();
    renderTripSchedule();
  } catch (err) {
    console.warn('예보 API 호출 실패, 시뮬레이션 데이터를 제공합니다:', err);
    dailyForecast = generateFallbackForecast();
    renderForecastCards();
    renderTripSchedule();
  }
}

function generateFallbackForecast() {
  const dates = [];
  const minTemps = [];
  const maxTemps = [];
  const codes = [];
  const rains = [];

  const now = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() + i);
    dates.push(d.toISOString().slice(0, 10));
    minTemps.push(14 + (i % 3));
    maxTemps.push(22 + (i % 4));
    codes.push(i === 2 ? 61 : (i === 4 ? 2 : 0));
    rains.push(i === 2 ? 70 : (i === 4 ? 20 : 5));
  }

  return {
    time: dates,
    temperature_2m_min: minTemps,
    temperature_2m_max: maxTemps,
    weather_code: codes,
    precipitation_probability_max: rains
  };
}

// 3. 7일 날씨 예보 타임라인 카드 렌더링
function renderForecastCards() {
  if (!DOM.tripForecastCardsWrap || !dailyForecast) return;

  const weekdayNames = ['일', '월', '화', '수', '목', '금', '토'];

  const cardsHtml = dailyForecast.time.slice(0, 7).map((timeStr, idx) => {
    const dateObj = new Date(timeStr);
    const dayName = weekdayNames[dateObj.getDay()];
    const dateFormatted = `${dateObj.getMonth() + 1}/${dateObj.getDate()}`;
    const minTemp = Math.round(dailyForecast.temperature_2m_min[idx]);
    const maxTemp = Math.round(dailyForecast.temperature_2m_max[idx]);
    const code = dailyForecast.weather_code[idx];
    const rain = dailyForecast.precipitation_probability_max ? dailyForecast.precipitation_probability_max[idx] : 0;
    const weatherMeta = WMO_WEATHER_CODES[code] || { label: '맑음', emoji: '☀️' };

    return `
      <div class="day-forecast-card ${idx === 0 ? 'today' : ''}">
        <span class="day-name">${idx === 0 ? '오늘' : `${dayName}요일`}</span>
        <span class="day-date">${dateFormatted}</span>
        <div class="day-icon" title="${weatherMeta.label}">${weatherMeta.emoji}</div>
        <div class="day-temp-range">${minTemp}° / ${maxTemp}°</div>
        <span class="day-rain-prob" title="강수 확률">🌧️ ${rain}%</span>
      </div>
    `;
  }).join('');

  DOM.tripForecastCardsWrap.innerHTML = cardsHtml;
}

// 4. 7일간 데일리 코디 스케줄 렌더링 (Day 1 ~ Day 7)
function renderTripSchedule() {
  if (!DOM.tripScheduleGrid) return;

  const SCHEDULE_TEMPLATES = [
    {
      dayNum: 1,
      title: "1일차: 이동 및 체크인 (편안한 스마트 캐주얼)",
      topId: "melange_gray",
      topName: "멜란지 그레이",
      bottomId: "black",
      bottomName: "블랙",
      role: "비행기/기차 장시간 이동에 구김 없고 편안한 셋업",
      tip: "가벼운 멜란지 가디건에 신축성 있는 블랙 슬랙스 매칭"
    },
    {
      dayNum: 2,
      title: "2일차: 핵심 비즈니스 미팅 & 프레젠테이션",
      topId: "navy",
      topName: "네이비",
      bottomId: "beige",
      bottomName: "베이지",
      role: "신뢰감과 전문성을 주는 불패의 비즈니스 포멀",
      tip: "단정한 네이비 자켓에 밝은 베이지 슬랙스로 스마트한 인상"
    },
    {
      dayNum: 3,
      title: "3일차: 현지 파트너사 오피스 워크",
      topId: "cream",
      topName: "크림 아이보리",
      bottomId: "charcoal",
      bottomName: "차콜 그레이",
      role: "도회적이고 지적인 모던 오피스 룩",
      tip: "크림 셔츠/니트가 얼굴을 화사하게 밝혀주며 차콜 하의가 슬림하게 정돈"
    },
    {
      dayNum: 4,
      title: "4일차: 외부 현장 미팅 & 공식 만찬 디너",
      topId: "camel",
      topName: "카멜",
      bottomId: "dark_brown",
      bottomName: "다크 브라운",
      role: "럭셔리하고 포근한 웜톤 앙상블",
      tip: "고급스러운 카멜 니트와 다크 브라운 팬츠로 격조 높은 디너 참석"
    },
    {
      dayNum: 5,
      title: "5일차: 현지 시장조사 및 자유 일정",
      topId: "olive_khaki",
      topName: "올리브 카키",
      bottomId: "mid_denim",
      bottomName: "중청 데님",
      role: "감성적이면서 활동성 높은 어반 캐주얼",
      tip: "많이 걸어도 편한 데님 팬츠와 내추럴한 카키 아우터"
    },
    {
      dayNum: 6,
      title: "6일차: 파트너사 랩업 미팅 & 선물 쇼핑",
      topId: "navy",
      topName: "네이비",
      bottomId: "melange_gray",
      bottomName: "세련된 그레이",
      role: "깔끔하고 세련된 마무리 비즈니스 캐주얼",
      tip: "2일차에 입었던 네이비 자켓을 1일차의 그레이 슬랙스와 믹스앤매치!"
    },
    {
      dayNum: 7,
      title: "7일차: 귀국 비행 및 복귀 (릴랙스 이지웨어)",
      topId: "butter_yellow",
      topName: "버터 옐로우",
      bottomId: "black",
      bottomName: "블랙",
      role: "화사하면서도 오염 걱정 없는 귀국 룩",
      tip: "얼굴에 생기를 주는 밝은 탑과 편안한 블랙 팬츠로 산뜻하게 귀국"
    }
  ];

  DOM.tripScheduleGrid.innerHTML = SCHEDULE_TEMPLATES.map(s => {
    const topObj = COLOR_MAP.get(s.topId) || { hex: '#9E9E9E' };
    const bottomObj = COLOR_MAP.get(s.bottomId) || { hex: '#383B3E' };

    return `
      <article class="daily-outfit-card">
        <div>
          <div class="daily-card-top-row">
            <span class="daily-tpo-badge">Day ${s.dayNum}</span>
            <span class="daily-vibe-tag font-outfit">SCHEDULE FIT</span>
          </div>
          <h3 class="daily-card-title">${s.title}</h3>
          <p class="daily-card-subtitle">${s.role}</p>

          <div class="daily-color-pairing-preview">
            <div class="color-swatch-box">
              <span class="swatch-circle" style="background-color: ${topObj.hex};"></span>
              <div class="swatch-meta">
                <span class="swatch-part">상의</span>
                <span class="swatch-title">${s.topName}</span>
              </div>
            </div>
            <span class="swatch-plus">+</span>
            <div class="color-swatch-box">
              <span class="swatch-circle" style="background-color: ${bottomObj.hex};"></span>
              <div class="swatch-meta">
                <span class="swatch-part">하의</span>
                <span class="swatch-title">${s.bottomName}</span>
              </div>
            </div>
          </div>

          <p style="font-size: 0.825rem; color: var(--text-secondary); line-height: 1.5; margin-top: 0.5rem;">
            💡 <strong>패킹 팁:</strong> ${s.tip}
          </p>
        </div>

        <a href="./?top=${s.topId}&bottom=${s.bottomId}" class="btn-fit-in-mannequin">
          <span>👕👖</span>
          <span>Day ${s.dayNum} 코디 마네킹에 피팅하기 &rarr;</span>
        </a>
      </article>
    `;
  }).join('');
}

// 5. 캡슐 패킹 체크리스트 관리
function loadChecklistState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveChecklistState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn(e);
  }
}

function renderChecklist() {
  if (!DOM.capsuleChecklistGrid) return;
  const state = loadChecklistState();
  const items = CAPSULE_PACKING_GUIDE.checklistItems;

  DOM.capsuleChecklistGrid.innerHTML = items.map(item => {
    const isChecked = !!state[item.id];
    return `
      <div class="checklist-item-card ${isChecked ? 'is-checked' : ''}" data-item-id="${item.id}">
        <div class="custom-checkbox">
          ${isChecked ? '✓' : ''}
        </div>
        <span class="checklist-text">${item.name}</span>
        <span class="checklist-count-tag">${item.count}</span>
      </div>
    `;
  }).join('');

  updatePackingProgress();

  DOM.capsuleChecklistGrid.querySelectorAll('.checklist-item-card').forEach(card => {
    card.addEventListener('click', () => {
      const itemId = card.getAttribute('data-item-id');
      const currentState = loadChecklistState();
      currentState[itemId] = !currentState[itemId];
      saveChecklistState(currentState);
      renderChecklist();
    });
  });
}

function updatePackingProgress() {
  const state = loadChecklistState();
  const items = CAPSULE_PACKING_GUIDE.checklistItems;
  const total = items.length;
  const checked = items.filter(it => !!state[it.id]).length;
  const percent = Math.round((checked / total) * 100);

  if (DOM.packingPercentLabel) {
    DOM.packingPercentLabel.textContent = `짐 싸기 진행률: ${percent}% (${checked}/${total} 완료)`;
  }
  if (DOM.packingProgressFill) {
    DOM.packingProgressFill.style.width = `${percent}%`;
  }
}

function setupResetChecklist() {
  DOM.btnResetChecklist?.addEventListener('click', () => {
    if (confirm('패킹 체크리스트를 처음 상태로 초기화하시겠습니까?')) {
      localStorage.removeItem(STORAGE_KEY);
      renderChecklist();
    }
  });
}

// Init
function init() {
  setupRegionTabs();
  renderCityChips();
  fetchTripForecast();
  renderChecklist();
  setupResetChecklist();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
