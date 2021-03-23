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

(function tabs () {
    let jsTriggers = document.querySelectorAll('.js-tab-trigger');
 
     jsTriggers.forEach(function(trigger) {
         trigger.addEventListener('click', function () {
           let id = this.getAttribute('data-tab'),
               content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
               activeTrigger = document.querySelector('.js-tab-trigger.active'),
               activeContent = document.querySelector('.js-tab-content.active');
           
           activeTrigger.classList.remove('active');
           trigger.classList.add('active');
           
           activeContent.classList.remove('active');
           content.classList.add('active');
         });
     });
   })();

// slider

(function slider () {

    var Flickity = require('flickity-as-nav-for');

    var flktyA = new Flickity('.carousel-main');
    var flktyB = new Flickity( '.carousel-nav', {
      asNavFor: '.carousel-main'
    });
})();











