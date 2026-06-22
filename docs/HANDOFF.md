# HANDOFF - 2026-06-22 22:36

> 프로젝트: **speed-seolbi-demo** (스피드설비 데모 목업 — 부산·경남 하수구/배관 막힘 업체)
> 작업 위치: `C:\dev\web\speed-seolbi-demo` (※ 세션 cwd 는 `C:\dev\web\homepage` 였으나 실제 작업은 전부 speed-seolbi-demo)
> 배포: GitHub Pages 공개. 라이브 `https://minjunbyeon-netizen.github.io/web-speed-seolbi-demo/` · 레포 `minjunbyeon-netizen/web-speed-seolbi-demo` (push→Actions 자동배포, ~1분)

## 완료
- [x] GitHub 레포 생성 + GitHub Pages 공개 배포 (`.github/workflows/pages.yml`, configure-pages enablement:true)
- [x] 모바일 마감 메타 — `theme-color #0c2f4a`·`apple-mobile-web-app-*`·`viewport-fit=cover`·`apple-touch-icon` + 하단바/FOMO/맨위로 `env(safe-area-inset-bottom)`
- [x] 명지동 9곳 카드 사진 교체 — 홍보문구 박힌 `drain-01.jpg` → 깨끗한 `toilet-05.jpg`(RIDGID). `drain-01.jpg` 는 고아(미사용)로 잔존
- [x] 에뮬레이터(emulator-5554) 실기기 확인 — 전화상담 tel: 다이얼러 동작, 카톡상담 `pf.kakao.com/_speedseolbi` 이동(채널 placeholder라 빈 페이지)
- [x] **모바일 컴팩트** (≤680px 전용 오버라이드, PC 무영향) — 섹션 패딩·갭·히어로 높이·카드 여백·이미지 비율(서비스 16:9, 갤러리 2:1) 축소. 세로 ~18% 단축
- [x] **작업과정 초압축** — 카드 → 한 줄 grid 행(번호 34px + 제목·설명). 4스텝 한 화면
- [x] **9곳 한마디 = 폰에서 네이버 리뷰 스타일** — 프로필 아바타+닉네임(`{지역} 김**`)+별점+날짜+리뷰본문+키워드칩(pill+✓)+사진 썸네일. 데스크톱은 기존 이미지오버레이 카드 유지(`.vc-review{display:none}`)
- [x] **리뷰 다양화** — 별점 7×5+2×4(삼방동·강서구 ★★★★☆)=평균 4.78 → 신뢰밴드 `4.8 (후기 9)` 동기화. 카드별 네이버식 감정 키워드칩 1개씩 추가(친절해요·시간약속·꼼꼼해요 등 9개 상이)
- [x] **썸네일 eager 로딩** — 첫 3카드(명지동·하단동·삼방동) `loading="eager"`(명지동 `fetchpriority="high"`), 나머지 lazy, 전 카드 `decoding="async"`, 썸네일 플레이스홀더 `--line`

> 모든 변경 commit+push 완료, 라이브 반영·검증 완료. 미커밋/미배포 작업 없음.

## 진행중
- (없음) — 마지막 작업까지 전부 완료·배포·검증됨

## 대기 (사용자 미요청, 다음 제안으로만 제시됨)
- [ ] 리뷰 본문 문구를 더 길고 자연스럽게 보강
- [ ] 에뮬폰으로 다양화된 리뷰 최종 확인(playwright 모바일로는 검증 완료)

## 결정사항 / 주의
- **단일 반응형 1소스** — 별도 m.html 없음. ≤680px CSS 오버라이드로 모바일 처리. PC 절대 건드리지 않음(작업과정 4열·리뷰 이미지카드·이미지 16:9 유지 확인됨)
- **전부 가상 데이터(데모)** — 실서비스 전 교체 필수: ① 카톡 채널 `pf.kakao.com/_speedseolbi`(placeholder) ② 비용 5만/8만원·평점 4.8 ③ 리뷰 닉네임·별점·날짜·키워드 ④ FOMO 출동 피드·누적 카운터 ⑤ 사업자등록번호·주소
- **실제 정보** — 전화 `010-8287-2985`(작업트럭 공개번호), 네이버 블로그 `blog.naver.com/fill2985`. 네이버 플레이스 후기 링크는 `#` placeholder
- **CSS 캐시 주의** — `style.css` 무버전 링크라 배포 후 브라우저/에뮬 캐시가 옛 CSS 유지(max-age 600s). 검증 시 playwright 는 스타일시트 링크에 `?bust=` 주입, 에뮬은 `pm clear com.android.chrome`(첫 실행 화면 뜸→"Stay signed out") 으로 강제 갱신
- **에뮬 스와이프 주의** — 다중 탭/하단 고정 콜바 때문에 스와이프가 탭전환·tel 다이얼러 유발. 섹션 이동은 `#process`·`#gallery` **앵커 URL** 로 점프가 안전
- 핵심 파일: `public/index.html`(섹션·9곳카드), `public/style.css`(토큰+≤680 오버라이드 2블록: "모바일 컴팩트" / "작업과정 초압축+네이버리뷰"), `public/main.js`(FOMO·reveal), `CLAUDE.md`(모바일 섹션에 전 변경 기록)

## 다음 세션 권장 첫 프롬프트
`/resume`
