// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Intersection Observer for fade-in, shakeX, shakeY, or combined animations
const fadeElements = document.querySelectorAll('.animate-fade'); // Elements for fade-in
const shakeXElements = document.querySelectorAll('.animate-shakeX'); // Elements for shake horizontally
const shakeYElements = document.querySelectorAll('.animate-shakeY'); // Elements for shake vertically
const fadeShakeXElements = document.querySelectorAll('.animate-fade-shakeX'); // Fade-in + shake horizontally
const fadeShakeYElements = document.querySelectorAll('.animate-fade-shakeY'); // Fade-in + shake vertically

// Observer for fade-in
const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__fadeIn'); // Apply fade-in
      observer.unobserve(entry.target); // Stop observing
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% visible

// Observer for shakeX
const shakeXObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__shakeX'); // Apply shakeX
      observer.unobserve(entry.target); // Stop observing
    }
  });
}, { threshold: 0.5 });

// Observer for shakeY
const shakeYObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__shakeY'); // Apply shakeY
      observer.unobserve(entry.target); // Stop observing
    }
  });
}, { threshold: 0.5 });

// Observer for fade-in + shakeX
const fadeShakeXObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__fadeIn'); // Apply fade-in
      entry.target.addEventListener('animationend', () => {
        entry.target.classList.add('animate__shakeX'); // Add shakeX after fade-in ends
      }, { once: true }); // Ensure this runs only once
      observer.unobserve(entry.target); // Stop observing
    }
  });
}, { threshold: 0.5 });

// Observer for fade-in + shakeY
const fadeShakeYObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__fadeIn'); // Apply fade-in
      entry.target.addEventListener('animationend', () => {
        entry.target.classList.add('animate__shakeY'); // Add shakeY after fade-in ends
      }, { once: true }); // Ensure this runs only once
      observer.unobserve(entry.target); // Stop observing
    }
  });
}, { threshold: 0.5 });

// Apply observers to respective elements
fadeElements.forEach(el => fadeObserver.observe(el));
shakeXElements.forEach(el => shakeXObserver.observe(el));
shakeYElements.forEach(el => shakeYObserver.observe(el));
fadeShakeXElements.forEach(el => fadeShakeXObserver.observe(el));
fadeShakeYElements.forEach(el => fadeShakeYObserver.observe(el));
