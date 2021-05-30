$(function () {
    $('.top-slider__items').slick({
        dots: true,
        arrows: false,
    });

    $('.partners__items').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
    })

    var mixer = mixitup('.products-week__items');

});