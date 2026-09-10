/**
 * MatchFit Color - Live Weather Outfit Logic
 * Powered by Open-Meteo Free Global Weather API
 */

import { DOMESTIC_CITIES, TEMPERATURE_GUIDES, WMO_WEATHER_CODES, COLOR_MAP } from './data.js';

let currentCity = DOMESTIC_CITIES[0]; // 기본: 서울
let currentWeather = null;

const DOM = {
  cityChipsContainer: document.getElementById('cityChipsContainer'),
  btnDetectGps: document.getElementById('btnDetectGps'),
  currentCityName: document.getElementById('currentCityName'),
  weatherEmoji: document.getElementById('weatherEmoji'),
  weatherTempHuge: document.getElementById('weatherTempHuge'),
  weatherStatusText: document.getElementById('weatherStatusText'),
  weatherAdviceText: document.getElementById('weatherAdviceText'),
  apparentTemp: document.getElementById('apparentTemp'),
  humidityVal: document.getElementById('humidityVal'),
  windSpeedVal: document.getElementById('windSpeedVal'),
  
  guideTempLabel: document.getElementById('guideTempLabel'),
  guideTitle: document.getElementById('guideTitle'),
  guideSummary: document.getElementById('guideSummary'),
  fitTops: document.getElementById('fitTops'),
  fitBottoms: document.getElementById('fitBottoms'),
  fitOuter: document.getElementById('fitOuter'),
  fitShoes: document.getElementById('fitShoes'),
  weatherColorPillsContainer: document.getElementById('weatherColorPillsContainer'),
  btnFitInStudio: document.getElementById('btnFitInStudio'),
  tempTableGrid: document.getElementById('tempTableGrid')
};

// 1. 도시 선택 칩 렌더링
function renderCityChips() {
  if (!DOM.cityChipsContainer) return;
  DOM.cityChipsContainer.innerHTML = DOMESTIC_CITIES.map(city => `
    <button type="button" class="btn-city-chip ${city.id === currentCity.id ? 'active' : ''}" data-city-id="${city.id}">
      <span>${city.name}</span>
    </button>
  `).join('');

  DOM.cityChipsContainer.querySelectorAll('.btn-city-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const cityId = btn.getAttribute('data-city-id');
      const target = DOMESTIC_CITIES.find(c => c.id === cityId);
      if (target) {
        currentCity = target;
        updateCityChipsActive();
        fetchWeather();
      }
    });
  });
}

function updateCityChipsActive() {
  DOM.cityChipsContainer?.querySelectorAll('.btn-city-chip').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-city-id') === currentCity.id);
  });
}

// 2. Open-Meteo 실시간 날씨 데이터 호출
async function fetchWeather() {
  if (DOM.currentCityName) DOM.currentCityName.textContent = currentCity.name;
  if (DOM.weatherStatusText) DOM.weatherStatusText.textContent = '실시간 기상 데이터 수신 중...';

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${currentCity.lat}&longitude=${currentCity.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('날씨 서버 응답 오류');
    const data = await res.json();
    currentWeather = data.current;
    updateWeatherUI();
  } catch (err) {
    console.warn('날씨 API 호출 실패, 기본 가을 기온(18℃)으로 대체합니다:', err);
    currentWeather = {
      temperature_2m: 18.5,
      apparent_temperature: 18.0,
      relative_humidity_2m: 55,
      weather_code: 1,
      wind_speed_10m: 2.1
    };
    updateWeatherUI();
  }
}

// 3. 날씨 및 코디 매칭 UI 갱신
function updateWeatherUI() {
  if (!currentWeather) return;

  const temp = Math.round(currentWeather.temperature_2m);
  const apparent = Math.round(currentWeather.apparent_temperature);
  const humidity = currentWeather.relative_humidity_2m;
  const wind = currentWeather.wind_speed_10m;
  const code = currentWeather.weather_code;

  const weatherMeta = WMO_WEATHER_CODES[code] || { label: '대체로 맑음', emoji: '🌤️', advice: '쾌적한 하루 보내세요.' };

  // 왼쪽 대시보드
  if (DOM.weatherEmoji) DOM.weatherEmoji.textContent = weatherMeta.emoji;
  if (DOM.weatherTempHuge) DOM.weatherTempHuge.textContent = `${temp}°`;
  if (DOM.weatherStatusText) DOM.weatherStatusText.textContent = `${weatherMeta.label} (${temp}℃)`;
  if (DOM.weatherAdviceText) DOM.weatherAdviceText.textContent = weatherMeta.advice;
  if (DOM.apparentTemp) DOM.apparentTemp.textContent = `${apparent}°C`;
  if (DOM.humidityVal) DOM.humidityVal.textContent = `${humidity}%`;
  if (DOM.windSpeedVal) DOM.windSpeedVal.textContent = `${wind}m/s`;

  // 기온 가이드 매칭 (체감온도 또는 실기온 기준)
  const targetTemp = temp;
  const matchedGuide = TEMPERATURE_GUIDES.find(g => targetTemp >= g.minTemp && targetTemp <= g.maxTemp) || TEMPERATURE_GUIDES[3];

  // 오른쪽 코디 추천 박스
  if (DOM.guideTempLabel) DOM.guideTempLabel.textContent = `현재 ${matchedGuide.label} 구간`;
  if (DOM.guideTitle) DOM.guideTitle.textContent = `${matchedGuide.title} 추천 코디`;
  if (DOM.guideSummary) DOM.guideSummary.textContent = `${matchedGuide.summary}. ${matchedGuide.stylingTip}`;

  if (DOM.fitTops) DOM.fitTops.textContent = matchedGuide.tops.slice(0, 2).join(', ');
  if (DOM.fitBottoms) DOM.fitBottoms.textContent = matchedGuide.bottoms.slice(0, 2).join(', ');
  if (DOM.fitOuter) DOM.fitOuter.textContent = matchedGuide.outer;
  if (DOM.fitShoes) DOM.fitShoes.textContent = matchedGuide.shoes.join(', ');

  // 추천 컬러 칩
  if (DOM.weatherColorPillsContainer && matchedGuide.recommendedColors) {
    DOM.weatherColorPillsContainer.innerHTML = matchedGuide.recommendedColors.map(c => `
      <span class="weather-color-pill" title="${c.name} (${c.hex}) - ${c.role}">
        <span class="color-circle-mini" style="background-color: ${c.hex};"></span>
        <strong style="color: #fff;">${c.name}</strong>
        <span style="font-size: 0.7rem; color: var(--text-muted);">${c.role}</span>
      </span>
    `).join('');
  }

  // 마네킹 피팅 링크 연결
  if (DOM.btnFitInStudio && matchedGuide.recommendedColors.length >= 2) {
    const topId = matchedGuide.recommendedColors[0].id;
    const bottomId = matchedGuide.recommendedColors[1].id;
    DOM.btnFitInStudio.href = `./?top=${topId}&bottom=${bottomId}`;
    DOM.btnFitInStudio.innerHTML = `
      <span>👕👖</span>
      <span>${matchedGuide.recommendedColors[0].name} + ${matchedGuide.recommendedColors[1].name} 마네킹에 피팅하기 &rarr;</span>
    `;
  }

  // 하단 조견표 현재 구간 하이라이트
  renderTempStepsTable(matchedGuide.rangeId);
}

// 4. 기온별 8단계 전체 조견표 렌더링
function renderTempStepsTable(currentRangeId) {
  if (!DOM.tempTableGrid) return;
  DOM.tempTableGrid.innerHTML = TEMPERATURE_GUIDES.map(step => {
    const isCurrent = step.rangeId === currentRangeId;
    return `
      <div class="temp-step-card ${isCurrent ? 'is-current' : ''}">
        <div class="temp-step-header">
          <span class="temp-step-badge">${step.label}</span>
          ${isCurrent ? '<span style="font-size: 0.75rem; color: #38bdf8; font-weight: 700; background: rgba(56,189,248,0.2); padding: 2px 8px; border-radius: 99px;">📍 현재 날씨</span>' : ''}
        </div>
        <div class="temp-step-title">${step.title}</div>
        <p class="temp-step-desc">${step.summary}</p>

        <div style="font-size: 0.775rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 3px; border-top: 1px solid var(--border-glass); padding-top: 8px;">
          <div><strong style="color: var(--text-secondary);">의상:</strong> ${step.tops[0]}, ${step.bottoms[0]}</div>
          <div><strong style="color: var(--text-secondary);">외투:</strong> ${step.outer}</div>
          <div><strong style="color: var(--text-secondary);">팁:</strong> ${step.stylingTip}</div>
        </div>
      </div>
    `;
  }).join('');
}

// 5. GPS 현재 위치 감지 핸들러
function setupGpsDetection() {
  DOM.btnDetectGps?.addEventListener('click', () => {
    if (!navigator.geolocation) {
      alert('사용하시는 브라우저에서 위치 정보를 지원하지 않습니다.');
      return;
    }

    DOM.btnDetectGps.innerHTML = '<span>📡</span><span>위치 확인 중...</span>';

    navigator.geolocation.getCurrentPosition(
      pos => {
        currentCity = {
          id: 'my_gps',
          name: '내 현재 위치',
          lat: pos.coords.latitude,
          lon: pos.coords.longitude
        };
        updateCityChipsActive();
        DOM.btnDetectGps.innerHTML = '<span>📍</span><span>내 위치 적용됨</span>';
        fetchWeather();
      },
      err => {
        alert('위치 정보를 가져오지 못했습니다. 위치 권한을 확인해주세요.');
        DOM.btnDetectGps.innerHTML = '<span>📡</span><span>내 위치 날씨 찾기</span>';
      },
      { timeout: 8000 }
    );
  });
}

// Init
function init() {
  renderCityChips();
  setupGpsDetection();
  fetchWeather();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
