// IntersectionObserver for triggering animations when an element is in view
const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__fadeIn');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// Observing fade-in elements
document.querySelectorAll('.animate__fadeIn').forEach(element => {
  fadeObserver.observe(element);
});

// Observing shake animations (like Python logo)
const shakeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__shakeX');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.animate__shakeX').forEach(element => {
  shakeObserver.observe(element);
});

// Smooth Scroll for anchor links
$(document).ready(function() {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').animate({
      scrollTop: $target.offset().top
    }, 500, function() {
      window.location.hash = target;
    });
  });
});

// Carousel movement functionality
let currentIndex = 0;

function moveSlide(step) {
    console.log(`Button clicked, moving slide by: ${step}`);  // Log the step to check if the function is being called
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1; // Loop back to last item
    } else if (currentIndex >= totalItems) {
        currentIndex = 0; // Loop back to first item
    }

    const offset = -currentIndex * 100; // Moves the carousel based on currentIndex
    console.log(`Current index: ${currentIndex}, translating by: ${offset}%`);
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}
