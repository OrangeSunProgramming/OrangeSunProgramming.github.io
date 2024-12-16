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

// Intersection Observer for shaking elements
const shakeElements = document.querySelectorAll('.animate-shake'); // Select all elements you want to shake

// Set up the Intersection Observer
const shakeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__shakeX', 'animate_shakeY'); // Apply the shake animation
      observer.unobserve(entry.target); // Stop observing after applying the animation
    }
  });
}, { threshold: 0.5 }); // Trigger animation when 50% of the element is in view

// Start observing the shake elements
shakeElements.forEach(el => shakeObserver.observe(el));
