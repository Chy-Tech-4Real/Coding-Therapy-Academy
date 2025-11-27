
const navbarToggle = document.querySelector('.navbar-toggle'); 
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});document.addEventListener("DOMContentLoaded", () => {
  const fadeOrder = [
    document.querySelector(".hero-text h1"),
    document.querySelector(".hero-text p"),
    document.querySelector(".about-btn"),
    document.querySelector(".hero-image")
  ];

  fadeOrder.forEach((el, index) => {
    if (el) {
      setTimeout(() => {
        el.classList.add("show");
      }, index * 400); 
    }
  });
});
const valueCards = document.querySelectorAll('.value-card');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.3 });

valueCards.forEach((card, index) => {
  card.style.animationDelay = `${0.25 * (index + 1)}s`;
  observer.observe(card);
});

