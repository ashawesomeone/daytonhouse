$(document).ready(function () {
    $('.newsletter-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoPlay: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='fa-regular fa-arrow-left newsletter-left'></i>",
        nextArrow: "<i class='fa-regular fa-arrow-right newsletter-right'></i>",
    });
});