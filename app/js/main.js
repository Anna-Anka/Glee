$(function () {

    /*$('.user-nav__mobail').on('click', function () {
        $('.header__menu').toggleClass('menu--active');
        $('.user-nav').toggleClass('user-nav--active');
        $('body').toggleClass('lock');
    })*/

    $('.menu__burger').on('click', function () {
        $('.menu__burger').toggleClass('menu__burger--active');
        $('body').toggleClass('lock');
        $('.header__menu').toggleClass('menu--active');
    });

    $('.top-slider__items').slick({
        dots: true,
        arrows: false,
    });

    $('.partners__items').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
        infinite: true,

        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

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