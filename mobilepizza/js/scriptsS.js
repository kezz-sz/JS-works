const slides = document.querySelectorAll('.slide');

let slideIndex = 0;

function mostrarSlide() {
  for (const slide of slides) {
    slide.style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';

  slideIndex++;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  setTimeout(mostrarSlide, 3000); 
}

mostrarSlide();

function mudarSlide(n) {
    slideIndex += n;
  
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
  
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = i === slideIndex ? 'block' : 'none';
    }
  }