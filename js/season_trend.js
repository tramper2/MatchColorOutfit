/**
 * =========================================================================
 * 🍁 계절별 패션 트렌드 컬러 설정 (Season Trend Configuration)
 * =========================================================================
 * 
 * 💡 [코드 수정 가이드]:
 * 1. 계절이 바뀔 때 아래의 `ACTIVE_SEASON` 값을 'spring', 'summer', 'autumn', 'winter' 중 하나로 변경하세요.
 * 2. 또는 현재 시즌 블록(`autumn` 등) 내부의 문구, 추천 컬러(hex), 코디 세트를 직접 수정하시면
 *    웹사이트에 실시간으로 즉시 반영됩니다!
 * =========================================================================
 */

// 👉 현재 적용할 계절 선택: 'spring' | 'summer' | 'autumn' | 'winter'
export const ACTIVE_SEASON = 'autumn';

export const SEASON_CONFIGS = {
  // -----------------------------------------------------------------------
  // 🍂 가을 (Autumn) 설정 - [현재 적용 중]
  // -----------------------------------------------------------------------
  autumn: {
    seasonKey: 'autumn',
    badge: '🍂 2026 가을 시즌 트렌드',
    title: '올가을 패션 트렌드 컬러 제안',
    // 사용자가 요청한 가이드 문구
    guideText: '올가을 패션 트렌드 컬러는 세련된 그레이와 깊이감 있는 다크 브라운·카멜, 그리고 과감한 포인트 컬러인 퍼플과 레드',
    subText: '차분한 계절감 속에 깊이와 감각적인 포인트를 더하는 5가지 핵심 컬러를 마네킹에 직접 피팅해 보세요.',
    
    // 시즌 대표 추천 컬러 5종 (클릭 시 마네킹에 바로 착용)
    colors: [
      {
        id: 'melange_gray',
        name: '세련된 그레이',
        hex: '#9E9E9E',
        textColor: '#1E1E1E',
        tag: '모던 베이직',
        desc: '어떤 컬러와도 우아하게 융합되는 도시적 그레이'
      },
      {
        id: 'dark_brown',
        name: '다크 브라운',
        hex: '#4A3525',
        textColor: '#FFFFFF',
        tag: '깊이감 있는 무드',
        desc: '가을의 정취와 무게감을 실어주는 딥 브라운'
      },
      {
        id: 'camel',
        name: '카멜',
        hex: '#C19A6B',
        textColor: '#1E1E1E',
        tag: '클래식 웜톤',
        desc: '포근하고 럭셔리한 가을 분위기의 대명사'
      },
      {
        id: 'purple',
        name: '퍼플',
        hex: '#7B3F8D',
        textColor: '#FFFFFF',
        tag: '과감한 포인트',
        desc: '시크하고 신비로운 무드를 완성하는 악센트'
      },
      {
        id: 'red',
        name: '레드',
        hex: '#B32638',
        textColor: '#FFFFFF',
        tag: '강렬한 포인트',
        desc: '시선을 집중시키는 매혹적이고 에너지 넘치는 컬러'
      }
    ],

    // 시즌 베스트 원클릭 추천 코디 세트 (한 번 클릭으로 상·하의 동시 코디)
    quickStyles: [
      {
        name: '가을 클래식',
        topId: 'camel',
        topName: '카멜',
        bottomId: 'dark_brown',
        bottomName: '다크 브라운',
        vibe: '🍁 어텀 클래식 웜톤'
      },
      {
        name: '모던 포인트',
        topId: 'purple',
        topName: '퍼플',
        bottomId: 'melange_gray',
        bottomName: '세련된 그레이',
        vibe: '✨ 세련된 어반 시크'
      },
      {
        name: '강렬한 악센트',
        topId: 'red',
        topName: '레드',
        bottomId: 'melange_gray',
        bottomName: '세련된 그레이',
        vibe: '🔥 매혹적인 프렌치 무드'
      }
    ]
  },

  // -----------------------------------------------------------------------
  // ❄️ 겨울 (Winter) 설정 예시 (겨울이 되면 위 ACTIVE_SEASON을 'winter'로 변경)
  // -----------------------------------------------------------------------
  winter: {
    seasonKey: 'winter',
    badge: '❄️ 2026-2027 겨울 시즌 트렌드',
    title: '올겨울 패션 트렌드 컬러 제안',
    guideText: '올겨울 패션 트렌드는 차분하고 묵직한 차콜과 딥 네이비, 그리고 포근한 크림과 에메랄드 그린',
    subText: '추운 계절을 따뜻하고 고급스럽게 감싸주는 윈터 헤비 톤 팔레트입니다.',
    colors: [
      { id: 'charcoal', name: '차콜 그레이', hex: '#383B3E', textColor: '#FFFFFF', tag: '윈터 포멀', desc: '묵직하고 슬림해 보이는 겨울 기본 컬러' },
      { id: 'navy', name: '딥 네이비', hex: '#1B2A4A', textColor: '#FFFFFF', tag: '신뢰의 클래식', desc: '코트와 수트에 어울리는 정통 네이비' },
      { id: 'cream', name: '크림 아이보리', hex: '#F4F1EA', textColor: '#1E1E1E', tag: '포근한 온기', desc: '어두운 아우터 속에 빛나는 소프트 이너' },
      { id: 'burgundy', name: '딥 버건디', hex: '#6B1D2F', textColor: '#FFFFFF', tag: '홀리데이 포인트', desc: '연말 파티와 무드 있는 저녁을 위한 와인' },
      { id: 'forest_green', name: '포레스트 그린', hex: '#2E4A35', textColor: '#FFFFFF', tag: '노블 그린', desc: '차분한 자연을 닮은 럭셔리 딥 그린' }
    ],
    quickStyles: [
      { name: '윈터 미니멀', topId: 'cream', topName: '크림 아이보리', bottomId: 'charcoal', bottomName: '차콜 그레이', vibe: '❄️ 단정한 윈터 클래식' },
      { name: '홀리데이 무드', topId: 'burgundy', topName: '딥 버건디', bottomId: 'navy', bottomName: '딥 네이비', vibe: '🍷 고혹적인 연말 파티룩' }
    ]
  },

  // -----------------------------------------------------------------------
  // 🌸 봄 (Spring) 설정 예시
  // -----------------------------------------------------------------------
  spring: {
    seasonKey: 'spring',
    badge: '🌸 2027 봄 시즌 트렌드',
    title: '올봄 패션 트렌드 컬러 제안',
    guideText: '올봄 패션 트렌드는 설레는 버터 옐로우와 생기 넘치는 피치 코랄, 그리고 부드러운 세이지 민트',
    subText: '따스한 봄 햇살처럼 얼굴을 환하게 밝혀주는 화사한 파스텔 팔레트입니다.',
    colors: [
      { id: 'butter_yellow', name: '버터 옐로우', hex: '#F5E8A9', textColor: '#1E1E1E', tag: '화사한 생기', desc: '봄기운을 전하는 사랑스러운 파스텔' },
      { id: 'salmon_peach', name: '피치 코랄', hex: '#ECA48B', textColor: '#1E1E1E', tag: '러블리 웜톤', desc: '혈색을 살려주는 부드러운 과즙 컬러' },
      { id: 'sage_green', name: '세이지 민트', hex: '#9CAF88', textColor: '#1E1E1E', tag: '내추럴 힐링', desc: '초목의 싱그러움을 머금은 페일 그린' },
      { id: 'white', name: '퓨어 화이트', hex: '#FFFFFF', textColor: '#1E1E1E', tag: '올 시즌 베이스', desc: '모든 파스텔을 받쳐주는 만능 화이트' },
      { id: 'light_denim', name: '연청 데님', hex: '#8EAEC4', textColor: '#1E1E1E', tag: '경쾌한 캐주얼', desc: '봄나들이에 빠질 수 없는 청량감' }
    ],
    quickStyles: [
      { name: '스프링 데이트', topId: 'butter_yellow', topName: '버터 옐로우', bottomId: 'light_denim', bottomName: '연청 데님', vibe: '🌸 사랑스러운 인스타 룩' },
      { name: '내추럴 파스텔', topId: 'sage_green', topName: '세이지 민트', bottomId: 'white', bottomName: '화이트', vibe: '🌿 싱그러운 피크닉룩' }
    ]
  },

  // -----------------------------------------------------------------------
  // 🌊 여름 (Summer) 설정 예시
  // -----------------------------------------------------------------------
  summer: {
    seasonKey: 'summer',
    badge: '🌊 2027 여름 시즌 트렌드',
    title: '올여름 패션 트렌드 컬러 제안',
    guideText: '올여름 패션 트렌드는 시원한 스카이블루와 청량한 마린 네이비, 그리고 눈부신 화이트와 레몬',
    subText: '체감 온도를 낮추는 시원하고 깨끗한 쿨 앤 클린 서머 팔레트입니다.',
    colors: [
      { id: 'sky_blue', name: '스카이블루', hex: '#8FA9C4', textColor: '#1E1E1E', tag: '쿨 서머', desc: '맑은 여름 하늘을 담은 시원한 파스텔 블루' },
      { id: 'white', name: '클린 화이트', hex: '#FFFFFF', textColor: '#1E1E1E', tag: '서머 머스트해브', desc: '태양빛 아래 가장 시원한 기본 화이트' },
      { id: 'navy', name: '마린 네이비', hex: '#1B2A4A', textColor: '#FFFFFF', tag: '단정한 콘트라스트', desc: '흰 티에 어울리는 정통 마린룩' },
      { id: 'mint_green', name: '아이스 민트', hex: '#A2D5C6', textColor: '#1E1E1E', tag: '청량한 허브', desc: '시각적 시원함을 선사하는 민트' },
      { id: 'bleached_denim', name: '아이스 데님', hex: '#C5D8E8', textColor: '#1E1E1E', tag: '워싱 라이트진', desc: '여름철 불패의 밝은 워싱 데님' }
    ],
    quickStyles: [
      { name: '서머 마린룩', topId: 'white', topName: '화이트', bottomId: 'navy', bottomName: '네이비', vibe: '🌊 청량한 휴양지 감성' },
      { name: '아이스 블루 캐주얼', topId: 'sky_blue', topName: '스카이블루', bottomId: 'white', bottomName: '화이트', vibe: '❄️ 체감온도 -3도 룩' }
    ]
  }
};

// 현재 활성화된 시즌의 설정 객체를 반환하는 헬퍼
export function getCurrentSeasonConfig() {
  return SEASON_CONFIGS[ACTIVE_SEASON] || SEASON_CONFIGS.autumn;
}
