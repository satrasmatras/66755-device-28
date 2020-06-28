let isLocalStorageSupport = true;

try {
  localStorage.getItem('something');
} catch (err) {
  isLocalStorageSupport = false
}

// Form
const messageModal = document.querySelector('.send-message-form');
const messageModalShowButton = document.querySelector('.contacts-section .button');
const messageModalCloseButton = messageModal.querySelector('.close-button');

const name = messageModal.querySelector('[name=name]');
const email = messageModal.querySelector('[name=email]');
const message = messageModal.querySelector('[name=message]');

const form = messageModal.querySelector('.modal-message-form');

const closeModal = (modalElement) => {
  if (modalElement.classList.contains('visible')){
    modalElement.classList.remove('visible');
    modalElement.classList.remove('modal-error');
  }
}
const escapeListener = (modalElement) => (event) => {
  if (event.keyCode === 27) {
    event.preventDefault();
    closeModal(modalElement);
  }
}
const messageFormEscapeListener = escapeListener(messageModal);

form.addEventListener('submit', (event) => {
  if (!name.value || !email.value || !message.value){
    event.preventDefault();
    messageModal.classList.remove('modal-error');
    messageModal.offsetWidth = messageModal.offsetWidth;
    messageModal.classList.add('modal-error');
  }
  else {
    if (isLocalStorageSupport){
      localStorage.setItem(name.name, name.value);
      localStorage.setItem(email.name, email.value);
    }
  }

})

messageModalShowButton.addEventListener('click', (event) => {
  event.preventDefault();
  messageModal.classList.add('visible');

  window.addEventListener('keydown', messageFormEscapeListener)

  if (isLocalStorageSupport){
    const lsNameValue = localStorage.getItem(name.name);
    const lsEmailValue = localStorage.getItem(email.name);

    if (lsNameValue){
      name.value = lsNameValue;
      email.focus();
    }
    if (lsEmailValue){
      email.value = lsEmailValue;
      message.focus();
    }
  } else {
      name.focus();
  }

})

messageModalCloseButton.addEventListener('click', () => {
  messageModal.classList.remove('visible');
  messageModal.classList.remove('modal-error');
})

// Map
const mapModal = document.querySelector('.map-modal');
const mapModalShowButton = document.querySelector('.contacts-section .contacts-map');
const mapModalCloseButton = mapModal.querySelector('.close-button');

const mapEscapeListener = escapeListener(mapModal);
mapModalShowButton.addEventListener('click', event => {
  event.preventDefault();
  mapModal.classList.add('visible');

  window.addEventListener('keydown', mapEscapeListener);
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

