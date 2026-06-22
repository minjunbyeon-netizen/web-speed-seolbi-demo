# speed-seolbi-demo — 스피드설비 데모 목업

> 부산·경남 하수구·배관 막힘 해결 업체 **스피드설비** 데모 목업 홈페이지.
> 정적 HTML/CSS/JS, 빌드·백엔드·DB 없음. 콘텐츠는 네이버 블로그(fill2985) 기반.

## 스택
- 정적 HTML/CSS/JS(바닐라). 외부 의존성: Google Fonts(Black Han Sans / Noto Sans KR)만.
- 진입점 `public/index.html` (한 페이지 롱스크롤 + 앵커 내비)
- `public/style.css` — CSS 변수 토큰 디자인 시스템
- `public/main.js` — 모바일 내비·스크롤 등장·카운트업·폼 목업(전송 X)
- `docs/blog-research.md` — 블로그 크롤링 정리(콘텐츠 출처)

## 디자인 토큰 (본사 룰 준수)
- 색: 딥블루 `#0c2f4a` · 오렌지 CTA `#f26419` · 미스트 `#f3f6f9`
- 폰트: **Pretendard Variable 1종**(본사 룰 design-block §2.1 강제 · 프리셋 C 마케팅). 임팩트 숫자·히어로=weight 900, 헤딩=800, 강조=700, 본문=400. 500/600 미사용. 그라디언트·이모지·pill 미사용
- 자간: 본문 -0.02em · 헤딩 -0.02em · 히어로 -0.03em (음수 표준). 행간: 본문 1.6 · 헤딩 1.2 · 히어로 1.1. 단일 box-shadow, 라운드 8px(--radius)
- CDN: Pretendard Variable dynamic-subset (`cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9`). 옛 Black Han Sans·Noto Sans KR(Google Fonts)는 룰 §2.1 위반이라 2026-06-22 교체

## 로컬 미리보기
```bash
python -m http.server 8091 --directory public   # http://localhost:8091
```

## 이미지
- `public/images/` — 두 출처 혼합:
  - **실사진(`drain-01,07` · `toilet-01~05`)**: 클라이언트 네이버 블로그(fill2985)에서 수집. `drain-07`(스프링 릴)=히어로 배경 / `toilet-05`(RIDGID)·`toilet-04`(CCTV)·`drain-07`=장비 섹션 / 변기·CCTV 등 서비스카드·갤러리.
  - **무료 스톡(`stock-*` 5장, Pexels)**: 블로거 모자이크 현장컷을 대체. `stock-drainage`(하수구)·`stock-pipes`(화장실배관)·`stock-water`(우수관)=서비스카드 / `stock-sinkdrain`·`stock-splash`=갤러리. Pexels License(무료 상업이용·출처표기 불요).
- 전화번호 `010-8287-2985` 는 클라이언트 작업트럭에 공개된 **실제 대표번호**(toilet-01 사진에서 확인).

## 주의
- 실적·사업자등록번호·주소는 **가상**(데모). 실서비스 전 실제 정보로 교체 필요.
- 기능 없음(목업). 폼 제출·전화는 화면만, 서버 전송 없음.
- 섹션: 톱바 · 헤더 · 히어로(풀블리드) · 마퀴 · 신뢰지표 · 서비스6(이미지) · 장비/강점 · 작업과정 · **비용 안내+안심약속(PRICING)** · **시공사례=현장 한마디 9곳(writeplz `9곳의 한 마디` 패턴 이식, 현장사진 배경+다크 오버레이(rgba 8,28,44,0.55)+지역명)** · 서비스지역 · 후기 · **신뢰밴드(네이버 평점/블로그·플레이스 링크)** · 견적문의 · 푸터
- 상담 채널: 전화 `tel:` + **카카오톡 채널**(우측 플로팅·히어로·문의 "사진 보내고 견적받기"). 카톡 링크 `http://pf.kakao.com/_speedseolbi` 는 **가상 placeholder** — 실서비스 전 실제 채널로 교체. 네이버 블로그 링크(`blog.naver.com/fill2985`)만 실제, 플레이스 후기 링크는 `#` placeholder.
- 비용 금액(5만원·8만원 등)·평점 4.9 는 **가상 예시**. 실서비스 전 실제 정찰가·실제 평점으로 교체 필요.
