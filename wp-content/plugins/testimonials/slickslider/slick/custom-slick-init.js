// testimonial slider
// jQuery(document).ready(function ($) {
//   $(".testimonial-slider").slick({
//     dots: false,
//     arrows: false,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const itemsHeight = document.querySelector(
    ".testimonial__right"
  ).clientHeight;
  let items = gsap.utils.toArray(".testimonial__item");

  gsap.to(".testimonial__right", {
    y: -1200,
    ease: "none",
    scrollTrigger: {
      trigger: ".testimonial",
      start: "top top",
      end: itemsHeight - 400,
      scrub: 1,
      pin: true,
      pinSpacing: false,
      snap: {
        snapTo: 1 / (items.length - 1),
        duration: 0.2,
        delay: 0,
      }
    },
  });

  items.forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        start: "top 50%",
        end: "bottom 50%",
        trigger: section,
        toggleClass: "active",
      }
    });
  });
});

// decorative sliders
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

// sticky header
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
  document.body.classList.add("stop-scrolling");
}

function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}

menu_button
  ? (menu_button.onclick = () => {
      if (flag) {
        menu_popup.style.opacity = "1";
        menu_popup.style.width = "100%";
        menu_botton_text.innerText = "close";
        flag = false;
        disableScroll();
      } else {
        menu_popup.style.opacity = "0";
        menu_popup.style.width = "0";
        menu_botton_text.innerText = "Menu";
        flag = true;
        enableScroll();
      }
    })
  : "";
