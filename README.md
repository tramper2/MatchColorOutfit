# MatchFit Color - 옷알못들을 위한 컬러 제안

> **"매일 아침 옷 색상 조합이 막막한 옷알못들을 위한 인터랙티브 패션 컬러 매칭 서비스"**  
> 공식 제휴 쇼핑몰: [룩룩룩 바로가기](https://looklooklook.pe.kr/)

---

## 📌 프로젝트 소개

**MatchFit Color**는 상의나 하의 중 한 가지 기준 색상을 선택하면, 색채학 및 실제 패션 스타일링 규칙에 기반하여 가장 어울리는 반대편 의류 색상을 즉시 추천하고 인터랙티브 실루엣에 실시간 렌더링해 주는 반응형 웹 서비스입니다.

* **슬로건:** 옷알못들을 위한 컬러 제안
* **쇼핑몰 링크:** https://looklooklook.pe.kr/
* **GitHub 저장소:** [git@github.com:tramper2/MatchColorOutfit.git](git@github.com:tramper2/MatchColorOutfit.git)

---

## ✨ 핵심 기능

1. **실시간 비주얼 코디 프리뷰 (Vector SVG)**
   * 자연스러운 명암/주름 레이어가 적용된 상의(티셔츠/셔츠) 및 하의(슬랙스 바지/A라인 스커트) 벡터 일러스트.
   * 부드러운 색상 트랜지션 애니메이션 지원.
2. **하의 형태 실시간 전환**
   * 슬랙스 바지(Pants) ↔ A라인 스커트(Skirt) 원클릭 전환.
3. **기준 모드 전환**
   * `상의 먼저 고르기 (Top-First)` vs `하의 먼저 고르기 (Bottom-First)` 모드.
4. **15가지 핵심 패션 컬러 팔레트**
   * 화이트, 블랙, 차콜, 멜란지 그레이, 네이비, 스카이블루, 크림, 베이지, 모카 브라운, 올리브 카키, 세이지 민트, 버건디, 연청, 중청, 생지 딥데님.
5. **스마트 매칭 추천 카드 존**
   * 선택된 기준 색상과 조화를 이루는 4~5개 베스트 배색 카드.
   * 스타일 무드 태그(`#모던미니멀`, `#클래식캐주얼정석` 등) 및 코디 팁 제공.
   * 추천 카드 클릭 시 반대편 의류에 즉시 적용.
6. **편의 기능**
   * `상·하의 반전 (Swap)`: 상의와 하의 색상을 원클릭으로 맞바꿈.
   * `랜덤 조합 (Shuffle)`: 검증된 조합 중 랜덤 1세트 추천.
   * `코디 복사 (Copy)`: 현재 배색 조합 정보를 텍스트로 복사.
7. **룩룩룩 쇼핑몰 프로모션 연동**
   * 헤더, 배너 바, 추천 카드, 프로모션 쇼케이스, 푸터에 룩룩룩 쇼핑몰(`looklooklook.pe.kr`) 연결 동선 완비.

---

## 🚀 GitHub Pages (gh-pages) 배포 방법

이 프로젝트는 별도의 번들러 빌드 없이 순수 정적 웹(HTML/CSS/JS)으로 작동하므로 GitHub Pages에서 즉시 배포할 수 있습니다.

### 방법 1: GitHub Actions 자동 배포 (가장 권장)
저장소에 이미 `.github/workflows/deploy.yml`이 포함되어 있습니다.
1. GitHub 저장소(`Settings` > `Pages`)로 이동합니다.
2. **Build and deployment** 섹션의 **Source**를 `GitHub Actions`로 설정합니다.
3. 코드를 `main` 브랜치에 Push하면 자동으로 빌드 및 배포가 완료됩니다.
4. 배포 주소: `https://<깃허브_아이디>.github.io/MatchColorOutfit/`

### 방법 2: `main` 브랜치 직접 연결
1. 코드를 `main` 브랜치에 Push합니다.
2. GitHub 저장소의 `Settings` > `Pages`로 이동합니다.
3. **Source**를 `Deploy from a branch`로 선택하고, Branch를 `main`, 폴더를 `/ (root)`로 지정 후 Save합니다.

### 방법 3: npm gh-pages 패키지 사용
```bash
# 깃 리포지토리 초기화 및 커밋 (최초 1회)
git init
git add .
git commit -m "feat: Initial MatchFit Color service"
git remote add origin git@github.com:tramper2/MatchColorOutfit.git
git branch -M main
git push -u origin main

# gh-pages 브랜치로 배포
npm run deploy
```

---

## 💻 로컬 실행 방법

브라우저에서 `index.html`을 바로 열거나, 간단한 로컬 서버로 구동할 수 있습니다.

```bash
# npx serve로 로컬 서버 실행
npx serve .
# 또는 VS Code Live Server 확장 사용
```
브라우저에서 `http://localhost:3000` 접속.
