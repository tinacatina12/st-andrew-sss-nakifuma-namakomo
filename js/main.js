/* =========================================================
   ST ANDREW SS NAMAKOMO — main.js
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ── AOS init ────────────────────────────────────────── */
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 650, once: true, offset: 60, easing: 'ease-out-cubic' });
  }

  /* ── Navbar scroll effect ───────────────────────────── */
  const navbar = document.getElementById('mainNav');
  if (navbar) {
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 25);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Active nav link ─────────────────────────────────── */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link-custom').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Animated counters ───────────────────────────────── */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const animateCounter = (el) => {
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || '';
      const duration = 2000;
      const start = performance.now();
      const easeOutQuart = t => 1 - Math.pow(1 - t, 4);

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(easeOutQuart(progress) * target).toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { animateCounter(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.4 });

    counters.forEach(c => io.observe(c));
  }

  /* ── Progress bars animate on scroll ─────────────────── */
  const bars = document.querySelectorAll('[data-width]');
  if (bars.length) {
    const barIO = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.width + '%';
          barIO.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    bars.forEach(b => barIO.observe(b));
  }

  /* ── Tabs ─────────────────────────────────────────────── */
  document.querySelectorAll('[data-tab-group]').forEach(group => {
    const name = group.dataset.tabGroup;
    const btns = document.querySelectorAll(`[data-tab-btn="${name}"]`);
    const panels = document.querySelectorAll(`[data-tab-panel="${name}"]`);

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        btns.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = document.querySelector(`[data-tab-panel="${name}"][data-tab="${target}"]`);
        if (panel) panel.classList.add('active');
      });
    });
  });

  /* ── Gallery filter ──────────────────────────────────── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;

      galleryItems.forEach(item => {
        const show = cat === 'all' || item.dataset.cat === cat;
        item.classList.toggle('hidden', !show);
      });
    });
  });

  /* ── Lightbox ─────────────────────────────────────────── */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  if (lightbox) {
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const src = item.querySelector('img').src;
        lightboxImg.src = src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };
    lightboxClose && lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
  }

  /* ── Testimonials scroll buttons ──────────────────────── */
  const track = document.getElementById('testimonialTrack');
  document.getElementById('testimonialPrev')?.addEventListener('click', () => track?.scrollBy({ left: -360, behavior: 'smooth' }));
  document.getElementById('testimonialNext')?.addEventListener('click', () => track?.scrollBy({ left: 360, behavior: 'smooth' }));

  /* ── Contact / Admission form validation ─────────────── */
  document.querySelectorAll('form[data-validate]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;

      form.querySelectorAll('[required]').forEach(field => {
        const err = form.querySelector(`[data-error="${field.name}"]`);
        const isEmpty = !field.value.trim();
        const isEmailBad = field.type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);

        if (isEmpty || isEmailBad) {
          field.classList.add('is-invalid');
          if (err) err.classList.add('show');
          valid = false;
        } else {
          field.classList.remove('is-invalid');
          if (err) err.classList.remove('show');
        }
      });

      if (valid) {
        const success = form.parentElement.querySelector('.form-success');
        form.style.display = 'none';
        if (success) success.classList.add('show');
      }
    });

    form.querySelectorAll('[required]').forEach(field => {
      field.addEventListener('input', () => {
        const err = form.querySelector(`[data-error="${field.name}"]`);
        field.classList.remove('is-invalid');
        if (err) err.classList.remove('show');
      });
    });
  });

  /* ── Scroll-to-top ───────────────────────────────────── */
  const scrollBtn = document.getElementById('scrollTop');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ── Search filter (news page) ───────────────────────── */
  const searchInput = document.getElementById('newsSearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase();
      document.querySelectorAll('.news-card-wrap').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }

  /* ── News category filter ────────────────────────────── */
  document.querySelectorAll('.news-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.news-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      document.querySelectorAll('.news-card-wrap').forEach(card => {
        const show = cat === 'all' || card.dataset.cat === cat;
        card.style.display = show ? '' : 'none';
      });
    });
  });

});
