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
    if (window.scrollY > 50) {
        header.classList.add('sticky-header');
    } else {
        header.classList.remove('sticky-header');
    }
});