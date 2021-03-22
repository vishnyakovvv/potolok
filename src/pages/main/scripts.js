// // burger menu

// (function burgerOpen () {

//     let container = document.querySelector('.burger_js'),
//     stick = document.querySelector('.stick_js');

//     let menuOpen = false;
//     container.onclick = function () {
//         if (!menuOpen) {
//             stick.classList.add ('open');
//             menuOpen = true;
//         } else {
//             stick.classList.remove ('open');
//             menuOpen = false;
//         }
//     }
// })();



// // open tabs

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



// (function slider () {

//     var Flickity = require('flickity-as-nav-for');

//     var flktyA = new Flickity('.carousel-main');
//     var flktyB = new Flickity( '.carousel-nav', {
//       asNavFor: '.carousel-main'

//     });
    
// })();


//   calc

(function ($) {
    $(function () {
   
          calculate();
   
          jQuery('#calculator input').keyup(function() {
              this.value = this.value.replace(/[^0-9\.,]/g, '');
              this.value = this.value.replace(/[,]/, '.');
          });
          jQuery('#calculator input, #calculator select').change(function() {
              calculate();
          });
          jQuery('#calculator input').keyup(function() {
              calculate();
          });
          function calculate() {
        $('.calculator').each(function(key, val){
          calcInputs = {};
              $(this).find('input, select').each(function(key, val){
                  name = $(this).attr('name');
                  val = $(this).val();
                  if (!$.isNumeric(val)) {
                      switch (name) {
                          case 'area':
                              val = 1;
                              break;
                          case 'corners':
                              val = 4;
                              break;
                          case 'lamp':
                              val = '';
                              break;
                          case 'tube':
                              val = '';
                              break;
                          case 'chandelier-hook':
                              val = '';
                              break;
                          default:
                              break;
                      }
                      $(this).val(val);
                  }
                  calcInputs[name] = val;
              });
   
              total = 0;
   
              switch (calcInputs.texture) {
                  case 'mat':
              total += calcInputs.area * 113;
              break;
                  case 'glossy':
              total += calcInputs.area * 180;
              break;
                  case 'satin':
              total += calcInputs.area * 180;
              break;
                  case 'fabric':
              total += calcInputs.area * 900;
              break;
              default:
              break;
              }
   
              // каждый угол
                  total += calcInputs.corners * 40;
   
              // установка люстры
              if (calcInputs['chandelier-hook'] >= 1) {
                  total += calcInputs['chandelier-hook'] * 500;
              }
              // установка встраемого светильника
              if (calcInputs.lamp >= 1) {
                  total += calcInputs.lamp * 350;
              }
              // обход трубы
              if (calcInputs.tube >= 1) {
                  total += calcInputs.tube * 300;
              }
   
          install = calcInputs.area * 170;
          total += install;
   
              total += ' руб.';
              jQuery(this).find('span.total').html(total);
        });
          }
   
      });
  })(jQuery);
  ;







