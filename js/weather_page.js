/**
 * MatchFit Color - Live Weather Outfit Logic
 * Powered by Open-Meteo Free Global Weather API
 */

import { DOMESTIC_CITIES, TEMPERATURE_GUIDES, WMO_WEATHER_CODES, COLOR_MAP } from './data.js';

let currentCity = DOMESTIC_CITIES[0]; // 기본: 서울
let currentWeather = null;
let weatherOutfitMode = localStorage.getItem('matchfit_outfit_mode') || 'layered';
let userSelectedMode = false;

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

  // 사용자가 명시적으로 토글을 클릭하지 않았다면 날씨/아우터에 따라 지능형 기본값 설정
  if (!userSelectedMode) {
    if (targetTemp >= 28 || !matchedGuide.hasOuter) {
      weatherOutfitMode = 'single';
    } else {
      weatherOutfitMode = localStorage.getItem('matchfit_outfit_mode') || 'layered';
    }
  }

  // 모드 버튼 활성 상태 동기화
  const modeButtons = document.querySelectorAll('#weatherOutfitModeGroup .btn-outfit-mode');
  modeButtons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-mode') === weatherOutfitMode);
  });

  const isLayeredActive = weatherOutfitMode === 'layered' && matchedGuide.hasOuter && Boolean(matchedGuide.outerId && matchedGuide.innerId);

  // 오른쪽 코디 추천 박스
  if (DOM.guideTempLabel) DOM.guideTempLabel.textContent = `현재 ${matchedGuide.label} 구간`;
  if (DOM.guideTitle) DOM.guideTitle.textContent = `${matchedGuide.title} 추천 코디`;
  if (DOM.guideSummary) DOM.guideSummary.textContent = `${matchedGuide.summary}. ${matchedGuide.stylingTip}`;

  if (DOM.fitTops) {
    DOM.fitTops.textContent = isLayeredActive 
      ? `${matchedGuide.tops.slice(0, 2).join(', ')} (이너)`
      : matchedGuide.tops.slice(0, 2).join(', ');
  }
  if (DOM.fitBottoms) DOM.fitBottoms.textContent = matchedGuide.bottoms.slice(0, 2).join(', ');
  if (DOM.fitOuter) {
    DOM.fitOuter.textContent = isLayeredActive 
      ? matchedGuide.outer 
      : (targetTemp >= 28 ? '외투 불필요 (단품 추천)' : `${matchedGuide.outer} (휴대/탈의용)`);
  }
  if (DOM.fitShoes) DOM.fitShoes.textContent = matchedGuide.shoes.join(', ');

  // 추천 컬러 칩 & 부위별 대표 컬러 렌더링
  if (DOM.weatherColorPillsContainer) {
    let pillsHtml = '';

    if (isLayeredActive) {
      const outerColor = COLOR_MAP.get(matchedGuide.outerId) || { hex: '#1B2A4A', name: matchedGuide.outerName };
      const innerColor = COLOR_MAP.get(matchedGuide.innerId) || { hex: '#FFFFFF', name: matchedGuide.innerName };
      const bottomColor = COLOR_MAP.get(matchedGuide.bottomId) || { hex: '#383B3E', name: matchedGuide.bottomName };

      pillsHtml += `
        <div style="width: 100%; display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
          <span class="weather-color-pill" style="border-color: #38bdf8;" title="추천 외투 컬러">
            <span class="color-circle-mini" style="background-color: ${outerColor.hex};"></span>
            <strong style="color: #fff;">${matchedGuide.outerName}</strong>
            <span style="font-size: 0.7rem; color: #38bdf8; font-weight: 700;">[외투]</span>
          </span>
          <span class="weather-color-pill" style="border-color: #a855f7;" title="추천 이너 컬러">
            <span class="color-circle-mini" style="background-color: ${innerColor.hex};"></span>
            <strong style="color: #fff;">${matchedGuide.innerName}</strong>
            <span style="font-size: 0.7rem; color: #c084fc; font-weight: 700;">[이너]</span>
          </span>
          <span class="weather-color-pill" style="border-color: #34d399;" title="추천 하의 컬러">
            <span class="color-circle-mini" style="background-color: ${bottomColor.hex};"></span>
            <strong style="color: #fff;">${matchedGuide.bottomName}</strong>
            <span style="font-size: 0.7rem; color: #34d399; font-weight: 700;">[하의]</span>
          </span>
        </div>
      `;
    } else {
      const topId = matchedGuide.topId || (matchedGuide.recommendedColors ? matchedGuide.recommendedColors[0].id : 'white');
      const bottomId = matchedGuide.bottomId || (matchedGuide.recommendedColors ? matchedGuide.recommendedColors[1].id : 'beige');
      const topColor = COLOR_MAP.get(topId) || { hex: '#9E9E9E', name: matchedGuide.topName || '상의' };
      const bottomColor = COLOR_MAP.get(bottomId) || { hex: '#383B3E', name: matchedGuide.bottomName || '하의' };

      pillsHtml += `
        <div style="width: 100%; display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
          <span class="weather-color-pill" style="border-color: #38bdf8;" title="추천 상의 컬러">
            <span class="color-circle-mini" style="background-color: ${topColor.hex};"></span>
            <strong style="color: #fff;">${matchedGuide.topName || topColor.name}</strong>
            <span style="font-size: 0.7rem; color: #38bdf8; font-weight: 700;">[상의]</span>
          </span>
          <span class="weather-color-pill" style="border-color: #34d399;" title="추천 하의 컬러">
            <span class="color-circle-mini" style="background-color: ${bottomColor.hex};"></span>
            <strong style="color: #fff;">${matchedGuide.bottomName || bottomColor.name}</strong>
            <span style="font-size: 0.7rem; color: #34d399; font-weight: 700;">[하의]</span>
          </span>
        </div>
      `;
    }

    if (matchedGuide.recommendedColors) {
      pillsHtml += matchedGuide.recommendedColors.map(c => `
        <span class="weather-color-pill" title="${c.name} (${c.hex}) - ${c.role}">
          <span class="color-circle-mini" style="background-color: ${c.hex};"></span>
          <strong style="color: #fff;">${c.name}</strong>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${c.role}</span>
        </span>
      `).join('');
    }

    DOM.weatherColorPillsContainer.innerHTML = pillsHtml;
  }

  // 마네킹 피팅 링크 연결 (외투+이너+하의 3벌 또는 상+하의 2벌)
  if (DOM.btnFitInStudio) {
    if (isLayeredActive) {
      DOM.btnFitInStudio.href = `./?topMode=layered&outer=${matchedGuide.outerId}&inner=${matchedGuide.innerId}&bottom=${matchedGuide.bottomId}`;
      DOM.btnFitInStudio.innerHTML = `
        <span>🧥👕👖</span>
        <span>${matchedGuide.outerName} + ${matchedGuide.innerName} + ${matchedGuide.bottomName} 마네킹에 피팅하기 &rarr;</span>
      `;
    } else {
      const topId = matchedGuide.topId || (matchedGuide.recommendedColors ? matchedGuide.recommendedColors[0].id : 'white');
      const bottomId = matchedGuide.bottomId || (matchedGuide.recommendedColors ? matchedGuide.recommendedColors[1].id : 'beige');
      const topName = matchedGuide.topName || '상의';
      const bottomName = matchedGuide.bottomName || '하의';
      DOM.btnFitInStudio.href = `./?topMode=single&top=${topId}&bottom=${bottomId}`;
      DOM.btnFitInStudio.innerHTML = `
        <span>👕👖</span>
        <span>${topName} + ${bottomName} 마네킹에 피팅하기 &rarr;</span>
      `;
    }
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

// 6. 의상 모드 토글 (외투 레이어드 vs 상의 1벌 심플)
function setupWeatherOutfitModeToggle() {
  const group = document.getElementById('weatherOutfitModeGroup');
  if (!group) return;

  const buttons = group.querySelectorAll('.btn-outfit-mode');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      userSelectedMode = true;
      const mode = btn.getAttribute('data-mode');
      if (weatherOutfitMode === mode) return;
      weatherOutfitMode = mode;
      localStorage.setItem('matchfit_outfit_mode', weatherOutfitMode);
      updateWeatherUI();
    });
  });
}

// Init
function init() {
  renderCityChips();
  setupWeatherOutfitModeToggle();
  setupGpsDetection();
  fetchWeather();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
