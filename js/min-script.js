let isLocalStorageSupport=!0;try{localStorage.getItem("something")}catch(e){isLocalStorageSupport=!1}const messageModal=document.querySelector(".send-message-form"),messageModalShowButton=document.querySelector(".contacts-section .button"),messageModalCloseButton=messageModal.querySelector(".close-button"),name=messageModal.querySelector("[name=name]"),email=messageModal.querySelector("[name=email]"),message=messageModal.querySelector("[name=message]"),form=messageModal.querySelector(".modal-message-form"),closeModal=e=>{e.classList.contains("visible")&&(e.classList.remove("visible"),e.classList.remove("modal-error"))},escapeListener=e=>t=>{27===t.keyCode&&(t.preventDefault(),closeModal(e))},messageFormEscapeListener=escapeListener(messageModal);form.addEventListener("submit",e=>{const t=!!name.value,a=!!email.value,s=!!message.value;t&&a&&s?isLocalStorageSupport&&(localStorage.setItem(name.name,name.value),localStorage.setItem(email.name,email.value)):(e.preventDefault(),messageModal.classList.remove("modal-error"),messageModal.offsetWidth=messageModal.offsetWidth,messageModal.classList.add("modal-error"))}),messageModalShowButton.addEventListener("click",e=>{if(e.preventDefault(),messageModal.classList.add("visible"),window.addEventListener("keydown",messageFormEscapeListener),isLocalStorageSupport){const e=localStorage.getItem(name.name),t=localStorage.getItem(email.name);e&&(name.value=e,email.focus()),t&&(email.value=t,message.focus())}else name.focus()}),messageModalCloseButton.addEventListener("click",()=>{messageModal.classList.remove("visible"),messageModal.classList.remove("modal-error")});const mapModal=document.querySelector(".map-modal"),mapModalShowButton=document.querySelector(".contacts-section .contacts-map"),mapModalCloseButton=mapModal.querySelector(".close-button"),mapEscapeListener=escapeListener(mapModal);mapModalShowButton.addEventListener("click",e=>{e.preventDefault(),mapModal.classList.add("visible"),window.addEventListener("keydown",mapEscapeListener)}),mapModalCloseButton.addEventListener("click",()=>{mapModal.classList.remove("visible")});const promoSliderButtons=document.querySelectorAll(".slider-controls-button");let currentPromoSlide=document.querySelector(".slides-list-item.active"),currentPromoButton=document.querySelector(".slider-controls-button.active");promoSliderButtons.forEach(e=>{e.addEventListener("click",()=>{let t=e.dataset.slide,a=document.querySelector(`.slides-list-item.slide-${t}`);currentPromoSlide.classList.toggle("active"),currentPromoButton.classList.toggle("active"),currentPromoSlide=a,currentPromoButton=e,a.classList.toggle("active"),e.classList.toggle("active")})});const servicesSliderButtons=document.querySelectorAll(".services-navigation-link");let myMap,currentServicesSlide=document.querySelector(".services-slide.active"),currentServicesSlideButton=document.querySelector(".services-navigation-link.active");function init(){myMap=new ymaps.Map("map",{center:[55.68698,37.529654],zoom:16.5},{searchControlProvider:"yandex#search"}),MyIconContentLayout=ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),myPlacemark=new ymaps.Placemark(myMap.getCenter(),{hintContent:"Device",balloonContent:"г. Москва, ул. Строителей, 15"},{iconLayout:"default#image",iconImageHref:"img/popular-2.svg",iconImageSize:[86,117],iconImageOffset:[-40,-120]}),myMap.geoObjects.add(myPlacemark)}servicesSliderButtons.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let a=e.dataset.slide,s=document.querySelector(`.services-slide.slide-${a}`);currentServicesSlide.classList.toggle("active"),currentServicesSlideButton.classList.toggle("active"),currentServicesSlide=s,currentServicesSlideButton=e,s.classList.toggle("active"),e.classList.toggle("active")})}),ymaps.ready(init);
