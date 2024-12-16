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

// Intersection Observer for fade-in and slide-in animations
const elements = document.querySelectorAll('.animate__animated'); // Select all elements with Animate.css animations

// Set up the Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeIn'); // Trigger fade-in animation when element is in view
      // You can add more animations based on the class names, like slideIn or bounce
      observer.unobserve(entry.target); // Stop observing once animation is applied
    }
  });
}, { threshold: 0.5 }); // Trigger animation when 50% of the element is in view

elements.forEach(el => observer.observe(el)); // Start observing the elements

