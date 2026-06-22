/* 스피드설비 — 데모 인터랙션 (목업: 실제 전송 없음) */
(function () {
  "use strict";

  /* ---------- 모바일 내비 토글 ---------- */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.classList.toggle("active", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- 헤더 그림자 + 맨위로 ---------- */
  var header = document.getElementById("siteHeader");
  var toTop = document.getElementById("toTop");
  window.addEventListener("scroll", function () {
    var y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 10);
    if (toTop) toTop.classList.toggle("show", y > 600);
  });

  /* ---------- 스크롤 등장 ---------- */
  var revealTargets = document.querySelectorAll(
    ".service-card, .why-item, .process-step, .price-card, .assure-item, .voice-card, .area-inner, .section-head"
  );
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- 통계 카운트업 ---------- */
  var counters = document.querySelectorAll(".stat strong[data-count]");
  function runCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1400, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.floor(eased * target);
      el.textContent = val.toLocaleString("ko-KR") + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString("ko-KR") + suffix;
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window && counters.length) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { runCount(e.target); co.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* ---------- 견적 폼 (목업 제출) ---------- */
  var form = document.getElementById("contactForm");
  var msg = document.getElementById("formMsg");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#name").value.trim();
      var phone = form.querySelector("#phone").value.trim();
      if (!name || !phone) {
        msg.textContent = "성함과 연락처를 입력해 주세요.";
        return;
      }
      msg.textContent = name + "님, 접수되었습니다. 빠르게 연락드리겠습니다. (데모 — 실제 전송되지 않습니다)";
      form.reset();
    });
  }

  /* ---------- FOMO: 실시간 출동 토스트 (목업 — 가상 데이터) ---------- */
  var toast = document.getElementById("liveToast");
  if (toast) {
    var lineEl = toast.querySelector(".live-toast__line");
    var timeEl = toast.querySelector(".live-toast__time");
    var feed = [
      ["사하구 하단동", "하수구막힘", "방금 전"],
      ["강서구 명지동", "변기막힘", "2분 전"],
      ["김해 삼방동", "싱크대막힘", "5분 전"],
      ["창원 성산구", "우수관 고압세척", "3분 전"],
      ["양산 물금", "변기막힘", "방금 전"],
      ["부산 사상구", "화장실 배관·냄새", "7분 전"],
      ["진해 용원", "하수구막힘", "4분 전"],
      ["장유 율하", "내시경 점검", "6분 전"],
      ["부산 다대동", "싱크대막힘", "방금 전"]
    ];
    var countEl = document.getElementById("liveCount");
    var fi = 0, hideTimer = null;
    function showNextDispatch() {
      var it = feed[fi % feed.length]; fi++;
      lineEl.textContent = it[0] + " · " + it[1] + " 출동 접수";
      timeEl.textContent = it[2] + " · 실시간 접수";
      toast.hidden = false;
      requestAnimationFrame(function () { toast.classList.add("show"); });
      clearTimeout(hideTimer);
      hideTimer = setTimeout(function () { toast.classList.remove("show"); }, 4500);
      if (countEl) countEl.textContent = String(parseInt(countEl.textContent, 10) + 1);
    }
    setTimeout(showNextDispatch, 3500);
    setInterval(showNextDispatch, 9000);
  }
})();
