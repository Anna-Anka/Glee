$(function () {

    $('.user-nav__btn').on('click', function () {
        $('.header__menu').toggleClass('menu--active');
        $('.user-nav').toggleClass('user-nav--active');
        $('.top-slider').toggleClass('top-slider--active');
        $('body').toggleClass('lock');
    })

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