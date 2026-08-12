/* Progressive enhancement: scroll progress, section wayfinding, quiet reveals, figure lightbox.
   Pure enhancement — without JS the page is fully readable and static. */
(function () {
    "use strict";

    var docEl = document.documentElement;
    docEl.classList.add("js");

    var reduce =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) docEl.classList.add("reduce");

    /* Current year in footer */
    var yearEl = document.querySelector("[data-year]");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    /* Scroll progress hairline */
    var bar = document.querySelector(".scroll-progress");
    if (bar) {
        var updateBar = function () {
            var max = docEl.scrollHeight - window.innerHeight;
            var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
            bar.style.transform = "scaleX(" + p + ")";
        };
        window.addEventListener("scroll", updateBar, { passive: true });
        window.addEventListener("resize", updateBar);
        updateBar();
    }

    /* Quiet scroll reveals */
    var reveals = Array.prototype.slice.call(
        document.querySelectorAll("[data-reveal]")
    );
    if (reveals.length) {
        if (reduce || !("IntersectionObserver" in window)) {
            reveals.forEach(function (el) {
                el.classList.add("in");
            });
        } else {
            var ro = new IntersectionObserver(
                function (entries, obs) {
                    entries.forEach(function (e) {
                        if (e.isIntersecting) {
                            e.target.classList.add("in");
                            obs.unobserve(e.target);
                        }
                    });
                },
                { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
            );
            reveals.forEach(function (el) {
                ro.observe(el);
            });
        }
    }

    /* Figure lightbox (zoom-in to examine paper figures / posters) */
    var zoomables = Array.prototype.slice.call(
        document.querySelectorAll(".entry-figure img, .award-figure img")
    );
    if (zoomables.length && !reduce) {
        var lb = document.createElement("div");
        lb.className = "lightbox";
        lb.setAttribute("role", "dialog");
        lb.setAttribute("aria-modal", "true");
        lb.setAttribute("aria-label", "Enlarged figure");
        lb.innerHTML =
            '<button class="lightbox-close" type="button" aria-label="Close enlarged figure (Escape)">&times;</button>' +
            '<figure class="lightbox-fig"><img alt=""><figcaption></figcaption></figure>';
        document.body.appendChild(lb);

        var lbImg = lb.querySelector("img");
        var lbCap = lb.querySelector("figcaption");
        var closeBtn = lb.querySelector(".lightbox-close");
        var lastFocus = null;

        var open = function (img) {
            lastFocus = document.activeElement;
            lbImg.src = img.currentSrc || img.src;
            lbImg.alt = img.alt || "";
            var fig = img.closest("figure");
            var cap = fig ? fig.querySelector("figcaption") : null;
            var text = cap ? cap.textContent.trim() : img.alt || "";
            lbCap.textContent = text;
            lbCap.style.display = text ? "" : "none";
            lb.classList.add("is-open");
            document.body.classList.add("no-scroll");
            closeBtn.focus();
        };
        var close = function () {
            lb.classList.remove("is-open");
            document.body.classList.remove("no-scroll");
            if (lastFocus && lastFocus.focus) lastFocus.focus();
        };

        zoomables.forEach(function (img) {
            img.setAttribute("tabindex", "0");
            img.setAttribute("role", "button");
            img.setAttribute(
                "aria-label",
                (img.alt || "Figure") + " — open enlarged view"
            );
            img.addEventListener("click", function () {
                open(img);
            });
            img.addEventListener("keydown", function (e) {
                if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
                    e.preventDefault();
                    open(img);
                }
            });
        });

        lb.addEventListener("click", function (e) {
            if (e.target === lb || e.target === closeBtn) close();
        });
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && lb.classList.contains("is-open")) close();
        });
    }

    /* Quiet cross-page fade-out on internal navigation (the fade-in is CSS).
       Only plain left-clicks on same-origin .html links are intercepted;
       modifier-clicks, external links, mailto/tel, downloads, and in-page
       anchors all pass through untouched so they keep their native behaviour. */
    if (!reduce) {
        var leaving = false;
        document.addEventListener(
            "click",
            function (e) {
                if (e.defaultPrevented || e.button !== 0) return;
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                var a =
                    e.target && e.target.closest
                        ? e.target.closest("a[href]")
                        : null;
                if (!a) return;
                if (a.hasAttribute("download")) return;
                if (a.target && a.target !== "_self") return;
                var href = a.getAttribute("href") || "";
                if (href.charAt(0) === "#") return;
                var url;
                try {
                    url = new URL(a.href, location.href);
                } catch (err) {
                    return;
                }
                if (url.origin !== location.origin) return;
                if (url.pathname === location.pathname) return;

                e.preventDefault();
                if (leaving) {
                    location.href = a.href;
                    return;
                }
                leaving = true;
                docEl.classList.add("is-leaving");
                var go = function () {
                    location.href = a.href;
                };
                var main = document.getElementById("main-content");
                if (main)
                    main.addEventListener("animationend", go, { once: true });
                setTimeout(go, 260);
            },
            false
        );
    }

    /* Signal success to the head-level safety net (so reveals are never left
       hidden if a later change ever breaks this script). */
    docEl.dataset.siteReady = "1";
})();
