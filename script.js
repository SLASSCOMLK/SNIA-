// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initCounters();
  initParticles();
  initMobileMenu();
  initSmoothScroll();
  initImageAnimations();
  initSpotlightCards();
  initCustomCursor();
});

// ===== NAVBAR SCROLL EFFECT =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const scrollFillSections = document.querySelectorAll('.reveal-bg');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    // Navbar solid background toggle
    if (currentScroll > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Dynamic background fill for any reveal-bg section
    scrollFillSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Starts filling when section top is 85% down the viewport
      // Finishes filling when section top reaches 35% down the viewport
      const startFill = windowHeight * 0.85;
      const endFill = windowHeight * 0.35;
      
      let fillPercentage = 0;
      if (rect.top <= startFill && rect.top >= endFill) {
        fillPercentage = ((startFill - rect.top) / (startFill - endFill)) * 100;
      } else if (rect.top < endFill) {
        fillPercentage = 100;
      }
      
      section.style.setProperty('--scroll-fill', `${fillPercentage}%`);
    });

    lastScroll = currentScroll;
  });
}

// ===== SCROLL REVEAL (Intersection Observer) =====
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-bg');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Don't unobserve — allows re-triggering if needed
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

// ===== ANIMATED COUNTERS =====
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  let countersAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        counters.forEach(counter => animateCounter(counter));
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 2000;
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);

    el.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}



// ===== PARTICLE EFFECTS =====
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;

  const particleCount = 25;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    particle.style.left = Math.random() * 100 + '%';
    particle.style.bottom = -(Math.random() * 20) + '%';
    particle.style.width = (Math.random() * 4 + 2) + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDuration = (Math.random() * 10 + 8) + 's';
    particle.style.animationDelay = (Math.random() * 8) + 's';
    particle.style.opacity = Math.random() * 0.4 + 0.1;

    container.appendChild(particle);
  }
}

// ===== MOBILE MENU =====
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===== IMAGE HOVER ANIMATIONS =====
function initImageAnimations() {
  // Parallax-like effect on hero image
  const heroImage = document.querySelector('.hero-image-wrapper');
  if (heroImage) {
    heroImage.addEventListener('mousemove', (e) => {
      const rect = heroImage.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;

      heroImage.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    });

    heroImage.addEventListener('mouseleave', () => {
      heroImage.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
      heroImage.style.transition = 'transform 0.5s ease';
    });

    heroImage.addEventListener('mouseenter', () => {
      heroImage.style.transition = 'none';
    });
  }

  // Card tilt effects
  const tiltCards = document.querySelectorAll('.about-card, .category-card, .partner-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 6;

      card.style.transform = `translateY(-8px) perspective(800px) rotateY(${x}deg) rotateX(${-y}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'all 0.3s ease';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  });

  // Highlight image zoom on scroll
  const highlightImg = document.querySelector('.highlights-image');
  if (highlightImg) {
    window.addEventListener('scroll', () => {
      const rect = highlightImg.getBoundingClientRect();
      const viewHeight = window.innerHeight;

      if (rect.top < viewHeight && rect.bottom > 0) {
        const progress = 1 - (rect.top / viewHeight);
        const scale = 1 + (progress * 0.03);
        const img = highlightImg.querySelector('img');
        if (img) {
          img.style.transform = `scale(${Math.min(scale, 1.05)})`;
        }
      }
    });
  }
}

// ===== WORD-BY-WORD TEXT ANIMATION =====
// Text shimmer effect on golden text
(function initTextShimmer() {
  const highlights = document.querySelectorAll('.section-title .highlight');
  highlights.forEach(el => {
    el.addEventListener('mouseenter', function () {
      this.style.textShadow = '0 0 20px rgba(212, 168, 67, 0.5)';
    });
    el.addEventListener('mouseleave', function () {
      this.style.textShadow = 'none';
    });
  });
})();

// ===== SPOTLIGHT CARDS =====
function initSpotlightCards() {
  const grid = document.querySelector('.spotlight-grid');
  const cards = document.querySelectorAll('.spotlight-card');
  
  if (!grid || cards.length === 0) return;

  grid.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // Reset spotlight position on mouse leave
  grid.addEventListener('mouseleave', () => {
    cards.forEach(card => {
      card.style.setProperty('--mouse-x', `-500px`);
      card.style.setProperty('--mouse-y', `-500px`);
    });
  });
}

// ===== CUSTOM CURSOR =====
function initCustomCursor() {
  const cursor = document.getElementById('customCursor');
  if (!cursor) return;

  // Only enable custom cursor for devices that use a mouse
  if (window.matchMedia("(pointer: coarse)").matches) {
    cursor.style.display = 'none';
    return;
  }

  document.addEventListener('mousemove', (e) => {
    // Use requestAnimationFrame for smoother following if needed, or just set transform
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  });

  const interactives = document.querySelectorAll('a, button, .menu-toggle, .btn-primary, .btn-secondary, input, textarea, .nav-logo');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}
