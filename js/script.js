// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Parallax Effect on Scroll
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  document.querySelector('#about').style.transform = `translateY(${scrollPos * 0.15}px)`;
  document.querySelector('#projects').style.transform = `translateY(${scrollPos * 0.1}px)`;
});

// Project Card Animation on Scroll
const projectCards = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

projectCards.forEach(card => observer.observe(card));

// Dynamic Header Effect
document.addEventListener('mousemove', (e) => {
  const header = document.querySelector('header');
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  header.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
});
