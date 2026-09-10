# 코딩 에이전트 실행 프롬프트 및 구현 가이드
**대상 도구:** Cursor, Claude Dev, Windsurf, v0, Bolt.new 또는 기타 LLM 코드 생성기

---

## 📌 지시문 (Prompt)

아래 명세와 포함된 JSON 데이터를 기반으로 **'상·하의 패션 컬러 매칭 웹 애플리케이션'**을 완성도 높은 단일 페이지(Single Page Application)로 구현해 주세요.

### 1. 기술 스택 권장
* React 또는 Next.js (TypeScript 권장) 또는 바닐라 HTML/JS + Tailwind CSS
* Lucide-react 아이콘 (선택 사항)
* 순수 인라인 SVG 벡터 그래픽 사용 (외부 이미지 링크 종속 금지)

---

### 2. 핵심 UI 컴포넌트 구성 요구사항

#### A. 비주얼 프리뷰 패널 (좌측 또는 상단)
1. **상의 SVG (티셔츠/셔츠):**
   * 상의의 메인 바디 영역 path에 `state.topColor`가 fill 스타일로 바인딩되어야 합니다.
   * 입체감을 위해 자연스러운 명암/주름 레이어가 반투명 오버레이(`fill="#000000" opacity="0.12"`)로 얹어져 있어야 합니다.
2. **하의 SVG (팬츠 / 스커트):**
   * `state.bottomType`('pants' | 'skirt')에 따라 실루엣이 조건부 렌더링되어야 합니다.
   * 메인 path에 `state.bottomColor`가 fill 스타일로 바인딩됩니다.
3. **인터랙티브 보조 컨트롤:**
   * 하의 형태 전환 토글: `[ 바지(Pants) ]` / `[ 스커트(Skirt) ]`
   * 상·하의 색상 맞바꾸기(Swap) 버튼 ⇄

#### B. 컨트롤 및 기준 컬러 선택 패널 (우측)
1. **기준 부위 토글:**
   * `[ 상의 색상 먼저 고르기 ]` vs `[ 하의 색상 먼저 고르기 ]`
2. **대표 컬러 팔레트 그리드:**
   * 아래 제공된 JSON의 15가지 대표 컬러 스와치를 3열 또는 5열 그리드로 나열합니다.
   * 각 스와치는 원형 또는 둥근 사각형 버튼이며 마우스 호버 및 클릭 시 선택 테두리(`ring-2 ring-blue-500` 등)가 활성화됩니다.
   * 스와치 내부에 색상명이 잘 보이도록 `textColor` 값을 폰트 색상으로 적용합니다.

#### C. 스마트 추천 컬러 제안 존 (하단 카드 리스트)
1. 기준 색상이 선택되면, 해당 색상의 `recommendations` 배열을 읽어와 가로 스크롤 또는 그리드 형태의 카드 4~5개로 표시합니다.
2. 추천 카드 내부 정보:
   * 추천 컬러 칩 미리보기
   * 컬러 명칭 (예: "크림 아이보리", "올리브 카키")
   * 스타일 무드 태그 (예: "클래식 캐주얼 정석", "청량한 마린룩")
3. **동작:** 추천 카드를 클릭하면 대상 부위(반대편 의류)의 색상이 즉시 변경되고, 현재 적용된 추천 카드에 '선택됨(Active)' 배지가 표시됩니다.

---

### 3. 상·하의 인라인 SVG 레퍼런스 코드

코딩 시 아래 SVG 구조를 기본 템플릿으로 활용하거나 더욱 디테일한 패션 일러스트로 확장해 주세요.

#### 상의 (T-Shirt) SVG 예시:
```svg
<svg viewBox="0 0 200 180" class="w-48 h-48 drop-shadow-md transition-colors duration-300">
  <!-- 베이스 컬러 레이어 -->
  <path d="M 40,40 L 70,20 Q 100,45 130,20 L 160,40 L 145,75 L 125,65 L 125,170 L 75,170 L 75,65 L 55,75 Z"
        fill="VAR_TOP_COLOR" stroke="#2D3748" stroke-width="3" stroke-linejoin="round"/>
  <!-- 넥라인 및 주름 음영 오버레이 -->
  <path d="M 70,20 Q 100,45 130,20" fill="none" stroke="#2D3748" stroke-width="3"/>
  <path d="M 75,65 L 75,170 M 125,65 L 125,170" stroke="#000000" stroke-opacity="0.1" stroke-width="4"/>
</svg>
```

#### 하의 - 바지 (Pants) SVG 예시:
```svg
<svg viewBox="0 0 200 220" class="w-48 h-56 drop-shadow-md transition-colors duration-300">
  <path d="M 70,10 L 130,10 L 135,210 L 105,210 L 100,60 L 95,210 L 65,210 Z"
        fill="VAR_BOTTOM_COLOR" stroke="#2D3748" stroke-width="3" stroke-linejoin="round"/>
  <!-- 벨트라인 및 센터 주름선 -->
  <line x1="70" y1="10" x2="130" y2="10" stroke="#2D3748" stroke-width="4"/>
  <line x1="100" y1="10" x2="100" y2="55" stroke="#000000" stroke-opacity="0.15" stroke-width="2"/>
</svg>
```

#### 하의 - 스커트 (Skirt) SVG 예시:
```svg
<svg viewBox="0 0 200 220" class="w-48 h-56 drop-shadow-md transition-colors duration-300">
  <path d="M 75,10 L 125,10 L 155,190 Q 100,205 45,190 Z"
        fill="VAR_BOTTOM_COLOR" stroke="#2D3748" stroke-width="3" stroke-linejoin="round"/>
  <!-- 벨트라인 및 주름 텍스처 -->
  <line x1="75" y1="10" x2="125" y2="10" stroke="#2D3748" stroke-width="4"/>
  <path d="M 85,15 L 75,185 M 100,15 L 100,195 M 115,15 L 125,185" stroke="#000000" stroke-opacity="0.12" stroke-width="2"/>
</svg>
```

---

### 4. 내장 컬러 룰셋 데이터 (JSON)

```json
{
  "version": "1.0.0",
  "updatedAt": "2026-09-10",
  "description": "실제 패션 스타일링에 최적화된 15가지 핵심 색상 및 상·하의 추천 배색 룰셋",
  "palette": [
    {
      "id": "white",
      "name": "화이트",
      "hex": "#FFFFFF",
      "textColor": "#000000",
      "recommendations": [
        {
          "id": "black",
          "name": "블랙",
          "hex": "#1E1E1E",
          "vibe": "모노톤 클래식"
        },
        {
          "id": "navy",
          "name": "네이비",
          "hex": "#1B2A4A",
          "vibe": "시원한 마린룩"
        },
        {
          "id": "beige",
          "name": "베이지",
          "hex": "#D7C9AA",
          "vibe": "소프트 내추럴"
        },
        {
          "id": "mid_denim",
          "name": "중청 데님",
          "hex": "#4A709C",
          "vibe": "캐주얼 정석"
        },
        {
          "id": "olive_khaki",
          "name": "올리브 카키",
          "hex": "#556B2F",
          "vibe": "내추럴 워크웨어"
        }
      ]
    },
    {
      "id": "black",
      "name": "블랙",
      "hex": "#1E1E1E",
      "textColor": "#FFFFFF",
      "recommendations": [
        {
          "id": "white",
          "name": "화이트",
          "hex": "#FFFFFF",
          "vibe": "선명한 흑백 대비"
        },
        {
          "id": "melange_gray",
          "name": "멜란지 그레이",
          "hex": "#9E9E9E",
          "vibe": "모던 미니멀"
        },
        {
          "id": "beige",
          "name": "베이지",
          "hex": "#D7C9AA",
          "vibe": "시크 뉴트럴"
        },
        {
          "id": "olive_khaki",
          "name": "올리브 카키",
          "hex": "#556B2F",
          "vibe": "어반 스트릿"
        },
        {
          "id": "light_denim",
          "name": "연청 데님",
          "hex": "#8EAEC4",
          "vibe": "경쾌한 캐주얼"
        }
      ]
    },
    {
      "id": "charcoal",
      "name": "차콜 그레이",
      "hex": "#383B3E",
      "textColor": "#FFFFFF",
      "recommendations": [
        {
          "id": "cream",
          "name": "크림",
          "hex": "#F4F1EA",
          "vibe": "부드러운 포멀"
        },
        {
          "id": "white",
          "name": "화이트",
          "hex": "#FFFFFF",
          "vibe": "단정한 오피스룩"
        },
        {
          "id": "mid_denim",
          "name": "중청 데님",
          "hex": "#4A709C",
          "vibe": "스마트 캐주얼"
        },
        {
          "id": "black",
          "name": "블랙",
          "hex": "#1E1E1E",
          "vibe": "딥 톤온톤"
        }
      ]
    },
    {
      "id": "melange_gray",
      "name": "멜란지 그레이",
      "hex": "#9E9E9E",
      "textColor": "#000000",
      "recommendations": [
        {
          "id": "navy",
          "name": "네이비",
          "hex": "#1B2A4A",
          "vibe": "신뢰감 있는 클래식"
        },
        {
          "id": "black",
          "name": "블랙",
          "hex": "#1E1E1E",
          "vibe": "깔끔한 스트릿 미니멀"
        },
        {
          "id": "white",
          "name": "화이트",
          "hex": "#FFFFFF",
          "vibe": "편안한 이지웨어"
        },
        {
          "id": "deep_denim",
          "name": "생지 데님",
          "hex": "#253342",
          "vibe": "정돈된 데일리"
        }
      ]
    },
    {
      "id": "navy",
      "name": "네이비",
      "hex": "#1B2A4A",
      "textColor": "#FFFFFF",
      "recommendations": [
        {
          "id": "beige",
          "name": "베이지",
          "hex": "#D7C9AA",
          "vibe": "클래식 캐주얼 정석"
        },
        {
          "id": "white",
          "name": "화이트",
          "hex": "#FFFFFF",
          "vibe": "청량한 대비"
        },
        {
          "id": "melange_gray",
          "name": "멜란지 그레이",
          "hex": "#9E9E9E",
          "vibe": "단정한 출근룩"
        },
        {
          "id": "olive_khaki",
          "name": "올리브 카키",
          "hex": "#556B2F",
          "vibe": "아메카지 무드"
        },
        {
          "id": "cream",
          "name": "크림",
          "hex": "#F4F1EA",
          "vibe": "소프트 클래식"
        }
      ]
    },
    {
      "id": "sky_blue",
      "name": "스카이블루",
      "hex": "#8FA9C4",
      "textColor": "#000000",
      "recommendations": [
        {
          "id": "white",
          "name": "화이트",
          "hex": "#FFFFFF",
          "vibe": "맑고 깨끗한 톤"
        },
        {
          "id": "navy",
          "name": "네이비",
          "hex": "#1B2A4A",
          "vibe": "감각적인 블루 톤온톤"
        },
        {
          "id": "beige",
          "name": "베이지",
          "hex": "#D7C9AA",
          "vibe": "산뜻한 댄디룩"
        },
        {
          "id": "charcoal",
          "name": "차콜 그레이",
          "hex": "#383B3E",
          "vibe": "지적인 비즈니스"
        }
      ]
    },
    {
      "id": "cream",
      "name": "크림 아이보리",
      "hex": "#F4F1EA",
      "textColor": "#000000",
      "recommendations": [
        {
          "id": "brown",
          "name": "모카 브라운",
          "hex": "#5C4033",
          "vibe": "따뜻한 웜 톤온톤"
        },
        {
          "id": "olive_khaki",
          "name": "올리브 카키",
          "hex": "#556B2F",
          "vibe": "자연스러운 얼씨룩"
        },
        {
          "id": "navy",
          "name": "네이비",
          "hex": "#1B2A4A",
          "vibe": "단정한 콘트라스트"
        },
        {
          "id": "mid_denim",
          "name": "중청 데님",
          "hex": "#4A709C",
          "vibe": "화사한 일상룩"
        }
      ]
    },
    {
      "id": "beige",
      "name": "베이지",
      "hex": "#D7C9AA",
      "textColor": "#000000",
      "recommendations": [
        {
          "id": "navy",
          "name": "네이비",
          "hex": "#1B2A4A",
          "vibe": "실패 없는 베스트 조합"
        },
        {
          "id": "white",
          "name": "화이트",
          "hex": "#FFFFFF",
          "vibe": "온화한 미니멀"
        },
        {
          "id": "brown",
          "name": "모카 브라운",
          "hex": "#5C4033",
          "vibe": "깊이감 있는 톤온톤"
        },
        {
          "id": "black",
          "name": "블랙",
          "hex": "#1E1E1E",
          "vibe": "단정하고 세련된 무드"
        }
      ]
    },
    {
      "id": "brown",
      "name": "모카 브라운",
      "hex": "#5C4033",
      "textColor": "#FFFFFF",
      "recommendations": [
        {
          "id": "cream",
          "name": "크림 아이보리",
          "hex": "#F4F1EA",
          "vibe": "고급스러운 라떼룩"
        },
        {
          "id": "beige",
          "name": "베이지",
          "hex": "#D7C9AA",
          "vibe": "클래식 톤온톤"
        },
        {
          "id": "sky_blue",
          "name": "스카이블루",
          "hex": "#8FA9C4",
          "vibe": "감각적인 컬러 믹스"
        },
        {
          "id": "mid_denim",
          "name": "중청 데님",
          "hex": "#4A709C",
          "vibe": "빈티지 캐주얼"
        }
      ]
    },
    {
      "id": "olive_khaki",
      "name": "올리브 카키",
      "hex": "#556B2F",
      "textColor": "#FFFFFF",
      "recommendations": [
        {
          "id": "white",
          "name": "화이트",
          "hex": "#FFFFFF",
          "vibe": "깔끔한 워크웨어"
        },
        {
          "id": "black",
          "name": "블랙",
          "hex": "#1E1E1E",
          "vibe": "시크한 밀리터리 믹스"
        },
        {
          "id": "beige",
          "name": "베이지",
          "hex": "#D7C9AA",
          "vibe": "아웃도어/어반 얼씨룩"
        },
        {
          "id": "navy",
          "name": "네이비",
          "hex": "#1B2A4A",
          "vibe": "단정한 컬러 블록"
        }
      ]
    },
    {
      "id": "sage_green",
      "name": "세이지 민트",
      "hex": "#9CAF88",
      "textColor": "#000000",
      "recommendations": [
        {
          "id": "white",
          "name": "화이트",
          "hex": "#FFFFFF",
          "vibe": "청량한 페일톤"
        },
        {
          "id": "cream",
          "name": "크림",
          "hex": "#F4F1EA",
          "vibe": "부드럽고 싱그러운 룩"
        },
        {
          "id": "charcoal",
          "name": "차콜 그레이",
          "hex": "#383B3E",
          "vibe": "차분한 포인트룩"
        },
        {
          "id": "light_denim",
          "name": "연청 데님",
          "hex": "#8EAEC4",
          "vibe": "산뜻한 캐주얼"
        }
      ]
    },
    {
      "id": "burgundy",
      "name": "버건디/와인",
      "hex": "#6B1D2F",
      "textColor": "#FFFFFF",
      "recommendations": [
        {
          "id": "charcoal",
          "name": "차콜 그레이",
          "hex": "#383B3E",
          "vibe": "고혹적이고 우아한 배색"
        },
        {
          "id": "black",
          "name": "블랙",
          "hex": "#1E1E1E",
          "vibe": "강렬한 시크룩"
        },
        {
          "id": "beige",
          "name": "베이지",
          "hex": "#D7C9AA",
          "vibe": "따뜻한 가을 무드"
        },
        {
          "id": "cream",
          "name": "크림",
          "hex": "#F4F1EA",
          "vibe": "부드러운 포인트"
        }
      ]
    },
    {
      "id": "light_denim",
      "name": "연청 데님",
      "hex": "#8EAEC4",
      "textColor": "#000000",
      "recommendations": [
        {
          "id": "white",
          "name": "화이트",
          "hex": "#FFFFFF",
          "vibe": "가장 청량한 서머 캐주얼"
        },
        {
          "id": "melange_gray",
          "name": "멜란지 그레이",
          "hex": "#9E9E9E",
          "vibe": "편안한 스트릿"
        },
        {
          "id": "black",
          "name": "블랙",
          "hex": "#1E1E1E",
          "vibe": "선명한 콘트라스트"
        },
        {
          "id": "brown",
          "name": "모카 브라운",
          "hex": "#5C4033",
          "vibe": "트렌디한 빈티지"
        }
      ]
    },
    {
      "id": "mid_denim",
      "name": "중청 데님",
      "hex": "#4A709C",
      "textColor": "#FFFFFF",
      "recommendations": [
        {
          "id": "white",
          "name": "화이트",
          "hex": "#FFFFFF",
          "vibe": "불패의 데일리룩"
        },
        {
          "id": "cream",
          "name": "크림 아이보리",
          "hex": "#F4F1EA",
          "vibe": "부드러운 캐주얼"
        },
        {
          "id": "brown",
          "name": "모카 브라운",
          "hex": "#5C4033",
          "vibe": "아메리칸 빈티지"
        },
        {
          "id": "melange_gray",
          "name": "멜란지 그레이",
          "hex": "#9E9E9E",
          "vibe": "스포티 시크"
        }
      ]
    },
    {
      "id": "deep_denim",
      "name": "생지 딥데님",
      "hex": "#253342",
      "textColor": "#FFFFFF",
      "recommendations": [
        {
          "id": "melange_gray",
          "name": "멜란지 그레이",
          "hex": "#9E9E9E",
          "vibe": "단정한 캐주얼"
        },
        {
          "id": "white",
          "name": "화이트",
          "hex": "#FFFFFF",
          "vibe": "깔끔한 프레피룩"
        },
        {
          "id": "olive_khaki",
          "name": "올리브 카키",
          "hex": "#556B2F",
          "vibe": "워크웨어 무드"
        },
        {
          "id": "beige",
          "name": "베이지",
          "hex": "#D7C9AA",
          "vibe": "차분한 댄디룩"
        }
      ]
    }
  ]
}
```