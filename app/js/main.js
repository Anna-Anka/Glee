$(function () {

    $('.filter-view__btn').on('click', function () {
        $(this).removeClass('filter-view__btn--active');
        $(this).addClass('filter-view__btn--active');
    });

    $('.btn-list').on('click', function () {
        $('.shop__items').addClass('shop__items--list')
    });

    $('.btn-grid').on('click', function () {
        $('.shop__items').removeClass('shop__items--list')
    });

    $('.product-shop__star').rateYo({
        starWidth: '18px',
        normalFill: '#d6d6d6',
        ratedFill: '#ffcc00',
        readOnly: true,
        spacing: '10px',
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width = "18pt"height = "16pt" viewBox = "0 0 18 16" version = "1.1"><g id="surface1"><path style="stroke:none;fill-rule:nonzero;fill-opacity:1;"d = "M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688"/></g></svg>'
    });

    $('.filter-recent__star').rateYo({
        starWidth: '11px',
        normalFill: '#d6d6d6',
        ratedFill: '#ffcc00',
        readOnly: true,
        spacing: '5px',
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width = "18pt"height = "16pt" viewBox = "0 0 18 16" version = "1.1"><g id="surface1"><path style="stroke:none;fill-rule:nonzero;fill-opacity:1;"d = "M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688"/></g></svg>'
    });

    $('.filter-price__input').ionRangeSlider({
        type: "double",
        onStart: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },

        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });

    $('.shop-menu').on('click', function () {
        $(this).toggleClass('shop-menu--active');
        $('.filters').toggleClass('filters--active');
        $('body').toggleClass('lock-shop');
       $('.backdrop').toggleClass('backdrop--active');
    });

    $('.filters__burger').on('click', function (){
        $('.filters').removeClass('filters--active');
        $('.backdrop').removeClass('backdrop--active');
        $('body').removeClass('lock-shop');
    });

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

    const productButtons = document.querySelectorAll('.product-shop__buttons');
    productButtons.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('product-shop__buttons--active');
            item.nextElementSibling.classList.toggle('product-shop__btn--active');
        });
    });

    const filterTitle = document.querySelectorAll('.filter__title');
    filterTitle.forEach(item => {
        item.addEventListener('click', () => {
            item.nextElementSibling.classList.toggle('filter--hidden');
        });
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