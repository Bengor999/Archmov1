






//js для бургер меню
$(document).ready(function() {
   $('.menu-burger__header').click(function() {
       $('.menu-burger__header').toggleClass('open-menu');
       $('.header__nav').toggleClass('open-menu');
   });
});

//Активация первого слайдера
const $slider = document.querySelector('[data-slider="chiefslider"]');
      new ChiefSlider($slider, {
      loop: false // без зацикливания
      });