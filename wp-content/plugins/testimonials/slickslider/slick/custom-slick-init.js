jQuery(document).ready(function($) {
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        autoplay: true,
        arrows: false
    });
});


document.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    let logo_text = document.querySelector('.logo-text span');
    if (window.scrollY > 50) {
        header.classList.add('sticky-header');
        logo_text.style.color = '#fff';
    } else {
        header.classList.remove('sticky-header');
        logo_text.style.color = '#000';
    }
});