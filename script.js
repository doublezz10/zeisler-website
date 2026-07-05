/* ============================================================
   ZACHARY ZEISLER — minimal site motion
   ============================================================ */

(function () {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ----------------------------------------------------------
       1. Hero playback tick — a single discrete event on load
       ---------------------------------------------------------- */
    function initPlayhead() {
        const line = document.querySelector('.playback-line');
        const time = document.getElementById('playtime');
        if (!line) return;

        if (prefersReducedMotion) {
            if (time) time.textContent = '00:01:30';
            return;
        }

        // Wait one frame so the keyframe starts from the initial CSS state
        requestAnimationFrame(() => {
            line.classList.add('is-animating');
        });

        // Update the timestamp text as the playhead crosses the line
        const totalMs = 900;
        const startedAt = performance.now();

        function tick(now) {
            const elapsed = now - startedAt;
            if (elapsed >= totalMs) {
                if (time) time.textContent = '00:01:30';
                return;
            }
            const seconds = Math.floor((elapsed / totalMs) * 90);
            const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
            const ss = String(seconds % 60).padStart(2, '0');
            const cs = String(Math.floor(((elapsed / totalMs) * 90 - seconds) * 100)).padStart(2, '0');
            if (time) time.textContent = `00:${mm}:${ss}`;
            requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }

    /* ----------------------------------------------------------
       2. Scroll reveal — single pass, classes only
       ---------------------------------------------------------- */
    function initReveal() {
        if (prefersReducedMotion) return;

        const targets = document.querySelectorAll(
            '.section, .entry, .kicker, .display, .lede, .hero-roles, .hero-cta, .hero-right, .playback-line'
        );

        targets.forEach((el, i) => {
            el.classList.add('reveal');
            el.style.transitionDelay = `${Math.min(i * 30, 240)}ms`;
        });

        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: '0px 0px -40px 0px',
        });

        targets.forEach((el) => io.observe(el));
    }

    /* ----------------------------------------------------------
       3. Header background — subtle on scroll
       ---------------------------------------------------------- */
    function initHeader() {
        const header = document.querySelector('.site-header');
        if (!header) return;

        const update = () => {
            if (window.scrollY > 8) {
                header.style.background = 'rgba(10, 11, 20, 0.92)';
            } else {
                header.style.background = 'rgba(10, 11, 20, 0.78)';
            }
        };

        update();
        window.addEventListener('scroll', update, { passive: true });
    }

    /* ----------------------------------------------------------
       4. Smooth anchor scrolling (fallback for browsers without CSS scroll-behavior)
       ---------------------------------------------------------- */
    function initAnchors() {
        document.querySelectorAll('a[href^="#"]').forEach((link) => {
            link.addEventListener('click', (e) => {
                const id = link.getAttribute('href');
                if (!id || id === '#') return;
                const target = document.querySelector(id);
                if (!target) return;
                e.preventDefault();
                const offset = 70;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
            });
        });
    }

    /* ----------------------------------------------------------
       Boot
       ---------------------------------------------------------- */
    function boot() {
        initPlayhead();
        initReveal();
        initHeader();
        initAnchors();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot, { once: true });
    } else {
        boot();
    }
})();