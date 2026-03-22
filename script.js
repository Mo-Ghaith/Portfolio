'use strict';

const DATA = {
  projects: [
    { title: 'Telco Churn', category: 'Analysis', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'},
    { title: 'Sales Dashboard', category: 'Power BI', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80'},
    { title: 'FruPix Analytics', category: 'Optimization', img: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&auto=format&fit=crop&q=80'},
    { title: 'Bioactivity Research', category: 'Statistical', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80'},
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render Projects
  const grid = document.getElementById('projectsGrid');
  if(grid) {
    grid.innerHTML = DATA.projects.map(p => `
      <div class="project-item hover-target" data-img="${p.img}">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-category">${p.category}</p>
      </div>
    `).join('');
  }

  // 2. Preloader
  const preloader = document.querySelector('.preloader');
  const counter = document.querySelector('.preloader-counter');
  let pct = 0;
  
  const updateCounter = setInterval(() => {
    pct += Math.floor(Math.random() * 15) + 5;
    if(pct >= 100) {
      pct = 100;
      clearInterval(updateCounter);
      setTimeout(() => {
        gsap.to(preloader, {
          yPercent: -100,
          duration: 1,
          ease: "expo.inOut",
          onComplete: () => {
            document.body.classList.remove('loading');
            initGSAP();
          }
        });
      }, 500);
    }
    counter.textContent = pct + '%';
  }, 100);

  // Set year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
  
  // Custom Cursor
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  
  if(!window.matchMedia("(max-width: 768px)").matches) {
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let followerX = mouseX, followerY = mouseY;
    
    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.1 });
    });
    
    gsap.ticker.add(() => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      gsap.set(follower, { x: followerX, y: followerY });
    });
    
    // Delegate hover target logic for dynamic elements
    document.addEventListener('mouseover', e => {
      if(e.target.closest('.hover-target')) {
        cursor.classList.add('active');
        follower.classList.add('active');
      }
    });
    document.addEventListener('mouseout', e => {
      if(e.target.closest('.hover-target')) {
        cursor.classList.remove('active');
        follower.classList.remove('active');
      }
    });
  }

  // Hover Effect for Projects
  const hoverImg = document.querySelector('.project-hover-img');
  
  if(!window.matchMedia("(max-width: 768px)").matches) {
    // Event delegation since project-items are injected dynamically
    document.addEventListener('mouseover', (e) => {
      const item = e.target.closest('.project-item');
      if(item) {
        const imgUrl = item.getAttribute('data-img');
        hoverImg.src = imgUrl;
        gsap.to(hoverImg, { opacity: 1, scale: 1, duration: 0.3 });
      }
    });

    document.addEventListener('mousemove', (e) => {
      const item = e.target.closest('.project-item');
      if(item) {
        gsap.to(hoverImg, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.8,
          ease: "power3.out"
        });
      }
    });

    document.addEventListener('mouseout', (e) => {
      const item = e.target.closest('.project-item');
      if(item) {
        gsap.to(hoverImg, { opacity: 0, scale: 0.8, duration: 0.3 });
      }
    });
  }
});

function initGSAP() {
  gsap.registerPlugin(ScrollTrigger);

  // Lenis Smooth Scroll
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Hero Parallax Scroll
  gsap.to('.hero-line-1', {
    xPercent: 10,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', scrub: true }
  });
  gsap.to('.hero-line-2', {
    xPercent: -15,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', scrub: true }
  });
  gsap.to('.hero-line-3', {
    xPercent: 10,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', scrub: true }
  });

  // Hero Image Parallax inside wrap
  gsap.to('.hero-img-wrap img', {
    y: '20%',
    ease: 'none',
    scrollTrigger: { trigger: '.hero', scrub: true }
  });

  // About Text Reveal (SplitType)
  const aboutText = new SplitType('.about-text', { types: 'words, chars' });
  gsap.from(aboutText.words, {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 80%',
    },
    opacity: 0.1,
    stagger: 0.05,
    duration: 1,
    ease: 'power3.out'
  });
}
