// ==================== MOBILE MENU TOGGLE ====================

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('nav');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// Close mobile menu when clicking a link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});


// ==================== SMOOTH SCROLL ====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


// ==================== TYPING EFFECT ====================

const typingText = document.querySelector('.hero h1');

const titles = [
  "Hi, I'm Spoorthi E",
  "Software Developer",
  "Java Developer",
  "Building Scalable Solutions"
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = titles[titleIndex];

  if (isDeleting) {
    typingText.textContent = current.substring(0, charIndex--);
  } else {
    typingText.textContent = current.substring(0, charIndex++);
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === current.length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

if (typingText) {
  typeEffect();
}


// ==================== SCROLL REVEAL ANIMATION ====================

const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

const revealElements = document.querySelectorAll(
  '.skill-category, .project, .timeline-item, .education-card'
);

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});


// ==================== ACTIVE NAV LINK ON SCROLL ====================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

function highlightNav() {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => link.style.color = '');
      const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.style.color = '#6366f1';
      }
    }
  });
}

window.addEventListener('scroll', highlightNav);


// ==================== CONSOLE BRANDING ====================

console.log('%c👋 Welcome to my portfolio!', 
  'font-size:18px; color:#6366f1; font-weight:bold;');

console.log('%cBuilt with HTML5, CSS3 & JavaScript', 
  'font-size:14px; color:#6b7280;');


  // ==================== THEME TOGGLE ====================

const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {

  // Load saved theme
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = '☀️';
    } else {
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = '🌙';
    }
  });
}




