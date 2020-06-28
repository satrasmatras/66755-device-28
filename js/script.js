// Promo-slider
const promoSliderButtons = document.querySelectorAll(".slider-controls-button");

let currentPromoSlide = document.querySelector(".slides-list-item.active");
let currentPromoButton = document.querySelector(".slider-controls-button.active");

// initialize
promoSliderButtons.forEach(
  sliderButton => {
    sliderButton.addEventListener('click', () => {
      let slideNumber = sliderButton.dataset.slide;
      let slide = document.querySelector(`.slides-list-item.slide-${slideNumber}`);

      currentPromoSlide.classList.toggle("active");
      currentPromoButton.classList.toggle("active");

      currentPromoSlide = slide;
      currentPromoButton = sliderButton;

      slide.classList.toggle("active");
      sliderButton.classList.toggle("active");
    })
  })

