/**
 * @file js/main.js
 * @description Logique applicative principale pour READY FIT :
 * Menu responsive, animations au scroll, filtres de planning,
 * bascule de tarification, calculateur d'IMC, carrousel de témoignages,
 * validation du formulaire de contact et intégration WhatsApp (686942622).
 */

import { initI18n, getCurrentLang, t } from './i18n.js';

/* ==========================================================================
   1. DONNÉES DU PLANNING (SCHEDULE DATA)
   ========================================================================== */

const scheduleData = [
  {
    id: 1,
    dayKey: 'day_monday',
    time: '07:00 - 08:15',
    category: 'cardio',
    titleKey: 'disc_cardio_title',
    coachKey: 'coach_2_name',
    levelKey: 'level_all'
  },
  {
    id: 2,
    dayKey: 'day_monday',
    time: '12:30 - 13:45',
    category: 'crossfit',
    titleKey: 'disc_crossfit_title',
    coachKey: 'coach_1_name',
    levelKey: 'level_intermediate'
  },
  {
    id: 3,
    dayKey: 'day_monday',
    time: '18:00 - 19:30',
    category: 'boxing',
    titleKey: 'disc_boxing_title',
    coachKey: 'coach_3_name',
    levelKey: 'level_all'
  },
  {
    id: 4,
    dayKey: 'day_tuesday',
    time: '07:30 - 08:30',
    category: 'yoga',
    titleKey: 'disc_yoga_title',
    coachKey: 'coach_4_name',
    levelKey: 'level_all'
  },
  {
    id: 5,
    dayKey: 'day_tuesday',
    time: '18:00 - 19:30',
    category: 'strength',
    titleKey: 'disc_strength_title',
    coachKey: 'coach_1_name',
    levelKey: 'level_advanced'
  },
  {
    id: 6,
    dayKey: 'day_wednesday',
    time: '07:00 - 08:30',
    category: 'crossfit',
    titleKey: 'disc_crossfit_title',
    coachKey: 'coach_2_name',
    levelKey: 'level_intermediate'
  },
  {
    id: 7,
    dayKey: 'day_wednesday',
    time: '18:30 - 20:00',
    category: 'boxing',
    titleKey: 'disc_boxing_title',
    coachKey: 'coach_3_name',
    levelKey: 'level_advanced'
  },
  {
    id: 8,
    dayKey: 'day_thursday',
    time: '12:30 - 13:45',
    category: 'cardio',
    titleKey: 'disc_cardio_title',
    coachKey: 'coach_2_name',
    levelKey: 'level_all'
  },
  {
    id: 9,
    dayKey: 'day_thursday',
    time: '18:00 - 19:15',
    category: 'yoga',
    titleKey: 'disc_yoga_title',
    coachKey: 'coach_4_name',
    levelKey: 'level_all'
  },
  {
    id: 10,
    dayKey: 'day_friday',
    time: '17:30 - 19:00',
    category: 'strength',
    titleKey: 'disc_strength_title',
    coachKey: 'coach_1_name',
    levelKey: 'level_all'
  },
  {
    id: 11,
    dayKey: 'day_saturday',
    time: '09:00 - 10:30',
    category: 'crossfit',
    titleKey: 'disc_crossfit_title',
    coachKey: 'coach_2_name',
    levelKey: 'level_all'
  },
  {
    id: 12,
    dayKey: 'day_saturday',
    time: '11:00 - 12:30',
    category: 'boxing',
    titleKey: 'disc_boxing_title',
    coachKey: 'coach_3_name',
    levelKey: 'level_intermediate'
  },
  {
    id: 13,
    dayKey: 'day_sunday',
    time: '09:30 - 11:00',
    category: 'yoga',
    titleKey: 'disc_yoga_title',
    coachKey: 'coach_4_name',
    levelKey: 'level_all'
  }
];

/* ==========================================================================
   2. DONNÉES DES TARIFS (PRICING DATA EN FCFA)
   ========================================================================== */

const pricingPlans = {
  monthly: {
    basic: '25 000',
    premium: '45 000',
    vip: '75 000',
    periodKey: 'per_month'
  },
  annual: {
    basic: '240 000', // -20% (soit 20 000/mois au lieu de 25 000)
    premium: '432 000', // -20% (soit 36 000/mois au lieu de 45 000)
    vip: '720 000', // -20% (soit 60 000/mois au lieu de 75 000)
    periodKey: 'per_year'
  }
};

let currentBillingPeriod = 'monthly'; // 'monthly' | 'annual'

/* ==========================================================================
   3. GESTION DU HEADER & NAVIGATION
   ========================================================================== */

function setupHeaderAndNav() {
  const header = document.querySelector('.site-header');
  const burgerBtn = document.querySelector('.burger-btn');
  const mobileNav = document.querySelector('.mobile-nav-overlay');
  const navLinks = document.querySelectorAll('.nav-link');

  // Effet d'ombrage et de flou au scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
    updateActiveNavLink();
  }, { passive: true });

  // Ouverture / Fermeture menu burger
  function toggleMobileMenu() {
    const isOpen = burgerBtn?.classList.toggle('active');
    mobileNav?.classList.toggle('open', isOpen);
    burgerBtn?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';

    if (isOpen) {
      const scrollableArea = document.getElementById('mobile-nav-scrollable');
      if (scrollableArea) scrollableArea.scrollTop = 0;
    }
  }

  function closeMobileMenu() {
    burgerBtn?.classList.remove('active');
    mobileNav?.classList.remove('open');
    burgerBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  burgerBtn?.addEventListener('click', toggleMobileMenu);

  // Bouton croix « X » fonctionnelle pour sortir du menu mobile
  const mobileCloseXBtn = document.getElementById('mobile-close-x');
  mobileCloseXBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    closeMobileMenu();
  });

  // Encoche supérieure tactile et fonctionnelle pour sortir du menu mobile
  const mobileNotchCloseBtn = document.getElementById('mobile-notch-close');
  const mobileNotchBottomBtn = document.getElementById('mobile-notch-bottom-close');

  mobileNotchCloseBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    closeMobileMenu();
  });

  mobileNotchBottomBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    closeMobileMenu();
  });

  // Glissement tactile fluide UNIQUEMENT sur l'encoche pour fermer si tirée (sans gêner le défilement des options)
  let notchTouchStartY = 0;
  mobileNotchCloseBtn?.addEventListener('touchstart', (e) => {
    notchTouchStartY = e.touches[0].clientY;
  }, { passive: true });

  mobileNotchCloseBtn?.addEventListener('touchend', (e) => {
    const diffY = e.changedTouches[0].clientY - notchTouchStartY;
    if (Math.abs(diffY) > 30) {
      closeMobileMenu();
    }
  }, { passive: true });

  // Fermeture au clic sur un lien de navigation
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Fermeture à la touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav?.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  // Scroll spy : active le lien correspondant à la section visible
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 140;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          const href = link.getAttribute('href');
          const isCurrent = href === `#${id}`;
          link.classList.toggle('active', isCurrent);
        });
      }
    });
  }

  updateActiveNavLink();
}

/* ==========================================================================
   4. COMPTEURS ANIMÉS DU HERO (STATS)
   ========================================================================== */

function setupAnimatedCounters() {
  const statsSection = document.querySelector('.hero-stats');
  if (!statsSection) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateAllCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);

  function animateAllCounters() {
    // Si l'utilisateur préfère moins de mouvement, afficher directement
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    animateCounter('stat-members-val', 500, '+', 1400);
    animateCounter('stat-coaches-val', 15, '', 1000);
    // Le 7j/7 ou 7 Days est géré textuellement
  }

  function animateCounter(elementId, targetValue, suffix = '', duration = 1200) {
    const el = document.getElementById(elementId);
    if (!el) return;

    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * targetValue);

      el.textContent = `${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = `${targetValue}${suffix}`;
      }
    }

    requestAnimationFrame(update);
  }
}

/* ==========================================================================
   5. PLANNING FILTRABLE (INTERACTIVE SCHEDULE)
   ========================================================================== */

let currentScheduleFilter = 'all';

function renderSchedule() {
  const tableBody = document.getElementById('schedule-table-body');
  const cardsContainer = document.getElementById('schedule-cards-container');
  const emptyState = document.getElementById('schedule-empty-state');
  if (!tableBody || !cardsContainer) return;

  const lang = getCurrentLang();

  // Filtrer les données
  const filtered = scheduleData.filter((item) => {
    if (currentScheduleFilter === 'all') return true;
    return item.category === currentScheduleFilter;
  });

  if (filtered.length === 0) {
    tableBody.innerHTML = '';
    cardsContainer.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  // Rendu Tableau Desktop
  tableBody.innerHTML = filtered.map((item) => {
    const day = t(item.dayKey, lang);
    const title = t(item.titleKey, lang);
    const coach = t(item.coachKey, lang);
    const level = t(item.levelKey, lang);
    const isAdv = item.levelKey === 'level_advanced';

    return `
      <tr>
        <td class="cell-day"><strong>${day}</strong></td>
        <td class="cell-time">${item.time}</td>
        <td class="cell-discipline">${title}</td>
        <td class="cell-coach">${coach}</td>
        <td>
          <span class="badge-level ${isAdv ? 'badge-level--adv' : ''}">${level}</span>
        </td>
        <td>
          <button class="btn btn--primary btn-schedule-book" data-session="${day} - ${item.time} (${title})" style="padding: 6px 14px; font-size: 0.75rem; min-height: 36px;">
            ${t('table_book_btn', lang)}
          </button>
        </td>
      </tr>
    `;
  }).join('');

  // Rendu Cartes Mobile
  cardsContainer.innerHTML = filtered.map((item) => {
    const day = t(item.dayKey, lang);
    const title = t(item.titleKey, lang);
    const coach = t(item.coachKey, lang);
    const level = t(item.levelKey, lang);
    const isAdv = item.levelKey === 'level_advanced';

    return `
      <div class="schedule-card-item">
        <div class="schedule-card-header">
          <span class="schedule-card-day" style="font-weight: 700; color: var(--blanc);">${day}</span>
          <span class="schedule-card-time">${item.time}</span>
        </div>
        <div class="schedule-card-title">${title}</div>
        <div class="schedule-card-details">
          <span>${coach}</span>
          <span class="badge-level ${isAdv ? 'badge-level--adv' : ''}">${level}</span>
        </div>
        <button class="btn btn--primary btn-schedule-book btn--full" data-session="${day} - ${item.time} (${title})" style="padding: 10px; font-size: 0.8125rem; min-height: 40px; margin-top: 8px;">
          ${t('table_book_btn', lang)}
        </button>
      </div>
    `;
  }).join('');

  // Attacher les clics sur les boutons "Réserver"
  document.querySelectorAll('.btn-schedule-book').forEach((btn) => {
    btn.addEventListener('click', () => {
      const sessionInfo = btn.getAttribute('data-session') || '';
      prefillContactForBooking(sessionInfo);
    });
  });
}

function prefillContactForBooking(sessionInfo) {
  const contactSection = document.getElementById('contact');
  const msgInput = document.getElementById('contact-message');
  const goalSelect = document.getElementById('contact-goal');

  if (msgInput) {
    const lang = getCurrentLang();
    const prefix = lang === 'en'
      ? `I would like to book a spot for the session: ${sessionInfo}`
      : `Je souhaite réserver une place pour la session : ${sessionInfo}`;
    msgInput.value = `${prefix}\n`;
    msgInput.focus();
  }

  if (goalSelect) {
    goalSelect.value = 'group_classes';
  }

  contactSection?.scrollIntoView({ behavior: 'smooth' });
}

function setupScheduleFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentScheduleFilter = btn.getAttribute('data-filter') || 'all';
      renderSchedule();
    });
  });

  renderSchedule();
}

/* ==========================================================================
   6. TARIFS (PRICING TOGGLE MENSUEL / ANNUEL)
   ========================================================================== */

function setupPricing() {
  const toggleMonthly = document.getElementById('billing-monthly-btn');
  const toggleAnnual = document.getElementById('billing-annual-btn');

  function updatePricingDisplay() {
    const lang = getCurrentLang();
    const data = pricingPlans[currentBillingPeriod];

    const basicPriceEl = document.getElementById('price-basic-val');
    const premiumPriceEl = document.getElementById('price-premium-val');
    const vipPriceEl = document.getElementById('price-vip-val');

    const periodEls = document.querySelectorAll('.plan-period-label');

    if (basicPriceEl) basicPriceEl.textContent = data.basic;
    if (premiumPriceEl) premiumPriceEl.textContent = data.premium;
    if (vipPriceEl) vipPriceEl.textContent = data.vip;

    periodEls.forEach((el) => {
      el.textContent = t(data.periodKey, lang);
    });

    toggleMonthly?.classList.toggle('active', currentBillingPeriod === 'monthly');
    toggleAnnual?.classList.toggle('active', currentBillingPeriod === 'annual');
  }

  toggleMonthly?.addEventListener('click', () => {
    currentBillingPeriod = 'monthly';
    updatePricingDisplay();
  });

  toggleAnnual?.addEventListener('click', () => {
    currentBillingPeriod = 'annual';
    updatePricingDisplay();
  });

  // Boutons de sélection d'une formule
  document.querySelectorAll('.btn-select-plan').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const planName = btn.getAttribute('data-plan') || 'Premium';
      const contactSection = document.getElementById('contact');
      const msgInput = document.getElementById('contact-message');
      const goalSelect = document.getElementById('contact-goal');

      if (goalSelect) {
        goalSelect.value = planName.toLowerCase().includes('vip') ? 'vip_coaching' : 'muscle';
      }

      if (msgInput) {
        const lang = getCurrentLang();
        msgInput.value = lang === 'en'
          ? `Hello, I want to sign up for the ${planName} formula (${currentBillingPeriod}).`
          : `Bonjour, je souhaite souscrire à la formule ${planName} (${currentBillingPeriod === 'annual' ? 'abonnement annuel' : 'mensuel'}).`;
      }

      contactSection?.scrollIntoView({ behavior: 'smooth' });
      msgInput?.focus();
    });
  });

  updatePricingDisplay();
}

/* ==========================================================================
   7. CALCULATEUR D'IMC (BMI CALCULATOR)
   ========================================================================== */

let lastBmiScore = null;

function setupBmiCalculator() {
  const weightInput = document.getElementById('bmi-weight');
  const heightInput = document.getElementById('bmi-height');
  const calcBtn = document.getElementById('bmi-calc-btn');
  const valueDisplay = document.getElementById('bmi-val-display');
  const categoryBadge = document.getElementById('bmi-cat-badge');
  const adviceBox = document.getElementById('bmi-advice-text');
  const pointer = document.getElementById('bmi-pointer');
  const errorMsg = document.getElementById('bmi-err');

  function calculateBmi() {
    const weight = parseFloat(weightInput?.value || '0');
    const height = parseFloat(heightInput?.value || '0');

    // Validation
    if (isNaN(weight) || isNaN(height) || weight < 30 || weight > 300 || height < 100 || height > 250) {
      if (errorMsg) {
        errorMsg.textContent = t('bmi_err_invalid', getCurrentLang());
        errorMsg.classList.add('visible');
      }
      return;
    }

    if (errorMsg) errorMsg.classList.remove('visible');

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    lastBmiScore = bmi;

    updateBmiResult(bmi);
  }

  function updateBmiResult(bmi) {
    if (!bmi) return;
    const lang = getCurrentLang();

    // 1. Valeur
    if (valueDisplay) {
      valueDisplay.textContent = bmi.toFixed(1);
    }

    // 2. Détermination de la catégorie & conseil
    let catKey = '';
    let adviceKey = '';
    let pointerPercent = 50;
    let badgeColor = 'var(--blanc)';

    if (bmi < 18.5) {
      catKey = 'bmi_cat_underweight';
      adviceKey = 'bmi_advice_underweight';
      badgeColor = '#B8B8B8';
      // Échelle 15 à 18.5 -> 5% à 24%
      pointerPercent = Math.max(5, Math.min(24, ((bmi - 14) / 4.5) * 20));
    } else if (bmi >= 18.5 && bmi < 25.0) {
      catKey = 'bmi_cat_normal';
      adviceKey = 'bmi_advice_normal';
      badgeColor = 'var(--succes)';
      // Échelle 18.5 à 25 -> 25% à 50%
      pointerPercent = 25 + (((bmi - 18.5) / 6.5) * 25);
    } else if (bmi >= 25.0 && bmi < 30.0) {
      catKey = 'bmi_cat_overweight';
      adviceKey = 'bmi_advice_overweight';
      badgeColor = 'var(--orange-clair)';
      // Échelle 25 à 30 -> 51% à 75%
      pointerPercent = 51 + (((bmi - 25.0) / 5.0) * 24);
    } else {
      catKey = 'bmi_cat_obese';
      adviceKey = 'bmi_advice_obese';
      badgeColor = 'var(--erreur)';
      // Échelle 30 à 40 -> 76% à 95%
      pointerPercent = Math.min(95, 76 + (((bmi - 30.0) / 10.0) * 20));
    }

    if (categoryBadge) {
      categoryBadge.textContent = t(catKey, lang);
      categoryBadge.style.color = badgeColor;
    }

    if (adviceBox) {
      adviceBox.textContent = t(adviceKey, lang);
    }

    if (pointer) {
      pointer.style.left = `${pointerPercent}%`;
    }
  }

  calcBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    calculateBmi();
  });

  // Calcul sur appui sur la touche "Entrée"
  [weightInput, heightInput].forEach((input) => {
    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        calculateBmi();
      }
    });
  });

  // Écoute des changements de langue pour retraduire le résultat
  window.addEventListener('languageChanged', () => {
    if (lastBmiScore !== null) {
      updateBmiResult(lastBmiScore);
    }
  });
}

/* ==========================================================================
   8. TÉMOIGNAGES (CARROUSEL JS VANILLA)
   ========================================================================== */

function setupTestimonialsCarousel() {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.getElementById('testi-prev-btn');
  const nextBtn = document.getElementById('testi-next-btn');
  const dotsContainer = document.getElementById('testi-dots');

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoplayTimer = null;
  const AUTOPLAY_INTERVAL = 5500;

  // Création des points indicateurs (dots)
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Slide ${idx + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(idx);
        restartAutoplay();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots() {
    const dots = dotsContainer?.querySelectorAll('.carousel-dot');
    dots?.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  prevBtn?.addEventListener('click', () => {
    prevSlide();
    restartAutoplay();
  });

  nextBtn?.addEventListener('click', () => {
    nextSlide();
    restartAutoplay();
  });

  // Autoplay avec mise en pause au survol
  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, AUTOPLAY_INTERVAL);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  const carouselViewport = document.querySelector('.carousel-viewport');
  carouselViewport?.addEventListener('mouseenter', stopAutoplay);
  carouselViewport?.addEventListener('mouseleave', startAutoplay);
  carouselViewport?.addEventListener('focusin', stopAutoplay);
  carouselViewport?.addEventListener('focusout', startAutoplay);

  // Support swipe tactile mobile
  let touchStartX = 0;
  let touchEndX = 0;

  carouselViewport?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carouselViewport?.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      restartAutoplay();
    }
  }

  startAutoplay();
}

/* ==========================================================================
   9. FORMULAIRE DE CONTACT (AVEC ENVOI/SIMULATION AU 686942622)
   ========================================================================== */

function setupContactForm() {
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const phoneInput = document.getElementById('contact-phone');
  const goalSelect = document.getElementById('contact-goal');
  const messageInput = document.getElementById('contact-message');
  const submitBtn = document.getElementById('contact-submit-btn');
  const successBox = document.getElementById('contact-success');
  const whatsappActionBtn = document.getElementById('contact-wa-action');

  if (!form) return;

  function setFieldError(fieldId, errorKey) {
    const group = document.getElementById(`group-${fieldId}`);
    const errorEl = document.getElementById(`error-${fieldId}`);
    if (group && errorEl) {
      group.classList.add('has-error');
      errorEl.textContent = t(errorKey, getCurrentLang());
    }
  }

  function clearFieldError(fieldId) {
    const group = document.getElementById(`group-${fieldId}`);
    const errorEl = document.getElementById(`error-${fieldId}`);
    if (group && errorEl) {
      group.classList.remove('has-error');
      errorEl.textContent = '';
    }
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    // Accepte format camerounais ou standard international
    const clean = phone.replace(/[\s\-\(\)\+]/g, '');
    return clean.length >= 8 && /^\d+$/.test(clean);
  }

  // Nettoyage en direct à la frappe
  nameInput?.addEventListener('input', () => clearFieldError('name'));
  emailInput?.addEventListener('input', () => clearFieldError('email'));
  phoneInput?.addEventListener('input', () => clearFieldError('phone'));
  goalSelect?.addEventListener('change', () => clearFieldError('goal'));
  messageInput?.addEventListener('input', () => clearFieldError('message'));

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const lang = getCurrentLang();

    const name = nameInput?.value.trim() || '';
    const email = emailInput?.value.trim() || '';
    const phone = phoneInput?.value.trim() || '';
    const goal = goalSelect?.value || '';
    const message = messageInput?.value.trim() || '';

    // Validation Nom
    if (name.length < 2) {
      setFieldError('name', 'val_err_name');
      isValid = false;
    } else {
      clearFieldError('name');
    }

    // Validation Email
    if (!validateEmail(email)) {
      setFieldError('email', 'val_err_email');
      isValid = false;
    } else {
      clearFieldError('email');
    }

    // Validation Téléphone
    if (!validatePhone(phone)) {
      setFieldError('phone', 'val_err_phone');
      isValid = false;
    } else {
      clearFieldError('phone');
    }

    // Validation Objectif
    if (!goal || goal === '') {
      setFieldError('goal', 'val_err_goal');
      isValid = false;
    } else {
      clearFieldError('goal');
    }

    // Validation Message
    if (message.length < 10) {
      setFieldError('message', 'val_err_msg');
      isValid = false;
    } else {
      clearFieldError('message');
    }

    if (!isValid) return;

    // Simulation d'envoi
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = t('contact_form_sending', lang);
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = t('contact_form_submit', lang);
      }

      // Préparation du message WhatsApp vers le numéro 686942622 (+237 686942622)
      const waText = encodeURIComponent(
        `*Nouvelle demande READY FIT*\n` +
        `👤 Nom : ${name}\n` +
        `📧 Email : ${email}\n` +
        `📱 Tel : ${phone}\n` +
        `🎯 Objectif : ${goal}\n` +
        `💬 Message : ${message}`
      );

      const waUrl = `https://wa.me/237686942622?text=${waText}`;

      if (whatsappActionBtn) {
        whatsappActionBtn.setAttribute('href', waUrl);
      }

      if (successBox) {
        successBox.classList.add('visible');
      }

      form.reset();
    }, 600);
  });
}

/* ==========================================================================
   10. BOUTON FLOTTANT WHATSAPP (686942622)
   ========================================================================== */

function setupFloatingWhatsapp() {
  const waBtn = document.getElementById('floating-whatsapp');
  if (!waBtn) return;

  function updateWhatsappUrl() {
    const lang = getCurrentLang();
    const msg = encodeURIComponent(t('whatsapp_prefilled', lang));
    waBtn.setAttribute('href', `https://wa.me/237686942622?text=${msg}`);
  }

  updateWhatsappUrl();
  window.addEventListener('languageChanged', updateWhatsappUrl);
}

/* ==========================================================================
   11. ANIMATIONS D'APPARITION AU SCROLL (INTERSECTION OBSERVER)
   ========================================================================== */

function setupScrollAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    observer.observe(el);
  });
}

/* ==========================================================================
   12. RETOUR EN HAUT (BACK TO TOP)
   ========================================================================== */

function setupBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  backToTopBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   13. INITIALISATION GLOBALE AU CHARGEMENT DU DOM
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialiser le système i18n
  initI18n();

  // 2. Initialiser tous les composants interactifs
  setupHeaderAndNav();
  setupAnimatedCounters();
  setupScheduleFilters();
  setupPricing();
  setupBmiCalculator();
  setupTestimonialsCarousel();
  setupContactForm();
  setupFloatingWhatsapp();
  setupScrollAnimations();
  setupBackToTop();

  // 3. Écouteur global pour rafraîchir les composants dynamiques lors d'un changement de langue
  window.addEventListener('languageChanged', () => {
    renderSchedule();
    const activePricingBtn = document.querySelector('.toggle-opt-btn.active');
    if (activePricingBtn) {
      activePricingBtn.click();
    }
  });
});
