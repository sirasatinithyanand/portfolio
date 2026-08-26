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

  // ---- Hero system network: a real state machine driving color-coded signal flow ----
  var network = document.querySelector(".network");
  if (network) {
    var colorVar = {
      blue: "var(--sys-blue)",
      violet: "var(--sys-violet)",
      cyan: "var(--sys-cyan)",
      amber: "var(--sys-amber)"
    };

    var getNode = function (id) { return network.querySelector('[data-node="' + id + '"]'); };
    var getLabel = function (id) { return network.querySelector('[data-label="' + id + '"]'); };
    var getPeripheral = function (id) { return network.querySelector('[data-peripheral="' + id + '"]'); };
    var getEdge = function (id) { return network.querySelector('[data-edge="' + id + '"]'); };
    var statusEl = network.querySelector("[data-status]");

    // Six phases, matching the spec's timeline: input -> retrieve -> agent -> tools -> validate -> output.
    var phases = [
      { node: "input", edges: [], peripherals: [], color: "blue" },
      { node: "retrieve", edges: ["input-data", "input-api", "data-retrieve", "api-retrieve"], peripherals: ["data", "api"], color: "cyan" },
      { node: "agent", edges: ["retrieve-agent"], peripherals: [], color: "violet" },
      { node: null, edges: ["agent-tools", "agent-memory"], peripherals: ["tools", "memory"], color: "violet" },
      { node: "validate", edges: ["tools-validate", "memory-validate"], peripherals: [], color: "amber" },
      { node: "output", edges: ["validate-output"], peripherals: [], color: "blue" }
    ];

    function setStatus(text, processing) {
      if (!statusEl) return;
      statusEl.textContent = "● " + text;
      statusEl.classList.toggle("is-processing", !!processing);
    }

    function settlePhase(phase) {
      if (!phase) return;
      if (phase.node) {
        var n = getNode(phase.node);
        var l = getLabel(phase.node);
        if (n) { n.classList.remove("is-active"); n.classList.add("is-done"); }
        if (l) { l.classList.remove("is-active"); l.classList.add("is-done"); }
      }
      phase.peripherals.forEach(function (id) {
        var p = getPeripheral(id);
        if (p) p.classList.remove("is-active");
      });
      phase.edges.forEach(function (id) {
        var e = getEdge(id);
        if (e) { e.classList.remove("is-active"); e.classList.add("is-settled"); }
      });
    }

    function activatePhase(phase) {
      var color = colorVar[phase.color] || colorVar.blue;
      phase.edges.forEach(function (id) {
        var e = getEdge(id);
        if (e) { e.style.setProperty("--signal-color", color); e.classList.add("is-active"); }
      });
      phase.peripherals.forEach(function (id) {
        var p = getPeripheral(id);
        if (p) { p.style.setProperty("--signal-color", color); p.classList.add("is-active"); }
      });
      if (phase.node) {
        var n = getNode(phase.node);
        var l = getLabel(phase.node);
        if (n) { n.style.setProperty("--signal-color", color); n.classList.add("is-active"); }
        if (l) { l.style.setProperty("--signal-color", color); l.classList.add("is-active"); }
      }
    }

    function showFinalState() {
      phases.forEach(function (phase) {
        activatePhase(phase);
        settlePhase(phase);
      });
      setStatus("System ready", false);
    }

    if (reduceMotion) {
      showFinalState();
    } else {
      var stepMs = 1000;
      var pauseMs = 1400;
      var phaseIndex = -1;
      var timerId = null;

      function advance() {
        if (phaseIndex >= 0) settlePhase(phases[phaseIndex]);
        phaseIndex++;

        if (phaseIndex < phases.length) {
          activatePhase(phases[phaseIndex]);
          setStatus("Processing", true);
          timerId = window.setTimeout(advance, stepMs);
        } else {
          setStatus("System ready", false);
          timerId = window.setTimeout(function () {
            phases.forEach(function (phase) {
              if (phase.node) {
                var n = getNode(phase.node);
                var l = getLabel(phase.node);
                if (n) n.classList.remove("is-active", "is-done");
                if (l) l.classList.remove("is-active", "is-done");
              }
              phase.edges.forEach(function (id) {
                var e = getEdge(id);
                if (e) e.classList.remove("is-active", "is-settled");
              });
            });
            phaseIndex = -1;
            advance();
          }, pauseMs);
        }
      }

      // Pause the trace when the hero isn't visible — no point animating what no one can see.
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
        heroObserver.observe(network);
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
