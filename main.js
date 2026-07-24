/* =========================================================
   Wilson Morales — Portafolio Profesional 2026
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Año dinámico en el footer ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Nav: sombra al hacer scroll ---------- */
  var nav = document.getElementById('nav');
  var toTop = document.getElementById('toTop');

  function onScroll() {
    var y = window.scrollY;
    if (nav) nav.classList.toggle('is-scrolled', y > 20);
    if (toTop) toTop.classList.toggle('is-visible', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Menú móvil ---------- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Reveal al hacer scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Filtro de proyectos ---------- */
  var filters = document.querySelectorAll('.filter');
  var projects = document.querySelectorAll('.project');
  var empty = document.getElementById('projectsEmpty');

  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var cat = btn.dataset.filter;

      filters.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');

      var shown = 0;
      projects.forEach(function (p) {
        var match = cat === 'todos' || p.dataset.cat === cat;
        p.classList.toggle('is-hidden', !match);
        if (match) shown++;
      });

      if (empty) empty.hidden = shown > 0;
    });
  });

  /* ---------- Enlace activo según sección visible ---------- */
  var sections = document.querySelectorAll('section[id], header[id]');
  var navAnchors = document.querySelectorAll('.nav__links a');

  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navAnchors.forEach(function (a) {
          a.classList.toggle('is-current', a.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (s) { spy.observe(s); });
  }
})();
