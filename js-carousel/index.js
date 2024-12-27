const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

const titel = document.querySelector('h1');



const slides = document.querySelectorAll('.slides');

let currentSlide = 0;

slides[currentSlide].classList.add('slides-active');

currentAge(currentSlide);

btnRight.addEventListener('click', function(){
    slides[currentSlide].classList.remove('slides-active');

    if (currentSlide === 2) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    
    slides[currentSlide].classList.add('slides-active');
  
    currentAge(currentSlide);
  
});

btnLeft.addEventListener('click', function(){
  slides[currentSlide].classList.remove('slides-active');

  if (currentSlide === 0) {
    currentSlide = 2;
    
  } else {
    currentSlide--;
  }
  slides[currentSlide].classList.add('slides-active');

  currentAge(currentSlide);

});

function currentAge(currentSlide) {
  if (currentSlide === 0) {
    titel.innerText = 'År 2023';
  } else if (currentSlide === 1) {
    titel.innerText = 'År 2024';
  } else {
    titel.innerText = 'År 2025'
  }
}