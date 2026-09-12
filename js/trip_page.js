/**
 * MatchFit Color - 출장·여행 맞춤 날씨 & 스마트 패킹 플래너 로직
 * - 비즈니스 출장 vs 힐링 & 휴가 여행 목적 전환 지원
 * - 출발일 ~ 도착일(언제부터 언제까지) 유연한 날짜 기간 동적 처리 (1박 2일, 3박 4일 등)
 * - Open-Meteo 16일 예보 연동 및 일차별 날씨 맞춤 코디 플랜
 * - 기간 및 목적에 최적화된 스마트 캡슐 패킹 체크리스트 (로컬스토리지 연동)
 */

import {
  TRIP_CITIES,
  BUSINESS_PACKING_GUIDE,
  VACATION_PACKING_GUIDE,
  BUSINESS_SCHEDULE_POOL,
  VACATION_SCHEDULE_POOL,
  WMO_WEATHER_CODES,
  COLOR_MAP
} from './data.js';

// =========================================================================
// 1. 상태 관리 (State)
// =========================================================================
let currentPurpose = 'business'; // 'business' | 'vacation'
let currentRegion = 'asia';
let currentCity = TRIP_CITIES.find(c => c.id === 'tokyo') || TRIP_CITIES[0];
let dailyForecast = null;

// 기본 일정: 오늘부터 3박 4일 (총 4일)
const now = new Date();
let startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let endDate = new Date(startDate);
endDate.setDate(startDate.getDate() + 3);

const STORAGE_KEY_PREFIX = 'matchfit_trip_packing_checklist_';

// =========================================================================
// 2. DOM 참조 캐싱
// =========================================================================
const DOM = {
  // 목적 선택
  tripPurposeGroup: document.getElementById('tripPurposeGroup'),

  // 날짜 선택
  tripStartDate: document.getElementById('tripStartDate'),
  tripEndDate: document.getElementById('tripEndDate'),
  tripDurationSummaryText: document.getElementById('tripDurationSummaryText'),
  presetChips: document.querySelectorAll('.btn-preset-chip'),

  // 지역 및 도시
  regionTabs: document.getElementById('regionTabs'),
  tripCityChips: document.getElementById('tripCityChips'),

  // 날씨 예보 영역
  forecastHeaderCity: document.getElementById('forecastHeaderCity'),
  forecastHeaderDates: document.getElementById('forecastHeaderDates'),
  forecastHeaderSubtitle: document.getElementById('forecastHeaderSubtitle'),
  tripForecastCardsWrap: document.getElementById('tripForecastCardsWrap'),

  // 데일리 코디 스케줄
  scheduleHeaderIcon: document.getElementById('scheduleHeaderIcon'),
  scheduleHeaderTitle: document.getElementById('scheduleHeaderTitle'),
  scheduleHeaderSubtitle: document.getElementById('scheduleHeaderSubtitle'),
  tripScheduleGrid: document.getElementById('tripScheduleGrid'),

  // 캡슐 패킹 체크리스트
  checklistHeaderTitle: document.getElementById('checklistHeaderTitle'),
  checklistHeaderSubtitle: document.getElementById('checklistHeaderSubtitle'),
  capsuleChecklistGrid: document.getElementById('capsuleChecklistGrid'),
  packingPercentLabel: document.getElementById('packingPercentLabel'),
  packingProgressFill: document.getElementById('packingProgressFill'),
  btnResetChecklist: document.getElementById('btnResetChecklist')
};

// =========================================================================
// 3. 날짜 및 기간 연산 헬퍼
// =========================================================================
function toDateInputValue(d) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function parseDateInput(str) {
  if (!str) return new Date();
  const parts = str.split('-').map(Number);
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

function formatKoreanDate(d) {
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}(${weekdays[d.getDay()]})`;
}

function calculateTripDays() {
  const diffTime = endDate.getTime() - startDate.getTime();
  const days = Math.round(diffTime / (1000 * 60 * 60 * 24)) + 1;
  return Math.max(1, days);
}

function updateDateUI() {
  if (DOM.tripStartDate) DOM.tripStartDate.value = toDateInputValue(startDate);
  if (DOM.tripEndDate) DOM.tripEndDate.value = toDateInputValue(endDate);

  const days = calculateTripDays();
  const nights = days - 1;

  if (DOM.tripDurationSummaryText) {
    if (days === 1) {
      DOM.tripDurationSummaryText.textContent = `${formatKoreanDate(startDate)} · 당일치기 (총 1일 일정)`;
    } else {
      DOM.tripDurationSummaryText.textContent = `${formatKoreanDate(startDate)} ~ ${formatKoreanDate(endDate)} · ${nights}박 ${days}일 일정 (총 ${days}일)`;
    }
  }

  // 프리셋 버튼 active 토글
  DOM.presetChips?.forEach(chip => {
    const pDays = parseInt(chip.getAttribute('data-days'), 10);
    chip.classList.toggle('active', pDays === days);
  });

  // 날씨 헤더 텍스트 갱신
  if (DOM.forecastHeaderDates) {
    DOM.forecastHeaderDates.textContent = days === 1 ? `당일 날씨 & 기온 예보` : `${nights}박 ${days}일간 날씨 & 기온 예보`;
  }

  // 코디 스케줄 헤더 갱신
  if (DOM.scheduleHeaderTitle) {
    const purposeName = currentPurpose === 'business' ? '비즈니스 출장' : '힐링 & 휴가 여행';
    DOM.scheduleHeaderTitle.textContent = days === 1 ? `${purposeName} 당일 코디 추천` : `${purposeName} ${days}일간 데일리 코디 스케줄 추천`;
  }
}

// =========================================================================
// 4. 여행 목적 토글 (출장 vs 휴가)
// =========================================================================
function setupPurposeToggle() {
  DOM.tripPurposeGroup?.querySelectorAll('.btn-purpose-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const purpose = btn.getAttribute('data-purpose');
      if (currentPurpose === purpose) return;
      currentPurpose = purpose;

      DOM.tripPurposeGroup.querySelectorAll('.btn-purpose-pill').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-purpose') === purpose);
      });

      updatePurposeUI();
      renderTripSchedule();
      renderChecklist();
    });
  });
}

function updatePurposeUI() {
  const isBiz = currentPurpose === 'business';
  if (DOM.scheduleHeaderIcon) DOM.scheduleHeaderIcon.textContent = isBiz ? '👔' : '🌴';
  if (DOM.scheduleHeaderSubtitle) {
    DOM.scheduleHeaderSubtitle.textContent = isBiz
      ? '신뢰감 있는 비즈니스 미팅과 장시간 이동에도 구김 없는 스마트 캡슐 믹스앤매치 플랜입니다.'
      : '설레는 여행 인생샷을 남겨줄 화사한 컬러 포인트와 편안한 활동성을 갖춘 바캉스 믹스앤매치 플랜입니다.';
  }
  if (DOM.checklistHeaderTitle) {
    DOM.checklistHeaderTitle.textContent = isBiz
      ? '비즈니스 출장 스마트 캡슐 패킹 체크리스트'
      : '힐링 & 휴가 여행 감성 패킹 체크리스트';
  }
  updateDateUI();
}

// =========================================================================
// 5. 날짜 입력 컨트롤 이벤트 등록
// =========================================================================
function setupDateInputs() {
  // 간편 프리셋 버튼
  DOM.presetChips?.forEach(btn => {
    btn.addEventListener('click', () => {
      const days = parseInt(btn.getAttribute('data-days'), 10);
      endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + (days - 1));
      updateDateUI();
      renderForecastCards();
      renderTripSchedule();
      renderChecklist();
    });
  });

  // 출발일 변경
  DOM.tripStartDate?.addEventListener('change', (e) => {
    const newStart = parseDateInput(e.target.value);
    if (newStart > endDate) {
      endDate = new Date(newStart);
      endDate.setDate(newStart.getDate() + 3); // 3박 4일 자동 조정
    }
    startDate = newStart;
    updateDateUI();
    renderForecastCards();
    renderTripSchedule();
    renderChecklist();
  });

  // 도착일 변경
  DOM.tripEndDate?.addEventListener('change', (e) => {
    const newEnd = parseDateInput(e.target.value);
    if (newEnd < startDate) {
      startDate = new Date(newEnd);
    }
    endDate = newEnd;
    updateDateUI();
    renderForecastCards();
    renderTripSchedule();
    renderChecklist();
  });
}

// =========================================================================
// 6. 지역 탭 및 도시 칩 렌더링
// =========================================================================
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

// =========================================================================
// 7. Open-Meteo 16일 예보 호출 및 날짜별 매핑
// =========================================================================
async function fetchTripForecast() {
  if (DOM.forecastHeaderCity) {
    DOM.forecastHeaderCity.textContent = `${currentCity.flag} ${currentCity.name}`;
  }

  // 최대 16일치 일별 예보 요청
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${currentCity.lat}&longitude=${currentCity.lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&forecast_days=16`;

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

  const tempNow = new Date();
  for (let i = 0; i < 16; i++) {
    const d = new Date(tempNow);
    d.setDate(d.getDate() + i);
    dates.push(toDateInputValue(d));
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

// 선택된 날짜에 대응하는 기상 데이터 가져오기
function getWeatherForDate(targetDate) {
  const dateStr = toDateInputValue(targetDate);
  if (dailyForecast && dailyForecast.time) {
    const idx = dailyForecast.time.indexOf(dateStr);
    if (idx !== -1) {
      const minTemp = Math.round(dailyForecast.temperature_2m_min[idx]);
      const maxTemp = Math.round(dailyForecast.temperature_2m_max[idx]);
      const code = dailyForecast.weather_code[idx];
      const rain = dailyForecast.precipitation_probability_max ? dailyForecast.precipitation_probability_max[idx] : 0;
      const meta = WMO_WEATHER_CODES[code] || { label: '맑음', emoji: '☀️' };
      return { minTemp, maxTemp, rain, meta, isEstimate: false };
    }
  }

  // 16일 이후거나 API 범위 외일 경우 계절 기반 자연스러운 추정치
  const month = targetDate.getMonth() + 1;
  let baseMin = 14, baseMax = 23;
  if ([12, 1, 2].includes(month)) { baseMin = -2; baseMax = 6; }
  else if ([6, 7, 8].includes(month)) { baseMin = 22; baseMax = 30; }

  const dayVariance = (targetDate.getDate() % 4) - 2;
  return {
    minTemp: baseMin + dayVariance,
    maxTemp: baseMax + dayVariance,
    rain: (targetDate.getDate() % 5 === 0) ? 40 : 10,
    meta: { label: '시즌 평균 맑음', emoji: '🌤️' },
    isEstimate: true
  };
}

// =========================================================================
// 8. 날씨 예보 타임라인 카드 렌더링
// =========================================================================
function renderForecastCards() {
  if (!DOM.tripForecastCardsWrap) return;

  const weekdayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const days = calculateTripDays();
  const todayStr = toDateInputValue(new Date());

  let cardsHtml = '';

  for (let i = 0; i < days; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);

    const dateStr = toDateInputValue(d);
    const isToday = dateStr === todayStr;
    const dayName = weekdayNames[d.getDay()];
    const dateFormatted = `${d.getMonth() + 1}/${d.getDate()}`;

    const weather = getWeatherForDate(d);

    cardsHtml += `
      <div class="day-forecast-card ${isToday ? 'today' : ''}">
        <span class="day-name">${isToday ? '오늘' : `${dayName}요일`}</span>
        <span class="day-date">${dateFormatted} (${i + 1}일차)</span>
        <div class="day-icon" title="${weather.meta.label}">${weather.meta.emoji}</div>
        <div class="day-temp-range">${weather.minTemp}° / ${weather.maxTemp}°</div>
        <span class="day-rain-prob" title="강수 확률">🌧️ ${weather.rain}%</span>
        ${weather.isEstimate ? '<span style="font-size: 0.65rem; color: var(--text-muted);">예상</span>' : ''}
      </div>
    `;
  }

  DOM.tripForecastCardsWrap.innerHTML = cardsHtml;
}

// =========================================================================
// 9. 동적 데일리 코디 스케줄 렌더링 (Day 1 ~ Day N)
// =========================================================================
function renderTripSchedule() {
  if (!DOM.tripScheduleGrid) return;

  const days = calculateTripDays();
  const pool = currentPurpose === 'business' ? BUSINESS_SCHEDULE_POOL : VACATION_SCHEDULE_POOL;
  const weekdayNames = ['일', '월', '화', '수', '목', '금', '토'];

  // 일정 일수에 맞춰 스케줄 항목 생성
  const scheduleItems = [];

  for (let i = 0; i < days; i++) {
    const dayNum = i + 1;
    const currDate = new Date(startDate);
    currDate.setDate(startDate.getDate() + i);
    const dateLabel = `${currDate.getMonth() + 1}/${currDate.getDate()} (${weekdayNames[currDate.getDay()]})`;

    const weather = getWeatherForDate(currDate);

    let template;
    if (days === 1) {
      // 당일치기인 경우
      template = currentPurpose === 'business' ? pool[1] : pool[1];
    } else if (i === 0) {
      // 1일차: 출발 및 도착 이동 룩
      template = pool.find(p => p.themeType === 'depart') || pool[0];
    } else if (i === days - 1) {
      // 마지막 날: 체크아웃 및 귀국 룩
      template = pool.find(p => p.themeType === 'return') || pool[pool.length - 1];
    } else {
      // 중간 일차: 순차적으로 매칭
      const middlePool = pool.filter(p => p.themeType !== 'depart' && p.themeType !== 'return');
      const middleIndex = (i - 1) % middlePool.length;
      template = middlePool[middleIndex];
    }

    // 날씨 맞춤형 팁 추가
    let weatherTip = '';
    if (weather.rain >= 50) {
      weatherTip = ' 🌧️ 강수 확률 높음: 접이식 우산 휴대 및 방수/오염에 강한 하의 추천!';
    } else if (weather.maxTemp >= 28) {
      weatherTip = ' ☀️ 무더운 날씨: 땀 흡수가 빠른 쾌적한 린넨/기능성 이너 추천!';
    } else if (weather.minTemp <= 10) {
      weatherTip = ' 🧣 아침저녁 쌀쌀함: 가디건 또는 가벼운 아우터 레이어드 필수!';
    }

    scheduleItems.push({
      dayNum,
      dateLabel,
      title: `${dayNum}일차: ${template.title}`,
      topId: template.topId,
      topName: template.topName,
      bottomId: template.bottomId,
      bottomName: template.bottomName,
      role: template.role,
      tip: `${template.tip}${weatherTip}`,
      weatherEmoji: weather.meta.emoji,
      tempText: `${weather.minTemp}° / ${weather.maxTemp}°`
    });
  }

  DOM.tripScheduleGrid.innerHTML = scheduleItems.map(s => {
    const topObj = COLOR_MAP.get(s.topId) || { hex: '#9E9E9E' };
    const bottomObj = COLOR_MAP.get(s.bottomId) || { hex: '#383B3E' };

    return `
      <article class="daily-outfit-card">
        <div>
          <div class="daily-card-top-row">
            <span class="daily-tpo-badge">Day ${s.dayNum} · ${s.dateLabel}</span>
            <span class="daily-vibe-tag font-outfit">${s.weatherEmoji} ${s.tempText}</span>
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

          <p style="font-size: 0.825rem; color: var(--text-secondary); line-height: 1.5; margin-top: 0.65rem;">
            💡 <strong>스타일링 & 패킹 팁:</strong> ${s.tip}
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

// =========================================================================
// 10. 스마트 캡슐 패킹 체크리스트 관리
// =========================================================================
function getStorageKey() {
  return `${STORAGE_KEY_PREFIX}${currentPurpose}`;
}

function loadChecklistState() {
  try {
    const saved = localStorage.getItem(getStorageKey());
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveChecklistState(state) {
  try {
    localStorage.setItem(getStorageKey(), JSON.stringify(state));
  } catch (e) {
    console.warn(e);
  }
}

function renderChecklist() {
  if (!DOM.capsuleChecklistGrid) return;

  const days = calculateTripDays();
  const guide = currentPurpose === 'business' ? BUSINESS_PACKING_GUIDE : VACATION_PACKING_GUIDE;
  const items = guide.getChecklistItems(days);

  // 체크리스트 서브타이틀 갱신
  if (DOM.checklistHeaderSubtitle) {
    DOM.checklistHeaderSubtitle.innerHTML = `
      <strong>${guide.rule}:</strong> ${guide.description} (체크 시 자동 저장)
    `;
  }

  const state = loadChecklistState();

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

  updatePackingProgress(items);

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

function updatePackingProgress(items) {
  const days = calculateTripDays();
  const guide = currentPurpose === 'business' ? BUSINESS_PACKING_GUIDE : VACATION_PACKING_GUIDE;
  const activeItems = items || guide.getChecklistItems(days);
  const state = loadChecklistState();

  const total = activeItems.length;
  const checked = activeItems.filter(it => !!state[it.id]).length;
  const percent = total > 0 ? Math.round((checked / total) * 100) : 0;

  if (DOM.packingPercentLabel) {
    DOM.packingPercentLabel.textContent = `짐 싸기 진행률: ${percent}% (${checked}/${total} 완료)`;
  }
  if (DOM.packingProgressFill) {
    DOM.packingProgressFill.style.width = `${percent}%`;
  }
}

function setupResetChecklist() {
  DOM.btnResetChecklist?.addEventListener('click', () => {
    const purposeName = currentPurpose === 'business' ? '비즈니스 출장' : '힐링 휴가 여행';
    if (confirm(`${purposeName} 패킹 체크리스트를 처음 상태로 초기화하시겠습니까?`)) {
      localStorage.removeItem(getStorageKey());
      renderChecklist();
    }
  });
}

// =========================================================================
// 11. 초기화 (Init)
// =========================================================================
function init() {
  setupPurposeToggle();
  setupDateInputs();
  setupRegionTabs();
  renderCityChips();
  updatePurposeUI();
  fetchTripForecast();
  renderChecklist();
  setupResetChecklist();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
