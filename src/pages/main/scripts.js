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

let menuBtn = document.querySelector('.menu-btn'),
    nav = document.querySelector('.nav'),
    lineOne = document.querySelector('.nav .menu-btn .line--1'),
    lineTwo = document.querySelector('.nav .menu-btn .line--2'),
    lineThree = document.querySelector('.nav .menu-btn .line--3'),
    link = document.querySelector('.nav .nav-links');
    
menuBtn.addEventListener('click', () => {
    // nav.classList.toggle('.nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
})

// slider

(function slider () {

    let Flickity = require('flickity-as-nav-for');

    let flktyA = new Flickity('.carousel-main');
    let flktyB = new Flickity( '.carousel-nav', {
      asNavFor: '.carousel-main'
    });
})();













