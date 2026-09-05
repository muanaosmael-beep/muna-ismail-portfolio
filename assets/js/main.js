/**
 * Muna Ismail Abukar — Portfolio JavaScript
 * Handles navigation, case study modals, copy toasts, and contact form handling.
 */

// Project Data Registry for Academic Research, Data Analysis, and Entrepreneurship
const projectsData = {
  'thesis': {
    title: 'Digital Transformation in Mogadishu’s Telecom Sector',
    category: 'Quantitative Research • PLS-SEM',
    tagline: 'Designed and conducted a quantitative study on digital transformation in the telecommunications sector, applying PLS-SEM in SmartPLS 4 and SPSS for descriptive statistics.',
    image: 'assets/images/projects/project-thesis.svg',
    timeline: 'SIMAD University | 2026',
    client: 'SIMAD University — Mogadishu, Somalia',
    overview: 'Designed and conducted a quantitative study investigating digital transformation in the telecommunications sector of Mogadishu. Applied Partial Least Squares Structural Equation Modeling (PLS-SEM) in SmartPLS 4 to evaluate structural models and hypotheses, complemented by IBM SPSS Statistics for data screening and descriptive statistics.',
    challenges: 'Designing a comprehensive quantitative survey instrument, verifying composite reliability, establishing convergent and discriminant validity, and assessing path coefficients (β values) through bootstrapping.',
    stack: ['Quantitative Research', 'SPSS', 'SmartPLS 4', 'PLS-SEM', 'Data Analysis', 'Academic Research'],
    metrics: [
      { label: 'Methodology', val: 'PLS-SEM' },
      { label: 'Modeling Platform', val: 'SmartPLS 4' },
      { label: 'Descriptive Analytics', val: 'IBM SPSS' }
    ],
    liveUrl: '#',
    codeUrl: '#'
  },
  'social-media': {
    title: 'Social Media Usage & Academic Habits',
    category: 'Applied Data Analysis & Statistical Defense',
    tagline: 'Analysed a 200-record Kaggle dataset across 21 variables in SPSS to identify links between social media use and study habits. Delivered a full written report and presentation and defended the findings before an academic panel.',
    image: 'assets/images/projects/project-social-media.svg',
    timeline: 'SIMAD Innovation Lab | Defended 2025',
    client: 'Academic Review Panel • SIMAD Innovation Lab',
    overview: 'Analysed a 200-record Kaggle dataset across 21 variables in SPSS to identify empirical links between social media use and academic habits. Synthesized analytical insights into a comprehensive written report and presentation, and successfully defended the empirical findings before an academic panel.',
    challenges: 'Cleaning and categorizing 21 variables, testing statistical assumptions, preparing data storytelling visuals, and articulating empirical conclusions during an academic panel defense.',
    stack: ['SPSS', 'Data Analysis', 'Data Interpretation', 'Report Writing', 'Presentation', 'Kaggle Dataset'],
    metrics: [
      { label: 'Dataset Records', val: '200' },
      { label: 'Analyzed Variables', val: '21' },
      { label: 'Defense Outcome', val: 'Defended 2025' }
    ],
    liveUrl: '#',
    codeUrl: '#'
  },
  'entrepreneurship': {
    title: 'Cultural Week Entrepreneurship Project',
    category: 'Business Planning & Team Venture',
    tagline: 'Participated in a team-based entrepreneurship project during Cultural Week, developing and presenting a business concept with hands-on experience in business planning, teamwork, product presentation, customer engagement, and entrepreneurship.',
    image: 'assets/images/projects/project-entrepreneurship.svg',
    timeline: 'Cultural Week | 2025',
    client: 'Cultural Week Entrepreneurship Showcase',
    overview: 'Participated in a team-based entrepreneurship project during Cultural Week, where we developed and presented a business concept as part of a practical entrepreneurship activity. The project provided hands-on experience in business planning, teamwork, product presentation, customer engagement, and entrepreneurship.',
    challenges: 'Coordinating cross-functional team tasks under strict timelines, crafting an engaging live product pitch, and engaging directly with diverse event attendees to validate customer interest.',
    stack: ['Entrepreneurship', 'Business Planning', 'Teamwork', 'Communication', 'Customer Engagement', 'Presentation'],
    metrics: [
      { label: 'Project Role', val: 'Team Member' },
      { label: 'Core Activity', val: 'Business Planning' },
      { label: 'Practical Focus', val: 'Customer Pitch' }
    ],
    liveUrl: '#',
    codeUrl: '#'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Footer Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile Menu Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });
  }

  function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  // 3. Header Styling on Scroll & Back-to-Top Button
  const header = document.getElementById('mainHeader');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (header) {
      if (scrollY > 50) {
        header.classList.add('bg-noir-950/90', 'border-crimson-800/40', 'shadow-2xl');
      } else {
        header.classList.remove('bg-noir-950/90', 'border-crimson-800/40', 'shadow-2xl');
      }
    }

    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. Project Case Details Modal
  const modal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('closeModalBtn');
  const caseStudyBtns = document.querySelectorAll('.view-case-study-btn');

  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalTagline = document.getElementById('modalTagline');
  const modalTimeline = document.getElementById('modalTimeline');
  const modalClient = document.getElementById('modalClient');
  const modalOverview = document.getElementById('modalOverview');
  const modalChallenges = document.getElementById('modalChallenges');
  const modalStack = document.getElementById('modalStack');
  const modalMetrics = document.getElementById('modalMetrics');

  caseStudyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      const data = projectsData[projectId];
      if (!data) return;

      modalTitle.textContent = data.title;
      modalCategory.textContent = data.category;
      modalTagline.textContent = data.tagline;
      modalTimeline.textContent = data.timeline;
      modalClient.textContent = data.client;
      modalOverview.textContent = data.overview;
      modalChallenges.textContent = data.challenges;
      modalImg.src = data.image;
      modalImg.alt = data.title;

      // Stack chips
      modalStack.innerHTML = '';
      data.stack.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'px-3 py-1 text-xs rounded-full bg-crimson-950/70 border border-crimson-800/40 text-champagne-200 font-mono';
        span.textContent = tech;
        modalStack.appendChild(span);
      });

      // Metrics
      modalMetrics.innerHTML = '';
      data.metrics.forEach(m => {
        const div = document.createElement('div');
        div.className = 'p-3.5 rounded-xl bg-noir-950/60 border border-crimson-900/40 text-center';
        div.innerHTML = `
          <div class="text-xl font-bold font-display text-champagne-300">${m.val}</div>
          <div class="text-xs text-rose-200/70 mt-1">${m.label}</div>
        `;
        modalMetrics.appendChild(div);
      });

      // Open Modal
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  function closeModal() {
    if (modal) {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }

  // 5. Copy Email & Phone with Toast Notification
  const copyTriggers = document.querySelectorAll('.copy-trigger');
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimer;

  copyTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-label') || 'Copied';
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`${label} copied: ${textToCopy}`);
      }).catch(() => {
        showToast(`${textToCopy}`);
      });
    });
  });

  function showToast(msg) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = msg;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // 6. Contact Form Interactive Handler
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitFormBtn');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const message = document.getElementById('formMessage').value.trim();

      if (!name || !email || !message) {
        showStatus('Please fill in all required fields.', 'error');
        return;
      }

      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending Message...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        contactForm.reset();
        showStatus('Thank you! Your message has been sent successfully. I will get back to you shortly.', 'success');
        showToast('Message sent successfully!');
      }, 1000);
    });
  }

  function showStatus(msg, type) {
    if (!formStatus) return;
    formStatus.textContent = msg;
    formStatus.className = 'mt-4 p-3 rounded-lg text-sm text-center transition-all ' + 
      (type === 'success' 
        ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/40' 
        : 'bg-rose-950/60 text-rose-300 border border-rose-800/40');
    formStatus.classList.remove('hidden');

    setTimeout(() => {
      formStatus.classList.add('hidden');
    }, 6000);
  }
});
