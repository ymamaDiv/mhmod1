/* ============================================
   CINEMATIC PHOTOGRAPHY PORTFOLIO
   Interactions: language toggle, navigation,
   filters, lightbox, video modal, scroll-reveal.
   ============================================ */

(function () {
  "use strict";

  /* —— Helpers —— */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ============================================
     TRANSLATIONS
     Edit Arabic (ar) and English (en) text here.
     Keys match data-i18n attributes in index.html.
     Replace brandName with your photographer name.
     ============================================ */
  const translations = {
    ar: {
      pageTitle: "محمود الحمود  — تصوير فوتوغرافي ومرئيات سينمائية",
      brandName: "قَزح",
      navAbout: "نبذة ",
      navServices: "الخدمات",
      navPortfolio: "الأعمال",
      navContact: "تواصل",
      menuOpen: "فتح القائمة",
      menuClose: "إغلاق القائمة",
      scrollAbout: "الانتقال إلى النبذة",
      close: "إغلاق",
      heroHeadline: "كل إطار يحكي قصة.",
      heroSubtitle: "تصوير فوتوغرافي ومرئيات سينمائية",
      heroBtnWork: "استكشف أعمالي",
      heroBtnContact: "تواصل معي",
      aboutEyebrow: "نبذة عن قَزح",
      aboutTitle: "خلف العدسة",
      aboutAlt: "صورة المصور",
      aboutBio1:
        "بشغف نحو الضوء والعاطفة والسرد البصري، أصنع صوراً وأفلاماً تلتقط جوهر كل لحظة. من قصص العلامات التجارية الحميمة إلى السرد السينمائي، يجمع عملي بين الفن والدقة — ليحول المشاهد العادية إلى إطارات لا تُنسى.",
      aboutBio2:
        "بخبرة سنوات خلف الكاميرا، أقدّم نظرة متأنية وحساً سينمائياً لكل مشروع أتولاه.",
      servicesEyebrow: "ما أقدمه",
      servicesTitle: "الخدمات",
      service1Title: "تصوير منيو",
      service1Desc: "تصوير طعام وقوائم بأسلوب فني يجعل كل طبق يبدو لا يُقاوم.",
      service2Title: "تغطيات",
      service2Desc: "تغطية كاملة للفعاليات تلتقط الأجواء والعواطف واللحظات الأهم.",
      service3Title: "فيديوهات إعلانية",
      service3Desc: "فيديوهات إعلانية احترافية ترفع علامتك التجارية وتجذب الجمهور.",
      service4Title: "تصوير ريلز",
      service4Desc: "تصوير ريلز قصيرة وجذابة لوسائل التواصل وحضور أقوى على الموبايل.",
      service5Title: "تصوير براندات",
      service5Desc: "تصوير علامات تجارية فاخر يبني الهوية ويترك انطباعاً دائماً.",
      showMore: "انقر لعرض اقل",
      showLess: "عرض المزيد",
      portfolioEyebrow: "أعمال مختارة",
      portfolioTitle: "المعرض",
      filterAll: "الكل",
      filterMenu: "تصوير منيو",
      filterEvents: "تغطيات",
      filterCommercial: "فيديوهات إعلانية",
      filterCinematic: "فيديوهات سينمائية",
      filterBrand: "تصوير براندات",
      project1Title: "تقديم فني",
      project2Title: "أمسية راقية",
      project3Title: "إعلان علامة تجارية",
      project4Title: "فيلم الساعة الذهبية",
      project5Title: "دراسة منتج فاخر",
      project6Title: "مجموعة الحلويات",
      project7Title: "احتفال خاص",
      project8Title: "قصة علامة تحريرية",
      project9Title: "إطارات صامتة",
      contactEyebrow: "تواصل معنا",
      contactTitle: "لنصنع شيئاً استثنائياً.",
      contactText: "هل أنت مستعد لتحويل رؤيتك إلى واقع؟ تواصل معي لنبدأ الحوار.",
      btnWhatsApp: "واتساب",
      btnEmail: "البريد",
      btnInstagram: "إنستغرام",
      footerRights: "جميع الحقوق محفوظة.",
      backToTop: "العودة للأعلى ↑",
      videoFallback: "متصفحك لا يدعم تشغيل الفيديو.",
    },
    en: {
      pageTitle: "Mhmod Al-hmod — Photography & Cinematic Visuals",
      brandName: "  Qazah ",
      navAbout: "About ",
      navServices: "Services",
      navPortfolio: "Portfolio",
      navContact: "Contact",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      scrollAbout: "Scroll to about",
      close: "Close",
      heroHeadline: "Every Frame Tells a Story.",
      heroSubtitle: "Photography & Cinematic Visuals",
      heroBtnWork: "Explore My Work",
      heroBtnContact: "Contact Me",
      aboutEyebrow: "About Qazah",
      aboutTitle: "Behind the Lens",
      aboutAlt: "Photographer portrait",
      aboutBio1:
        "With a passion for light, emotion, and storytelling, I craft images and films that capture the essence of every moment. From intimate brand stories to cinematic visual narratives, my work blends artistry with precision — turning ordinary scenes into unforgettable frames.",
      aboutBio2:
        "Based on years of experience behind the camera, I bring a refined eye and a cinematic sensibility to every project I take on.",
      servicesEyebrow: "What I Offer",
      servicesTitle: "Services",
      service1Title: "Menu Photography",
      service1Desc:
        "Artfully styled food and menu photography that makes every dish look irresistible.",
      service2Title: "Event Coverage",
      service2Desc:
        "Complete event coverage capturing the atmosphere, emotion, and key moments.",
      service3Title: "Commercial Videos",
      service3Desc:
        "Polished commercial videos designed to elevate your brand and engage audiences.",
      service4Title: "Reels Photography",
      service4Desc:
        "Short, engaging reel photography made for social media and a stronger mobile presence.",
      service5Title: "Brand Photography",
      service5Desc:
        "Premium brand photography that builds identity and leaves a lasting impression.",
      showMore: "Click to Show More",
      showLess: "Show Less",
      portfolioEyebrow: "Selected Work",
      portfolioTitle: "Portfolio",
      filterAll: "All",
      filterMenu: "Menu Photography",
      filterEvents: "Event Coverage",
      filterCommercial: "Commercial Videos",
      filterCinematic: "Cinematic Videos",
      filterBrand: "Brand Photography",
      project1Title: "Artisan Plating",
      project2Title: "Evening Gala",
      project3Title: "Brand Campaign Spot",
      project4Title: "Golden Hour Film",
      project5Title: "Luxury Product Study",
      project6Title: "Dessert Collection",
      project7Title: "Private Celebration",
      project8Title: "Editorial Brand Story",
      project9Title: "Silent Frames",
      contactEyebrow: "Get In Touch",
      contactTitle: "Let's Create Something Extraordinary.",
      contactText:
        "Ready to bring your vision to life? Reach out and let's start the conversation.",
      btnWhatsApp: "WhatsApp",
      btnEmail: "Email",
      btnInstagram: "Instagram",
      footerRights: "All rights reserved.",
      backToTop: "Back to Top ↑",
      videoFallback: "Your browser does not support the video tag.",
    },
  };

  /* Current language (Arabic is default) */
  let currentLang = localStorage.getItem("portfolio-lang") || "ar";

  /* ============================================
     SERVICES: horizontal scroll + side button labels
     Button scrolls the strip; labels follow scroll position.
     ============================================ */
  function getServiceScrollEl(gallery) {
    return $(".service-gallery-scroll", gallery);
  }

  function isServiceScrollNearEnd(scrollEl) {
    if (!scrollEl) return false;
    const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth;
    if (maxScroll <= 4) return false;
    return scrollEl.scrollLeft >= maxScroll - 8;
  }

  function canServiceScroll(scrollEl) {
    if (!scrollEl) return false;
    return scrollEl.scrollWidth - scrollEl.clientWidth > 4;
  }

  function updateServiceMoreButtons() {
    $$(".service-gallery").forEach((gallery) => {
      const btn = $(".service-more-btn", gallery);
      const scrollEl = getServiceScrollEl(gallery);
      if (!btn || !scrollEl) return;

      const scrollable = canServiceScroll(scrollEl);
      btn.classList.toggle("is-hidden", !scrollable);

      if (!scrollable) {
        btn.setAttribute("data-i18n", "showMore");
        btn.textContent = translations[currentLang].showMore;
        return;
      }

      const nearEnd = isServiceScrollNearEnd(scrollEl);
      const key = nearEnd ? "showLess" : "showMore";
      btn.textContent = translations[currentLang][key];
      btn.setAttribute("data-i18n", key);
    });
  }

  /* ============================================
     1. LANGUAGE SWITCHING
     ============================================ */
  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    // Text content
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    // Aria labels
    $$("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      // Menu button uses open/close based on state
      if (key === "menuOpen" && el.classList.contains("is-open")) {
        el.setAttribute("aria-label", translations[lang].menuClose);
      } else if (translations[lang][key] !== undefined) {
        el.setAttribute("aria-label", translations[lang][key]);
      }
    });

    // Image alt text
    $$("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (translations[lang][key] !== undefined) {
        el.setAttribute("alt", translations[lang][key]);
      }
    });

    // Page title
    document.title = translations[lang].pageTitle;

    // Service expand/collapse button labels
    updateServiceMoreButtons();

    // Toggle button states
    $$(".lang-btn").forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    localStorage.setItem("portfolio-lang", lang);
  }

  $$(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang && lang !== currentLang) {
        applyLanguage(lang);
      }
    });
  });

  // Apply saved / default language on load
  applyLanguage(currentLang);

  /* Get bilingual gallery title for lightbox */
  function getItemTitle(trigger) {
    if (!trigger) return "";
    const ar = trigger.getAttribute("data-title-ar");
    const en = trigger.getAttribute("data-title-en");
    if (currentLang === "en" && en) return en;
    if (ar) return ar;
    return en || "";
  }

  /* ============================================
     2. FOOTER YEAR
     ============================================ */
  const yearEl = $("#year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ============================================
     3. STICKY HEADER
     ============================================ */
  const header = $(".site-header");

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  /* ============================================
     4. MOBILE MENU
     ============================================ */
  const navToggle = $("#navToggle");
  const navLinks = $("#navLinks");

  function closeMenu() {
    if (!navToggle || !navLinks) return;
    navToggle.classList.remove("is-open");
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", translations[currentLang].menuOpen);
    document.body.style.overflow = "";
  }

  function openMenu() {
    navToggle.classList.add("is-open");
    navLinks.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", translations[currentLang].menuClose);
    document.body.style.overflow = "hidden";
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      if (navLinks.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    $$("a", navLinks).forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  /* ============================================
     5. SMOOTH SCROLL
     ============================================ */
  $$('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = $(id);
      if (!target) return;
      e.preventDefault();
      const offset = header ? header.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  /* ============================================
     6. SCROLL REVEAL
     ============================================ */
  const revealEls = $$(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            const lines = $$(".gold-line", entry.target);
            lines.forEach((line) => line.classList.add("is-visible"));
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  const heroLine = $(".hero-line");
  if (heroLine) {
    setTimeout(() => heroLine.classList.add("is-visible"), 500);
  }

  /* ============================================
     7. SERVICE GALLERIES (horizontal scroll)
     ============================================ */
  $$(".service-more-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const gallery = btn.closest(".service-gallery");
      const scrollEl = gallery && getServiceScrollEl(gallery);
      if (!scrollEl || !canServiceScroll(scrollEl)) return;

      if (isServiceScrollNearEnd(scrollEl)) {
        scrollEl.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const step = Math.max(scrollEl.clientWidth * 0.85, 200);
        scrollEl.scrollBy({ left: step, behavior: "smooth" });
      }
    });
  });

  /* Native scroll + touch; update button label while scrolling */
  $$(".service-gallery-scroll").forEach((scrollEl) => {
    scrollEl.addEventListener("scroll", updateServiceMoreButtons, { passive: true });

    /* Mouse wheel → horizontal scroll (scrollbar is hidden) */
    scrollEl.addEventListener(
      "wheel",
      (e) => {
        if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
        if (!canServiceScroll(scrollEl)) return;
        e.preventDefault();
        scrollEl.scrollLeft += e.deltaY;
      },
      { passive: false }
    );

    /* Drag-to-scroll (mouse / pen) without breaking lightbox taps */
    let isDragging = false;
    let startX = 0;
    let startLeft = 0;
    let moved = false;

    scrollEl.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch") return; /* native touch scrolling */
      if (e.target.closest("video, .service-video-card, .service-thumb")) return;
      isDragging = true;
      moved = false;
      startX = e.clientX;
      startLeft = scrollEl.scrollLeft;
      scrollEl.setPointerCapture(e.pointerId);
    });

    scrollEl.addEventListener("pointermove", (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      scrollEl.scrollLeft = startLeft - dx;
    });

    function endDrag(e) {
      if (!isDragging) return;
      isDragging = false;
      if (scrollEl.hasPointerCapture(e.pointerId)) {
        scrollEl.releasePointerCapture(e.pointerId);
      }
    }

    scrollEl.addEventListener("pointerup", endDrag);
    scrollEl.addEventListener("pointercancel", endDrag);

    /* If the user dragged, ignore the following click on a thumb */
    scrollEl.addEventListener(
      "click",
      (e) => {
        if (moved && e.target.closest(".service-thumb") && !e.target.closest("video")) {
          e.preventDefault();
          e.stopPropagation();
          moved = false;
        }
      },
      true
    );
  });

  /* Service videos: centered play button only. Sound is set in HTML (muted or not). */
  $$(".service-video-card").forEach((card) => {
    const vid = $(".service-video", card);
    const playBtn = $(".service-play-btn", card);
    if (!vid || !playBtn) return;

    vid.removeAttribute("controls");
    vid.controls = false;

    function syncPlayState() {
      card.classList.toggle("is-playing", !vid.paused);
    }

    playBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const src = vid.getAttribute("src") || vid.currentSrc;
      openVideo(src, "", null, vid.muted);
    });

    card.addEventListener("click", (e) => {
      if (e.target.closest(".service-play-btn")) return;
      const src = vid.getAttribute("src") || vid.currentSrc;
      openVideo(src, "", null, vid.muted);
    });

    vid.addEventListener("play", () => {
      $$(".service-video").forEach((other) => {
        if (other !== vid) other.pause();
      });
      syncPlayState();
    });
    vid.addEventListener("pause", syncPlayState);
    vid.addEventListener("ended", () => {
      vid.currentTime = 0;
      syncPlayState();
    });
  });

  window.addEventListener("resize", updateServiceMoreButtons);
  updateServiceMoreButtons();

  /* ============================================
     8. GALLERY FILTERS
     ============================================ */
  const filterBtns = $$(".filter-btn");
  const galleryItems = $$(".gallery-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      galleryItems.forEach((item) => {
        const category = item.getAttribute("data-category");
        const match = filter === "all" || category === filter;
        item.classList.toggle("is-hidden", !match);
      });
    });
  });

  /* ============================================
     9. LIGHTBOX (images)
     ============================================ */
  const lightbox = $("#lightbox");
  const lightboxImage = $("#lightboxImage");
  const lightboxCaption = $("#lightboxCaption");
  const lightboxClose = $("#lightboxClose");

  function openLightbox(src, title) {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = src;
    lightboxImage.alt = title || "";
    if (lightboxCaption) lightboxCaption.textContent = title || "";
    lightbox.hidden = false;
    requestAnimationFrame(() => {
      lightbox.classList.add("is-open");
    });
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
    setTimeout(() => {
      lightbox.hidden = true;
      if (lightboxImage) lightboxImage.src = "";
    }, 350);
  }

  if (lightboxClose) {
    lightboxClose.addEventListener("click", (e) => {
      e.stopPropagation();
      closeLightbox();
    });
  }

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  /* ============================================
     10. VIDEO MODAL
     ============================================ */
  const videoModal = $("#videoModal");
  const modalVideo = $("#modalVideo");
  const videoCaption = $("#videoCaption");
  const videoClose = $("#videoClose");
  function isVideoPath(path) {
    return /\.(mp4|m4v|mov|webm|ogg)(\?|#|$)/i.test(path || "");
  }

  function openVideo(src, title, poster, startMuted) {
    if (!videoModal || !modalVideo || !src) return;

    $$(".service-video").forEach((other) => other.pause());

    modalVideo.pause();
    modalVideo.removeAttribute("src");
    modalVideo.removeAttribute("poster");
    modalVideo.innerHTML = "";

    const resolved = new URL(src, window.location.href).href;

    modalVideo.controls = false;
    modalVideo.removeAttribute("controls");
    modalVideo.setAttribute("playsinline", "");
    modalVideo.setAttribute("preload", "auto");
    modalVideo.muted = !!startMuted;
    modalVideo.src = resolved;

    if (videoCaption) videoCaption.textContent = title || "";

    videoModal.hidden = false;
    requestAnimationFrame(() => {
      videoModal.classList.add("is-open");
    });
    document.body.style.overflow = "hidden";

    modalVideo.load();
    const playPromise = modalVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }

  function closeVideo() {
    if (!videoModal || !modalVideo) return;
    videoModal.classList.remove("is-open");
    modalVideo.pause();
    modalVideo.currentTime = 0;
    document.body.style.overflow = "";
    setTimeout(() => {
      videoModal.hidden = true;
      modalVideo.removeAttribute("src");
      modalVideo.innerHTML = "";
      modalVideo.load();
    }, 350);
  }

  if (videoClose) {
    videoClose.addEventListener("click", (e) => {
      e.stopPropagation();
      closeVideo();
    });
  }

  if (videoModal) {
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal || e.target.classList.contains("video-frame") || e.target.classList.contains("video-modal-inner")) {
        closeVideo();
      }
    });
  }

  if (modalVideo) {
    modalVideo.addEventListener("click", (e) => {
      e.stopPropagation();
      if (modalVideo.paused) {
        modalVideo.play().catch(() => {});
      } else {
        modalVideo.pause();
      }
    });
  }

  /* ============================================
     11. GALLERY + SERVICE IMAGE CLICKS (lightbox)
     ============================================ */
  $$(".gallery-trigger, .service-thumb").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const videoSrc = trigger.getAttribute("data-video");
      const imageSrc = trigger.getAttribute("data-lightbox");
      const title = getItemTitle(trigger);
      if (videoSrc) {
        openVideo(videoSrc, title, null, false);
      } else if (isVideoPath(imageSrc)) {
        openVideo(imageSrc, title, null, false);
      } else if (imageSrc) {
        openLightbox(imageSrc, title);
      }
    });
  });

  /* ============================================
     12. KEYBOARD: ESC closes modals / menu
     ============================================ */
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (lightbox && lightbox.classList.contains("is-open")) closeLightbox();
    if (videoModal && videoModal.classList.contains("is-open")) closeVideo();
    if (navLinks && navLinks.classList.contains("is-open")) closeMenu();
  });
})();
