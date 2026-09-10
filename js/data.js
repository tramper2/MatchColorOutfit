/**
 * MatchFit Color - 패션 컬러 및 추천 배색 데이터셋
 * 탭별 45가지 전문 패션 컬러 룰셋
 */

export const COLOR_TABS = [
  { id: 'standard', name: '🌟 대표/표준 (15)', desc: '가장 대중적이고 실패 없는 15가지 핵심 베이직 컬러' },
  { id: 'warm', name: '🍂 웜톤 & 얼씨', desc: '자연에서 영감을 얻은 따뜻하고 부드러운 감성 컬러' },
  { id: 'cool', name: '❄️ 쿨톤 & 모던', desc: '도회적이고 지적인 분위기를 연출하는 세련된 쿨톤 컬러' },
  { id: 'pastel', name: '🎨 파스텔 & 포인트', desc: '화사한 생동감과 트렌디한 포인트를 주는 컬러' },
  { id: 'denim', name: '👖 데님 & 빈티지', desc: '캐주얼부터 스트릿 워크웨어까지 아우르는 데님/워싱 컬러' }
];

export const FASHION_COLORS = [
  // ==========================================
  // 1. 🌟 대표/표준 컬러 (Standard - 15종)
  // ==========================================
  {
    id: "white",
    name: "화이트",
    hex: "#FFFFFF",
    textColor: "#1E1E1E",
    tab: "standard",
    desc: "모든 색상의 베이스가 되는 만능 기본 컬러",
    recommendations: [
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "모노톤 클래식", tip: "호불호 없는 가장 깔끔하고 선명한 흑백 대비" },
      { id: "navy", name: "네이비", hex: "#1B2A4A", textColor: "#FFFFFF", vibe: "시원한 마린룩", tip: "단정하고 스마트한 인상을 주는 청량 배색" },
      { id: "beige", name: "베이지", hex: "#D7C9AA", textColor: "#1E1E1E", vibe: "소프트 내추럴", tip: "부드럽고 온화한 분위기의 꾸안꾸 데일리룩" },
      { id: "mid_denim", name: "중청 데님", hex: "#4A709C", textColor: "#FFFFFF", vibe: "캐주얼 정석", tip: "흰 티에 청바지, 영원한 불패의 조합" },
      { id: "olive_khaki", name: "올리브 카키", hex: "#556B2F", textColor: "#FFFFFF", vibe: "내추럴 워크웨어", tip: "도심과 야외 어디서나 감각적인 어반 무드" }
    ]
  },
  {
    id: "black",
    name: "블랙",
    hex: "#1E1E1E",
    textColor: "#FFFFFF",
    tab: "standard",
    desc: "시크함과 안정감을 주는 궁극의 모던 컬러",
    recommendations: [
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "선명한 흑백 대비", tip: "언제나 실패하지 않는 완벽한 흑백 모노톤" },
      { id: "melange_gray", name: "멜란지 그레이", hex: "#9E9E9E", textColor: "#1E1E1E", vibe: "모던 미니멀", tip: "차분하면서도 도시적인 톤 차이 레이어링" },
      { id: "beige", name: "베이지", hex: "#D7C9AA", textColor: "#1E1E1E", vibe: "시크 뉴트럴", tip: "따뜻한 베이지가 블랙의 무게감을 부드럽게 완화" },
      { id: "olive_khaki", name: "올리브 카키", hex: "#556B2F", textColor: "#FFFFFF", vibe: "어반 스트릿", tip: "트렌디한 고프코어 및 아메카지 스트릿 감성" },
      { id: "light_denim", name: "연청 데님", hex: "#8EAEC4", textColor: "#1E1E1E", vibe: "경쾌한 캐주얼", tip: "밝은 데님이 블랙의 묵직함에 산뜻한 포인트 부여" }
    ]
  },
  {
    id: "charcoal",
    name: "차콜 그레이",
    hex: "#383B3E",
    textColor: "#FFFFFF",
    tab: "standard",
    desc: "블랙보다 부드럽고 세련된 깊은 그레이",
    recommendations: [
      { id: "cream", name: "크림 아이보리", hex: "#F4F1EA", textColor: "#1E1E1E", vibe: "부드러운 포멀", tip: "단정하면서도 딱딱하지 않은 고급스러운 배색" },
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "단정한 오피스룩", tip: "신뢰감을 주는 비즈니스 캐주얼의 정석" },
      { id: "mid_denim", name: "중청 데님", hex: "#4A709C", textColor: "#FFFFFF", vibe: "스마트 캐주얼", tip: "차콜의 무게감과 데님의 위트가 만난 세련된 룩" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "딥 톤온톤", tip: "차분하고 슬림해 보이는 묵직한 다크 무드" }
    ]
  },
  {
    id: "melange_gray",
    name: "멜란지 그레이",
    hex: "#9E9E9E",
    textColor: "#1E1E1E",
    tab: "standard",
    desc: "편안하면서도 어떤 색상과도 조화로운 중간 회색",
    recommendations: [
      { id: "navy", name: "네이비", hex: "#1B2A4A", textColor: "#FFFFFF", vibe: "신뢰감 있는 클래식", tip: "그레이와 네이비의 조화는 남녀노소 사랑받는 불패 조합" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "깔끔한 스트릿 미니멀", tip: "슬랙스나 조거 팬츠와 함께 편안하고 시크하게" },
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "편안한 이지웨어", tip: "깨끗하고 가벼운 데일리 홈/원마일웨어 감성" },
      { id: "deep_denim", name: "생지 딥데님", hex: "#253342", textColor: "#FFFFFF", vibe: "정돈된 데일리", tip: "짙은 생지 데님이 그레이의 캐주얼함을 단정하게 정돈" }
    ]
  },
  {
    id: "navy",
    name: "네이비",
    hex: "#1B2A4A",
    textColor: "#FFFFFF",
    tab: "standard",
    desc: "신뢰감과 품격을 전하는 클래식 네이비",
    recommendations: [
      { id: "beige", name: "베이지", hex: "#D7C9AA", textColor: "#1E1E1E", vibe: "클래식 캐주얼 정석", tip: "네이비 상의 + 베이지 치노/슬랙스는 언제나 정답" },
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "청량한 대비", tip: "시원하고 깨끗한 리조트 & 시티 캐주얼" },
      { id: "melange_gray", name: "멜란지 그레이", hex: "#9E9E9E", textColor: "#1E1E1E", vibe: "단정한 출근룩", tip: "지적이면서도 부드러운 오피스 코디의 핵심" },
      { id: "olive_khaki", name: "올리브 카키", hex: "#556B2F", textColor: "#FFFFFF", vibe: "아메카지 무드", tip: "네이비와 카키가 주는 감각적인 빈티지 워크웨어 무드" },
      { id: "cream", name: "크림 아이보리", hex: "#F4F1EA", textColor: "#1E1E1E", vibe: "소프트 클래식", tip: "순백색보다 더 부드럽고 따뜻한 감성의 대비" }
    ]
  },
  {
    id: "sky_blue",
    name: "스카이블루",
    hex: "#8FA9C4",
    textColor: "#1E1E1E",
    tab: "standard",
    desc: "청량하고 산뜻한 파스텔 하늘빛",
    recommendations: [
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "맑고 깨끗한 톤", tip: "초여름과 봄날에 어울리는 청량 비주얼" },
      { id: "navy", name: "네이비", hex: "#1B2A4A", textColor: "#FFFFFF", vibe: "감각적인 블루 톤온톤", tip: "같은 블루 계열의 명도 차이로 세련된 감각 연출" },
      { id: "beige", name: "베이지", hex: "#D7C9AA", textColor: "#1E1E1E", vibe: "산뜻한 댄디룩", tip: "스카이 셔츠에 베이지 팬츠는 훈훈한 댄디룩의 정석" },
      { id: "charcoal", name: "차콜 그레이", hex: "#383B3E", textColor: "#FFFFFF", vibe: "지적인 비즈니스", tip: "차콜의 차분함이 스카이블루의 화사함을 고급스럽게 정돈" }
    ]
  },
  {
    id: "cream",
    name: "크림 아이보리",
    hex: "#F4F1EA",
    textColor: "#1E1E1E",
    tab: "standard",
    desc: "순백색보다 포근하고 감성적인 아이보리",
    recommendations: [
      { id: "brown", name: "모카 브라운", hex: "#5C4033", textColor: "#FFFFFF", vibe: "따뜻한 웜 톤온톤", tip: "카페 라떼처럼 부드럽고 무드 있는 감성 코디" },
      { id: "olive_khaki", name: "올리브 카키", hex: "#556B2F", textColor: "#FFFFFF", vibe: "자연스러운 얼씨룩", tip: "자연에서 영감을 얻은 내추럴 힐링 무드" },
      { id: "navy", name: "네이비", hex: "#1B2A4A", textColor: "#FFFFFF", vibe: "단정한 콘트라스트", tip: "선명하면서도 포근한 스마트 캐주얼" },
      { id: "mid_denim", name: "중청 데님", hex: "#4A709C", textColor: "#FFFFFF", vibe: "화사한 일상룩", tip: "밝고 경쾌한 무드로 어디에나 어울리는 데일리룩" }
    ]
  },
  {
    id: "beige",
    name: "베이지",
    hex: "#D7C9AA",
    textColor: "#1E1E1E",
    tab: "standard",
    desc: "내추럴하면서도 우아한 감성의 샌드 베이지",
    recommendations: [
      { id: "navy", name: "네이비", hex: "#1B2A4A", textColor: "#FFFFFF", vibe: "실패 없는 베스트 조합", tip: "전 세계 스타일리스트가 가장 추천하는 1등 배색" },
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "온화한 미니멀", tip: "화사하고 깨끗한 인상을 남기는 라이트 톤 조합" },
      { id: "brown", name: "모카 브라운", hex: "#5C4033", textColor: "#FFFFFF", vibe: "깊이감 있는 톤온톤", tip: "가을/겨울 감성을 극대화하는 깊은 웜 브라운 레이어링" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "단정하고 세련된 무드", tip: "베이지의 부드러움과 블랙의 엣지가 어우러진 시크 룩" }
    ]
  },
  {
    id: "brown",
    name: "모카 브라운",
    hex: "#5C4033",
    textColor: "#FFFFFF",
    tab: "standard",
    desc: "그윽하고 묵직한 가을/겨울 대표 웜톤 컬러",
    recommendations: [
      { id: "cream", name: "크림 아이보리", hex: "#F4F1EA", textColor: "#1E1E1E", vibe: "고급스러운 라떼룩", tip: "고급스러운 커피 크림을 연상시키는 우아한 배색" },
      { id: "beige", name: "베이지", hex: "#D7C9AA", textColor: "#1E1E1E", vibe: "클래식 톤온톤", tip: "자연스러운 명도 차이로 안정감을 주는 완성도 높은 룩" },
      { id: "sky_blue", name: "스카이블루", hex: "#8FA9C4", textColor: "#1E1E1E", vibe: "감각적인 컬러 믹스", tip: "따뜻한 브라운과 차가운 스카이블루의 매력적인 보색 대비" },
      { id: "mid_denim", name: "중청 데님", hex: "#4A709C", textColor: "#FFFFFF", vibe: "빈티지 캐주얼", tip: "웨스턴 감성과 레트로 캐주얼의 멋스러운 믹스" }
    ]
  },
  {
    id: "olive_khaki",
    name: "올리브 카키",
    hex: "#556B2F",
    textColor: "#FFFFFF",
    tab: "standard",
    desc: "남성/여성 모두에게 사랑받는 도회적 카키",
    recommendations: [
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "깔끔한 워크웨어", tip: "카키의 묵직함을 흰색이 화사하고 단정하게 잡아줍니다." },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "시크한 밀리터리 믹스", tip: "카고 팬츠나 야상, 블랙 탑과 함께하는 힙한 스트릿" },
      { id: "beige", name: "베이지", hex: "#D7C9AA", textColor: "#1E1E1E", vibe: "아웃도어/어반 얼씨룩", tip: "캠핑룩이나 시티보이 스타일에 제격인 흙과 숲의 색채" },
      { id: "navy", name: "네이비", hex: "#1B2A4A", textColor: "#FFFFFF", vibe: "단정한 컬러 블록", tip: "트래디셔널 프레피와 아메카지의 절묘한 접점" }
    ]
  },
  {
    id: "sage_green",
    name: "세이지 민트",
    hex: "#9CAF88",
    textColor: "#1E1E1E",
    tab: "standard",
    desc: "싱그럽고 차분하게 톤 다운된 힐링 그린",
    recommendations: [
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "청량한 페일톤", tip: "화사하면서도 눈이 편안한 감성 파스텔 룩" },
      { id: "cream", name: "크림 아이보리", hex: "#F4F1EA", textColor: "#1E1E1E", vibe: "부드럽고 싱그러운 룩", tip: "따뜻한 크림과 은은한 세이지의 조화로운 내추럴" },
      { id: "charcoal", name: "차콜 그레이", hex: "#383B3E", textColor: "#FFFFFF", vibe: "차분한 포인트룩", tip: "어두운 하의에 은은한 컬러 포인트를 더하는 센스" },
      { id: "light_denim", name: "연청 데님", hex: "#8EAEC4", textColor: "#1E1E1E", vibe: "산뜻한 캐주얼", tip: "주말 나들이와 봄 피크닉에 어울리는 생기 넘치는 조합" }
    ]
  },
  {
    id: "burgundy",
    name: "버건디/와인",
    hex: "#6B1D2F",
    textColor: "#FFFFFF",
    tab: "standard",
    desc: "고혹적이고 분위기 있는 딥 레드 포인트",
    recommendations: [
      { id: "charcoal", name: "차콜 그레이", hex: "#383B3E", textColor: "#FFFFFF", vibe: "고혹적이고 우아한 배색", tip: "차콜의 차가운 톤이 버건디의 붉은기를 세련되게 중화" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "강렬한 시크룩", tip: "선명하고 엣지 있는 드레시 & 시크 코디" },
      { id: "beige", name: "베이지", hex: "#D7C9AA", textColor: "#1E1E1E", vibe: "따뜻한 가을 무드", tip: "트렌치 코트나 니트에 어울리는 깊이 있는 가을 감성" },
      { id: "cream", name: "크림 아이보리", hex: "#F4F1EA", textColor: "#1E1E1E", vibe: "부드러운 포인트", tip: "선명한 버건디를 화사하고 우아하게 감싸주는 조합" }
    ]
  },
  {
    id: "light_denim",
    name: "연청 데님",
    hex: "#8EAEC4",
    textColor: "#1E1E1E",
    tab: "standard",
    desc: "청량하고 밝은 워싱 라이트 블루 데님",
    recommendations: [
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "가장 청량한 서머 캐주얼", tip: "흰 셔츠나 기본 반팔티에 가장 시원하게 어울리는 정석" },
      { id: "melange_gray", name: "멜란지 그레이", hex: "#9E9E9E", textColor: "#1E1E1E", vibe: "편안한 스트릿", tip: "그레이 맨투맨/후드티와 연청 팬츠의 실패 없는 데일리" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "선명한 콘트라스트", tip: "상체는 슬림하게, 하체는 경쾌하게 대비감 형성" },
      { id: "brown", name: "모카 브라운", hex: "#5C4033", textColor: "#FFFFFF", vibe: "트렌디한 빈티지", tip: "가죽 자켓이나 브라운 니트와 연청의 감성적인 레트로" }
    ]
  },
  {
    id: "mid_denim",
    name: "중청 데님",
    hex: "#4A709C",
    textColor: "#FFFFFF",
    tab: "standard",
    desc: "사계절 내내 사랑받는 기본 인디고 미드 블루",
    recommendations: [
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "불패의 데일리룩", tip: "남녀 누구나 가장 단정하고 깨끗해 보이는 기본 코디" },
      { id: "cream", name: "크림 아이보리", hex: "#F4F1EA", textColor: "#1E1E1E", vibe: "부드러운 캐주얼", tip: "크림색 상의와 중청 바지의 편안하고 친근한 데이트룩" },
      { id: "brown", name: "모카 브라운", hex: "#5C4033", textColor: "#FFFFFF", vibe: "아메리칸 빈티지", tip: "자연스러운 가죽 부츠나 브라운 상의와의 멋스러운 케미" },
      { id: "melange_gray", name: "멜란지 그레이", hex: "#9E9E9E", textColor: "#1E1E1E", vibe: "스포티 시크", tip: "가장 편안하고 실용적인 일상 활동복 룩" }
    ]
  },
  {
    id: "deep_denim",
    name: "생지 딥데님",
    hex: "#253342",
    textColor: "#FFFFFF",
    tab: "standard",
    desc: "워싱 없이 깊고 진한 로우 인디고 네이비",
    recommendations: [
      { id: "melange_gray", name: "멜란지 그레이", hex: "#9E9E9E", textColor: "#1E1E1E", vibe: "단정한 캐주얼", tip: "생지 데님의 각 잡힌 느낌을 그레이가 부드럽게 완화" },
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "깔끔한 프레피룩", tip: "옥스포드 셔츠와 생지 데님의 클래식하고 스마트한 조화" },
      { id: "olive_khaki", name: "올리브 카키", hex: "#556B2F", textColor: "#FFFFFF", vibe: "워크웨어 무드", tip: "헤비 듀티 워크 자켓과 생지 진의 멋진 남성미/빈티지" },
      { id: "beige", name: "베이지", hex: "#D7C9AA", textColor: "#1E1E1E", vibe: "차분한 댄디룩", tip: "베이지 트렌치 코트나 니트와 완벽한 합을 자랑하는 코디" }
    ]
  },

  // ==========================================
  // 2. 🍂 웜톤 & 얼씨 (Warm & Earthy - 8종)
  // ==========================================
  {
    id: "camel",
    name: "카멜 베이지",
    hex: "#C19A6B",
    textColor: "#1E1E1E",
    tab: "warm",
    desc: "고급스럽고 포근한 클래식 럭셔리 톤",
    recommendations: [
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "시크 럭셔리", tip: "카멜의 부드러움을 블랙이 세련되고 또렷하게 잡아주는 정석" },
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "우아한 리조트", tip: "카멜 코트나 상의에 화이트 팬츠는 우아하고 세련된 인상" },
      { id: "navy", name: "네이비", hex: "#1B2A4A", textColor: "#FFFFFF", vibe: "스마트 클래식", tip: "클래식 수트와 코트에서 가장 사랑받는 보색 조화" },
      { id: "mid_denim", name: "중청 데님", hex: "#4A709C", textColor: "#FFFFFF", vibe: "캐주얼 시크", tip: "카멜 니트와 중청 데님의 편안하면서도 센스 있는 데일리룩" }
    ]
  },
  {
    id: "oatmeal",
    name: "오트밀",
    hex: "#E5DFC8",
    textColor: "#1E1E1E",
    tab: "warm",
    desc: "은은한 곡물빛이 도는 포근한 멜란지 내추럴",
    recommendations: [
      { id: "brown", name: "모카 브라운", hex: "#5C4033", textColor: "#FFFFFF", vibe: "온화한 톤온톤", tip: "자연스러운 음영 차이로 부드러운 인상을 주는 웜 코디" },
      { id: "olive_khaki", name: "올리브 카키", hex: "#556B2F", textColor: "#FFFFFF", vibe: "내추럴 얼씨", tip: "숲과 나무를 닮은 편안하고 힐링되는 색감" },
      { id: "charcoal", name: "차콜 그레이", hex: "#383B3E", textColor: "#FFFFFF", vibe: "단정한 모던", tip: "어두운 하의가 오트밀 상의의 포근함을 돋보이게 함" },
      { id: "deep_denim", name: "생지 딥데님", hex: "#253342", textColor: "#FFFFFF", vibe: "정돈된 데일리", tip: "깔끔한 생지 진과 오트밀 니트의 불패 조합" }
    ]
  },
  {
    id: "terracotta",
    name: "테라코타/브릭",
    hex: "#B85B3F",
    textColor: "#FFFFFF",
    tab: "warm",
    desc: "붉은 벽돌과 점토를 닮은 감각적인 웜 포인트",
    recommendations: [
      { id: "beige", name: "베이지", hex: "#D7C9AA", textColor: "#1E1E1E", vibe: "따스한 가을 무드", tip: "베이지가 브릭 컬러의 강렬함을 감미롭게 중화" },
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "선명한 포인트", tip: "깨끗한 화이트 배경에 빛나는 독보적 컬러감" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "다크 에스닉", tip: "블랙 팬츠와 함께 힙하고 엣지 있는 실루엣" },
      { id: "mid_denim", name: "중청 데님", hex: "#4A709C", textColor: "#FFFFFF", vibe: "웨스턴 캐주얼", tip: "빈티지한 아메리칸 캐주얼 감성 물씬" }
    ]
  },
  {
    id: "mustard",
    name: "머스타드 옐로우",
    hex: "#D4A017",
    textColor: "#1E1E1E",
    tab: "warm",
    desc: "톤 다운된 깊이 있는 빈티지 옐로우",
    recommendations: [
      { id: "navy", name: "네이비", hex: "#1B2A4A", textColor: "#FFFFFF", vibe: "감각적인 보색 대비", tip: "패션 피플들이 가장 사랑하는 위트 있는 컬러 블록" },
      { id: "charcoal", name: "차콜 그레이", hex: "#383B3E", textColor: "#FFFFFF", vibe: "지적인 위트", tip: "차분한 차콜에 생기를 불어넣는 포인트" },
      { id: "brown", name: "모카 브라운", hex: "#5C4033", textColor: "#FFFFFF", vibe: "가을 클래식", tip: "낙엽을 연상시키는 풍성하고 그윽한 가을 감성" },
      { id: "deep_denim", name: "생지 딥데님", hex: "#253342", textColor: "#FFFFFF", vibe: "아메카지 스트릿", tip: "묵직한 짙은 진과 조화로운 밸런스" }
    ]
  },
  {
    id: "forest_green",
    name: "딥 포레스트 그린",
    hex: "#2E4A35",
    textColor: "#FFFFFF",
    tab: "warm",
    desc: "깊은 숲속의 고요함을 담은 묵직한 딥 그린",
    recommendations: [
      { id: "cream", name: "크림 아이보리", hex: "#F4F1EA", textColor: "#1E1E1E", vibe: "우아한 내추럴", tip: "다크 그린의 중후함을 화사하고 부드럽게 밝혀줌" },
      { id: "beige", name: "베이지", hex: "#D7C9AA", textColor: "#1E1E1E", vibe: "영국 신사 프레피", tip: "정통 클래식 브리티시 스타일링의 핵심" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "시크 다크", tip: "어둡지만 평범하지 않은 세련된 딥 톤온톤" },
      { id: "melange_gray", name: "멜란지 그레이", hex: "#9E9E9E", textColor: "#1E1E1E", vibe: "이지 캐주얼", tip: "편안하면서도 단정한 일상 코디" }
    ]
  },
  {
    id: "rust_brown",
    name: "러스트 브라운",
    hex: "#88422A",
    textColor: "#FFFFFF",
    tab: "warm",
    desc: "붉은 녹빛이 감도는 레트로 가죽 감성 브라운",
    recommendations: [
      { id: "oatmeal", name: "오트밀", hex: "#E5DFC8", textColor: "#1E1E1E", vibe: "감성 톤온톤", tip: "부드러운 오트밀과 빈티지한 러스트의 완벽 케미" },
      { id: "navy", name: "네이비", hex: "#1B2A4A", textColor: "#FFFFFF", vibe: "아이비리그 클래식", tip: "전통 프레피룩에서 즐겨 쓰는 고급스러운 색채" },
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "선명한 무드", tip: "깨끗한 흰 바지에 멋스러운 가죽 재킷/니트" },
      { id: "light_denim", name: "연청 데님", hex: "#8EAEC4", textColor: "#1E1E1E", vibe: "레트로 웨스턴", tip: "빛바랜 청록빛과 러스트의 멋진 빈티지 믹스" }
    ]
  },
  {
    id: "salmon_peach",
    name: "살몬 피치",
    hex: "#ECA48B",
    textColor: "#1E1E1E",
    tab: "warm",
    desc: "얼굴빛을 화사하게 밝혀주는 연어빛 복숭아 톤",
    recommendations: [
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "싱그러운 봄날", tip: "화사함이 두 배가 되는 가장 깨끗한 배색" },
      { id: "beige", name: "베이지", hex: "#D7C9AA", textColor: "#1E1E1E", vibe: "소프트 웜톤", tip: "피부톤과 자연스럽게 어우러지는 부드러운 매치" },
      { id: "charcoal", name: "차콜 그레이", hex: "#383B3E", textColor: "#FFFFFF", vibe: "세련된 반전 매력", tip: "차콜의 차분함이 화사한 살몬을 고급스럽게 정돈" },
      { id: "light_denim", name: "연청 데님", hex: "#8EAEC4", textColor: "#1E1E1E", vibe: "경쾌한 데이트룩", tip: "주말 외출에 사랑스러운 느낌을 주는 조합" }
    ]
  },
  {
    id: "khaki_brown",
    name: "카키 브라운",
    hex: "#7E6A51",
    textColor: "#FFFFFF",
    tab: "warm",
    desc: "카키와 브라운이 오묘하게 블렌딩된 시티 얼씨",
    recommendations: [
      { id: "cream", name: "크림 아이보리", hex: "#F4F1EA", textColor: "#1E1E1E", vibe: "포근한 무드", tip: "오묘한 흙빛을 포근하게 받쳐주는 화사한 크림" },
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "정돈된 워크웨어", tip: "깔끔하고 세련된 도시형 워크웨어" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "도회적 시크", tip: "무게감과 트렌디함을 동시에 챙기는 룩" },
      { id: "sky_blue", name: "스카이블루", hex: "#8FA9C4", textColor: "#1E1E1E", vibe: "감각적 컬러 믹스", tip: "차가운 하늘색과 따뜻한 카키 브라운의 조화" }
    ]
  },

  // ==========================================
  // 3. ❄️ 쿨톤 & 모던 (Cool & Modern - 8종)
  // ==========================================
  {
    id: "ash_gray",
    name: "애쉬 그레이",
    hex: "#B0B7BC",
    textColor: "#1E1E1E",
    tab: "cool",
    desc: "은빛 광택이 스며든 세련된 쿨 그레이",
    recommendations: [
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "차도남/차도녀 시크", tip: "도시적인 세련미가 극대화되는 모던 흑백" },
      { id: "navy", name: "네이비", hex: "#1B2A4A", textColor: "#FFFFFF", vibe: "지적인 비즈니스", tip: "깔끔하고 스마트한 출근룩의 정석" },
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "미니멀 퓨어", tip: "군더더기 없는 미니멀리즘 감성" },
      { id: "deep_plum", name: "딥 플럼", hex: "#4A2538", textColor: "#FFFFFF", vibe: "우아한 포인트", tip: "쿨톤만이 소화할 수 있는 고급스러운 와인빛 매치" }
    ]
  },
  {
    id: "midnight_blue",
    name: "미드나잇 블루",
    hex: "#141D2B",
    textColor: "#FFFFFF",
    tab: "cool",
    desc: "자정이 넘은 밤하늘처럼 짙고 신비로운 다크 블루",
    recommendations: [
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "극명한 콘트라스트", tip: "눈에 확 띄는 단정하고 선명한 비주얼" },
      { id: "melange_gray", name: "멜란지 그레이", hex: "#9E9E9E", textColor: "#1E1E1E", vibe: "클래식 밸런스", tip: "차분하면서도 신뢰감을 주는 출근/면접룩" },
      { id: "sky_blue", name: "스카이블루", hex: "#8FA9C4", textColor: "#1E1E1E", vibe: "쿨 블루 톤온톤", tip: "블루의 깊이감을 감각적으로 살린 배색" },
      { id: "beige", name: "베이지", hex: "#D7C9AA", textColor: "#1E1E1E", vibe: "고급스러운 댄디", tip: "네이비보다 한층 더 묵직하고 정중한 느낌" }
    ]
  },
  {
    id: "slate_blue",
    name: "슬레이트 블루",
    hex: "#5A6F87",
    textColor: "#FFFFFF",
    tab: "cool",
    desc: "그레이와 블루가 섞인 안개 낀 바다빛",
    recommendations: [
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "청량한 오피스", tip: "지적이면서도 답답하지 않은 세련된 셔츠 룩" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "모던 시티", tip: "블랙 슬랙스와 완벽하게 어우러지는 감각" },
      { id: "cream", name: "크림 아이보리", hex: "#F4F1EA", textColor: "#1E1E1E", vibe: "소프트 쿨톤", tip: "차가운 슬레이트에 포근함을 더하는 센스" },
      { id: "charcoal", name: "차콜 그레이", hex: "#383B3E", textColor: "#FFFFFF", vibe: "톤온톤 수트 무드", tip: "비즈니스 캐주얼에 최적화된 안정감" }
    ]
  },
  {
    id: "soft_lavender",
    name: "소프트 라벤더",
    hex: "#B8B2CE",
    textColor: "#1E1E1E",
    tab: "cool",
    desc: "보랏빛 감성이 은은하게 감도는 몽환적인 쿨 파스텔",
    recommendations: [
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "청순한 파스텔", tip: "라벤더의 맑은 색채가 가장 깨끗하게 돋보임" },
      { id: "charcoal", name: "차콜 그레이", hex: "#383B3E", textColor: "#FFFFFF", vibe: "감각적 대비", tip: "차콜이 은은한 보라를 세련되게 받쳐줍니다." },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "시크 페미닌", tip: "부드러움과 카리스마가 공존하는 룩" },
      { id: "light_denim", name: "연청 데님", hex: "#8EAEC4", textColor: "#1E1E1E", vibe: "산뜻한 캐주얼", tip: "봄여름 나들이에 기분 좋은 생기 부여" }
    ]
  },
  {
    id: "steel_blue",
    name: "스틸 블루",
    hex: "#4682B4",
    textColor: "#FFFFFF",
    tab: "cool",
    desc: "강철처럼 명료하고 단단한 시티 쿨 블루",
    recommendations: [
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "쾌청한 시티룩", tip: "흰 바지나 흰 이너와 가장 청량하게 호흡" },
      { id: "beige", name: "베이지", hex: "#D7C9AA", textColor: "#1E1E1E", vibe: "단정한 댄디", tip: "지적인 남성/여성미를 부각하는 스타일" },
      { id: "melange_gray", name: "멜란지 그레이", hex: "#9E9E9E", textColor: "#1E1E1E", vibe: "이지 쿨 캐주얼", tip: "출퇴근과 일상 모두 커버하는 만능 매칭" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "엣지 있는 실루엣", tip: "스마트한 인상을 남기는 룩" }
    ]
  },
  {
    id: "deep_plum",
    name: "딥 플럼",
    hex: "#4A2538",
    textColor: "#FFFFFF",
    tab: "cool",
    desc: "자두빛이 깊게 내려앉은 농익은 쿨 와인",
    recommendations: [
      { id: "melange_gray", name: "멜란지 그레이", hex: "#9E9E9E", textColor: "#1E1E1E", vibe: "귀족적인 클래식", tip: "그레이가 플럼의 고혹미를 차분하게 승화" },
      { id: "charcoal", name: "차콜 그레이", hex: "#383B3E", textColor: "#FFFFFF", vibe: "다크 포멀", tip: "흔하지 않은 특별한 자리에 어울리는 무드" },
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "강렬한 드레스업", tip: "플럼의 색채가 한눈에 들어오는 매력적인 조합" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "시크 고딕", tip: "도도하고 카리스마 넘치는 겨울 스타일" }
    ]
  },
  {
    id: "ice_gray",
    name: "아이스 그레이",
    hex: "#D6DBDF",
    textColor: "#1E1E1E",
    tab: "cool",
    desc: "얼음처럼 차갑고 맑은 페일 쿨 그레이",
    recommendations: [
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "완벽한 모노크롬", tip: "흑백 대비보다 한층 부드럽고 지적인 룩" },
      { id: "navy", name: "네이비", hex: "#1B2A4A", textColor: "#FFFFFF", vibe: "신뢰의 아이콘", tip: "누구에게나 호감을 사는 단정한 조합" },
      { id: "slate_blue", name: "슬레이트 블루", hex: "#5A6F87", textColor: "#FFFFFF", vibe: "쿨 톤온톤", tip: "차가운 계열끼리의 정교한 명도 플레이" },
      { id: "charcoal", name: "차콜 그레이", hex: "#383B3E", textColor: "#FFFFFF", vibe: "그레이 레이어드", tip: "모던 건축물 같은 정돈된 스타일링" }
    ]
  },
  {
    id: "dusty_blue",
    name: "더스티 블루",
    hex: "#6C8299",
    textColor: "#FFFFFF",
    tab: "cool",
    desc: "먼지가 뽀얗게 내려앉은 듯 분위기 있는 빈티지 블루",
    recommendations: [
      { id: "cream", name: "크림 아이보리", hex: "#F4F1EA", textColor: "#1E1E1E", vibe: "감성 쿨캐주얼", tip: "차분한 톤에 따뜻한 온기를 불어넣는 배색" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "모던 스트릿", tip: "블랙 하의와 함께 정갈한 데일리 완성" },
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "상쾌한 클린룩", tip: "답답함 없이 시원하고 깨끗한 연출" },
      { id: "brown", name: "모카 브라운", hex: "#5C4033", textColor: "#FFFFFF", vibe: "감각적 보색 매치", tip: "블루와 브라운의 절묘한 스타일링 센스" }
    ]
  },

  // ==========================================
  // 4. 🎨 파스텔 & 포인트 (Pastel & Pop - 8종)
  // ==========================================
  {
    id: "butter_yellow",
    name: "버터 옐로우",
    hex: "#F5E8A9",
    textColor: "#1E1E1E",
    tab: "pastel",
    desc: "부드럽게 녹아내린 버터처럼 사랑스러운 파스텔",
    recommendations: [
      { id: "light_denim", name: "연청 데님", hex: "#8EAEC4", textColor: "#1E1E1E", vibe: "가장 사랑스러운 봄날", tip: "버터 니트 + 연청 바지는 SNS 인기 1등 조합" },
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "화사한 크림버터", tip: "부드럽고 맑은 인상을 주는 밝은 톤 조합" },
      { id: "melange_gray", name: "멜란지 그레이", hex: "#9E9E9E", textColor: "#1E1E1E", vibe: "캐주얼 위트", tip: "그레이 트레이닝/슬랙스와 귀여운 포인트" },
      { id: "navy", name: "네이비", hex: "#1B2A4A", textColor: "#FFFFFF", vibe: "단정한 틴에이저", tip: "네이비 플리츠 스커트나 치노와 완벽한 조화" }
    ]
  },
  {
    id: "indie_pink",
    name: "인디 핑크",
    hex: "#E4B5B9",
    textColor: "#1E1E1E",
    tab: "pastel",
    desc: "부담스럽지 않게 톤 다운된 감성 로즈 핑크",
    recommendations: [
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "화사한 로맨틱", tip: "핑크의 사랑스러움을 깨끗하게 살려주는 조합" },
      { id: "melange_gray", name: "멜란지 그레이", hex: "#9E9E9E", textColor: "#1E1E1E", vibe: "세련된 톤 조화", tip: "남녀 모두 부담 없이 입기 좋은 핑크 정석" },
      { id: "charcoal", name: "차콜 그레이", hex: "#383B3E", textColor: "#FFFFFF", vibe: "차분한 핑크 포인트", tip: "달콤함과 시크함이 공존하는 고급스러운 룩" },
      { id: "mid_denim", name: "중청 데님", hex: "#4A709C", textColor: "#FFFFFF", vibe: "캐주얼 데이트", tip: "자연스러운 데일리 데이트룩의 정석" }
    ]
  },
  {
    id: "mint_green",
    name: "민트 그린",
    hex: "#A2D5C6",
    textColor: "#1E1E1E",
    tab: "pastel",
    desc: "청량한 허브 티 한 잔처럼 기분 좋아지는 싱그러움",
    recommendations: [
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "극강의 청량감", tip: "여름철 가장 시원해 보이는 무결점 배색" },
      { id: "cream", name: "크림 아이보리", hex: "#F4F1EA", textColor: "#1E1E1E", vibe: "포근한 생기", tip: "부드럽고 밝은 이미지를 주는 컬러 매치" },
      { id: "light_denim", name: "연청 데님", hex: "#8EAEC4", textColor: "#1E1E1E", vibe: "청순 캐주얼", tip: "밝고 명랑한 주말 일상룩" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "선명한 포인트룩", tip: "하체가 슬림해 보이는 엣지 있는 대비" }
    ]
  },
  {
    id: "soft_coral",
    name: "소프트 코랄",
    hex: "#F48B77",
    textColor: "#FFFFFF",
    tab: "pastel",
    desc: "석양빛을 머금은 산뜻하고 생기 넘치는 산호색",
    recommendations: [
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "화사한 바캉스", tip: "얼굴에 조명을 켠 듯 생기를 주는 베스트 매치" },
      { id: "beige", name: "베이지", hex: "#D7C9AA", textColor: "#1E1E1E", vibe: "따스한 햇살룩", tip: "부드러운 베이지와 조화로운 온화함" },
      { id: "navy", name: "네이비", hex: "#1B2A4A", textColor: "#FFFFFF", vibe: "생동감 있는 비즈니스", tip: "네이비 자켓 이너로 코랄을 입었을 때의 멋스러움" },
      { id: "light_denim", name: "연청 데님", hex: "#8EAEC4", textColor: "#1E1E1E", vibe: "발랄한 데일리", tip: "생동감 넘치는 주말 캐주얼" }
    ]
  },
  {
    id: "dusty_rose",
    name: "더스티 로즈",
    hex: "#BC7F8A",
    textColor: "#FFFFFF",
    tab: "pastel",
    desc: "말린 장미 꽃잎처럼 우아하고 성숙한 로즈",
    recommendations: [
      { id: "cream", name: "크림 아이보리", hex: "#F4F1EA", textColor: "#1E1E1E", vibe: "부드러운 페미닌", tip: "고급스러운 카페 데이트룩의 정석" },
      { id: "charcoal", name: "차콜 그레이", hex: "#383B3E", textColor: "#FFFFFF", vibe: "우아한 오피스", tip: "출근룩에도 단아하게 어울리는 색채" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "드레시 시크", tip: "분위기 있는 저녁 모임에 제격인 룩" },
      { id: "oatmeal", name: "오트밀", hex: "#E5DFC8", textColor: "#1E1E1E", vibe: "내추럴 감성", tip: "톤다운된 두 컬러가 주는 편안한 미학" }
    ]
  },
  {
    id: "cobalt_blue",
    name: "코발트 블루",
    hex: "#1E40AF",
    textColor: "#FFFFFF",
    tab: "pastel",
    desc: "시선을 사로잡는 강렬하고 선명한 로열 블루 포인트",
    recommendations: [
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "지중해 산토리니", tip: "선명한 블루와 화이트의 가장 강렬한 청량감" },
      { id: "melange_gray", name: "멜란지 그레이", hex: "#9E9E9E", textColor: "#1E1E1E", vibe: "스포티 시크", tip: "그레이 팬츠와 함께 트렌디한 스트릿 연출" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "카리스마 포인트", tip: "절제된 블랙 위에 돋보이는 원포인트 룩" },
      { id: "cream", name: "크림 아이보리", hex: "#F4F1EA", textColor: "#1E1E1E", vibe: "세련된 콘트라스트", tip: "순백색보다 더 고급스러운 블루 강조" }
    ]
  },
  {
    id: "light_lemon",
    name: "라이트 레몬",
    hex: "#FBF3A6",
    textColor: "#1E1E1E",
    tab: "pastel",
    desc: "은은하고 연한 레몬 셔벗처럼 맑고 깨끗한 빛",
    recommendations: [
      { id: "mid_denim", name: "중청 데님", hex: "#4A709C", textColor: "#FFFFFF", vibe: "발랄한 데일리", tip: "누구나 호감 갖는 밝고 단정한 캐주얼" },
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "눈부신 썸머룩", tip: "가장 순수하고 화사한 여름 컬러링" },
      { id: "beige", name: "베이지", hex: "#D7C9AA", textColor: "#1E1E1E", vibe: "소프트 웜톤", tip: "부드러운 온기를 채워주는 조화" },
      { id: "slate_blue", name: "슬레이트 블루", hex: "#5A6F87", textColor: "#FFFFFF", vibe: "감각적인 대비", tip: "차분한 블루가 레몬의 귀여움을 세련되게 변신" }
    ]
  },
  {
    id: "lilac_purple",
    name: "라일락 퍼플",
    hex: "#A78BFA",
    textColor: "#FFFFFF",
    tab: "pastel",
    desc: "꽃향기가 퍼지듯 트렌디하고 유니크한 바이올렛",
    recommendations: [
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "신비로운 청순", tip: "퍼플의 매력을 100% 보여주는 베스트 조합" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "트렌디 스트릿", tip: "MZ세대 패션 피플들이 애용하는 힙한 매치" },
      { id: "light_denim", name: "연청 데님", hex: "#8EAEC4", textColor: "#1E1E1E", vibe: "아이돌 무대 무드", tip: "산뜻하고 통통 튀는 경쾌한 캐주얼" },
      { id: "charcoal", name: "차콜 그레이", hex: "#383B3E", textColor: "#FFFFFF", vibe: "단정한 팝컬러", tip: "라일락 니트에 차콜 슬랙스의 멋스러운 조화" }
    ]
  },

  // ==========================================
  // 5. 👖 데님 & 빈티지 (Denim & Vintage - 6종)
  // ==========================================
  {
    id: "bleached_denim",
    name: "블리치 아이스진",
    hex: "#C5D8E8",
    textColor: "#1E1E1E",
    tab: "denim",
    desc: "표백하듯 밝게 워싱된 가장 시원한 아이스 블루",
    recommendations: [
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "궁극의 서머룩", tip: "한여름에 가장 청량하고 깨끗한 스타일링" },
      { id: "melange_gray", name: "멜란지 그레이", hex: "#9E9E9E", textColor: "#1E1E1E", vibe: "내추럴 빈티지", tip: "루즈핏 맨투맨과 매치하는 힙한 스트릿" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "시크 콘트라스트", tip: "상의는 슬림하고 어둡게, 하의는 시원하게" },
      { id: "butter_yellow", name: "버터 옐로우", hex: "#F5E8A9", textColor: "#1E1E1E", vibe: "트렌디 파스텔", tip: "감성적인 인스타 룩의 정석" }
    ]
  },
  {
    id: "acid_denim",
    name: "애시드 워싱진",
    hex: "#5C768D",
    textColor: "#FFFFFF",
    tab: "denim",
    desc: "레트로한 그런지 감성을 품은 텍스처 데님",
    recommendations: [
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "락시크 스트릿", tip: "가죽 재킷이나 오버핏 티와 함께하는 그런지 룩" },
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "단정한 레트로", tip: "워싱의 디테일을 살려주는 기본 조합" },
      { id: "brown", name: "모카 브라운", hex: "#5C4033", textColor: "#FFFFFF", vibe: "웨스턴 빈티지", tip: "가죽 벨트, 부츠와 기막히게 어울림" },
      { id: "oatmeal", name: "오트밀", hex: "#E5DFC8", textColor: "#1E1E1E", vibe: "편안한 얼씨", tip: "부드럽고 무심한 꾸안꾸 데일리" }
    ]
  },
  {
    id: "black_denim",
    name: "흑청 / 블랙진",
    hex: "#3E4146",
    textColor: "#FFFFFF",
    tab: "denim",
    desc: "블랙과 차콜 사이의 멋스러운 먹색 데님",
    recommendations: [
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "미니멀 스트릿", tip: "화이트 셔츠나 티셔츠와의 무결점 조화" },
      { id: "melange_gray", name: "멜란지 그레이", hex: "#9E9E9E", textColor: "#1E1E1E", vibe: "모노 톤온톤", tip: "누구나 날씬하고 길어 보이는 슬림 실루엣" },
      { id: "cream", name: "크림 아이보리", hex: "#F4F1EA", textColor: "#1E1E1E", vibe: "부드러운 흑백", tip: "완전한 흰색보다 감성적인 톤온톤" },
      { id: "burgundy", name: "버건디/와인", hex: "#6B1D2F", textColor: "#FFFFFF", vibe: "고혹적인 그런지", tip: "흑청에 붉은 니트 하나로 완성하는 룩" }
    ]
  },
  {
    id: "vintage_khaki_denim",
    name: "워싱 카키 데님",
    hex: "#636B59",
    textColor: "#FFFFFF",
    tab: "denim",
    desc: "밀리터리와 워크웨어의 헤리티지가 담긴 빈티지 카키",
    recommendations: [
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "깔끔한 밀리터리", tip: "카키 데님을 가장 도회적으로 소화하는 법" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "다크 워크웨어", tip: "무게감 있는 상체와 빈티지한 하체의 조화" },
      { id: "oatmeal", name: "오트밀", hex: "#E5DFC8", textColor: "#1E1E1E", vibe: "아웃도어 얼씨", tip: "캠핑과 일상 모두를 아우르는 힐링 스타일" },
      { id: "brown", name: "모카 브라운", hex: "#5C4033", textColor: "#FFFFFF", vibe: "클래식 아메카지", tip: "워크 부츠와 브라운 자켓의 완벽 조합" }
    ]
  },
  {
    id: "raw_indigo",
    name: "생지 로우 인디고",
    hex: "#1C2938",
    textColor: "#FFFFFF",
    tab: "denim",
    desc: "물 빠짐 없이 탄탄하게 각 잡힌 정통 생지 진",
    recommendations: [
      { id: "melange_gray", name: "멜란지 그레이", hex: "#9E9E9E", textColor: "#1E1E1E", vibe: "스마트 프레피", tip: "대학생부터 직장인까지 모두에게 신뢰받는 룩" },
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "정통 옥스포드", tip: "옥스포드 셔츠와 로우 진의 클래식 정석" },
      { id: "camel", name: "카멜 베이지", hex: "#C19A6B", textColor: "#1E1E1E", vibe: "고급스러운 댄디", tip: "카멜 코트나 자켓과 생지 진의 멋진 궁합" },
      { id: "olive_khaki", name: "올리브 카키", hex: "#556B2F", textColor: "#FFFFFF", vibe: "헤비 듀티 워크웨어", tip: "남성적인 매력을 극대화하는 정통 배색" }
    ]
  },
  {
    id: "vintage_brown_denim",
    name: "빈티지 브라운진",
    hex: "#665043",
    textColor: "#FFFFFF",
    tab: "denim",
    desc: "오래된 카페의 가죽 소파처럼 그윽한 흙빛 브라운 데님",
    recommendations: [
      { id: "cream", name: "크림 아이보리", hex: "#F4F1EA", textColor: "#1E1E1E", vibe: "따뜻한 라떼룩", tip: "브라운진에 크림 니트는 실패 없는 부드러움" },
      { id: "sky_blue", name: "스카이블루", hex: "#8FA9C4", textColor: "#1E1E1E", vibe: "감각적인 컬러링", tip: "푸른 셔츠와 브라운 팬츠의 매력적인 보색" },
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "정갈한 빈티지", tip: "깨끗한 흰 상의로 브라운진의 색감을 살림" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "딥 시크", tip: "차분하고 안정감 있는 어반 코디" }
    ]
  },

  // ==========================================
  // 🍁 시즌 트렌드 전용 특화 컬러 (Seasonal Trend Additions)
  // ==========================================
  {
    id: "dark_brown",
    name: "다크 브라운",
    hex: "#4A3525",
    textColor: "#FFFFFF",
    tab: "warm",
    desc: "가을의 깊은 무게감과 정취를 주는 딥 에스프레소 브라운",
    recommendations: [
      { id: "camel", name: "카멜 베이지", hex: "#C19A6B", textColor: "#1E1E1E", vibe: "어텀 럭셔리 톤온톤", tip: "카멜과 다크 브라운의 레이어드는 가을 최고급 톤온톤의 정석" },
      { id: "cream", name: "크림 아이보리", hex: "#F4F1EA", textColor: "#1E1E1E", vibe: "부드러운 라떼룩", tip: "어두운 브라운을 크림색이 화사하고 포근하게 중화" },
      { id: "melange_gray", name: "멜란지 그레이", hex: "#9E9E9E", textColor: "#1E1E1E", vibe: "세련된 어반 믹스", tip: "그레이의 쿨한 느낌과 브라운의 웜한 무드의 감각적 조화" },
      { id: "sky_blue", name: "스카이블루", hex: "#8FA9C4", textColor: "#1E1E1E", vibe: "감각적 보색 대비", tip: "하늘색 셔츠에 다크 브라운 슬랙스의 스타일리시한 조화" }
    ]
  },
  {
    id: "purple",
    name: "리치 퍼플",
    hex: "#7B3F8D",
    textColor: "#FFFFFF",
    tab: "cool",
    desc: "과감하고 신비로운 분위기를 연출하는 가을 트렌드 포인트",
    recommendations: [
      { id: "melange_gray", name: "멜란지 그레이", hex: "#9E9E9E", textColor: "#1E1E1E", vibe: "세련된 어반 시크", tip: "차분한 그레이가 화려한 퍼플의 존재감을 우아하게 정돈" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "도도한 시크 포인트", tip: "강렬한 카리스마와 고급스러움을 동시에 잡는 배색" },
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", vibe: "선명한 포인트룩", tip: "퍼플 본연의 매혹적인 색감이 극대화되는 깨끗한 매칭" },
      { id: "charcoal", name: "차콜 그레이", hex: "#383B3E", textColor: "#FFFFFF", vibe: "다크 엘레강스", tip: "차콜 수트나 팬츠 속에 퍼플 이너를 매치하는 센스" }
    ]
  },
  {
    id: "red",
    name: "클래식 레드",
    hex: "#B32638",
    textColor: "#FFFFFF",
    tab: "pastel",
    desc: "시선을 사로잡는 강렬한 에너지와 생명력의 포인트 레드",
    recommendations: [
      { id: "melange_gray", name: "멜란지 그레이", hex: "#9E9E9E", textColor: "#1E1E1E", vibe: "프렌치 캐주얼", tip: "그레이 니트나 슬랙스에 레드로 포인트를 주는 파리지앵 감성" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", vibe: "강렬한 시크 대비", tip: "선명한 레드와 블랙의 실패 없는 드라마틱 배색" },
      { id: "cream", name: "크림 아이보리", hex: "#F4F1EA", textColor: "#1E1E1E", vibe: "따뜻하고 화사한 룩", tip: "원색의 강렬함을 크림색이 온화하고 사랑스럽게 감싸줌" },
      { id: "mid_denim", name: "중청 데님", hex: "#4A709C", textColor: "#FFFFFF", vibe: "클래식 아메리칸", tip: "레드 탑과 중청 데님의 생기 넘치는 데일리 무드" }
    ]
  }
];

// 빠른 ID 검색을 위한 맵
export const COLOR_MAP = new Map(FASHION_COLORS.map(c => [c.id, c]));

// 쇼핑몰 정보 상수
export const SHOP_INFO = {
  name: "룩룩룩",
  slogan: "옷알못들을 위한 컬러 제안",
  url: "https://looklooklook.pe.kr/",
  repoUrl: "https://github.com/tramper2/MatchColorOutfit"
};

// 계절별 트렌드 설정 모듈 re-export (시즌 변경 시 js/season_trend.js 파일을 수정하세요)
export * from './season_trend.js';

