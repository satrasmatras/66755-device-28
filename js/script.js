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

  const isNameValid = !!name.value;
  const isEmailValid = !!email.value;
  const isMessageValid = !!message.value;

  const isFormValid = isNameValid && isEmailValid && isMessageValid;

  if (!isFormValid){
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
let currentServicesSlideButton = document.querySelector(".services-navigation-link.active");

servicesSliderButtons.forEach(
  sliderButton => {
    sliderButton.addEventListener('click', (event) => {
      event.preventDefault();

      let slideNumber = sliderButton.dataset.slide;
      let slide = document.querySelector(`.services-slide.slide-${slideNumber}`);

      currentServicesSlide.classList.toggle("active");
      currentServicesSlideButton.classList.toggle("active");

      currentServicesSlide = slide
      currentServicesSlideButton = sliderButton

      slide.classList.toggle("active")
      sliderButton.classList.toggle("active");
    })
  })

// Яндекс карта
let myMap;
ymaps.ready(init);

function init () {
  myMap = new ymaps.Map('map', {
    center: [55.686980, 37.529654], // Москва
    zoom: 16.5
  }, {
    searchControlProvider: 'yandex#search'
  }),
  // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Device',
      balloonContent: 'г. Москва, ул. Строителей, 15'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/popular-2.svg',
      // Размеры метки.
      iconImageSize: [86, 117],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-40, -120]
    });


  const mapImage = document.querySelector('.map-modal-image');
  mapImage.classList.add('sr-only');

  // myMap.container.fitToViewport();
  myMap.geoObjects
    .add(myPlacemark)
}
