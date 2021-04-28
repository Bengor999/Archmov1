
$(document).ready(function() {
   $('.menu-burger__header').click(function() {
       $('.menu-burger__header').toggleClass('open-menu');
       $('.header__nav').toggleClass('open-menu');
   });
});


$(window).load(function() {
   $("#flexiselDemo1").flexisel();

   // $("#flexiselDemo2").flexisel({
   //     visibleItems: 0.1,
   //     itemsToScroll: 1,
   //     animationSpeed: 200,
   //     infinite: false,
   //     navigationTargetSelector: null,
   //     autoPlay: {
   //         enable: false,
   //         interval: 5000,
   //         pauseOnHover: true
   //     },
      //  responsiveBreakpoints: { 
      //      portrait: { 
      //          changePoint:480,
      //          visibleItems: 1,
      //          itemsToScroll: 1
      //      }, 
      //      landscape: { 
      //          changePoint:640,
      //          visibleItems: 2,
      //          itemsToScroll: 2
      //      },
      //      tablet: { 
      //          changePoint:768,
      //          visibleItems: 3,
      //          itemsToScroll: 3
      //      }
      //  },
      //  loaded: function(object) {
      //      console.log('Slider loaded...');
      //  },
      //  before: function(object){
      //      console.log('Before transition...');
      //  },
      //  after: function(object) {
      //      console.log('After transition...');
      //  },
      //  resize: function(object){
      //      console.log('After resize...');
      //  }
   // });
   
   // $("#flexiselDemo3").flexisel({
   //     visibleItems: 3,
   //     itemsToScroll: 1,         
   //     autoPlay: {
   //         enable: true,
   //         interval: 5000,
   //         pauseOnHover: true
   //     }        
   // });
   
   // $("#flexiselDemo4").flexisel({
   //     infinite: false     
   // });    
   
});

// var next = document.getElementById('next');
// var previous = document.getElementById('previous');
// next.onclick = function() {
// document.getElementById('next').style.display = 'none';
// };
// previous.onclick = function() {
//     pauseSlideshow();
//     previousSlide();
// };
// let currentSlideNumber =0;

// let next = elem.querySelector('buttonSection2Right');
// var previous = elem.querySelector('buttonSection2Left');
// next.onclick = function() {
//     currentSlideNumber = currentSlideNumber++;
//     elem.querySelector('carouselConteiner').style.transform = `translateX(3000px)`;

// };
// previous.onclick = function() {
//    currentSlideNumber = currentSlideNumber--;
//    elem.querySelector('carouselConteiner').style.transform = `translateX(-300px)`;
// };
   // next() {
   //    this.currentSlideNumber++;
   //    this.update();
   // }

   // prev() {
   //    this.currentSlideNumber--;
   //    this.update();
   // }

//    update() {
//       let currentSlideNumber =0;
//       let offset = -this.elem.offsetWidth * this.currentSlideNumber;
//       this.elem.querySelector('carouselConteiner').style.transform = `translateX(300px)`;

//       if (this.currentSlideNumber == this.slides.length - 1) {
//          this.elem.querySelector('buttonSection2Right').style.display = 'none';
//       } else {
//          this.elem.querySelector('buttonSection2Right').style.display = '';
//       }

//       if (this.currentSlideNumber == 0) {
//          this.elem.querySelector('buttonSection2Left').style.display = 'none';
//       } else {
//          this.elem.querySelector('buttonSection2Left').style.display = '';
//       }
//    }

// }

