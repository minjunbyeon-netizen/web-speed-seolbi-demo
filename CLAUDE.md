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
- 폰트: Black Han Sans(임팩트 헤드라인·숫자) + Noto Sans KR(본문). Pretendard·그라디언트·이모지·pill 미사용
- 한글 자간 음수, 단일 box-shadow, 라운드 6px

## 로컬 미리보기
```bash
python -m http.server 8091 --directory public   # http://localhost:8091
```

## 이미지
- `public/images/` — 클라이언트 네이버 블로그(fill2985)에서 받은 실제 작업 사진 12장.
  - `drain-07`(스프링 릴) = 히어로 배경 / `toilet-05`(RIDGID 관통기)·`toilet-04`(CCTV 내시경)·`drain-07` = 장비 섹션
  - 서비스 카드·갤러리에 분산 배치. `drain-02/04/06` 등은 블로거가 중앙 모자이크한 현장컷.
- 전화번호 `010-8287-2985` 는 클라이언트 작업트럭에 공개된 **실제 대표번호**(toilet-01 사진에서 확인).

## 주의
- 실적·사업자등록번호·주소는 **가상**(데모). 실서비스 전 실제 정보로 교체 필요.
- 기능 없음(목업). 폼 제출·전화는 화면만, 서버 전송 없음.
- 섹션: 톱바 · 헤더 · 히어로(풀블리드) · 마퀴 · 신뢰지표 · 서비스6(이미지) · 장비/강점 · 작업과정 · 시공사례 갤러리 · 서비스지역 · 후기 · 견적문의 · 푸터
