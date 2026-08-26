(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

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

  // ---- Header background on scroll (IntersectionObserver, no scroll listener) ----
  var header = document.querySelector(".site-header");
  var topSentinel = document.getElementById("top");
  if (header && topSentinel && "IntersectionObserver" in window) {
    var headerObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          header.classList.toggle("is-scrolled", !entry.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "-68px 0px 0px 0px" }
    );
    headerObserver.observe(topSentinel);
  }

  // ---- Scroll-spy: highlight active nav link ----
  var navLinks = nav ? Array.prototype.slice.call(nav.querySelectorAll("a[href^='#']")) : [];
  var spySections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href").slice(1);
      var section = document.getElementById(id);
      return section ? { link: link, section: section } : null;
    })
    .filter(Boolean);

  if (spySections.length && "IntersectionObserver" in window) {
    var spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var match = spySections.find(function (s) { return s.section === entry.target; });
          if (!match) return;
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) { l.classList.remove("is-active"); });
            match.link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    spySections.forEach(function (s) { spyObserver.observe(s.section); });
  }

  // ---- Kinetic word-reveal on hero / contact headings ----
  document.querySelectorAll(".split-words").forEach(function (el) {
    var words = el.textContent.trim().split(/\s+/);
    el.textContent = "";
    words.forEach(function (word, i) {
      var span = document.createElement("span");
      span.className = "word";
      span.style.setProperty("--i", i);
      span.textContent = word;
      el.appendChild(span);
      if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
    });
  });

  // ---- Scroll reveal ----
  var revealTargets = document.querySelectorAll(
    ".section-head, .about-body, .stats-grid, .timeline-item, .project-card, .skill-group, .edu-item, .section-contact > *"
  );

  revealTargets.forEach(function (el) {
    el.setAttribute("data-reveal", "");
  });

  var timelineItems = Array.prototype.slice.call(document.querySelectorAll(".timeline-item"));
  var timelineEl = document.querySelector(".timeline");

  function updateTimelineProgress() {
    if (!timelineEl || !timelineItems.length) return;
    var visibleCount = timelineItems.filter(function (el) { return el.classList.contains("is-visible"); }).length;
    var pct = (visibleCount / timelineItems.length) * 100;
    timelineEl.style.setProperty("--progress", pct + "%");
  }

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
    updateTimelineProgress();
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
            if (entry.target.classList.contains("timeline-item")) updateTimelineProgress();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });

    // Safety net: never leave content permanently invisible.
    window.setTimeout(function () {
      revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
      updateTimelineProgress();
    }, 4000);
  }

  // ---- Count-up stat numbers ----
  var statEls = document.querySelectorAll(".stat-number[data-count-to]");
  if (statEls.length) {
    var animateCount = function (el) {
      var target = parseFloat(el.getAttribute("data-count-to"), 10);
      var suffix = el.getAttribute("data-suffix") || "";
      if (reduceMotion) {
        el.textContent = target + suffix;
        return;
      }
      var start = null;
      var duration = 1200;
      function step(ts) {
        if (start === null) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    };

    if ("IntersectionObserver" in window) {
      var statObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              statObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      statEls.forEach(function (el) { statObserver.observe(el); });
    } else {
      statEls.forEach(animateCount);
    }
  }

  // ---- Spotlight-border project cards (cursor-tracked glow) ----
  if (hasHover && !reduceMotion) {
    document.querySelectorAll(".project-card").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", ((e.clientX - rect.left) / rect.width) * 100 + "%");
        card.style.setProperty("--my", ((e.clientY - rect.top) / rect.height) * 100 + "%");
      });
    });
  }

  // ---- Tilt on the hero code card ----
  var tiltEl = document.querySelector("[data-tilt]");
  if (tiltEl && hasHover && !reduceMotion) {
    var tiltParent = tiltEl.closest(".hero-visual") || tiltEl.parentElement;
    tiltParent.addEventListener("mousemove", function (e) {
      var rect = tiltEl.getBoundingClientRect();
      var px = (e.clientX - rect.left) / rect.width - 0.5;
      var py = (e.clientY - rect.top) / rect.height - 0.5;
      tiltEl.style.transform =
        "rotateX(" + (-py * 14 + 6) + "deg) rotateY(" + (px * 16 - 10) + "deg)";
    });
    tiltParent.addEventListener("mouseleave", function () {
      tiltEl.style.transform = "rotateX(6deg) rotateY(-10deg)";
    });
  }

  // ---- Magnetic-lite buttons ----
  if (hasHover && !reduceMotion) {
    document.querySelectorAll("[data-magnetic]").forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var rect = btn.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width - 0.5;
        var py = (e.clientY - rect.top) / rect.height - 0.5;
        btn.style.transform = "translate(" + (px * 8) + "px, " + (py * 8) + "px)";
      });
      btn.addEventListener("mouseleave", function () {
        btn.style.transform = "translate(0, 0)";
      });
    });
  }

  // ---- Footer year ----
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
