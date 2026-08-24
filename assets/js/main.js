(function () {
  "use strict";

  // ---- Mobile nav toggle ----
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Scroll reveal ----
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealTargets = document.querySelectorAll(
    ".section-head, .about-body, .timeline-item, .project-card, .skill-group, .edu-item, .section-contact > *"
  );

  revealTargets.forEach(function (el) {
    el.setAttribute("data-reveal", "");
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });

    // Safety net: if for any reason an element never gets flagged
    // (observer misbehaves, unusual layout), don't leave content
    // permanently invisible.
    window.setTimeout(function () {
      revealTargets.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }, 4000);
  }

  // ---- Footer year ----
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
