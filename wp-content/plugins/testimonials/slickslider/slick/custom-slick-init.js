jQuery(document).ready(function($) {
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 3000,
        swipe: false,
        slidesToShow: 3,
        adaptiveHeight: true,
        autoplay: true,
        arrows: false
    });
});

jQuery(document).ready(function($) {
    $('.loop-slider').slick({
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        adaptiveHeight: true,
        autoplay: true,
        arrows: false,
        cssEase: 'linear',
        swipe: false,
        autoplaySpeed: 0,
    });
});

jQuery(document).ready(function($) {
    $('.loop-slider-2').slick({
        dots: false,
        infinite: true,
        speed: 10000,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        arrows: false,
        cssEase: 'linear',
        swipe: false,
        autoplaySpeed: 0,
        pauseOnFocus: false,
        pauseOnHover: false,
        
    });
});

document.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    let logo_text = document.querySelector('.logo-text span');
    let menu_button = document.querySelector('.menu-button a');
    if (window.scrollY > 50) {
        header.classList.add('sticky-header');
        logo_text ? logo_text.style.color = '#fff' : '';
        menu_button ? menu_button.style.padding = '20px' : ''
    } else {
        header.classList.remove('sticky-header');
        logo_text ? logo_text.style.color = '#000' : '';
        menu_button ? menu_button.style.padding = '38px' : '';
    }
});