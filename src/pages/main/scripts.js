// burger menu

(function burgerOpen () {

    let container = document.querySelector('.burger_js'),
    stick = document.querySelector('.stick_js');

    let menuOpen = false;
    container.onclick = function () {
        if (!menuOpen) {
            stick.classList.add ('open');
            menuOpen = true;
        } else {
            stick.classList.remove ('open');
            menuOpen = false;
        }
    }
})();



// open tabs

// (function tabs () {
//     let jsTriggers = document.querySelectorAll('.js-tab-trigger');
 
//      jsTriggers.forEach(function(trigger) {
//          trigger.addEventListener('click', function () {
//            let id = this.getAttribute('data-tab'),
//                content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
//                activeTrigger = document.querySelector('.js-tab-trigger.active'),
//                activeContent = document.querySelector('.js-tab-content.active');
           
//            activeTrigger.classList.remove('active');
//            trigger.classList.add('active');
           
//            activeContent.classList.remove('active');
//            content.classList.add('active');
//          });
//      });
//    })();

   //slider

//    var elem = document.querySelector('.main-carousel');
//    var flkty = new Flickity( elem, {
//   // options
//   cellAlign: 'left',
//   contain: true
// });

(function slider () {
    // let elem = document.querySelector('.main-carousel');
    // var flktyA = new Flickity('.gallery-a');
    // var flktyB = new Flickity( '.gallery-b', {
    //     asNavFor: '.gallery-a'
    // });
    // let slideEl = new Flickity( elem, {
    //   // options
    //   imagesLoaded: true,
    //   wrapAround: true,
    //   autoPlay: 3000,
    //   pauseAutoPlayOnHover: true,
    //   pageDots: false
    //   // fade: true
    // });
    var Flickity = require('flickity-as-nav-for');

    var flktyA = new Flickity('.carousel-main');
    var flktyB = new Flickity( '.carousel-nav', {
      asNavFor: '.carousel-main'

    });
    
  })();


