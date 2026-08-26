(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
      { threshold: 0, rootMargin: "-60px 0px 0px 0px" }
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

  // ---- Kinetic word-reveal on headings (splits per .line if present, so a
  //      forced 2-line heading like the hero keeps its line breaks) ----
  document.querySelectorAll(".split-words").forEach(function (el) {
    var lineEls = el.querySelectorAll(".line");
    var containers = lineEls.length ? Array.prototype.slice.call(lineEls) : [el];
    var wordIndex = 0;
    containers.forEach(function (container) {
      var words = container.textContent.trim().split(/\s+/);
      container.textContent = "";
      words.forEach(function (word, i) {
        var span = document.createElement("span");
        span.className = "word";
        span.style.setProperty("--i", wordIndex);
        span.textContent = word;
        container.appendChild(span);
        if (i < words.length - 1) container.appendChild(document.createTextNode(" "));
        wordIndex++;
      });
    });
  });

  // ---- Scroll reveal ----
  var revealTargets = document.querySelectorAll(
    ".section-head, .timeline-item, .work-featured, .work-secondary, .work-compact, .skill-group, .edu-primary, .leadership-item, .section-contact > *"
  );

  revealTargets.forEach(function (el) {
    el.setAttribute("data-reveal", "");
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
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

    revealTargets.forEach(function (el) { observer.observe(el); });

    // Safety net: never leave content permanently invisible.
    window.setTimeout(function () {
      revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
    }, 4000);
  }

  // ---- Count-up metric numbers (the "outcome" animation in Experience) ----
  var resultEls = document.querySelectorAll(".metric-number[data-count-to]");
  if (resultEls.length) {
    var animateCount = function (el) {
      var target = parseFloat(el.getAttribute("data-count-to"), 10);
      var suffix = el.getAttribute("data-suffix") || "";
      if (reduceMotion) {
        el.textContent = target + suffix;
        return;
      }
      var start = null;
      var duration = 1000;
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
      var resultObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              resultObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      resultEls.forEach(function (el) { resultObserver.observe(el); });
    } else {
      resultEls.forEach(animateCount);
    }
  }

  // ---- Hero AI workflow trace: a real system state machine, not decoration ----
  var panel = document.querySelector(".ai-panel");
  if (panel) {
    var stageOrder = ["input", "retrieve", "reason", "validate", "response"];
    var panelNodes = stageOrder.map(function (id) { return panel.querySelector('[data-node="' + id + '"]'); });
    var panelConnectors = Array.prototype.slice.call(panel.querySelectorAll(".ai-connector"));
    var statusEl = panel.querySelector("[data-status]");

    function setStatus(text, processing) {
      if (!statusEl) return;
      statusEl.textContent = "● " + text;
      statusEl.classList.toggle("is-processing", !!processing);
    }

    function showFinalState() {
      panelNodes.forEach(function (n) { n.classList.remove("is-active"); n.classList.add("is-done"); });
      panelConnectors.forEach(function (c) { c.classList.remove("is-active"); });
      setStatus("System ready", false);
    }

    if (reduceMotion) {
      showFinalState();
    } else {
      var stepMs = 900;
      var pauseMs = 1300;
      var index = -1;
      var timerId = null;

      function advance() {
        if (index >= 0) {
          panelNodes[index].classList.remove("is-active");
          panelNodes[index].classList.add("is-done");
          if (index > 0) panelConnectors[index - 1].classList.remove("is-active");
        }
        index++;

        if (index < panelNodes.length) {
          if (index > 0) panelConnectors[index - 1].classList.add("is-active");
          panelNodes[index].classList.add("is-active");
          setStatus("Processing", true);
          timerId = window.setTimeout(advance, stepMs);
        } else {
          setStatus("System ready", false);
          timerId = window.setTimeout(function () {
            panelNodes.forEach(function (n) { n.classList.remove("is-active", "is-done"); });
            panelConnectors.forEach(function (c) { c.classList.remove("is-active"); });
            index = -1;
            advance();
          }, pauseMs);
        }
      }

      // Pause the trace when the hero isn't visible, resume when it is —
      // no point running an animation loop no one can see.
      if ("IntersectionObserver" in window) {
        var heroObserver = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting && timerId === null) {
                advance();
              } else if (!entry.isIntersecting && timerId !== null) {
                window.clearTimeout(timerId);
                timerId = null;
              }
            });
          },
          { threshold: 0.2 }
        );
        heroObserver.observe(panel);
      } else {
        advance();
      }
    }
  }

  // ---- Footer year ----
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
