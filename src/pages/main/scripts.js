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


  // window open

(function windowOpen() {
    let body = document.querySelector("body"),
        callback = document.querySelector(".modal_js"),
        buttonOpen = document.querySelectorAll(".js-open-modal"),
        buttonClose = document.querySelector(".js-modal-close"),
        inputText = document.querySelector(".input-text-callback_js");

        console.log(callback);

    buttonOpen.forEach(function(item) {
      item.addEventListener("click", openCallbackPopup);

      function openCallbackPopup() {
  
  
          callback.classList.add("callback_open");
          body.style.overflow = "hidden";
          inputText.focus();
  
          buttonClose.addEventListener("click", closeCallbackPopup);
  
          window.addEventListener("keydown", function (event) {
              if (event.code === "Escape") {
                  closeCallbackPopup()
              } 
          });
  
          callback.addEventListener("click", function (event) {
              if (event.target === callback) {
                  closeCallbackPopup()
              }
          });
      }
    });

    function closeCallbackPopup() {
        callback.classList.remove("callback_open");
        body.style.overflow = "unset";
        buttonClose.removeEventListener("click", closeCallbackPopup);
    }
})();

// menu

(function openMenu () {
    
    let trigger = document.querySelector('.header__toggle');
    let box = document.querySelector('.header__menu');
    
    trigger.addEventListener('click', function() {
      box.classList.toggle('active');
    });
})

// slider

(function slider () {

    let Flickity = require('flickity-as-nav-for');

    let flktyA = new Flickity('.carousel-main');
    let flktyB = new Flickity( '.carousel-nav', {
      asNavFor: '.carousel-main'
    });
})();

// culc

function calcCeil() {
    let culcColors = document.getElementById('colors').value;
    let culcSpace = document.getElementById('space').value;
    let culcAngle = document.getElementById('angle').value;
    let culcHole = document.getElementById('hole').value;
    let culcLamp = document.getElementById('lamp').value;
    let culcCeilost = culcColors * culcSpace + culcAngle * 100 + culcHole * 100 + culcLamp * 500
    document.getElementById('result').innerHTML = culcCeilost
  }













