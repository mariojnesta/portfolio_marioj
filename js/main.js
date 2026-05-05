/* ============================================================
   GEOG 499 Portfolio — Mario Jinesta, UTK
   main.js
   ============================================================ */

/* ── Nav: Dropdown & Active State ───────────────────────── */
(function initNav() {
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';
  const inProjects = path.includes('/projects/');

  // Mark active links
  document.querySelectorAll('.nav-links > li > a').forEach(link => {
    const href = (link.getAttribute('href') || '').replace(/^\.\.\//, '');
    if (href === filename || (href === 'index.html' && (filename === '' || filename === '/'))) {
      link.classList.add('active');
    }
  });
  document.querySelectorAll('.dropdown-menu li > a').forEach(link => {
    const href = (link.getAttribute('href') || '').split('/').pop();
    if (href === filename) {
      link.classList.add('active');
      link.closest('li')?.parentElement?.closest('li')?.classList.add('open');
    }
  });

  // Dropdown toggle
  document.querySelectorAll('.nav-dropdown-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const li = btn.closest('li');
      const wasOpen = li.classList.contains('open');
      document.querySelectorAll('.nav-links > li.open').forEach(el => el.classList.remove('open'));
      if (!wasOpen) {
        li.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        btn.setAttribute('aria-expanded', 'false');
      }
    });
    btn.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        btn.closest('li').classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-links > li.open').forEach(el => el.classList.remove('open'));
    document.querySelectorAll('.nav-dropdown-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
  });

  // Hamburger
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', e => {
      e.stopPropagation();
      const open = navLinks.classList.toggle('mobile-open');
      hamburger.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', e => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('mobile-open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        navLinks.classList.remove('mobile-open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();

/* ── Lightbox ────────────────────────────────────────────── */
(function initLightbox() {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Image viewer');
  overlay.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <img class="lightbox-img" src="" alt="">
      <p class="lightbox-caption"></p>
    </div>
  `;
  document.body.appendChild(overlay);

  const imgEl   = overlay.querySelector('.lightbox-img');
  const capEl   = overlay.querySelector('.lightbox-caption');
  const closeEl = overlay.querySelector('.lightbox-close');

  function open(src, alt, caption) {
    imgEl.src      = src;
    imgEl.alt      = alt || '';
    capEl.textContent = caption || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    closeEl.focus();
  }

  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    imgEl.src = '';
  }

  closeEl.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  function attachTriggers() {
    document.querySelectorAll('[data-lightbox]:not([data-lb-ready])').forEach(el => {
      el.dataset.lbReady = '1';
      el.addEventListener('click', () => {
        const src = el.dataset.lightbox || el.src || '';
        const alt = el.dataset.lbAlt || el.alt || '';
        const cap = el.dataset.lbCaption || '';
        open(src, alt, cap);
      });
    });
  }

  attachTriggers();
  new MutationObserver(attachTriggers).observe(document.body, { childList: true, subtree: true });
})();

/* ── Scroll Reveal ───────────────────────────────────────── */
(function initReveal() {
  if (!window.IntersectionObserver) return;

  const style = document.createElement('style');
  style.textContent = `
    .reveal { opacity: 0; transform: translateY(18px); transition: opacity 380ms ease, transform 380ms ease; }
    .reveal.in { opacity: 1; transform: translateY(0); }
  `;
  document.head.appendChild(style);

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.08 });

  document.querySelectorAll('.card, .map-card, .figure-item, .stats-bar, .info-box').forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });
})();
