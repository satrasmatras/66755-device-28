// Form
const messageForm = document.querySelector('.send-message-form');
const messageFormShowButton = document.querySelector('.contacts-section .button');
const messageFormCloseButton = messageForm.querySelector('.close-button');

messageFormShowButton.addEventListener('click', event => {
  event.preventDefault();
  messageForm.classList.add('visible');
})

messageFormCloseButton.addEventListener('click', () => {
  messageForm.classList.remove('visible');
})

// Map
const mapModal = document.querySelector('.map-modal');
const mapModalShowButton = document.querySelector('.contacts-section .contacts-map');
const mapModalCloseButton = mapModal.querySelector('.close-button');

mapModalShowButton.addEventListener('click', event => {
  event.preventDefault();
  mapModal.classList.add('visible');
})
mapModalCloseButton.addEventListener('click', () => {
  mapModal.classList.remove('visible');
})

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

// Services Slider
const servicesSliderButtons = document.querySelectorAll(".services-navigation-link");

let currentServicesSlide = document.querySelector(".services-slide.active");
let currentServicesSlideButton = document.querySelector(".services-navigation-item.active .services-navigation-link");

// initialize
servicesSliderButtons.forEach(
  sliderButton => {
    sliderButton.addEventListener('click', (event) => {
      event.preventDefault();

      let slideNumber = sliderButton.dataset.slide;
      let slide = document.querySelector(`.services-slide.slide-${slideNumber}`);

      currentServicesSlide.classList.toggle("active");
      let currentServicesSlideButtonAncestor = currentServicesSlideButton.parentElement;
      currentServicesSlideButtonAncestor.classList.toggle("active")


      currentServicesSlide = slide
      currentServicesSlideButton = sliderButton

      slide.classList.toggle("active")

      currentServicesSlideButtonAncestor = currentServicesSlideButton.parentElement;
      currentServicesSlideButtonAncestor.classList.toggle("active")
    })
  })

