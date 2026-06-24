/* Braunmiller Zimmerei und Holzbau – Interaktionen */
(function () {
  'use strict';

  var header = document.getElementById('header');
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');

  /* --- Sticky header style on scroll --- */
  function onScroll() {
    if (window.scrollY > 30) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Mobile menu toggle --- */
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    });
  }
  /* Close mobile menu after clicking a link */
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* --- Scroll reveal --- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* --- Active nav link via section in view --- */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = nav.querySelectorAll('.nav__link');
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (l) {
            l.classList.toggle('active', l.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { threshold: 0.4, rootMargin: '-20% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* --- Footer year --- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* --- Contact form -> mailto (no backend required) --- */
  window.Site = window.Site || {};
  window.Site.submitForm = function (form) {
    var el = form.elements;
    var val = function (n) {
      var f = el.namedItem(n);
      return f && f.value ? f.value.trim() : '';
    };
    var data = {
      name: val('name'),
      telefon: val('telefon'),
      email: val('email'),
      projekt: val('projekt'),
      nachricht: val('nachricht')
    };

    var subject = 'Anfrage über die Website' + (data.projekt ? ' – ' + data.projekt : '');
    var bodyLines = [
      'Name: ' + data.name,
      'Telefon: ' + data.telefon,
      'E-Mail: ' + data.email,
      'Projekt: ' + data.projekt,
      '',
      'Nachricht:',
      data.nachricht
    ];
    var href = 'mailto:info@holzbau-braunmiller.de'
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(bodyLines.join('\n'));

    window.location.href = href;
    return false; // prevent page reload
  };
})();
