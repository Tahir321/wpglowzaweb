jQuery(document).ready(function ($) {
  $(".testimonial-slider").slick({
    dots: true,
    infinite: true,
    speed: 3000,
    swipe: false,
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: true,
    arrows: false,
  });
});

jQuery(document).ready(function ($) {
  $(".loop-slider").slick({
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: true,
    arrows: false,
    cssEase: "linear",
    swipe: false,
    autoplaySpeed: 0,
  });
});

jQuery(document).ready(function ($) {
  $(".loop-slider-services").slick({
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    arrows: false,
    cssEase: "linear",
    swipe: false,
    autoplaySpeed: 0,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
});

document.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  let logo_text = document.querySelector(".logo-text span");
  let menu_button = document.querySelector(".menu-button a");
  if (window.scrollY > 50) {
    logo_text ? (logo_text.style.opacity = "0") : "";
    menu_button ? (menu_button.style.padding = "20px") : "";
  } else {
    logo_text ? (logo_text.style.opacity = "1") : "";
    menu_button ? (menu_button.style.padding = "30px") : "";
  }
});

let menu_button = document.querySelector(".menu-button");
let menu_popup = document.querySelector(".menu-popup");
let menu_botton_text = document.querySelector(
  ".menu-button .elementor-button-text"
);
let flag = true;


function disableScroll() {
    document.body.classList.
    add("stop-scrolling");
}

function enableScroll() {
    document.body.classList
    .remove("stop-scrolling");
}

menu_button
  ? (menu_button.onclick = () => {
      if (flag) {
        menu_popup.style.opacity = "1";
        menu_popup.style.width = "100%";
        menu_botton_text.innerText = "close";
        flag = false;
        disableScroll()
      } else {
        menu_popup.style.opacity = "0";
        menu_popup.style.width = "0";
        menu_botton_text.innerText = "Menu";
        flag = true;
        enableScroll()
      }
    })
  : "";
