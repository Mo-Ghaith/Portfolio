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
      screenshot: 'assets/projects/salesstore/1_executive_summary_img_1.png',
      extraScreenshots: [
        'assets/projects/salesstore/2_product_deepdive_img_1.png'
      ]
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
  ],
  sliderWords: ['Finance', 'Investment', 'Business', 'Healthcare', 'Technology', 'E-commerce', 'Manufacturing'],
  certificates: [
    {
      file: 'google-regression-analysis.jpg',
      title: 'Regression Analysis: Simplify Complex Data Relationships',
      source: 'Google',
      date: 'Issued Sep 2026',
      credentialId: 'HA698O0M2ROJ',
      link: 'https://www.coursera.org/account/accomplishments/verify/HA698O0M2ROJ?utm_product=course',
      summary: 'Applied regression analysis to simplify complex relationships and quantify how variables influence outcomes.',
      summary2: 'Built, interpreted, and evaluated regression models for evidence-based decision-making.'
    },
    {
      file: 'google-nuts-bolts-machine-learning.jpg',
      title: 'The Nuts and Bolts of Machine Learning',
      source: 'Google',
      date: 'Issued Sep 2026',
      credentialId: 'CIM0GEPBA873',
      link: 'https://www.coursera.org/account/accomplishments/verify/CIM0GEPBA873?utm_product=course',
      summary: 'Developed the practical foundations needed to build supervised machine learning models in Python.',
      summary2: 'Covered model selection, evaluation, tuning, and communication of results.'
    },
    {
      file: 'google-advanced-data-analytics.jpg',
      title: 'Google Advanced Data Analytics',
      source: 'Google',
      date: 'Issued Aug 2026',
      credentialId: 'Q07HQP4O9DYT',
      link: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/Q07HQP4O9DYT',
      summary: 'Professional certificate covering data roles, statistical investigation, data visualization, regression, and machine learning.',
      summary2: 'Focused on interpreting analytical results and communicating insights to stakeholders.'
    },
    {
      file: 'google-advanced-analytics-capstone.jpg',
      title: 'Google Advanced Data Analytics Capstone',
      source: 'Google',
      date: 'Issued Aug 2026',
      credentialId: '82JZCR3MRCPQ',
      link: 'https://www.coursera.org/account/accomplishments/verify/82JZCR3MRCPQ',
      summary: 'Completed an end-to-end advanced analytics case study using data visualization and analytical modeling.',
      summary2: 'Synthesized technical findings into a clear, stakeholder-ready story.'
    },
    {
      file: 'google-accelerate-job-search-ai.jpg',
      title: 'Accelerate Your Job Search with AI',
      source: 'Google',
      date: 'Issued Aug 2026',
      credentialId: 'OFTLVU124EEW',
      link: 'https://www.coursera.org/account/accomplishments/records/OFTLVU124EEW',
      summary: 'Used generative AI to identify transferable skills, build a career identity, and optimize resumes.',
      summary2: 'Created a structured job-search strategy and AI-assisted interview and application workflows.'
    },
    {
      file: 'google-power-of-statistics.jpg',
      title: 'The Power of Statistics',
      source: 'Google',
      date: 'Issued Aug 2026',
      credentialId: 'VTASYZOSHIW8',
      link: 'https://www.coursera.org/account/accomplishments/records/VTASYZOSHIW8',
      summary: 'Explored datasets, modeled data with probability distributions, and conducted hypothesis tests.',
      summary2: 'Performed statistical analysis in Python to uncover defensible insights.'
    },
    {
      file: 'google-beyond-the-numbers.jpg',
      title: 'Go Beyond the Numbers: Translate Data into Insights',
      source: 'Google',
      date: 'Issued Aug 2026',
      credentialId: '7M3QTHEST6OZ',
      link: 'https://www.coursera.org/account/accomplishments/records/7M3QTHEST6OZ',
      summary: 'Applied the exploratory data analysis process to structure, clean, and investigate raw data with Python.',
      summary2: 'Created Tableau visualizations that translate analysis into accessible insights.'
    },
    {
      file: 'google-foundations-data-science.jpg',
      title: 'Foundations of Data Science',
      source: 'Google',
      date: 'Issued Aug 2026',
      credentialId: '10MAUAL2IHN0',
      link: 'https://www.coursera.org/account/accomplishments/records/10MAUAL2IHN0',
      summary: 'Explored data careers, analytical decision-making, privacy, ethics, and responsible data practice.',
      summary2: 'Developed project plans that define team roles, responsibilities, and delivery expectations.'
    },
    {
      file: 'microsoft-power-bi-data-analyst.jpg',
      title: 'Microsoft Certified: Power BI Data Analyst Associate',
      source: 'Microsoft',
      date: 'Issued Jul 2026 · Expires Jul 2027',
      credentialId: 'EE349F34C356C09',
      link: 'https://learn.microsoft.com/api/credentials/share/en-gb/94456688/EE349F34C356C09?sharingId=30304A530DC9F0C3',
      summary: 'Microsoft-certified in preparing, modeling, visualizing, and analyzing data with Power BI.',
      summary2: 'Validated Power Query, DAX, interactive dashboard, data security, and business insight delivery skills.'
    },
    {
      file: 'aws-ai-practitioner.png',
      title: 'AWS AI Practitioner Challenge',
      source: 'Udacity · AWS',
      date: 'Issued May 2026',
      link: 'https://www.udacity.com/certificate/e/4ab7231a-3052-11f1-bd18-67e1805b269d',
      summary: 'Completed the AWS AI Practitioner Challenge covering artificial intelligence, machine learning, and generative AI.',
      summary2: 'Built foundational knowledge of AWS AI and machine learning services.'
    },
    {
      file: 'aws-partyrock-project.jpg',
      title: 'AWS Scholars Program Project Badge: Analyze Data using AI with PartyRock',
      source: 'Udacity · AWS',
      date: 'Issued Mar 2026',
      link: 'https://cdn.getblueshift.com/bee/images/ed5b8755-0989-4944-9ca5-287bb68e4a22/AWS%20AI%20%26%20ML%20Scholarship%20Badges%20-%20Project%20-%20Analyze%20Data%20-%20Dark%403x.jpg',
      linkLabel: 'View Badge',
      summary: 'Earned the AWS Scholars project badge by analyzing data with an AI application built in PartyRock.',
      summary2: 'Applied AWS AI services to turn a data question into an interactive generative AI workflow.'
    },
    {
      file: 'aws-ai-ml-scholars.jpg',
      title: 'AWS AI & ML Scholars - 2026 Challenge Completion',
      source: 'Udacity · AWS',
      date: 'Issued Mar 2026',
      link: 'https://cdn.getblueshift.com/bee/images/ed5b8755-0989-4944-9ca5-287bb68e4a22/Challenge%20Completion%20Badge_Light.png',
      linkLabel: 'View Badge',
      summary: 'Completed the 2026 AWS AI & ML Scholars challenge through Udacity.',
      summary2: 'Strengthened applied data analytics, AWS AI services, and machine learning foundations.'
    },
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
    date: 'Jan 10, 2026',
    summary: 'Professional course on agile delivery practices and quality-focused team execution.',
    summary2: 'Built practical habits for shipping analytics work faster with quality controls.'
  },
  'Coursera JBVQ4KB33A67.png': {
    title: 'Google Data Analytics Professional Certificate',
    source: 'Coursera / Google',
    date: 'Sep 14, 2022',
    summary: 'Comprehensive 8-course professional certificate covering the full data analytics lifecycle.',
    summary2: 'Mastered spreadsheets, SQL, Tableau, and R for end-to-end analytics delivery.'
  },
  'certificate.png': {
    title: 'Introduction to Python',
    source: 'DataCamp',
    date: 'Jan 05, 2023',
    summary: 'Foundational Python programming for data analysis and workflow automation.',
    summary2: 'Covered core syntax, data structures, and practical problem-solving techniques.'
  },
  'certificate (1).png': {
    title: 'Intermediate Python',
    source: 'DataCamp',
    date: 'Jan 18, 2023',
    summary: 'Advanced Python techniques including Matplotlib visualization and dictionary manipulation.',
    summary2: 'Built proficiency in loops, logic, and pandas DataFrame operations.'
  },
  'certificate (2).png': {
    title: 'Understanding Artificial Intelligence',
    source: 'DataCamp',
    date: 'Sep 09, 2023',
    summary: 'Comprehensive overview of AI concepts, applications, and ethical considerations.',
    summary2: 'Explored machine learning, deep learning, and NLP fundamentals for business contexts.'
  },
  'certificate (3).png': {
    title: 'Understanding Data Science',
    source: 'DataCamp',
    date: 'Mar 29, 2023',
    summary: 'End-to-end data science workflow from data collection to model deployment.',
    summary2: 'Covered data engineering, experimentation, and machine learning pipeline design.'
  },
  'certificate (4).png': {
    title: 'Understanding Cloud Computing',
    source: 'DataCamp',
    date: 'Apr 08, 2023',
    summary: 'Cloud infrastructure concepts including AWS, Azure, and GCP service models.',
    summary2: 'Learned cloud deployment strategies for scalable data analytics workloads.'
  },
  'certificate (5).png': {
    title: 'Data Manipulation with pandas',
    source: 'DataCamp',
    date: 'Feb 06, 2023',
    summary: 'Advanced pandas operations: sorting, filtering, grouping, and pivot table creation.',
    summary2: 'Practiced real-world data wrangling patterns used in professional analytics workflows.'
  },
  'certificate (6).png': {
    title: 'Understanding Data Engineering',
    source: 'DataCamp',
    date: 'Apr 07, 2023',
    summary: 'Data engineering fundamentals: ETL pipelines, data warehousing, and orchestration.',
    summary2: 'Explored tools and architectures for building robust data infrastructure.'
  },
  'certificate (7).png': {
    title: 'Understanding Machine Learning',
    source: 'DataCamp',
    date: 'Apr 02, 2023',
    summary: 'Core ML concepts: supervised and unsupervised learning, model evaluation, and feature engineering.',
    summary2: 'Built intuition for selecting and applying ML algorithms to business problems.'
  },
  'certificate (8).png': {
    title: 'Understanding Data Visualization',
    source: 'DataCamp',
    date: 'Apr 06, 2023',
    summary: 'Data visualization principles and best practices for effective storytelling.',
    summary2: 'Covered chart selection, color theory, and dashboard design for business audiences.'
  },
  'certificate (9).png': {
    title: 'Introduction to Statistics in Python',
    source: 'DataCamp',
    date: 'Mar 05, 2023',
    summary: 'Statistical foundations: probability distributions, hypothesis testing, and correlation analysis.',
    summary2: 'Applied statistical methods to real datasets using Python and NumPy.'
  },
  'certificate (10).png': {
    title: 'Joining Data with pandas',
    source: 'DataCamp',
    date: 'Feb 16, 2023',
    summary: 'Advanced DataFrame merging: inner/outer joins, concatenation, and multi-table operations.',
    summary2: 'Mastered techniques for combining complex datasets in analytical workflows.'
  },
  'certificate (11).png': {
    title: 'Introduction to Data Visualization with Seaborn',
    source: 'DataCamp',
    date: 'Aug 20, 2023',
    summary: 'Statistical visualization with Seaborn: distribution plots, regression plots, and categorical plots.',
    summary2: 'Created publication-quality visualizations for exploratory data analysis.'
  },
  'certificate (12).png': {
    title: 'Introduction to Data Visualization with Matplotlib',
    source: 'DataCamp',
    date: 'Jul 22, 2023',
    summary: 'Core Matplotlib skills: subplots, annotations, styling, and multi-panel figure creation.',
    summary2: 'Built customized, professional-grade charts for analytical reporting.'
  },
  'certificate (13).png': {
    title: 'Data Communication Concepts',
    source: 'DataCamp',
    date: 'Apr 14, 2023',
    summary: 'Effective data storytelling: audience analysis, narrative structure, and presentation design.',
    summary2: 'Learned to translate technical findings into clear, actionable business recommendations.'
  },
  'certificate (14).png': {
    title: 'Introduction to Python for Finance',
    source: 'DataCamp',
    date: 'Jun 29, 2024',
    summary: 'Financial data analysis with Python: stock returns, portfolio metrics, and risk assessment.',
    summary2: 'Applied NumPy and Matplotlib to real market data for investment analytics.'
  },
  'certificate (15).png': {
    title: 'Introduction to NumPy',
    source: 'DataCamp',
    date: 'Mar 14, 2023',
    summary: 'NumPy array operations: broadcasting, vectorization, and mathematical computations.',
    summary2: 'Built efficient numerical computing skills essential for ML and data analysis.'
  },
  'certificate (16).png': {
    title: 'Introduction to SQL Server',
    source: 'DataCamp',
    date: 'May 18, 2025',
    summary: 'SQL Server fundamentals: querying, filtering, aggregating, and joining relational data.',
    summary2: 'Practiced T-SQL patterns used in enterprise database environments.'
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
  const source = cert.source || override?.source || (cert.file.includes('Coursera') ? 'Coursera' : 'Professional Learning Platform');
  return {
    ...cert,
    title: cert.title || override?.title || humanizeCertificateFileName(cert.file),
    source,
    date: cert.date || override?.date || 'Issued date available on certificate',
    summary: cert.summary || override?.summary || 'Credential validating applied analytics and data workflow competence.',
    summary2: cert.summary2 || override?.summary2 || 'Covers practical techniques used in real-world business intelligence projects.',
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

window.rotateFrupixCarousel = direction => {
  const stage = document.getElementById('frupix-carousel-stage');
  const dotsWrap = document.getElementById('frupix-carousel-dots');
  if (!stage) return;

  const slides = Array.from(stage.querySelectorAll('.frupix-slide'));
  if (!slides.length) return;

  const current = Number(stage.dataset.activeIndex || 0);
  const next = (current + direction + slides.length) % slides.length;
  stage.dataset.activeIndex = String(next);

  const isMobile = window.innerWidth < 769;
  const yStep = isMobile ? 135 : 160;
  const zStep = isMobile ? 120 : 150;

  slides.forEach((slide, index) => {
    let offset = index - next;
    if (offset > slides.length / 2) offset -= slides.length;
    if (offset < -slides.length / 2) offset += slides.length;

    const distance = Math.abs(offset);
    const visible = distance <= 2;
    const y = offset * yStep;
    const z = -distance * zStep;
    const scale = distance === 0 ? 1 : distance === 1 ? 0.78 : 0.62;
    const opacity = distance === 0 ? 1 : distance === 1 ? 0.54 : 0.18;
    const xRotation = offset * (isMobile ? 10 : 12);

    slide.classList.toggle('active', offset === 0);
    slide.setAttribute('aria-hidden', visible ? 'false' : 'true');
    slide.style.transform = `translate(-50%, -50%) translate3d(0, ${y}px, ${z}px) rotateX(${xRotation}deg) scale(${scale})`;
    slide.style.opacity = visible ? opacity : 0;
    slide.style.filter = distance === 0 ? 'none' : `saturate(${1 - distance * 0.18}) brightness(${1 - distance * 0.16})`;
    slide.style.zIndex = String(100 - distance);
  });

  dotsWrap?.querySelectorAll('.frupix-carousel-dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === next);
  });
};

document.addEventListener('DOMContentLoaded', () => {

  /* ===== RENDER PROJECTS ===== */
  const projectsGrid = document.getElementById('projectsGrid');
  const projectIcons = {
    'logistics': '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 3h15v13H1zM16 8h4l3 4v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
    'telecom': '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/></svg>',
    'body': '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="4" r="2.5"/><path d="M15 8H9l-4 8h4l1 6h4l1-6h4z"/></svg>',
    'github': '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
    'demo': '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3"/></svg>',
    'sales': '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3v18h18M7 16V9m4 7v-4m4 4V7m4 9v-6"/></svg>'
  };

  if (projectsGrid && DATA.projects) {
    projectsGrid.innerHTML = DATA.projects.map((proj, i) => `
      <div class="project-card" data-index="${i}">
        <button class="project-header hover-target" type="button" aria-expanded="false" aria-controls="project-detail-${i}">
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
              ${(proj.extraScreenshots || []).map(s => `<img src="${s}" alt="${proj.title}" class="project-screenshot project-screenshot-extra" loading="lazy" />`).join('')}
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

    projectsGrid.addEventListener('click', event => {
      const header = event.target.closest('.project-header');
      if (header) window.toggleProjectCard(header);
    });

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

  /* ===== FRUPIX VERTICAL CAROUSEL ===== */
  const frupixStage = document.getElementById('frupix-carousel-stage');
  const frupixDots = document.getElementById('frupix-carousel-dots');
  const frupixPrev = document.getElementById('frupix-prev');
  const frupixNext = document.getElementById('frupix-next');

  if (frupixStage) {
    const slides = Array.from(frupixStage.querySelectorAll('.frupix-slide'));
    if (frupixDots) {
      frupixDots.innerHTML = slides.map((_, i) => `<span class="frupix-carousel-dot${i === 0 ? ' active' : ''}"></span>`).join('');
    }
    frupixStage.dataset.activeIndex = '0';
    window.rotateFrupixCarousel(0);
    frupixPrev?.addEventListener('click', () => window.rotateFrupixCarousel(-1));
    frupixNext?.addEventListener('click', () => window.rotateFrupixCarousel(1));
    window.addEventListener('resize', () => window.rotateFrupixCarousel(0));
    document.addEventListener('keydown', e => {
      if (document.activeElement?.closest('#frupix')) {
        if (e.key === 'ArrowUp') window.rotateFrupixCarousel(-1);
        if (e.key === 'ArrowDown') window.rotateFrupixCarousel(1);
      }
    });
  }

	  /* ===== CREDENTIAL DIRECTORY ===== */
  const credentialGrid = document.getElementById('credential-grid');
  const credentialToggle = document.getElementById('credential-toggle');
  const credentialFilters = Array.from(document.querySelectorAll('.credential-filter'));

  if (credentialGrid && credentialToggle && DATA.certificates) {
    let activeProvider = 'all';
    let expanded = false;

    const matchesProvider = cert => {
      if (activeProvider === 'all') return true;
      return cert.source.toLowerCase().includes(activeProvider.toLowerCase());
    };

    const renderCredentials = () => {
      const matches = DATA.certificates.filter(matchesProvider);
      const visible = expanded || activeProvider !== 'all' ? matches : matches.slice(0, 12);

      credentialGrid.innerHTML = visible.map(cert => `
        <article class="credential-card">
          <div class="credential-card-meta">
            <span>${cert.source}</span>
            <span>${cert.date}</span>
          </div>
          <h3>${cert.title}</h3>
          <p>${cert.summary} ${cert.summary2}</p>
          <div class="credential-card-footer">
            ${cert.credentialId ? `<span class="credential-id">ID ${cert.credentialId}</span>` : '<span></span>'}
            ${cert.link
              ? `<a href="${cert.link}" target="_blank" rel="noopener noreferrer" aria-label="Verify ${cert.title}">${cert.linkLabel || 'Verify credential'} <span aria-hidden="true">↗</span></a>`
              : '<span class="credential-unavailable">Verification unavailable</span>'}
          </div>
        </article>
      `).join('');

      const canToggle = activeProvider === 'all' && DATA.certificates.length > 12;
      credentialToggle.hidden = !canToggle;
      credentialToggle.textContent = expanded ? 'Show selected credentials' : `Show all ${DATA.certificates.length} credentials`;
      credentialToggle.setAttribute('aria-expanded', String(expanded));
    };

    credentialFilters.forEach(filter => {
      filter.addEventListener('click', () => {
        activeProvider = filter.dataset.provider || 'all';
        expanded = false;
        credentialFilters.forEach(item => {
          const active = item === filter;
          item.classList.toggle('active', active);
          item.setAttribute('aria-pressed', String(active));
        });
        renderCredentials();
      });
    });

    credentialToggle.addEventListener('click', () => {
      expanded = !expanded;
      renderCredentials();
      if (!expanded) document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
    });

    renderCredentials();
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ===== PRELOADER REMOVED (Instant Entry) ===== */
  document.body.classList.remove('loading');
  
  initMotionEffects();

  /* ===== ROTATING WORD SLIDER (Removed — now static) ===== */
  // Feature removed per Fix #2B

  /* ===== CUSTOM CURSOR ===== */
  const cursor = document.querySelector('.cursor');
  if (!window.matchMedia('(max-width: 768px), (pointer: coarse)').matches && cursor) {
    document.addEventListener('mousemove', e => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
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

/* ===== NATIVE MOTION ===== */
function initMotionEffects() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const revealItems = document.querySelectorAll(
    '.section-label, .expertise-item, .stat-item, .project-card, .publication-card, .case-study-step, .roadmap-item, .credential-card'
  );
  revealItems.forEach(item => item.classList.add('reveal-ready'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  revealItems.forEach(item => observer.observe(item));
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
  const fabMenu = document.getElementById('fab-menu');
  
  if(fabNav && fabTrigger && fabMenu) {
    if (fabMenu.parentElement === fabNav) {
      document.body.appendChild(fabMenu);
    }

    const setFabOpen = (open) => {
      fabNav.classList.toggle('open', open);
      fabMenu.classList.toggle('open', open);
      fabTrigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    fabTrigger.addEventListener('click', () => {
      setFabOpen(!fabNav.classList.contains('open'));
    });

    // Close when clicking a link
    const fabLinks = document.querySelectorAll('#fab-menu a');
    fabLinks.forEach(link => {
      link.addEventListener('click', () => {
        setFabOpen(false);
      });
    });

    // Close on scroll
    window.addEventListener('scroll', () => {
      if(fabNav.classList.contains('open')) {
        setFabOpen(false);
      }
    }, { passive: true });
  }
}

// Initialize UI
document.addEventListener('DOMContentLoaded', initUI);
