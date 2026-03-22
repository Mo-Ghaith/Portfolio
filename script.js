/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO SCRIPT — Mohamed Awni Ghaith
   Inspired by Valentin Cheval
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ══ DATA ════════════════════════════════════════════════════════ */

const DATA = {
  skills: [
    { name: 'Python (Pandas, NumPy)', cat: 'Programming' },
    { name: 'SQL', cat: 'Programming' },
    { name: 'Data Cleaning & EDA', cat: 'Analysis' },
    { name: 'Statistics & Modeling', cat: 'Analysis' },
    { name: 'Power BI & Tableau', cat: 'Visualization' },
    { name: 'Excel & Google Sheets', cat: 'Tools' },
  ],

  projects: [
    {
      title: 'Telco Customer Churn Analysis',
      type: 'Analysis',
      desc: 'End-to-end EDA on telecom customer data to identify churn drivers and build retention strategies.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    },
    {
      title: 'Sales Performance Dashboard',
      type: 'Dashboard',
      desc: 'Interactive Power BI dashboard tracking revenue, regional sales, and product performance.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    },
    {
      title: 'FruPix Quality Analytics',
      type: 'Analysis',
      desc: 'Data-driven quality control system for a freeze-dried food startup, reducing oxidation by 20%.',
      img: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&auto=format&fit=crop&q=80',
    },
    {
      title: 'Bioactivity Research Analytics',
      type: 'Research',
      desc: 'Statistical analysis of 50+ experimental tests on titanium alloy bioactivity (Published in Springer).',
      img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80',
    },
    {
      title: 'Financial Data Insights',
      type: 'Analysis',
      desc: 'Python-based financial data analysis pipeline evaluating stock metrics and portfolio trends.',
      img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80',
    },
    {
      title: 'SQL Data Pipeline',
      type: 'Engineering',
      desc: 'Optimized complex SQL queries on 10,000+ row datasets for improved downstream modeling accuracy.',
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    },
  ],
};

/* ══ UTILITIES ═══════════════════════════════════════════════════ */

const qs = (s, ctx = document) => ctx.querySelector(s);
const qsa = (s, ctx = document) => [...ctx.querySelectorAll(s)];

/* ══ RENDER DATA ═════════════════════════════════════════════════ */

function renderData() {
  const skillsGrid = qs('#skillsGrid');
  if (skillsGrid) {
    skillsGrid.innerHTML = `
      <div class="skills-grid">
        ${DATA.skills.map(s => `
          <div class="skill-card split-text">
            <div class="skill-header">
              <span class="skill-cat">${s.cat}</span>
            </div>
            <p class="skill-name">${s.name}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  const projectsGrid = qs('#projectsGrid');
  if (projectsGrid) {
    projectsGrid.innerHTML = DATA.projects.map((p, i) => `
      <a href="#" class="project-card" data-idx="${i}">
        <div class="project-thumb">
          <img src="${p.img}" alt="${p.title}" loading="lazy" />
          <span class="project-type">${p.type}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.desc}</p>
        </div>
      </a>
    `).join('');
  }
}

/* ══ INIT LENIS (SMOOTH SCROLL) ══════════════════════════════════ */

function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // Set current year in footer
  const yearEl = qs('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ══ GSAP ANIMATIONS ══════════════════════════════════════════════ */

function initAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // 1. SplitText using SplitType (free alternative to GSAP SplitText)
  const splitElements = qsa('.split-text');

  splitElements.forEach(el => {
    // We run SplitType on it
    const text = new SplitType(el, { types: 'lines, words, chars' });

    // Animate lines or words up mask
    gsap.from(text.words, {
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
      },
      duration: 1,
      y: '100%',
      opacity: 0,
      rotationX: -40,
      transformOrigin: '0% 50% -50',
      ease: 'power4.out',
      stagger: 0.02
    });
  });

  // 2. 3D Rotating Text in Hero (like Valentin Cheval)
  const slideWords = qsa('.slide-word');
  const slideWrap = qs('.slide-txt-wrap');

  if (slideWords.length > 0 && slideWrap) {
    let tl = gsap.timeline({ repeat: -1 });

    // Set initial states
    gsap.set(slideWords, { rotationX: -90, opacity: 0 });

    // Sequence
    slideWords.forEach((word, i) => {
      tl.to(word, {
        rotationX: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out'
      })
        .to(word, {
          rotationX: 90,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.in',
          delay: 1.5 // time it stays on screen
        });
    });
  }

  // 3. Parallax Images
  const parallaxImages = qsa('.parallax-img img');
  parallaxImages.forEach(img => {
    gsap.fromTo(img, {
      y: '-20%'
    }, {
      y: '20%',
      ease: 'none',
      scrollTrigger: {
        trigger: img.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  // 4. Project Reveal Batch Animation
  const projects = qsa('.project-card');
  if (projects.length > 0) {
    gsap.from(projects, {
      scrollTrigger: {
        trigger: '.projects-list',
        start: 'top 85%'
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }
}

/* ══ INIT ════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  renderData();

  // Need to wait slightly for SplitType and DOM to settle
  setTimeout(() => {
    initSmoothScroll();
    initAnimations();
  }, 100);
});
