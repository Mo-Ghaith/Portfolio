'use strict';

/* ===== SVG ICONS ===== */
const ICONS = {
  telecom: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18M7 16V9m4 7v-4m4 4V7m4 9v-6"/></svg>`,
  cluster: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><circle cx="12" cy="12" r="2.5"/><path d="M8.5 8.5l1 1M14.5 8.5l-1 1M8.5 15.5l1-1M14.5 15.5l-1-1" stroke="currentColor" stroke-width="1" fill="none"/></svg>`,
  factory: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h20V8l-6 4V8l-6 4V4H2v16zm6-6h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/></svg>`,
  research: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 2v7.15L5.65 17.3A2 2 0 007.5 20h9a2 2 0 001.85-2.7L15 9.15V2M8 2h8M10 9.5h4M7.5 15h9"/></svg>`,
  logistics: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1 3h15v13H1zM16 8h4l3 4v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  body: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="4" r="2.5"/><path d="M15 8H9l-4 8h4l1 6h4l1-6h4z"/></svg>`,
  finance: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
  fraud: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4m0 4h.01" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>`,
  loan: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 9h20M8 15h2m4 0h2"/></svg>`
};

/* ===== DATA ===== */
const DATA = {
  projects: [
    {
      title: 'Global Logistics Data Mining & SQL Architecture',
      category: 'Data Mining, SQL, EDA',
      year: '2026',
      icon: 'logistics',
      status: 'live',
      tools: ['Python', 'SQL Server', 'Pandas', 'Seaborn', 'Random Forest'],
      github: 'https://github.com/Mo-Ghaith/logistics-data-mining-project',
      demo: '',
      description: 'End-to-end data mining project on global logistics data. Designed an 11-table normalized SQL database architecture, built comprehensive EDA with 29 professional visualizations, and applied Random Forest ML model for shipment delay prediction. Includes full TQV (Technical, Quality, Value) report.',
      screenshot: 'assets/projects/logistics.png'
    },
    {
      title: 'Telecommunication Company Churn Analysis',
      category: 'EDA, Python',
      year: '2026',
      icon: 'telecom',
      status: 'repo',
      tools: ['Python', 'Pandas', 'Seaborn', 'Matplotlib', 'Scikit-learn'],
      github: 'https://github.com/Mo-Ghaith/telco-customer-churn-eda',
      demo: '',
      description: 'Comprehensive exploratory data analysis of 7,043 customer records to identify churn patterns and drivers. Performed feature engineering, statistical analysis, and built predictive models to enable targeted retention strategies. Key finding: month-to-month contracts with fiber optic internet drive 80% of churn.',
      screenshot: 'assets/projects/telco_churn.png'
    },
    {
      title: 'Body Performance ML Classification',
      category: 'Machine Learning, Classification',
      year: '2026',
      icon: 'body',
      status: 'repo',
      tools: ['Python', 'Scikit-learn', 'XGBoost', 'KNN', 'SVM', 'MLP'],
      github: 'https://github.com/Mo-Ghaith/body-performance-ml',
      demo: '',
      description: 'Rigorous comparison of 5 classification and regression models (KNN, Decision Tree, SVM, MLP, XGBoost) on the Body Performance dataset. Includes domain-justified data cleaning, feature engineering (BMI, Z-scores, interactions), 5-fold cross-validation, learning curves, ROC analysis, and statistical significance testing.',
      screenshot: 'assets/projects/body_performance.png'
    },
    {
      title: 'Salesstore Dashboard & Visualization',
      category: 'Power BI, Excel',
      year: '2026',
      icon: 'sales',
      status: 'live',
      tools: ['Excel', 'Power BI', 'DAX', 'Data Modeling'],
      github: '',
      demo: '',
      description: 'Designed interactive Power BI dashboards for a retail sales dataset. Performed data cleaning in Excel, built star-schema data models with DAX measures, and created visualizations revealing sales trends, regional performance, and product category insights.',
      screenshot: 'image334.png'
    }
  ],
  roadmap: [
    {
      type: 'project',
      title: 'Stock Portfolio Analyzer (Streamlit)',
      desc: 'Live deployed financial analytics app with real-time market data',
      domain: 'Finance & Investment',
      status: 'In Progress',
      priority: 'high'
    },
    {
      type: 'project',
      title: 'Multi-Agent Marketing System',
      desc: 'Orchestrating AI agents using CrewAI and LangChain',
      domain: 'Agentic AI',
      status: 'Planned',
      priority: 'high'
    },
    {
      type: 'project',
      title: 'Computer Vision Defect Detection',
      desc: 'CNN model for manufacturing quality control',
      domain: 'Computer Vision',
      status: 'Planned',
      priority: 'medium'
    },
    {
      type: 'project',
      title: 'NLP Document Parsing',
      desc: 'Extracting structured data from financial PDFs',
      domain: 'NLP',
      status: 'Planned',
      priority: 'medium'
    },
    {
      type: 'project',
      title: 'Loan Default Risk Dashboard',
      desc: 'Power BI dashboard on Lending Club data for financial BI',
      domain: 'Finance & Risk',
      status: 'Planned',
      priority: 'low'
    },
    {
      type: 'cert',
      title: 'Microsoft PL-300 (Power BI Data Analyst)',
      desc: 'Industry-recognized Microsoft Power BI certification',
      domain: 'Business Intelligence',
      status: 'Studying',
      priority: 'high'
    }
  ],
  sliderWords: ['Finance', 'Investment', 'Business', 'Healthcare', 'Technology', 'E-commerce', 'Manufacturing'],
  certificates: [
    { file: 'Coursera 6XPZGPMPUU46.png', link: 'https://coursera.org/verify/6XPZGPMPUU46' },
    { file: 'Coursera JBVQ4KB33A67.png', link: 'https://coursera.org/verify/JBVQ4KB33A67' },
    { file: 'certificate (1).png', link: '' },
    { file: 'certificate (2).png', link: '' },
    { file: 'certificate (3).png', link: '' },
    { file: 'certificate (4).png', link: '' },
    { file: 'certificate (5).png', link: '' },
    { file: 'certificate (6).png', link: '' },
    { file: 'certificate (7).png', link: '' },
    { file: 'certificate (8).png', link: '' },
    { file: 'certificate (9).png', link: '' },
    { file: 'certificate (10).png', link: '' },
    { file: 'certificate (11).png', link: '' },
    { file: 'certificate (12).png', link: '' },
    { file: 'certificate (13).png', link: '' },
    { file: 'certificate (14).png', link: '' },
    { file: 'certificate (15).png', link: '' },
    { file: 'certificate (16).png', link: '' },
    { file: 'certificate.png', link: '' }
  ]
};

const CERT_OVERRIDES = {
  'Coursera 6XPZGPMPUU46.png': {
    title: 'Delivering Quality Work with Agility',
    source: 'Coursera / IBM',
    date: 'Jan 16, 2024',
    summary: 'Professional course focused on agile delivery practices and team execution.',
    summary2: 'Built practical habits for shipping analytics work faster with quality controls.'
  },
  'Coursera JBVQ4KB33A67.png': {
    title: 'Google Data Analytics Professional Certificate',
    source: 'Coursera / Google',
    date: 'Sep 14, 2022',
    summary: 'Covered data cleaning, analysis, and visualization across real business scenarios.',
    summary2: 'Reinforced SQL, spreadsheets, and dashboards for end-to-end analytics delivery.'
  },
  'certificate (1).png': {
    title: 'Introduction to Python',
    source: 'DataCamp',
    date: 'Jul 5, 2023',
    summary: 'Foundational Python certificate for analytics and data workflow automation.',
    summary2: 'Focused on core syntax, data structures, and practical problem solving.'
  }
};

function humanizeCertificateFileName(file) {
  const clean = file
    .replace(/^certificate\s*/i, 'Certificate ')
    .replace(/\(.+\)/, match => match.replace(/[()]/g, '').trim())
    .replace(/\.[^.]+$/, '')
    .replace(/\s+/g, ' ')
    .trim();
  return clean || 'Professional Certificate';
}

DATA.certificates = DATA.certificates.map((cert, index) => {
  const override = CERT_OVERRIDES[cert.file];
  const source = override?.source || (cert.file.includes('Coursera') ? 'Coursera' : 'Professional Learning Platform');
  return {
    ...cert,
    title: override?.title || humanizeCertificateFileName(cert.file),
    source,
    date: override?.date || 'Issued date available on certificate',
    summary: override?.summary || 'Credential validating applied analytics and data workflow competence.',
    summary2: override?.summary2 || 'Covers practical techniques used in real-world business intelligence projects.',
    id: `cert-${index + 1}`
  };
});

window.toggleProjectCard = header => {
  const card = header.closest('.project-card');
  const projectsGrid = document.getElementById('projectsGrid');
  if (!card || !projectsGrid) return;

  projectsGrid.querySelectorAll('.project-card.open').forEach(openCard => {
    if (openCard !== card) {
      openCard.classList.remove('open');
      openCard.querySelector('.project-header')?.setAttribute('aria-expanded', 'false');
    }
  });

  card.classList.toggle('open');
  header.setAttribute('aria-expanded', card.classList.contains('open') ? 'true' : 'false');
};

window.openCertificateCard = card => {
  if (!card.classList.contains('active')) return;

  const certModal = document.getElementById('cert-modal');
  const certModalImg = document.getElementById('cert-modal-img');
  const certModalActions = document.getElementById('cert-modal-actions');
  const certModalClose = document.getElementById('cert-modal-close');
  if (!certModal || !certModalImg || !certModalActions || !certModalClose) return;

  const imgSrc = card.getAttribute('data-img');
  const link = card.getAttribute('data-link');

  certModalImg.src = imgSrc;
  certModalActions.innerHTML = link ? `<a href="${link}" class="cert-link-btn" target="_blank" rel="noopener">View Certificate</a>` : '';

  certModal.classList.add('active');
  certModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  certModalClose.focus();
};

window.rotateCertificates = direction => {
  const certLandscape = document.getElementById('cert-landscape');
  if (!certLandscape) return;

  const cards = Array.from(certLandscape.querySelectorAll('.cert-card'));
  if (!cards.length) return;

  const current = Number(certLandscape.dataset.activeIndex || 0);
  const next = (current + direction + cards.length) % cards.length;
  certLandscape.dataset.activeIndex = String(next);

  const isMobile = window.innerWidth < 769;
  const radiusX = isMobile ? 230 : 390;
  const radiusZ = isMobile ? 170 : 295;
  const step = (Math.PI * 2) / cards.length;

  cards.forEach((card, index) => {
    let logicalOffset = index - next;
    if (logicalOffset > cards.length / 2) logicalOffset -= cards.length;
    if (logicalOffset < -cards.length / 2) logicalOffset += cards.length;

    const angle = logicalOffset * step;
    const x = Math.sin(angle) * radiusX;
    const z = Math.cos(angle) * radiusZ;
    const depth = (z + radiusZ) / (2 * radiusZ);
    const scale = 0.62 + (depth * 0.38);
    const opacity = 0.14 + (depth * 0.86);
    const yRotation = -Math.sin(angle) * 56;
    const visible = depth > 0.2 || Math.abs(logicalOffset) <= 1;

    card.dataset.offset = String(logicalOffset);
    card.classList.toggle('active', logicalOffset === 0);
    card.classList.toggle('near', Math.abs(logicalOffset) === 1);
    card.classList.toggle('far', Math.abs(logicalOffset) >= 2);
    card.classList.toggle('hidden-depth', !visible);
    card.setAttribute('aria-hidden', visible ? 'false' : 'true');
    card.tabIndex = visible ? 0 : -1;

    card.style.transform = `translate(-50%, -50%) translate3d(${x}px, 0, ${z}px) rotateY(${yRotation}deg) scale(${scale})`;
    card.style.opacity = visible ? opacity : 0;
    card.style.zIndex = String(Math.round(100 + z));
  });

  window.updateCertificateMeta(next);
};

window.updateCertificateMeta = activeIndex => {
  const cert = DATA.certificates?.[activeIndex];
  if (!cert) return;

  const sourceEl = document.getElementById('cert-meta-source');
  const dateEl = document.getElementById('cert-meta-date');
  const titleEl = document.getElementById('cert-meta-title');
  const summaryEl = document.getElementById('cert-meta-summary');
  const summary2El = document.getElementById('cert-meta-summary-2');
  const actionsEl = document.getElementById('cert-meta-actions');
  if (!sourceEl || !dateEl || !titleEl || !summaryEl || !summary2El || !actionsEl) return;

  sourceEl.textContent = cert.source;
  dateEl.textContent = cert.date;
  titleEl.textContent = cert.title;
  summaryEl.textContent = cert.summary;
  summary2El.textContent = cert.summary2;
  actionsEl.innerHTML = cert.link
    ? `<a href="${cert.link}" class="cert-link-btn" target="_blank" rel="noopener">Verify Credential</a>`
    : '<span class="roadmap-domain">Verification link unavailable</span>';
};

document.addEventListener('DOMContentLoaded', () => {

  /* ===== RENDER PROJECTS ===== */
  const projectsGrid = document.getElementById('projectsGrid');
  const projectIcons = {
    'logistics': '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 3h15v13H1zM16 8h4l3 4v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
    'telecom': '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/></svg>',
    'body': '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="4" r="2.5"/><path d="M15 8H9l-4 8h4l1 6h4l1-6h4z"/></svg>',
    'github': '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
    'demo': '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3"/></svg>'
  };

  if (projectsGrid && DATA.projects) {
    projectsGrid.innerHTML = DATA.projects.map((proj, i) => `
      <div class="project-card" data-index="${i}">
        <button class="project-header hover-target" type="button" aria-expanded="false" aria-controls="project-detail-${i}" onclick="window.toggleProjectCard(this)">
          <div class="project-icon">${projectIcons[proj.icon] || projectIcons['body']}</div>
          <div>
            <h3 class="project-title">${proj.title}</h3>
            <div class="project-meta">
              <p class="project-category">${proj.category}</p>
              <p class="project-year">${proj.year}</p>
            </div>
          </div>
          <div class="project-header-right">
            <span class="project-status status-${proj.demo ? 'live' : proj.github ? 'repo' : 'soon'}">${proj.demo ? 'Live Demo' : proj.github ? 'Repository' : 'Case Study'}</span>
            <span class="project-toggle" aria-hidden="true">+</span>
          </div>
        </button>
        <div class="project-detail" id="project-detail-${i}">
          <div class="project-detail-inner">
            <div class="project-visual">
              ${proj.screenshot ? 
                `<img src="${proj.screenshot}" alt="${proj.title} Screenshot" class="project-screenshot" loading="lazy" />` : 
                `<div class="project-screenshot-placeholder">
                  <span class="placeholder-text">UI Screenshot / Architecture Diagram</span>
                </div>`
              }
            </div>
            <div class="project-content">
              <div>
                <p class="project-desc-label">Description</p>
                <p class="project-desc">${proj.description}</p>
                <div class="project-links">
                  ${proj.github ? `<a href="${proj.github}" target="_blank" rel="noopener" class="project-link-btn">${projectIcons['github']} GitHub</a>` : ''}
                  ${proj.demo ? `<a href="${proj.demo}" target="_blank" rel="noopener" class="project-link-btn project-link-demo">${projectIcons['demo']} Live Demo</a>` : ''}
                </div>
              </div>
              <div>
                <p class="project-desc-label">Tech Stack</p>
                <div class="project-tools">
                  ${proj.tools.map(t => `<span class="tool-pill">${t}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join('');

  }

  /* ===== RENDER ROADMAP ===== */
  const roadmapGrid = document.getElementById('roadmap-grid');
  if (roadmapGrid) {
    roadmapGrid.innerHTML = DATA.roadmap.map(item => {
      const icon = item.type === 'cert' ? `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>` : `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>`;
      const priorityClass = `priority-${item.priority}`;
      return `
      <div class="roadmap-item ${priorityClass}">
        <div class="roadmap-item-header">
          <span class="roadmap-type-badge ${item.type}">${icon}${item.type === 'cert' ? 'Certification' : 'Project'}</span>
          <span class="roadmap-status">${item.status}</span>
        </div>
        <h4 class="roadmap-item-title">${item.title}</h4>
        <p class="roadmap-item-desc">${item.desc}</p>
        <span class="roadmap-domain">${item.domain}</span>
      </div>`;
    }).join('');
  }

	  /* ===== 3D CERTIFICATIONS LANDSCAPE ===== */
	  const certLandscape = document.getElementById('cert-landscape');
  const certPrev = document.getElementById('cert-prev');
  const certNext = document.getElementById('cert-next');

	  if (certLandscape && DATA.certificates) {
	    // Generate HTML
    certLandscape.innerHTML = DATA.certificates.map((cert, i) => `
      <button class="cert-card hover-target" type="button" data-index="${i}" data-img="assets/certifications/${cert.file}" data-link="${cert.link}" aria-label="Open certificate ${i + 1}" onclick="window.openCertificateCard(this)">
        <img src="assets/certifications/${cert.file}" alt="Certificate ${i + 1}" loading="lazy" />
      </button>
    `).join('');

    certLandscape.dataset.activeIndex = '0';
    window.rotateCertificates(0);
    window.updateCertificateMeta(0);
    certPrev?.addEventListener('click', () => window.rotateCertificates(-1));
    certNext?.addEventListener('click', () => window.rotateCertificates(1));
    window.addEventListener('resize', () => window.rotateCertificates(0));
    document.addEventListener('keydown', e => {
      if (document.activeElement?.closest('#certifications')) {
        if (e.key === 'ArrowLeft') window.rotateCertificates(-1);
        if (e.key === 'ArrowRight') window.rotateCertificates(1);
      }
    });
	  }

  /* ===== CERTIFICATE MODAL ===== */
  const certModal = document.getElementById('cert-modal');
  const certModalImg = document.getElementById('cert-modal-img');
  const certModalActions = document.getElementById('cert-modal-actions');
  const certModalClose = document.getElementById('cert-modal-close');
  const certModalBg = document.getElementById('cert-modal-bg');

  if (certLandscape && certModal && certModalImg && certModalActions && certModalClose && certModalBg) {
    const closeModal = () => {
      certModal.classList.remove('active');
      certModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      certModalImg.removeAttribute('src');
    };
    certModalClose.addEventListener('click', closeModal);
    certModalBg.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && certModal.classList.contains('active')) closeModal();
    });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ===== PRELOADER REMOVED (Instant Entry) ===== */
  document.body.classList.remove('loading');
  
  // Call initGSAP directly
  // Small timeout ensures DOM is fully painted before calculating scroll metrics
  setTimeout(() => {
    initGSAP();
  }, 100);

  /* ===== ROTATING WORD SLIDER (Removed — now static) ===== */
  // Feature removed per Fix #2B

  /* ===== CUSTOM CURSOR ===== */
  const cursor = document.querySelector('.cursor');
  if (!window.matchMedia('(max-width: 768px)').matches && cursor && window.gsap) {
    document.addEventListener('mousemove', e => {
      gsap.set(cursor, { x: e.clientX, y: e.clientY });
    });
    document.addEventListener('mouseover', e => {
      if (e.target.closest('.hover-target')) cursor.classList.add('active');
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest('.hover-target')) cursor.classList.remove('active');
    });
    document.addEventListener('mouseover', e => {
      if (e.target.closest('a:not(.hover-target), .txt-link')) cursor.classList.add('hidden');
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest('a:not(.hover-target), .txt-link')) cursor.classList.remove('hidden');
    });
  }
});

/* ===== GSAP ANIMATIONS ===== */
function initGSAP() {
  if (!window.gsap || !window.ScrollTrigger || !window.Lenis) return;
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Hero entrance (Staggered instant entry)
  const heroTl = gsap.timeline();
  heroTl
    .from('.hero-greeting-inner', { yPercent: 100, opacity: 0, duration: 0.8, ease: 'power3.out' })
    .from('.hero-title-line', { yPercent: 120, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.15 }, '-=0.4')
    .from('.hero-subtitle', { opacity: 0, yPercent: 30, duration: 0.8, ease: 'power2.out' }, '-=0.5')
    .from('.scroll-indicator', { opacity: 0, yPercent: 20, duration: 0.6, ease: 'power2.out' }, '-=0.3');

  // Hero parallax
  gsap.to('.hero-bg img', {
    yPercent: 15, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  });

  // Intro text blur-fade
  const introEl = document.querySelector('.intro-text');
  if (introEl && window.SplitType) {
    const split = new SplitType(introEl, { types: 'words' });
    gsap.set(split.words, { opacity: 0.15, filter: 'blur(4px)' });
    gsap.to(split.words, {
      scrollTrigger: { trigger: '.intro', start: 'top 70%', end: 'bottom 40%', scrub: 0.5 },
      opacity: 1, filter: 'blur(0px)', stagger: 0.05, ease: 'none'
    });
  }

  // Section labels
  gsap.utils.toArray('.section-label').forEach(label => {
    gsap.from(label, {
      scrollTrigger: { trigger: label, start: 'top 85%' },
      opacity: 0, xPercent: -10, duration: 0.8, ease: 'power2.out'
    });
  });

  // Expertise items
  gsap.utils.toArray('.expertise-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 85%' },
      opacity: 0, yPercent: 30, duration: 0.8, delay: i * 0.1, ease: 'power2.out'
    });
  });

  // Stats banner
  gsap.from('.stats-banner', {
    scrollTrigger: { trigger: '.stats-banner', start: 'top 85%' },
    opacity: 0, yPercent: 20, duration: 1, ease: 'power2.out'
  });

  // Stat numbers count up
  gsap.utils.toArray('.stat-item h3').forEach(h3 => {
    const text = h3.textContent;
    const num = parseInt(text);
    if (!isNaN(num)) {
      const suffix = text.replace(num.toString(), '');
      gsap.from(h3, {
        scrollTrigger: { trigger: h3, start: 'top 85%' },
        textContent: 0, duration: 1.5, ease: 'power2.out', snap: { textContent: 1 },
        onUpdate: function () { h3.textContent = Math.round(gsap.getProperty(h3, 'textContent')) + suffix; }
      });
    }
  });

  // Project cards
  gsap.utils.toArray('.project-card').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 85%' },
      opacity: 0, yPercent: 20, duration: 0.8, delay: i * 0.08, ease: 'power2.out'
    });
  });

  // Publication card
  const pubCard = document.querySelector('.publication-card');
  if (pubCard) {
    gsap.from(pubCard, {
      scrollTrigger: { trigger: pubCard, start: 'top 80%' },
      opacity: 0, yPercent: 30, duration: 1, ease: 'power3.out'
    });
  }

  // Case study metrics
  gsap.utils.toArray('.case-study-metric').forEach((m, i) => {
    gsap.from(m, {
      scrollTrigger: { trigger: m, start: 'top 85%' },
      opacity: 0, yPercent: 40, duration: 0.8, delay: i * 0.15, ease: 'power3.out'
    });
  });

  // Case study steps
  gsap.utils.toArray('.case-study-step').forEach((step, i) => {
    gsap.from(step, {
      scrollTrigger: { trigger: step, start: 'top 85%' },
      opacity: 0, xPercent: -20, duration: 0.8, delay: i * 0.1, ease: 'power2.out'
    });
  });

  // FruPix gallery
  gsap.utils.toArray('.gallery-img').forEach((img, i) => {
    gsap.from(img, {
      scrollTrigger: { trigger: img, start: 'top 90%' },
      opacity: 0, scale: 0.9, duration: 0.6, delay: i * 0.1, ease: 'power2.out'
    });
  });

  // Roadmap items
  gsap.utils.toArray('.roadmap-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 85%' },
      opacity: 0, yPercent: 25, duration: 0.7, delay: i * 0.08, ease: 'power2.out'
    });
  });

  // Contact CTA
  gsap.from('.contact-huge', {
    scrollTrigger: { trigger: '.contact', start: 'top 70%' },
    opacity: 0, yPercent: 40, duration: 1, ease: 'power3.out'
  });
  gsap.from('.contact-subtitle', {
    scrollTrigger: { trigger: '.contact', start: 'top 60%' },
    opacity: 0, yPercent: 20, duration: 0.8, ease: 'power2.out'
  });


  // Education entries
  gsap.utils.toArray('.education-entry').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 85%' },
      opacity: 0, xPercent: -15, duration: 0.8, delay: i * 0.15, ease: 'power2.out'
    });
  });

  // Education pivot
  const eduPivot = document.querySelector('.education-pivot');
  if (eduPivot) {
    gsap.from(eduPivot, {
      scrollTrigger: { trigger: eduPivot, start: 'top 85%' },
      opacity: 0, yPercent: 20, duration: 0.8, ease: 'power2.out'
    });
  }

  // Experience entries
  gsap.utils.toArray('.experience-entry').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 85%' },
      opacity: 0, xPercent: -15, duration: 0.8, delay: i * 0.12, ease: 'power2.out'
    });
  });

  // Volunteer cards
  gsap.utils.toArray('.volunteer-card').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 85%' },
      opacity: 0, yPercent: 25, duration: 0.7, delay: i * 0.1, ease: 'power2.out'
    });
  });
}
// ===== UI LOGIC =====
function initUI() {
  // Hire Toggle Logic
  const toggleWrapper = document.getElementById('hire-toggle');
  const btnFulltime = document.getElementById('btn-fulltime');
  const btnFreelance = document.getElementById('btn-freelance');
  const panelFulltime = document.getElementById('panel-fulltime');
  const panelFreelance = document.getElementById('panel-freelance');

  if(toggleWrapper && btnFulltime && btnFreelance) {
    // Desktop hover behavior
    toggleWrapper.addEventListener('mouseenter', () => toggleWrapper.classList.add('open'));
    toggleWrapper.addEventListener('mouseleave', () => toggleWrapper.classList.remove('open'));

    // Mobile click behavior
    toggleWrapper.addEventListener('click', (e) => {
      if(window.innerWidth <= 768 && !e.target.closest('.hire-btn')) {
        toggleWrapper.classList.toggle('open');
      }
    });

    btnFulltime.addEventListener('click', (e) => {
      e.stopPropagation();
      btnFulltime.classList.add('active');
      btnFreelance.classList.remove('active');
      panelFulltime.classList.remove('hidden');
      panelFreelance.classList.add('hidden');
      toggleWrapper.classList.add('open');
    });

    btnFreelance.addEventListener('click', (e) => {
      e.stopPropagation();
      btnFreelance.classList.add('active');
      btnFulltime.classList.remove('active');
      panelFreelance.classList.remove('hidden');
      panelFulltime.classList.add('hidden');
      toggleWrapper.classList.add('open');
    });
  }

  // FAB Mobile Navigation Logic
  const fabNav = document.getElementById('fab-nav');
  const fabTrigger = document.getElementById('fab-trigger');
  
  if(fabNav && fabTrigger) {
    fabTrigger.addEventListener('click', () => {
      fabNav.classList.toggle('open');
      fabTrigger.setAttribute('aria-expanded', fabNav.classList.contains('open') ? 'true' : 'false');
    });

    // Close when clicking a link
    const fabLinks = document.querySelectorAll('#fab-menu a');
    fabLinks.forEach(link => {
      link.addEventListener('click', () => {
        fabNav.classList.remove('open');
        fabTrigger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on scroll
    window.addEventListener('scroll', () => {
      if(fabNav.classList.contains('open')) {
        fabNav.classList.remove('open');
        fabTrigger.setAttribute('aria-expanded', 'false');
      }
    }, { passive: true });
  }
}

// Initialize UI
document.addEventListener('DOMContentLoaded', initUI);
