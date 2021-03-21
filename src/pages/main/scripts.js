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



(function slider () {

    var Flickity = require('flickity-as-nav-for');

    var flktyA = new Flickity('.carousel-main');
    var flktyB = new Flickity( '.carousel-nav', {
      asNavFor: '.carousel-main'

    });
    
  })();


//   culc



function calculate() {
    let price = 0;
    let room_length = document.calc.room_length.value;
    let room_width = document.calc.room_width.value;
    let tubes_quantity = document.calc.tubes_quantity.value;
    let lightpoints_quantity = document.calc.lightpoints_quantity.value;
    let svetilnik_quantity = document.calc.svetilnik_quantity.value;
    let doroga = document.calc.doroga.value;
    result_perimetr.innerHTML = room_width * 40;
    result_tubes.innerHTML = tubes_quantity * 200;
    result_lightpoints.innerHTML = lightpoints_quantity * 300;

    if (doroga >= 0 && doroga <= 20) {
        doroga_new = doroga * 0;
    } else {
        doroga_new = doroga * 12;
    }
    result_doroga.innerHTML = doroga_new;


    if (svetilnik_quantity >= 0 && svetilnik_quantity <= 10) {
        svetilnik_new = svetilnik_quantity * 290;
    } else {
        svetilnik_new = svetilnik_quantity * 270;
    }
    result_svetilnik.innerHTML = svetilnik_new;



    if (room_length >= 0 && room_length <= 14) {
        room_length_new = room_length * 290;
    } else if (room_length >= 15 && room_length <= 20) {
        room_length_new = room_length * 280;
    } else if (room_length >= 21 && room_length <= 40) {
        room_length_new = room_length * 260;
    } else if (room_length >= 41) {
        room_length_new = room_length * 240;
    }
    result_plochad.innerHTML = room_length_new;

    price_new.innerHTML = room_length_new + svetilnik_new + doroga_new + document.calc.room_width.value * 40 + document.calc.tubes_quantity.value * 200 + document.calc.lightpoints_quantity.value * 300;
}







