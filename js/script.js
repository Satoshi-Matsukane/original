/* ハンバーガーメニュー */

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

/* メインビジュアル */

var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
});

/* レッスンコース */

var swiper = new Swiper(".course-slider", {
  spaceBetween: 20,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  grabCursor:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

const qa = document.querySelectorAll(".js-accordion"); 
function acToggle() {
  const content = this.nextElementSibling;

  content.classList.toggle("is-open");

  const qa = this;
  qa.classList.toggle('is-open');
}

for (let i = 0; i < qa.length; i++) { 
  qa[i].addEventListener("click", acToggle);
}