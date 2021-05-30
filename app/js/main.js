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
    

    var products = document.querySelector('[data-ref="products"]');
    var design = document.querySelector('[data-ref="design"]');

    var config = {
        controls: {
        scope: 'local'
        }
    };

    var mixer_products = mixitup(products, config);
    var mixer_design = mixitup(design, config);
});