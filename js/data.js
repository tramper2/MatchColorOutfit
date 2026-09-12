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

// =========================================================================
// 🌤️ 기온별 옷차림 공식 가이드 (8단계 한국 기상청 및 패션 표준)
// =========================================================================
export const TEMPERATURE_GUIDES = [
  {
    rangeId: "hot_28",
    minTemp: 28,
    maxTemp: 99,
    label: "28℃ 이상",
    title: "한여름 폭염 날씨",
    summary: "민소매, 반팔, 반바지, 린넨 소재로 최대한 시원하고 가볍게",
    hasOuter: false,
    topId: "white",
    topName: "화이트 린넨/반팔",
    bottomId: "sky_blue",
    bottomName: "스카이블루 린넨팬츠",
    tops: ["린넨 셔츠", "쿨링 반팔 티셔츠", "슬리브리스 탑", "오버핏 오픈카라 셔츠"],
    bottoms: ["린넨 쇼츠", "코튼 버뮤다 팬츠", "시어서커 슬랙스", "얇은 와이드 팬츠"],
    outer: "없음 (실내 에어컨 대비 얇은 린넨 셔츠 추천)",
    shoes: ["스트랩 샌들", "가벼운 캔버스화", "우븐 로퍼"],
    recommendedColors: [
      { id: "white", name: "화이트", hex: "#FFFFFF", textColor: "#1E1E1E", role: "상·하의 열 반사 베이스" },
      { id: "sky_blue", name: "스카이 블루", hex: "#87CEEB", textColor: "#1E1E1E", role: "청량한 여름 포인트" },
      { id: "light_gray", name: "라이트 그레이", hex: "#D3D3D3", textColor: "#1E1E1E", role: "산뜻한 쿨톤 매치" },
      { id: "light_denim", name: "연청 데님", hex: "#8EAEC4", textColor: "#1E1E1E", role: "경쾌한 캐주얼" }
    ],
    stylingTip: "빛을 흡수하는 블랙이나 어두운 색 대신 밝은 화이트, 스카이블루로 체감 온도를 낮추세요."
  },
  {
    rangeId: "warm_23_27",
    minTemp: 23,
    maxTemp: 27,
    label: "23℃ ~ 27℃",
    title: "초여름 / 쾌적한 낮 기온",
    summary: "반팔, 얇은 셔츠, 가벼운 면바지나 슬랙스로 단정한 룩",
    hasOuter: true,
    outerId: "navy",
    outerName: "네이비 셔츠/바람막이",
    innerId: "cream",
    innerName: "크림 반팔 티",
    bottomId: "beige",
    bottomName: "베이지 치노",
    topId: "cream",
    topName: "크림 아이보리",
    tops: ["옥스포드 반팔 셔츠", "피케 폴로셔츠", "코튼 라운드 티셔츠", "얇은 7부 블라우스"],
    bottoms: ["테이퍼드 슬랙스", "면 치노팬츠", "라이트 데님", "A라인 린넨 스커트"],
    outer: "가벼운 포켓 셔츠나 홑겹 바람막이",
    shoes: ["화이트 스니커즈", "페니 로퍼", "뮬 슬리퍼"],
    recommendedColors: [
      { id: "cream", name: "크림 아이보리", hex: "#F4F1EA", textColor: "#1E1E1E", role: "부드럽고 단정한 인상" },
      { id: "beige", name: "베이지", hex: "#D7C9AA", textColor: "#1E1E1E", role: "치노 팬츠의 정석" },
      { id: "navy", name: "네이비", hex: "#1B2A4A", textColor: "#FFFFFF", role: "신뢰감 있는 상의" },
      { id: "sage_green", name: "세이지 민트", hex: "#9CAF88", textColor: "#1E1E1E", role: "내추럴 감성 악센트" }
    ],
    stylingTip: "실내 냉방과 아침저녁 약간의 기온 변화에 대비해 얇은 셔츠를 어깨에 걸치는 스타일링이 제격입니다."
  },
  {
    rangeId: "mild_20_22",
    minTemp: 20,
    maxTemp: 22,
    label: "20℃ ~ 22℃",
    title: "완연한 봄 / 초가을 쾌적 날씨",
    summary: "얇은 가디건, 긴팔 티셔츠, 셔츠, 면바지로 스타일링하기 가장 좋은 황금 기온",
    hasOuter: true,
    outerId: "navy",
    outerName: "네이비 가디건/자켓",
    innerId: "white",
    innerName: "화이트 드레스 셔츠",
    bottomId: "beige",
    bottomName: "베이지 슬랙스",
    topId: "navy",
    topName: "네이비",
    tops: ["롱슬리브 긴팔 티", "드레스 셔츠", "얇은 코튼 가디건", "스트라이프 셔츠"],
    bottoms: ["슬랙스", "스트레이트 데님", "치노 팬츠", "플리츠 스커트"],
    outer: "어깨에 걸치는 얇은 가디건 또는 셔츠 재킷",
    shoes: ["클래식 스니커즈", "더비 슈즈", "플랫 슈즈"],
    recommendedColors: [
      { id: "navy", name: "네이비", hex: "#1B2A4A", textColor: "#FFFFFF", role: "깔끔하고 세련된 상·하의" },
      { id: "melange_gray", name: "멜란지 그레이", hex: "#9E9E9E", textColor: "#1E1E1E", role: "모던 베이직 이너" },
      { id: "butter_yellow", name: "버터 옐로우", hex: "#F5E8A9", textColor: "#1E1E1E", role: "화사한 봄·가을 무드" },
      { id: "mid_denim", name: "중청 데님", hex: "#4A709C", textColor: "#FFFFFF", role: "어디에나 어울리는 팬츠" }
    ],
    stylingTip: "셔츠 소매를 자연스럽게 롤업하고, 네이비와 베이지 또는 그레이의 톤온톤 조합으로 세련미를 더하세요."
  },
  {
    rangeId: "cool_17_19",
    minTemp: 17,
    maxTemp: 19,
    label: "17℃ ~ 19℃",
    title: "선선한 봄가을 / 일교차 주의",
    summary: "얇은 니트, 맨투맨, 가디건, 슬랙스로 든든함과 핏을 동시에",
    hasOuter: true,
    outerId: "camel",
    outerName: "카멜 블레이저",
    innerId: "cream",
    innerName: "크림 소프트 니트",
    bottomId: "charcoal",
    bottomName: "차콜 그레이 슬랙스",
    topId: "camel",
    topName: "카멜",
    tops: ["파인 울 니트", "헤비웨이트 맨투맨", "옥스포드 셔츠 + 조끼", "후드 티셔츠"],
    bottoms: ["울 블렌드 슬랙스", "중청/진청 데님", "코튼 조거팬츠", "롱 스커트"],
    outer: "도톰한 니트 가디건, 홑겹 블레이저, 가벼운 블루종",
    shoes: ["레더 스니커즈", "로퍼", "워커 부츠"],
    recommendedColors: [
      { id: "olive_khaki", name: "올리브 카키", hex: "#556B2F", textColor: "#FFFFFF", role: "가을 무드 대표" },
      { id: "camel", name: "카멜", hex: "#C19A6B", textColor: "#1E1E1E", role: "포근하고 럭셔리한 느낌" },
      { id: "charcoal", name: "차콜 그레이", hex: "#383B3E", textColor: "#FFFFFF", role: "단정한 슬랙스 기본" },
      { id: "burgundy", name: "딥 버건디", hex: "#6B1D2F", textColor: "#FFFFFF", role: "그윽한 포인트" }
    ],
    stylingTip: "낮과 밤의 기온 차가 10도 이상 벌어지므로, 이너 위에 편하게 벗고 입을 수 있는 가디건이나 자켓을 꼭 챙기세요."
  },
  {
    rangeId: "chilly_12_16",
    minTemp: 12,
    maxTemp: 16,
    label: "12℃ ~ 16℃",
    title: "쌀쌀한 환절기 / 자켓 필수",
    summary: "자켓, 가디건, 야상점퍼, 니트, 도톰한 청바지로 보온성 챙기기",
    hasOuter: true,
    outerId: "olive_khaki",
    outerName: "올리브 카키 야상/자켓",
    innerId: "melange_gray",
    innerName: "멜란지 그레이 니트",
    bottomId: "mid_denim",
    bottomName: "중청 데님",
    topId: "dark_brown",
    topName: "다크 브라운",
    tops: ["메리노 울 니트", "기모 맨투맨", "모크넥 티셔츠", "도톰한 플란넬 셔츠"],
    bottoms: ["테일러드 울 슬랙스", "진청 데님", "코듀로이 골덴 팬츠"],
    outer: "테일러드 자켓, 항공점퍼(MA-1), 라이더 자켓, 야상",
    shoes: ["첼시 부츠", "더비 슈즈", "헤비 스니커즈"],
    recommendedColors: [
      { id: "dark_brown", name: "다크 브라운", hex: "#4A3525", textColor: "#FFFFFF", role: "깊이감 있는 자켓/코트" },
      { id: "deep_denim", name: "생지/진청 데님", hex: "#223554", textColor: "#FFFFFF", role: "단단하고 따뜻한 하의" },
      { id: "cream", name: "크림 아이보리", hex: "#F4F1EA", textColor: "#1E1E1E", role: "어두운 외투를 밝히는 이너" },
      { id: "mocha", name: "모카 브라운", hex: "#7E5E4E", textColor: "#FFFFFF", role: "따스한 가을 블렌딩" }
    ],
    stylingTip: "블레이저 안에 얇은 터틀넥이나 셔츠+니트 레이어드로 격식과 보온을 동시에 잡으세요."
  },
  {
    rangeId: "cold_9_11",
    minTemp: 9,
    maxTemp: 11,
    label: "9℃ ~ 11℃",
    title: "초겨울 / 늦가을 쌀쌀함",
    summary: "트렌치코트, 야상, 도톰한 점퍼, 기모바지로 체온 유지",
    hasOuter: true,
    outerId: "camel",
    outerName: "카멜 울 트렌치코트",
    innerId: "cream",
    innerName: "크림 터틀넥 니트",
    bottomId: "charcoal",
    bottomName: "차콜 그레이 슬랙스",
    topId: "charcoal",
    topName: "차콜 그레이",
    tops: ["터틀넥 니트", "캐시미어 니트", "도톰한 후드집업", "기모 셔츠"],
    bottoms: ["기모 슬랙스", "와이드 골덴 팬츠", "헤비웨이트 데님"],
    outer: "울 트렌치코트, 퀼팅 자켓, 숏패딩, 도톰한 울 블루종",
    shoes: ["레더 첼시 부츠", "보온 라이닝 스니커즈", "처카 부츠"],
    recommendedColors: [
      { id: "charcoal", name: "차콜 그레이", hex: "#383B3E", textColor: "#FFFFFF", role: "슬림하고 묵직한 베이스" },
      { id: "camel", name: "카멜", hex: "#C19A6B", textColor: "#1E1E1E", role: "트렌치코트의 정석 컬러" },
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", role: "시크한 방한 베이스" },
      { id: "wine", name: "와인 버건디", hex: "#581825", textColor: "#FFFFFF", role: "포근한 겨울 포인트" }
    ],
    stylingTip: "목과 발목을 따뜻하게 감싸는 것만으로도 체감 온도가 3도 이상 상승합니다. 앵클부츠와 목폴라를 적극 활용하세요."
  },
  {
    rangeId: "very_cold_5_8",
    minTemp: 5,
    maxTemp: 8,
    label: "5℃ ~ 8℃",
    title: "겨울 초입 추위",
    summary: "울 코트, 가죽 자켓, 히트텍 이너웨어, 도톰한 기모 팬츠",
    hasOuter: true,
    outerId: "charcoal",
    outerName: "차콜 핸드메이드 코트",
    innerId: "cream",
    innerName: "크림 소프트 니트",
    bottomId: "black",
    bottomName: "블랙 슬랙스",
    topId: "black",
    topName: "블랙",
    tops: ["두꺼운 터틀넥 스웨터", "히트텍 + 셔츠 + 니트", "플리스 집업"],
    bottoms: ["본딩 기모 슬랙스", "두꺼운 코듀로이 팬츠", "기모 데님"],
    outer: "핸드메이드 울 코트, 무스탕, 헤비 울 점퍼, 경량 패딩 레이어드",
    shoes: ["방한 안감 부츠", "레더 첼시 부츠", "쿠션감 있는 운동화"],
    recommendedColors: [
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", role: "롱코트와 자켓의 중심" },
      { id: "charcoal", name: "차콜 그레이", hex: "#383B3E", textColor: "#FFFFFF", role: "도시적인 헤비 울" },
      { id: "forest_green", name: "포레스트 그린", hex: "#2E4A35", textColor: "#FFFFFF", role: "중후하고 고급스러운 무드" },
      { id: "cream", name: "크림 아이보리", hex: "#F4F1EA", textColor: "#1E1E1E", role: "칙칙함을 걷어내는 니트" }
    ],
    stylingTip: "코트 안에 경량 패딩 베스트(조끼)를 레이어드하면 부해 보이지 않으면서도 완벽한 방한 룩을 완성할 수 있습니다."
  },
  {
    rangeId: "freezing_under_4",
    minTemp: -99,
    maxTemp: 4,
    label: "4℃ 이하",
    title: "한겨울 혹한 / 영하권",
    summary: "롱패딩, 두꺼운 다운점퍼, 목도리, 장갑, 기모 안감 총동원",
    hasOuter: true,
    outerId: "black",
    outerName: "블랙 헤비다운 롱패딩",
    innerId: "melange_gray",
    innerName: "멜란지 기모 니트",
    bottomId: "dark_brown",
    bottomName: "다크브라운 울팬츠",
    topId: "black",
    topName: "블랙",
    tops: ["극세사 기모 이너", "헤비 게이지 터틀넥", "캐시미어 혼방 도톰 니트"],
    bottoms: ["방풍 기모 팬츠", "방한 패딩 바지", "극세사 타이즈 + 울 슬랙스"],
    outer: "구스다운 롱패딩, 헤비 다운 파카, 시어링 무스탕 코트",
    shoes: ["방한 부츠", "어그 부츠", "두꺼운 양말 + 워커"],
    recommendedColors: [
      { id: "black", name: "블랙", hex: "#1E1E1E", textColor: "#FFFFFF", role: "오염에 강하고 열을 모으는 패딩" },
      { id: "navy", name: "네이비", hex: "#1B2A4A", textColor: "#FFFFFF", role: "포멀한 윈터 아우터" },
      { id: "white", name: "화이트 / 오프화이트", hex: "#F8F9FA", textColor: "#1E1E1E", role: "눈 덮인 겨울 스노우룩" },
      { id: "red", name: "클래식 레드", hex: "#B32638", textColor: "#FFFFFF", role: "머플러·장갑 활력 포인트" }
    ],
    stylingTip: "패딩이 무채색(블랙·차콜)이라면, 레드나 카멜 컬러의 머플러를 포인트로 둘러주면 생기 넘치는 윈터 룩이 됩니다."
  }
];

// =========================================================================
// 🌐 WMO 날씨 코드 매핑 (Open-Meteo 표준)
// =========================================================================
export const WMO_WEATHER_CODES = {
  0: { label: "맑음", emoji: "☀️", bgMood: "sunny", advice: "햇살이 좋은 날! 밝고 화사한 컬러가 돋보입니다." },
  1: { label: "대체로 맑음", emoji: "🌤️", bgMood: "mostly-sunny", advice: "야외 활동하기 완벽한 날씨입니다." },
  2: { label: "구름 조금", emoji: "⛅", bgMood: "partly-cloudy", advice: "일교차에 유의하여 덧입을 옷을 챙기세요." },
  3: { label: "흐림", emoji: "☁️", bgMood: "overcast", advice: "차분한 톤온톤이나 포인트 컬러로 기분을 전환해보세요." },
  45: { label: "안개", emoji: "🌫️", bgMood: "foggy", advice: "시야가 뿌옇고 습도가 높으니 통기성 있는 옷차림 추천." },
  48: { label: "결빙 안개", emoji: "🌫️", bgMood: "foggy", advice: "체감 온도가 뚝 떨어지니 방한에 신경 쓰세요." },
  51: { label: "약한 이슬비", emoji: "🌦️", bgMood: "rainy", advice: "빗물이 튈 수 있으니 어두운 하의를 권장합니다." },
  53: { label: "이슬비", emoji: "🌦️", bgMood: "rainy", advice: "휴대용 우산과 방수 소재 외투를 챙기세요." },
  55: { label: "강한 이슬비", emoji: "🌧️", bgMood: "rainy", advice: "밝은 색 바지는 오염되기 쉬우니 피하세요." },
  61: { label: "약한 비", emoji: "🌧️", bgMood: "rainy", advice: "흙탕물에 강한 짙은 네이비나 블랙 하의를 추천합니다." },
  63: { label: "보통 비", emoji: "🌧️", bgMood: "rainy", advice: "우산과 방수 신발은 필수! 어두운 하의 + 밝은 상의 매칭." },
  65: { label: "강한 비", emoji: "⛈️", bgMood: "heavy-rain", advice: "비바람에 대비해 밑단이 넓은 바지나 롱스커트는 피하세요." },
  71: { label: "약한 눈", emoji: "🌨️", bgMood: "snowy", advice: "미끄럼 방지 신발과 포근한 머플러를 코디하세요." },
  73: { label: "보통 눈", emoji: "❄️", bgMood: "snowy", advice: "방한 방수 부츠와 도톰한 다운 패딩이 필수입니다." },
  75: { label: "강한 눈 / 대설", emoji: "☃️", bgMood: "heavy-snow", advice: "보온성 최우선! 히트텍과 롱패딩으로 완전 무장하세요." },
  80: { label: "소나기", emoji: "🌦️", bgMood: "rainy", advice: "갑작스러운 비에 대비해 가벼운 방풍 자켓 추천." },
  81: { label: "강한 소나기", emoji: "⛈️", bgMood: "heavy-rain", advice: "물기에 강한 레더나 나일론 소재를 선택하세요." },
  82: { label: "폭우성 소나기", emoji: "⛈️", bgMood: "heavy-rain", advice: "야외 외출 시 짙은 색상의 짧은 기장 팬츠 추천." },
  95: { label: "뇌우", emoji: "⚡", bgMood: "storm", advice: "바람과 비에 대비해 실용적인 아웃도어 룩 추천." }
};

// =========================================================================
// 📍 국내 주요 도시 좌표 데이터 (Open-Meteo 즉각 조회용)
// =========================================================================
export const DOMESTIC_CITIES = [
  { id: "seoul", name: "서울", lat: 37.5665, lon: 126.9780, region: "수도권" },
  { id: "busan", name: "부산", lat: 35.1796, lon: 129.0756, region: "영남" },
  { id: "incheon", name: "인천", lat: 37.4563, lon: 126.7052, region: "수도권" },
  { id: "daegu", name: "대구", lat: 35.8714, lon: 128.6014, region: "영남" },
  { id: "daejeon", name: "대전", lat: 36.3504, lon: 127.3845, region: "충청" },
  { id: "gwangju", name: "광주", lat: 35.1595, lon: 126.8526, region: "호남" },
  { id: "ulsan", name: "울산", lat: 35.5384, lon: 129.3114, region: "영남" },
  { id: "suwon", name: "수원", lat: 37.2636, lon: 127.0286, region: "수도권" },
  { id: "jeju", name: "제주", lat: 33.4996, lon: 126.5312, region: "제주" },
  { id: "gangneung", name: "강릉", lat: 37.7519, lon: 128.8761, region: "강원" },
  { id: "chuncheon", name: "춘천", lat: 37.8813, lon: 127.7298, region: "강원" },
  { id: "jeonju", name: "전주", lat: 35.8242, lon: 127.1480, region: "호남" }
];

// =========================================================================
// ✈️ 국내외 출장 및 여행 도시 리스트 (7일 예보 플래너용)
// =========================================================================
export const TRIP_CITIES = [
  // 국내 주요 출장/휴양지
  { id: "seoul", name: "서울", country: "한국", flag: "🇰🇷", lat: 37.5665, lon: 126.9780, type: "domestic" },
  { id: "busan", name: "부산", country: "한국", flag: "🇰🇷", lat: 35.1796, lon: 129.0756, type: "domestic" },
  { id: "jeju", name: "제주", country: "한국", flag: "🇰🇷", lat: 33.4996, lon: 126.5312, type: "domestic" },
  { id: "gangneung", name: "강릉/속초", country: "한국", flag: "🇰🇷", lat: 37.7519, lon: 128.8761, type: "domestic" },
  { id: "yeosu", name: "여수", country: "한국", flag: "🇰🇷", lat: 34.7604, lon: 127.6622, type: "domestic" },
  
  // 아시아 주요 출장 & 여행지
  { id: "tokyo", name: "도쿄", country: "일본", flag: "🇯🇵", lat: 35.6762, lon: 139.6503, type: "asia" },
  { id: "osaka", name: "오사카", country: "일본", flag: "🇯🇵", lat: 34.6937, lon: 135.5023, type: "asia" },
  { id: "fukuoka", name: "후쿠오카", country: "일본", flag: "🇯🇵", lat: 33.5904, lon: 130.4017, type: "asia" },
  { id: "taipei", name: "타이베이", country: "대만", flag: "🇹🇼", lat: 25.0330, lon: 121.5654, type: "asia" },
  { id: "hongkong", name: "홍콩", country: "중국", flag: "🇭🇰", lat: 22.3193, lon: 114.1694, type: "asia" },
  { id: "singapore", name: "싱가포르", country: "싱가포르", flag: "🇸🇬", lat: 1.3521, lon: 103.8198, type: "asia" },
  { id: "bangkok", name: "방콕", country: "태국", flag: "🇹🇭", lat: 13.7563, lon: 100.5018, type: "asia" },
  { id: "danang", name: "다낭", country: "베트남", flag: "🇻🇳", lat: 16.0544, lon: 108.2022, type: "asia" },
  { id: "bali", name: "발리", country: "인도네시아", flag: "🇮🇩", lat: -8.4095, lon: 115.1889, type: "asia" },
  
  // 미주 / 유럽 / 대양주
  { id: "guam", name: "괌", country: "미국", flag: "🇬🇺", lat: 13.4443, lon: 144.7937, type: "global" },
  { id: "newyork", name: "뉴욕", country: "미국", flag: "🇺🇸", lat: 40.7128, lon: -74.0060, type: "global" },
  { id: "losangeles", name: "로스앤젤레스", country: "미국", flag: "🇺🇸", lat: 34.0522, lon: -118.2437, type: "global" },
  { id: "london", name: "런던", country: "영국", flag: "🇬🇧", lat: 51.5074, lon: -0.1278, type: "global" },
  { id: "paris", name: "파리", country: "프랑스", flag: "🇫🇷", lat: 48.8566, lon: 2.3522, type: "global" },
  { id: "barcelona", name: "바르셀로나", country: "스페인", flag: "🇪🇸", lat: 41.3879, lon: 2.1699, type: "global" },
  { id: "frankfurt", name: "프랑크푸르트", country: "독일", flag: "🇩🇪", lat: 50.1109, lon: 8.6821, type: "global" },
  { id: "sydney", name: "시드니", country: "호주", flag: "🇦🇺", lat: -33.8688, lon: 151.2093, type: "global" }
];

// =========================================================================
// 📅 매일매일 코디 추천 데이터 (TPO & 요일 테마)
// =========================================================================
export const DAILY_OUTFITS = [
  {
    id: "office_navy_beige",
    tpo: "office",
    tpoName: "출근 / 비즈니스",
    title: "신뢰감을 주는 단정한 출근룩",
    subtitle: "회의와 외근에서도 깔끔한 인상을 남기는 클래식 포멀",
    outerId: "navy",
    outerName: "네이비 블레이저",
    innerId: "white",
    innerName: "화이트 드레스셔츠",
    bottomId: "beige",
    bottomName: "베이지 슬랙스",
    topId: "navy",
    topName: "네이비",
    vibe: "비즈니스 캐주얼의 정석",
    keyItem: "슬림핏 네이비 자켓 & 화이트 셔츠 & 베이지 치노팬츠",
    stylingPoints: [
      "단정한 네이비 자켓 안에 깨끗한 화이트 셔츠와 베이지 슬랙스를 매치해 실패 없는 클래식 완성",
      "브라운 가죽 시계와 로퍼를 더해 지적이고 전문적인 분위기 연출",
      "룩룩룩 프리미엄 슬랙스와 코디 시 구김 없이 하루 종일 쾌적함 유지"
    ]
  },
  {
    id: "office_charcoal_cream",
    tpo: "office",
    tpoName: "출근 / 비즈니스",
    title: "도회적인 모던 비즈니스룩",
    subtitle: "차분하면서도 얼굴을 밝혀주는 지적인 오피스 스타일",
    outerId: "charcoal",
    outerName: "차콜 테일러드 자켓",
    innerId: "cream",
    innerName: "크림 소프트 니트",
    bottomId: "black",
    bottomName: "블랙 슬랙스",
    topId: "cream",
    topName: "크림 아이보리",
    vibe: "도심 속 어반 시크",
    keyItem: "차콜 자켓 & 크림 니트 & 핀턱 블랙 슬랙스",
    stylingPoints: [
      "차콜 자켓의 단정함 속에 화사한 크림 이너를 받쳐 입어 화상 회의나 미팅 시 혈색을 환하게 밝힘",
      "블랙 슬랙스가 전체적인 중심을 안정감 있게 잡아주어 슬림해 보이는 효과",
      "블랙 옥스포드화나 로퍼와 매치하면 격식 있는 자리에서도 완벽"
    ]
  },
  {
    id: "casual_denim_olive",
    tpo: "casual",
    tpoName: "데일리 / 캠퍼스",
    title: "감성적인 얼씨 캐주얼 데일리",
    subtitle: "꾸안꾸 매력으로 편안하면서도 센스 있어 보이는 데일리 코디",
    outerId: "olive_khaki",
    outerName: "올리브 카키 야상/자켓",
    innerId: "white",
    innerName: "화이트 레이어드 티",
    bottomId: "mid_denim",
    bottomName: "중청 데님",
    topId: "olive_khaki",
    topName: "올리브 카키",
    vibe: "자연스러운 아메카지 무드",
    keyItem: "카키 오버핏 아우터 & 화이트 티셔츠 & 와이드 데님",
    stylingPoints: [
      "차분한 올리브 카키 아우터와 청량한 중청 데님의 환상적인 캐주얼 배색",
      "이너로 화이트 티셔츠를 레이어드하여 앞섶 V존과 밑단에 산뜻한 경쾌함을 부여",
      "화이트 캔버스 스니커즈와 에코백으로 편안한 무드 완성"
    ]
  },
  {
    id: "casual_gray_black",
    tpo: "casual",
    tpoName: "데일리 / 캠퍼스",
    title: "실패 없는 미니멀 시크 룩",
    subtitle: "언제 어디서나 호불호 없이 사랑받는 모노톤 정석",
    outerId: "black",
    outerName: "블랙 미니멀 블루종",
    innerId: "melange_gray",
    innerName: "멜란지 그레이 니트",
    bottomId: "black",
    bottomName: "블랙 와이드 슬랙스",
    topId: "melange_gray",
    topName: "멜란지 그레이",
    vibe: "미니멀리즘의 정수",
    keyItem: "블랙 블루종 & 멜란지 니트 & 블랙 슬랙스",
    stylingPoints: [
      "블랙 아우터와 하의 사이에 멜란지 그레이 이너를 배치해 올블랙의 답답함을 완벽히 해소",
      "멜란지 특유의 고급스러운 텍스처가 모노톤 룩에 입체감을 부여",
      "실버 액세서리와 미니멀 스니커즈로 군더더기 없는 마무리"
    ]
  },
  {
    id: "date_camel_brown",
    tpo: "date",
    tpoName: "데이트 / 소개팅",
    title: "포근하고 로맨틱한 웜 브라운 톤온톤",
    subtitle: "따뜻하고 다정한 인상을 주어 첫인상 점수 200% 상승",
    outerId: "camel",
    outerName: "카멜 캐시미어 코트/자켓",
    innerId: "cream",
    innerName: "크림 아이보리 니트",
    bottomId: "dark_brown",
    bottomName: "다크 브라운 슬랙스/스커트",
    topId: "camel",
    topName: "카멜",
    vibe: "포근한 어텀 로맨스",
    keyItem: "카멜 아우터 & 소프트 크림 니트 & 초콜릿 브라운 팬츠",
    stylingPoints: [
      "카멜 자켓과 크림 이너, 다크 브라운 하의로 이어지는 완벽한 3단 톤온톤 스타일링",
      "보는 사람마저 따스하고 포근해지는 부드럽고 다정한 인상 연출",
      "가죽 미니백과 은은한 향수를 더하면 완벽한 데이트룩"
    ]
  },
  {
    id: "date_butter_denim",
    tpo: "date",
    tpoName: "데이트 / 소개팅",
    title: "사랑스러운 화사한 피크닉 데이트",
    subtitle: "봄 햇살처럼 싱그럽고 활력 넘치는 인스타 감성 룩",
    outerId: "butter_yellow",
    outerName: "버터 옐로우 가디건",
    innerId: "white",
    innerName: "화이트 슬리브 탑",
    bottomId: "light_denim",
    bottomName: "연청 데님 팬츠",
    topId: "butter_yellow",
    topName: "버터 옐로우",
    vibe: "화사하고 러블리한 감성",
    keyItem: "소프트 버터 가디건 & 화이트 이너 & 크롭 연청 팬츠",
    stylingPoints: [
      "버터 가디건의 부드러운 색감과 화이트 이너의 깨끗함이 피부 톤을 화사하게 톤업",
      "연청 데님의 산뜻함이 더해져 야외 카페나 공원에서 사진이 가장 잘 나오는 컬러 조합",
      "화이트 스니커즈와 앙증맞은 미니 숄더백 추천"
    ]
  },
  {
    id: "formal_black_cream",
    tpo: "formal",
    tpoName: "격식 / 하객룩",
    title: "품격 있는 흑백 앙상블",
    subtitle: "결혼식, 호텔 디너, 중요한 프레젠테이션을 위한 단정함",
    outerId: "black",
    outerName: "테일러드 블랙 블레이저",
    innerId: "white",
    innerName: "화이트 실크 블라우스/셔츠",
    bottomId: "cream",
    bottomName: "크림 와이드 슬랙스",
    topId: "black",
    topName: "블랙",
    vibe: "하이엔드 모던 클래식",
    keyItem: "테일러드 블랙 자켓 & 화이트 이너 & 크림 와이드 슬랙스",
    stylingPoints: [
      "블랙 자켓과 화이트 셔츠의 단정한 V존에 크림 하의를 매치해 무겁지 않고 우아한 분위기 유지",
      "또렷한 실루엣과 고급스러운 명도 대비로 하객룩 및 격식 자리 올킬",
      "심플한 골드 이어링이나 진주 악센트로 고급스러움 극대화"
    ]
  },
  {
    id: "onemile_gray_gray",
    tpo: "onemile",
    tpoName: "원마일웨어 / 힐링",
    title: "트렌디한 멜란지 셋업 이지룩",
    subtitle: "집 근처 카페나 산책, 공항에서도 멋스러운 원마일웨어",
    outerId: "black",
    outerName: "블랙 라이트 베스트/패딩조끼",
    innerId: "melange_gray",
    innerName: "멜란지 스웨트셔츠",
    bottomId: "charcoal",
    bottomName: "차콜 스웨트 조거팬츠",
    topId: "melange_gray",
    topName: "멜란지 그레이",
    vibe: "스타일리시 컴포트",
    keyItem: "블랙 패딩조끼 & 멜란지 맨투맨 & 차콜 조거팬츠",
    stylingPoints: [
      "멜란지 맨투맨에 블랙 패딩 조끼를 걸쳐 보온성과 스트릿 감성을 동시에 확보",
      "차콜 조거팬츠가 하체를 슬림하게 잡아주어 부해 보이지 않는 완벽한 원마일웨어",
      "볼캡(야구모자)과 두툼한 삭스에 스니커즈를 매치하면 트렌디한 무드 완성"
    ]
  }
];

// 요일별 추천 테마
export const WEEKDAY_THEMES = [
  { day: 0, name: "일요일", mood: "재충전 & 여유로운 브런치", recommendTpo: "onemile", tip: "편안한 핏의 코디로 한 주를 차분하게 마무리하세요." },
  { day: 1, name: "월요일", mood: "월요병 극복! 당당한 출근", recommendTpo: "office", tip: "신뢰감을 주는 네이비나 단정한 모노톤으로 활기찬 한 주를 시작하세요." },
  { day: 2, name: "화요일", mood: "집중과 몰입의 업무 데이", recommendTpo: "office", tip: "구김 없는 편안한 슬랙스와 셔츠로 업무 효율을 높이세요." },
  { day: 3, name: "수요일", mood: "한 주의 중간, 캐주얼 데이", recommendTpo: "casual", tip: "산뜻한 카키나 데님으로 기분 전환을 시도해보세요." },
  { day: 4, name: "목요일", mood: "세련된 도심 속 비즈니스", recommendTpo: "office", tip: "차콜과 크림의 모던한 조합으로 프로페셔널한 인상을 남기세요." },
  { day: 5, name: "금요일", mood: "설레는 불금 & 퇴근길 약속", recommendTpo: "date", tip: "오피스에서도 어울리고 저녁 약속에서도 빛나는 스마트 캐주얼!" },
  { day: 6, name: "토요일", mood: "자유로운 주말 나들이 & 데이트", recommendTpo: "date", tip: "사진이 잘 나오는 화사한 컬러 조합으로 주말을 만끽하세요." }
];

// =========================================================================
// 🧳 비즈니스 출장 및 힐링 휴가 캡슐 옷장 패킹 가이드
// =========================================================================

// 1. 비즈니스 출장용 패킹 가이드
export const BUSINESS_PACKING_GUIDE = {
  type: "business",
  title: "비즈니스 출장 스마트 캡슐 패킹 공식",
  rule: "3-2-1 스마트 비즈니스 캡슐 (기본 뉴트럴 중심)",
  description: "미팅, 오피스 워크, 공식 디너까지 구김 없는 뉴트럴 톤(네이비, 차콜, 크림, 베이지) 위주로 구성하여 짐 무게는 최소화하고 프로페셔널한 신뢰감을 극대화합니다.",
  getChecklistItems: (days = 4) => {
    const topCount = Math.min(Math.max(2, Math.ceil(days * 0.6)), 5);
    const bottomCount = Math.min(Math.max(1, Math.ceil(days * 0.4)), 3);
    const outerCount = days >= 4 ? 2 : 1;
    return [
      { id: "biz_top_dress", category: "tops", name: `링클프리 드레스 셔츠/블라우스 (${Math.ceil(topCount * 0.6)}벌)`, count: `${Math.ceil(topCount * 0.6)}벌`, essential: true },
      { id: "biz_top_knit", category: "tops", name: `단정한 이너 니트/카라티 (${Math.floor(topCount * 0.4)}벌)`, count: `${Math.floor(topCount * 0.4)}벌`, essential: true },
      { id: "biz_bottom_slacks", category: "bottoms", name: `구김 없는 슬랙스/치노팬츠 (${bottomCount}벌)`, count: `${bottomCount}벌`, essential: true },
      { id: "biz_outer_blazer", category: "outers", name: `테일러드 블레이저 자켓 (${outerCount}벌)`, count: `${outerCount}벌`, essential: true },
      { id: "biz_shoes_formal", category: "shoes", name: "단정한 비즈니스 로퍼 또는 더비 슈즈", count: "1켤레", essential: true },
      { id: "biz_shoes_comfy", category: "shoes", name: "이동용 편안한 미니멀 스니커즈", count: "1켤레", essential: false },
      { id: "biz_acc_belt", category: "accessories", name: "단정한 가죽 벨트 & 비즈니스 시계", count: "1세트", essential: true },
      { id: "biz_acc_umbrella", category: "accessories", name: "휴대용 초경량 3단 우산", count: "1개", essential: true },
      { id: "biz_acc_laptop", category: "accessories", name: "노트북/태블릿 및 충전 어댑터", count: "1세트", essential: true },
      { id: "biz_acc_card", category: "accessories", name: "명함 케이스 및 휴대용 구김방지 스프레이", count: "1개", essential: false }
    ];
  }
};

// 2. 힐링 & 휴가 여행용 패킹 가이드
export const VACATION_PACKING_GUIDE = {
  type: "vacation",
  title: "힐링 & 휴가 여행 감성 패킹 공식",
  rule: "편안함 + 인생샷 컬러 포인트 캡슐",
  description: "많이 걷고 사진 찍을 일이 많은 휴가! 사진이 화사하게 나오는 포인트 상의와 편안한 데님/이지 팬츠, 자외선 차단 아이템으로 가볍고 설레는 여행 캐리어를 완성합니다.",
  getChecklistItems: (days = 4) => {
    const topCount = Math.min(Math.max(2, Math.ceil(days * 0.7)), 6);
    const bottomCount = Math.min(Math.max(2, Math.ceil(days * 0.45)), 3);
    const outerCount = days >= 3 ? 2 : 1;
    return [
      { id: "vac_top_photo", category: "tops", name: `인생샷 포인트 상의 (버터/카멜/올리브 등 ${Math.ceil(topCount * 0.5)}벌)`, count: `${Math.ceil(topCount * 0.5)}벌`, essential: true },
      { id: "vac_top_basic", category: "tops", name: `베이직 편안한 티셔츠/민소매 (${Math.floor(topCount * 0.5)}벌)`, count: `${Math.floor(topCount * 0.5)}벌`, essential: true },
      { id: "vac_bottom_denim", category: "bottoms", name: `활동성 좋은 데님 팬츠/조거/쇼츠 (${bottomCount}벌)`, count: `${bottomCount}벌`, essential: true },
      { id: "vac_outer_light", category: "outers", name: `일교차/냉방 대비 가벼운 바람막이 또는 가디건 (${outerCount}벌)`, count: `${outerCount}벌`, essential: true },
      { id: "vac_shoes_walking", category: "shoes", name: "발이 편한 데일리 쿠셔닝 스니커즈", count: "1켤레", essential: true },
      { id: "vac_shoes_sandals", category: "shoes", name: "휴양지용 샌들 또는 슬립온", count: "1켤레", essential: false },
      { id: "vac_acc_sun", category: "accessories", name: "자외선 차단 선글라스 & 감성 볼캡/버킷햇", count: "1세트", essential: true },
      { id: "vac_acc_battery", category: "accessories", name: "대용량 휴대용 보조배터리 & 카메라", count: "1개", essential: true },
      { id: "vac_acc_crossbag", category: "accessories", name: "가벼운 미니 크로스백/에코백", count: "1개", essential: true },
      { id: "vac_acc_umbrella", category: "accessories", name: "휴대용 초경량 양우산 (우천 & 햇빛 대비)", count: "1개", essential: true }
    ];
  }
};

// 하위 호환용 기본 가이드
export const CAPSULE_PACKING_GUIDE = {
  rule: "스마트 캡슐 패킹 공식",
  description: "여행 일수와 목적(출장 vs 휴가)에 맞춰 짐은 가볍게, 스타일은 다채롭게 연출합니다.",
  checklistItems: BUSINESS_PACKING_GUIDE.getChecklistItems(4)
};

// =========================================================================
// 👔 비즈니스 출장용 코디 스케줄 풀 (Pool)
// =========================================================================
export const BUSINESS_SCHEDULE_POOL = [
  {
    themeType: "depart",
    title: "출발 및 현지 도착 (편안한 스마트 캐주얼)",
    outerId: "black",
    outerName: "블랙 가디건/자켓",
    innerId: "melange_gray",
    innerName: "멜란지 그레이 니트",
    bottomId: "black",
    bottomName: "블랙 슬랙스",
    topId: "melange_gray",
    topName: "멜란지 그레이",
    role: "비행기/기차 장시간 이동에도 구김 없고 편안한 이동 룩",
    tip: "가벼운 멜란지 니트에 블랙 아우터와 신축성 있는 링클프리 슬랙스 매칭"
  },
  {
    themeType: "meeting",
    title: "핵심 비즈니스 미팅 & 프레젠테이션",
    outerId: "navy",
    outerName: "네이비 블레이저",
    innerId: "white",
    innerName: "화이트 드레스셔츠",
    bottomId: "beige",
    bottomName: "베이지 치노/슬랙스",
    topId: "navy",
    topName: "네이비 블레이저",
    role: "신뢰감과 전문성을 주는 불패의 비즈니스 포멀",
    tip: "단정한 네이비 자켓에 화이트 셔츠와 밝은 베이지 팬츠로 스마트하고 깔끔한 인상"
  },
  {
    themeType: "office",
    title: "현지 파트너사 오피스 워크 & 협업",
    outerId: "charcoal",
    outerName: "차콜 가디건/자켓",
    innerId: "cream",
    innerName: "크림 아이보리 셔츠",
    bottomId: "charcoal",
    bottomName: "차콜 그레이 슬랙스",
    topId: "cream",
    topName: "크림 아이보리 셔츠",
    role: "도회적이고 지적인 모던 오피스 룩",
    tip: "차콜 아우터 속에 화사한 크림 셔츠와 톤온톤 차콜 하의로 지적이고 프로페셔널한 연출"
  },
  {
    themeType: "dinner",
    title: "공식 네트워킹 만찬 & 디너",
    outerId: "camel",
    outerName: "카멜 울 블레이저",
    innerId: "black",
    innerName: "블랙 파인니트",
    bottomId: "dark_brown",
    bottomName: "다크 브라운 팬츠",
    topId: "camel",
    topName: "카멜 니트/자켓",
    role: "럭셔리하고 품격 있는 웜톤 앙상블",
    tip: "고급스러운 카멜 아우터와 블랙 이너, 다크 브라운으로 격조 높은 저녁 모임 참석"
  },
  {
    themeType: "casual",
    title: "현장 시찰 & 자유 시장조사",
    outerId: "olive_khaki",
    outerName: "올리브 카키 사파리",
    innerId: "white",
    innerName: "화이트 라운드 티",
    bottomId: "mid_denim",
    bottomName: "중청 데님",
    topId: "olive_khaki",
    topName: "올리브 카키",
    role: "감성적이면서 활동성 높은 어반 캐주얼",
    tip: "많이 걸어도 편안한 데님 팬츠와 화이트 이너, 내추럴한 카키 아우터"
  },
  {
    themeType: "wrapup",
    title: "프로젝트 랩업 미팅 & 선물 쇼핑",
    outerId: "navy",
    outerName: "네이비 자켓",
    innerId: "cream",
    innerName: "크림 이너 탑",
    bottomId: "melange_gray",
    bottomName: "세련된 그레이 슬랙스",
    topId: "navy",
    topName: "네이비 탑",
    role: "1일차 하의와 2일차 상의를 믹스앤매치한 스마트 룩",
    tip: "캡슐 옷장의 묘미! 앞선 아이템을 교차 조합해 짐 부담을 줄입니다."
  },
  {
    themeType: "return",
    title: "체크아웃 & 귀국 비행 (릴랙스 이지웨어)",
    outerId: "charcoal",
    outerName: "차콜 집업/자켓",
    innerId: "butter_yellow",
    innerName: "소프트 버터 이너",
    bottomId: "black",
    bottomName: "블랙 팬츠",
    topId: "butter_yellow",
    topName: "소프트 버터",
    role: "화사하면서도 오염 걱정 없는 귀국 룩",
    tip: "얼굴에 생기를 주는 버터 이너와 차콜 아우터, 편안한 블랙 하의로 산뜻하게 귀국"
  }
];

// =========================================================================
// 🌴 힐링 & 휴가 여행용 코디 스케줄 풀 (Pool)
// =========================================================================
export const VACATION_SCHEDULE_POOL = [
  {
    themeType: "depart",
    title: "설레는 출발 & 공항 룩 (감성 원마일웨어)",
    outerId: "charcoal",
    outerName: "차콜 집업 점퍼",
    innerId: "melange_gray",
    innerName: "멜란지 그레이 맨투맨",
    bottomId: "black",
    bottomName: "블랙 조거/슬랙스",
    topId: "melange_gray",
    topName: "멜란지 그레이 맨투맨/니트",
    role: "장시간 비행/기차 탑승에도 핏이 무너지지 않는 컴포트 룩",
    tip: "편안하면서도 힙한 모노톤 셋업 무드로 세련된 공항 패션 연출"
  },
  {
    themeType: "hotplace",
    title: "핫플레이스 투어 & 인생샷 명소 (화사한 바캉스)",
    outerId: "butter_yellow",
    outerName: "버터 옐로우 가디건",
    innerId: "white",
    innerName: "화이트 슬리브 탑",
    bottomId: "light_denim",
    bottomName: "연청 데님 팬츠",
    topId: "butter_yellow",
    topName: "버터 옐로우 니트/셔츠",
    role: "자연광 아래서 피부 톤을 밝혀주는 사진 최고 명품 배색",
    tip: "파란 하늘과 바다, 도심 랜드마크 어디서 찍어도 화보 같은 화사함"
  },
  {
    themeType: "cafe",
    title: "감성 카페 & 로컬 마켓 산책 (얼씨 내추럴)",
    outerId: "olive_khaki",
    outerName: "올리브 사파리 셔츠",
    innerId: "cream",
    innerName: "크림 이너 티",
    bottomId: "beige",
    bottomName: "베이지 치노/하프팬츠",
    topId: "olive_khaki",
    topName: "올리브 카키 셔츠",
    role: "자연스럽고 편안한 아메카지 & 여행자 무드",
    tip: "내추럴한 카키 아우터와 크림 이너, 베이지의 조화로 여유로운 골목길 탐방에 제격"
  },
  {
    themeType: "activity",
    title: "자연 힐링 & 야외 액티비티 (스포티 캐주얼)",
    outerId: "navy",
    outerName: "네이비 윈드브레이커",
    innerId: "white",
    innerName: "화이트 기능성 티",
    bottomId: "mid_denim",
    bottomName: "중청 데님",
    topId: "cream",
    topName: "크림 화이트 반팔/후디",
    role: "산책, 테마파크, 야외 투어에 최적화된 청량한 데일리",
    tip: "바람막이 아우터에 화이트 티셔츠, 청량한 데님을 매치하고 편한 워킹화 착용"
  },
  {
    themeType: "dinner",
    title: "로맨틱 야경 & 분위기 있는 맛집 디너",
    outerId: "camel",
    outerName: "카멜 가디건/자켓",
    innerId: "cream",
    innerName: "크림 소프트 니트",
    bottomId: "dark_brown",
    bottomName: "다크 브라운 팬츠/스커트",
    topId: "camel",
    topName: "카멜 실크/소프트 니트",
    role: "은은한 조명 아래서 가장 매력적인 톤온톤 무드",
    tip: "깊이감 있는 카멜과 크림 이너, 다크 브라운 조합으로 고급스러운 루프탑 바 & 레스토랑 완벽 대응"
  },
  {
    themeType: "shopping",
    title: "도심 쇼핑 & 전시/문화 탐방 (어반 시크)",
    outerId: "black",
    outerName: "블랙 미니멀 자켓",
    innerId: "white",
    innerName: "화이트 이너 셔츠",
    bottomId: "cream",
    bottomName: "크림 와이드 슬랙스",
    topId: "black",
    topName: "미니멀 블랙 탑",
    role: "모던하고 감각적인 시티 투어룩",
    tip: "블랙 자켓 & 화이트 이너 & 크림 하의의 세련된 대비로 도심 속 백화점과 갤러리 어디서나 시선 집중"
  },
  {
    themeType: "return",
    title: "아쉬운 마지막 날 & 편안한 귀국",
    outerId: "navy",
    outerName: "소프트 네이비 가디건",
    innerId: "melange_gray",
    innerName: "멜란지 그레이 티",
    bottomId: "melange_gray",
    bottomName: "그레이 팬츠",
    topId: "navy",
    topName: "소프트 네이비 가디건",
    role: "1일차의 그레이 하의와 매칭한 스마트 캡슐 귀국 룩",
    tip: "가볍게 짐을 싸고 편안하게 귀가할 수 있는 릴랙스 핏"
  }
];



