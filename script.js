/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO SCRIPT — Mohamed Salah Abdel Hamid
   Modules: Loader · Cursor · Nav · Canvas · Typed · Stats
            Skills · Projects · Modal · Contact · GSAP Reveals
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ══ DATA ════════════════════════════════════════════════════════ */

const DATA = {
  typed: [
    'Full-Stack Engineer',
    'AI Innovator',
    'React Architect',
    'Python Developer',
    'Open-Source Contributor',
  ],

  skills: [
    { name: 'React & Next.js',   icon: '⚛',  pct: 95, cat: 'frontend' },
    { name: 'TypeScript',        icon: '📘',  pct: 90, cat: 'frontend' },
    { name: 'Tailwind CSS',      icon: '🎨',  pct: 92, cat: 'frontend' },
    { name: 'Vue.js',            icon: '💚',  pct: 78, cat: 'frontend' },
    { name: 'Three.js / WebGL',  icon: '🌐',  pct: 72, cat: 'frontend' },
    { name: 'Node.js',           icon: '🟩',  pct: 88, cat: 'backend'  },
    { name: 'Python / Django',   icon: '🐍',  pct: 85, cat: 'backend'  },
    { name: 'PostgreSQL',        icon: '🐘',  pct: 82, cat: 'backend'  },
    { name: 'GraphQL',           icon: '◈',  pct: 75, cat: 'backend'  },
    { name: 'Redis',             icon: '🔴',  pct: 70, cat: 'backend'  },
    { name: 'PyTorch / TF',      icon: '🔥',  pct: 80, cat: 'aiml'     },
    { name: 'LangChain / LLMs',  icon: '🤖',  pct: 85, cat: 'aiml'     },
    { name: 'Computer Vision',   icon: '👁',  pct: 73, cat: 'aiml'     },
    { name: 'scikit-learn',      icon: '📊',  pct: 82, cat: 'aiml'     },
    { name: 'Docker / K8s',      icon: '🐳',  pct: 78, cat: 'tools'    },
    { name: 'AWS / GCP',         icon: '☁',  pct: 74, cat: 'tools'    },
    { name: 'CI/CD (GH Actions)',icon: '⚙',  pct: 80, cat: 'tools'    },
    { name: 'Git & Monorepos',   icon: '🌿',  pct: 92, cat: 'tools'    },
  ],

  projects: [
    {
      title: 'NexaChat',
      type: 'AI',
      filter: 'ai',
      desc: 'Real-time AI chat platform powered by LLMs, supporting multi-model routing, RAG pipelines, and 50k+ daily active users.',
      longDesc: 'Built a production-ready conversational AI platform integrating GPT-4, Claude, and open-source models via a unified API layer. Implemented streaming responses, conversation memory with Redis, and a context-aware RAG pipeline over company documents. Scaled to 50k+ daily active users with 99.97% uptime.',
      tags: ['Next.js', 'Python', 'LangChain', 'Redis', 'WebSockets', 'AWS'],
      img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop&q=80',
      metrics: [{ val: '50k+', lab: 'Daily Users' }, { val: '99.97%', lab: 'Uptime' }, { val: '<200ms', lab: 'Latency' }],
      live: '#',
      github: 'https://github.com/MohamedSalahAbdelhamid',
    },
    {
      title: 'ShopPulse',
      type: 'Web',
      filter: 'web',
      desc: 'E-commerce analytics dashboard delivering real-time revenue, funnel, and cohort insights — reduced decision latency by 60%.',
      longDesc: 'Engineered a high-performance analytics dashboard for mid-market e-commerce brands. Replaced manual weekly reporting with live charts, cohort analysis, and AI-generated insights. Integrated Stripe, Shopify, and GA4. Reduced CEO decision latency from 7 days to under 5 minutes.',
      tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Stripe API'],
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
      metrics: [{ val: '60%', lab: 'Faster Decisions' }, { val: '4.9★', lab: 'Client Rating' }, { val: '$2.4M', lab: 'Revenue Tracked' }],
      live: '#',
      github: 'https://github.com/MohamedSalahAbdelhamid',
    },
    {
      title: 'VisionID',
      type: 'AI',
      filter: 'ai',
      desc: 'Computer vision pipeline for real-time product defect detection on manufacturing lines — 94.3% accuracy.',
      longDesc: 'Deployed an end-to-end computer vision system for a Cairo-based electronics manufacturer. Trained a custom YOLOv8 model on 40k annotated defect images, integrated it with a Raspberry Pi 5 edge device on the production line, and built a React dashboard for QC supervisors. Reduced manual inspection costs by 70%.',
      tags: ['Python', 'YOLOv8', 'FastAPI', 'React', 'Edge AI', 'Docker'],
      img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=80',
      metrics: [{ val: '94.3%', lab: 'Accuracy' }, { val: '70%', lab: 'Cost Reduction' }, { val: '12ms', lab: 'Inference' }],
      live: '#',
      github: 'https://github.com/MohamedSalahAbdelhamid',
    },
    {
      title: 'TaskFlow',
      type: 'Web',
      filter: 'web',
      desc: 'Collaborative project management SaaS with AI-powered task estimation, real-time sync, and 10k+ teams onboarded.',
      longDesc: 'Built a Notion-meets-Linear product management tool. Features include nested task trees, AI-generated time estimates from natural language descriptions, Slack/Jira integrations, and real-time collaborative editing via Yjs CRDTs. Grew to 10k teams in 8 months organically.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Yjs', 'OpenAI API'],
      img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format&fit=crop&q=80',
      metrics: [{ val: '10k+', lab: 'Teams' }, { val: '4.8★', lab: 'Product Hunt' }, { val: '35%', lab: 'Faster Delivery' }],
      live: '#',
      github: 'https://github.com/MohamedSalahAbdelhamid',
    },
    {
      title: 'RunFit',
      type: 'Mobile',
      filter: 'mobile',
      desc: 'Cross-platform fitness app with GPS tracking, AI coaching, and social challenges — 200k downloads across iOS & Android.',
      longDesc: 'Designed and built a React Native fitness application with real-time GPS route tracking, a personalized AI coaching engine trained on 1M+ workout datasets, and a social "challenge" system. Achieved 200k downloads and a 4.7★ App Store rating. Integrated HealthKit and Google Fit for passive data sync.',
      tags: ['React Native', 'Expo', 'Python', 'ML Kit', 'HealthKit', 'Firebase'],
      img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80',
      metrics: [{ val: '200k', lab: 'Downloads' }, { val: '4.7★', lab: 'App Store' }, { val: '2.3M', lab: 'Workouts Logged' }],
      live: '#',
      github: 'https://github.com/MohamedSalahAbdelhamid',
    },
    {
      title: 'CryptoLens',
      type: 'Web',
      filter: 'web',
      desc: 'Real-time crypto portfolio tracker with sentiment analysis on tweets, on-chain signals, and automated DCA alerts.',
      longDesc: 'A full-stack crypto intelligence platform that aggregates on-chain data (via Alchemy), Twitter/X sentiment (fine-tuned FinBERT), and candlestick charts. Features automated dollar-cost-averaging alerts, portfolio P&L reports, and a backtesting sandbox. Built with < 1s dashboard load time.',
      tags: ['React', 'Python', 'FinBERT', 'Alchemy API', 'PostgreSQL', 'Celery'],
      img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80',
      metrics: [{ val: '$8M+', lab: 'Portfolio Tracked' }, { val: '<1s', lab: 'Load Time' }, { val: '78%', lab: 'Signal Accuracy' }],
      live: '#',
      github: 'https://github.com/MohamedSalahAbdelhamid',
    },
  ],
};

/* ══ UTILITIES ═══════════════════════════════════════════════════ */

const qs  = (s, ctx = document) => ctx.querySelector(s);
const qsa = (s, ctx = document) => [...ctx.querySelectorAll(s)];

function lerp(a, b, t) { return a + (b - a) * t; }

function clamp(val, min, max) { return Math.min(Math.max(val, min), max); }

function isMobile() { return window.innerWidth <= 768; }

/* ══ LOADER ═══════════════════════════════════════════════════════ */

(function initLoader() {
  const loader   = qs('#loader');
  const fill     = qs('#loaderFill');
  const text     = qs('#loaderText');
  const msgs     = ['Loading assets...', 'Rendering UI...', 'Almost there...', 'Welcome ✦'];
  let   progress = 0;

  document.body.classList.add('is-loading');

  function tick() {
    progress = Math.min(progress + Math.random() * 18 + 4, 100);
    fill.style.width = progress + '%';
    const idx = Math.floor((progress / 100) * (msgs.length - 1));
    text.textContent = msgs[idx];

    if (progress < 100) {
      setTimeout(tick, 120 + Math.random() * 80);
    } else {
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.remove('is-loading');
        setTimeout(() => { loader.remove(); initAnimations(); }, 600);
      }, 300);
    }
  }

  tick();
})();

/* ══ THEME ════════════════════════════════════════════════════════ */

(function initTheme() {
  const btn  = qs('#themeToggle');
  const body = document.body;
  const saved = localStorage.getItem('theme');
  const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

  body.className = saved || preferred;

  btn.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    localStorage.setItem('theme', body.className.includes('light') ? 'light' : 'dark');
  });
})();

/* ══ CUSTOM CURSOR ════════════════════════════════════════════════ */

(function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot  = qs('.cursor-dot');
  const ring = qs('.cursor-ring');
  let mx = 0, my = 0;
  let rx = 0, ry = 0;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  (function animLoop() {
    rx = lerp(rx, mx, 0.18);
    ry = lerp(ry, my, 0.18);

    dot.style.transform  = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;

    requestAnimationFrame(animLoop);
  })();

  const interactables = 'a, button, .project-card, .skill-card, .social-link';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactables)) document.body.classList.add('cursor-expand');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactables)) document.body.classList.remove('cursor-expand');
  });
})();

/* ══ NAV ══════════════════════════════════════════════════════════ */

(function initNav() {
  const nav     = qs('#nav');
  const burger  = qs('#navBurger');
  const mobile  = qs('#navMobile');
  const links   = qsa('.nav-link');
  const year    = qs('#year');
  const prog    = qs('#scrollProgress');

  if (year) year.textContent = new Date().getFullYear();

  window.addEventListener('scroll', () => {
    const s = window.scrollY;

    nav.classList.toggle('scrolled', s > 60);

    const total = document.body.scrollHeight - window.innerHeight;
    prog.style.width = (s / total * 100) + '%';

    const sections = qsa('section[id]');
    let active = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 140) active = sec.id;
    });
    links.forEach(l => l.classList.toggle('active', l.dataset.section === active));
  }, { passive: true });

  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    mobile.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    mobile.setAttribute('aria-hidden', !open);
  });

  qsa('.nav-mobile-link').forEach(l => {
    l.addEventListener('click', () => {
      burger.classList.remove('open');
      mobile.classList.remove('open');
      burger.setAttribute('aria-expanded', false);
      mobile.setAttribute('aria-hidden', true);
    });
  });
})();

/* ══ HERO CANVAS (PARTICLE MESH) ════════════════════════════════ */

(function initCanvas() {
  const canvas = qs('#heroCanvas');
  const ctx    = canvas.getContext('2d');
  let W, H, particles = [], raf;

  const isDark = () => document.body.classList.contains('dark');
  const ACCENT = () => isDark() ? '#4fffb0' : '#00b36b';

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function mkParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.4,
      o: Math.random() * 0.4 + 0.1,
    };
  }

  function init() {
    resize();
    const count = Math.min(Math.floor((W * H) / 8000), 100);
    particles = Array.from({ length: count }, mkParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const col = ACCENT();

    particles.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = col;
      ctx.globalAlpha = p.o;
      ctx.fill();
      ctx.globalAlpha = 1;

      for (let j = i + 1; j < particles.length; j++) {
        const b  = particles[j];
        const dx = p.x - b.x;
        const dy = p.y - b.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = col;
          ctx.globalAlpha = (1 - d / 120) * 0.12;
          ctx.lineWidth = 0.5;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    });

    raf = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); });
  init();
  draw();
})();

/* ══ TYPED TEXT ═══════════════════════════════════════════════════ */

(function initTyped() {
  const el    = qs('#typedText');
  const words = DATA.typed;
  let wi = 0, ci = 0, deleting = false;

  function type() {
    const word = words[wi];
    if (deleting) {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    } else {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
    }
    setTimeout(type, deleting ? 40 : 80);
  }

  type();
})();

/* ══ STATS COUNTER ════════════════════════════════════════════════ */

function initStats() {
  qsa('.stat-item').forEach(item => {
    const el  = item.querySelector('.stat-number');
    const end = parseInt(item.dataset.count, 10);
    const suf = item.dataset.suffix;
    let   cur = 0;
    const dur = 1800;
    const fps = 60;
    const inc = end / (dur / (1000 / fps));

    function update() {
      cur = Math.min(cur + inc, end);
      el.textContent = Math.floor(cur) + suf;
      if (cur < end) requestAnimationFrame(update);
      else el.textContent = end + suf;
    }
    update();
  });
}

/* ══ SKILLS ═══════════════════════════════════════════════════════ */

function renderSkills(cat = 'all') {
  const grid  = qs('#skillsGrid');
  const items = DATA.skills.filter(s => cat === 'all' || s.cat === cat);

  grid.innerHTML = items.map(s => `
    <article class="skill-card" role="listitem" tabindex="0" data-cat="${s.cat}"
             style="--pct: ${s.pct}%">
      <div class="skill-card-header">
        <div class="skill-icon" aria-hidden="true">${s.icon}</div>
        <span class="skill-pct">${s.pct}%</span>
      </div>
      <p class="skill-name">${s.name}</p>
      <div class="skill-bar" role="progressbar" aria-valuenow="${s.pct}"
           aria-valuemin="0" aria-valuemax="100" aria-label="${s.name} proficiency ${s.pct}%">
        <div class="skill-fill"></div>
      </div>
    </article>
  `).join('');

  requestAnimationFrame(() => {
    qsa('.skill-card').forEach((card, i) => {
      setTimeout(() => {
        card.setAttribute('data-visible', 'true');
        if (typeof gsap !== 'undefined') {
          gsap.to(card, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
        } else {
          card.style.opacity = 1;
          card.style.transform = 'none';
        }
      }, i * 50);
    });
  });
}

function initSkills() {
  renderSkills();

  qsa('.skill-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      qsa('.skill-cat-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      renderSkills(btn.dataset.cat);
    });
  });
}

/* ══ PROJECTS ════════════════════════════════════════════════════ */

function renderProjects(filter = 'all') {
  const grid  = qs('#projectsGrid');
  const items = DATA.projects.filter(p => filter === 'all' || p.filter === filter);

  grid.innerHTML = items.map((p, i) => `
    <article class="project-card" role="listitem" tabindex="0"
             data-idx="${i}" aria-label="${p.title} — ${p.type} project">
      <div class="project-thumb">
        <img src="${p.img}" alt="${p.title} project screenshot" loading="lazy"
             width="600" height="220" />
        <div class="project-thumb-overlay" aria-hidden="true"></div>
        <span class="project-type-badge" aria-hidden="true">${p.type}</span>
        <span class="project-view-btn" aria-hidden="true">View Details</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags" aria-label="Technologies used">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          ${p.live !== '#' ? `<a href="${p.live}" class="project-link" target="_blank" rel="noopener" aria-label="Live demo of ${p.title}">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3M9 2h5v5M14 2L7 9" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Live Demo
          </a>` : ''}
          <a href="${p.github}" class="project-link" target="_blank" rel="noopener" aria-label="GitHub repo for ${p.title}">
            <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </article>
  `).join('');

  // Re-bind card clicks
  qsa('.project-card').forEach(card => {
    card.addEventListener('click', () => openModal(parseInt(card.dataset.idx)));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(parseInt(card.dataset.idx));
      }
    });
  });

  // Re-animate
  if (typeof gsap !== 'undefined') {
    gsap.from('.project-card', {
      opacity: 0, y: 40,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out',
    });
  }
}

function initProjects() {
  renderProjects();

  qsa('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      qsa('.filter-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderProjects(btn.dataset.filter);
    });
  });
}

/* ══ MODAL ════════════════════════════════════════════════════════ */

function openModal(idx) {
  const p       = DATA.projects[idx];
  const overlay = qs('#modalOverlay');
  const content = qs('#modalContent');

  content.innerHTML = `
    <img src="${p.img}" alt="${p.title} full screenshot" class="modal-hero-img" loading="lazy" />
    <h2 class="modal-title" id="modalTitle">${p.title}</h2>
    <p class="modal-desc">${p.longDesc}</p>
    <div class="modal-metrics">
      ${p.metrics.map(m => `
        <div class="modal-metric">
          <span class="modal-metric-val">${m.val}</span>
          <span class="modal-metric-lab">${m.lab}</span>
        </div>
      `).join('')}
    </div>
    <div class="modal-stack">
      ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
    </div>
    <div class="modal-actions">
      ${p.live !== '#' ? `<a href="${p.live}" class="btn-primary" target="_blank" rel="noopener">
        Live Demo
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3M9 2h5v5M14 2L7 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </a>` : ''}
      <a href="${p.github}" class="btn-secondary" target="_blank" rel="noopener">
        View on GitHub
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
      </a>
    </div>
  `;

  overlay.hidden = false;
  document.body.style.overflow = 'hidden';

  // Focus trap
  setTimeout(() => qs('#modalClose').focus(), 100);
}

function closeModal() {
  const overlay = qs('#modalOverlay');
  overlay.hidden = true;
  document.body.style.overflow = '';
}

function initModal() {
  qs('#modalClose').addEventListener('click', closeModal);
  qs('#modalOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ══ CONTACT FORM ════════════════════════════════════════════════ */

function initContact() {
  const form    = qs('#contactForm');
  const submit  = qs('#formSubmit');
  const success = qs('#formSuccess');
  const btnTxt  = submit.querySelector('.btn-text');
  const btnLoad = submit.querySelector('.btn-loading');
  const btnIco  = submit.querySelector('svg:last-child');

  function validate(input) {
    const err = input.closest('.form-group').querySelector('.form-error');
    let msg = '';

    if (!input.value.trim()) {
      msg = 'This field is required.';
    } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      msg = 'Please enter a valid email address.';
    } else if (input.name === 'message' && input.value.trim().length < 20) {
      msg = 'Message must be at least 20 characters.';
    }

    input.classList.toggle('error', !!msg);
    err.textContent = msg;
    err.classList.toggle('visible', !!msg);
    return !msg;
  }

  qsa('.form-input').forEach(input => {
    input.addEventListener('blur', () => validate(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) validate(input);
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const inputs = qsa('.form-input');
    const valid  = inputs.map(i => validate(i)).every(Boolean);
    if (!valid) return;

    // Loading state
    btnTxt.hidden  = true;
    btnIco.hidden  = true;
    btnLoad.hidden = false;
    submit.disabled = true;

    // Simulate send (replace with real endpoint)
    setTimeout(() => {
      form.hidden    = true;
      success.hidden = false;
    }, 1800);
  });
}

/* ══ GSAP ANIMATIONS ══════════════════════════════════════════════ */

function initAnimations() {
  if (typeof gsap === 'undefined') {
    // Fallback: just show everything
    qsa('.reveal-item, .section-header, .about-grid, .stats-grid, .skill-card, .project-card, .contact-grid, .timeline-item').forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
    initStats();
    initSkills();
    initProjects();
    initModal();
    initContact();
    return;
  }

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  /* Hero stagger */
  gsap.to('.reveal-item', {
    opacity: 1, y: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: 'power3.out',
    delay: 0.2,
  });

  /* Smooth scroll CTAs */
  qsa('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = qs(id);
      if (!target) return;
      e.preventDefault();
      gsap.to(window, { scrollTo: { y: target, offsetY: 80 }, duration: 0.9, ease: 'power2.inOut' });
    });
  });

  /* Stats */
  ScrollTrigger.create({
    trigger: '.stats-band',
    once: true,
    onEnter: () => {
      gsap.to('.stats-grid', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
      initStats();
    }
  });

  /* About */
  ScrollTrigger.create({
    trigger: '.about',
    start: 'top 75%',
    once: true,
    onEnter: () => {
      gsap.to('.about .section-header', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' });
      gsap.to('.about-grid', { opacity: 1, y: 0, duration: 0.9, delay: 0.15, ease: 'power2.out' });
      gsap.to('.timeline-item', {
        opacity: 1, y: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.4,
        ease: 'power2.out',
      });
    }
  });

  /* Skills */
  ScrollTrigger.create({
    trigger: '.skills',
    start: 'top 75%',
    once: true,
    onEnter: () => {
      gsap.to('.skills .section-header', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' });
      initSkills();
    }
  });

  /* Projects */
  ScrollTrigger.create({
    trigger: '.projects',
    start: 'top 75%',
    once: true,
    onEnter: () => {
      gsap.to('.projects .section-header', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' });
      initProjects();
    }
  });

  /* Contact */
  ScrollTrigger.create({
    trigger: '.contact',
    start: 'top 75%',
    once: true,
    onEnter: () => {
      gsap.to('.contact .section-header', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' });
      gsap.to('.contact-grid', { opacity: 1, y: 0, duration: 0.9, delay: 0.15, ease: 'power2.out' });
    }
  });

  /* Parallax on hero canvas */
  gsap.to('.hero-canvas', {
    y: () => window.innerHeight * 0.3,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });

  /* Orb 3D tilt on mouse */
  const orb = qs('.hero-orb');
  if (orb) {
    document.addEventListener('mousemove', e => {
      const cx = window.innerWidth  / 2;
      const cy = window.innerHeight / 2;
      const rx = ((e.clientY - cy) / cy) * 8;
      const ry = ((e.clientX - cx) / cx) * -8;
      gsap.to(orb, {
        rotateX: rx, rotateY: ry,
        duration: 1.2,
        ease: 'power1.out',
        transformPerspective: 800,
      });
    });
  }

  initModal();
  initContact();
}

/* ══ INIT ════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  // Skills & projects init handled inside initAnimations after loader
  // (GSAP loads async, so we wait)

  // If GSAP already loaded
  if (typeof gsap !== 'undefined') {
    initAnimations();
  }
  // else loader callback fires initAnimations when ready
});

// Fallback if GSAP takes too long
setTimeout(() => {
  const loader = qs('#loader');
  if (loader && !loader.classList.contains('hidden')) {
    loader.classList.add('hidden');
    document.body.classList.remove('is-loading');
    initAnimations();
  }
}, 5000);
