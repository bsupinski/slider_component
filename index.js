
const slides = document.querySelectorAll(".slide");
const leftButton = document.querySelector(".left__button");
const rightButton = document.querySelector(".right__button");

let currentSlide = 0;
const numberSlides = slides.length;
console.log(slides);
console.log(numberSlides);

const goSlide = (slideNumber) => {
    slides.forEach((slide, index) => {
        slides.forEach((slide, index) =>{ slide.style.transform = `translateX(${100 * (index - slideNumber)}%)`});
    })
}


rightButton.addEventListener("click", () => {
    if( currentSlide === numberSlides - 1 ) currentSlide = 0;

    currentSlide++;
    goSlide(currentSlide);
   
})

leftButton.addEventListener("click", () => {
    if( currentSlide === 0 ) currentSlide = numberSlides;

    currentSlide--;
    goSlide(currentSlide);
   
});

goSlide(0)