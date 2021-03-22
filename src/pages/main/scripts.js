//   calc

// (function calcCeil() {
//     var colors = document.getElementById('#colors').value;
//     var space = document.getElementById('#space').value;
//     var angle = document.getElementById('#angle').value;
//     var hole = document.getElementById('#hole').value;
//     var lamp = document.getElementById('#lamp').value;
//     var ceilost = colors * space + angle * 100 + hole * 100 + lamp * 500
//     document.getElementById('#result') = ceilost


//   })();

//   console.log(colors);
//   console.log(space);
//   console.log(angle);
//   console.log(hole);
//   console.log(lamp);
//   console.log(ceilost);

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



// // open tabs

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



(function slider () {

    var Flickity = require('flickity-as-nav-for');

    var flktyA = new Flickity('.carousel-main');
    var flktyB = new Flickity( '.carousel-nav', {
      asNavFor: '.carousel-main'

    });
    
})();










