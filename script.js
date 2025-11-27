const navbarToggle = document.querySelector('.navbar-toggle'); 
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});

let slideIndex = 0;
let slides = document.querySelectorAll(".mySlide");
let dots = document.querySelectorAll(".dot");
let slideInterval;

displaySlide(slideIndex);
autoPlay();


function displaySlide(n) {
  slides.forEach(slide => slide.style.display = "none");
  dots.forEach(dot => dot.classList.remove("active"));

  slides[n].style.display = "block";
  dots[n].classList.add("active");
}


function autoPlay() {
  slideInterval = setTimeout(() => {
    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;
    displaySlide(slideIndex);
    autoPlay();
  }, 4000);
}


function changeSlide(n) {
  clearTimeout(slideInterval);
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  displaySlide(slideIndex);
  autoPlay();
}

const fadeElements = document.querySelectorAll('.fade-left, .fade-up, .fade-line, .fade-up-left, .fade-up-right, .fade-right, .fade-scale');


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
   
      if(entry.target.classList.contains('fade-line')){
        entry.target.style.animationPlayState = 'running';
      } else {
      
        entry.target.classList.add('show');
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-line').forEach(line => line.style.animationPlayState = 'paused');

fadeElements.forEach(el => observer.observe(el));
const faders = document.querySelectorAll('.fade-up');

const appearOptions = {
  threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.animationPlayState = 'running';
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  fader.style.animationPlayState = 'paused';
  appearOnScroll.observe(fader);
});


const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    if (entry.target.classList.contains("fade-line")) {
      const lines = [...document.querySelectorAll(".fade-line")];

      lines.forEach((line, index) => {
        setTimeout(() => {
          line.classList.add("show");
        }, index * 200); 
      });
    }

    if (entry.target.classList.contains("fade-up-left")) {
      entry.target.classList.add("show");
    }

    observer.unobserve(entry.target);
  });
}, { threshold: 0.2 });


fadeElements.forEach(el => fadeObserver.observe(el));
const animationoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2
  });

  animatedElements.forEach(el => observer.observe(el));
  const animatedElements = document.querySelectorAll(
    '.fade-up, .fade-left, .fade-right, .fade-scale'
  );

  const appearOnlyOnScroll = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2
  });

const appearsOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

// Observe each element
animatedElements.forEach(el => observer.observe(el));
