// slider

// variables
const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const slideIcons = document.querySelectorAll('.slideIcon');
const numberOfSlides = slides.length;
var slideNumber = 0;

// Botón next imagen
nextBtn.addEventListener('click', () => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove('active');
  });

  slideNumber++;

  if (slideNumber > numberOfSlides - 1) {
    slideNumber = 0;
  }

  slides[slideNumber].classList.add('active');
  slideIcons[slideNumber].classList.add('active');
});

// Botón prev imagen
prevBtn.addEventListener('click', () => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove('active');
  });

  slideNumber--;

  if (slideNumber < 0) {
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add('active');
  slideIcons[slideNumber].classList.add('active');
});

// slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function() {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove('active');
    });
  
    slideNumber++;
  
    if (slideNumber > numberOfSlides - 1) {
      slideNumber = 0;
    }
  
    slides[slideNumber].classList.add('active');
    slideIcons[slideNumber].classList.add('active');
  }, 4000);
}
repeater();

// detener autoplay del slider con mouse hover
slider.addEventListener('mouseover', () => {
  clearInterval(playSlider);
});

// reiniciar autoplay al quitar mouse hover
slider.addEventListener('mouseout', () => {
  repeater();
});