$(function () {

    $(".rate-star").rateYo({
        rating: 3.5,
        starWidth: "12px",
        readOnly: true
    });

    $('.product-slider__inner').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });
    $('.icon-th-list').on('click', function () {
        $('.product__items').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active');
    });
    $('.icon-th-large').on('click', function () {
        $('.product__items').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active');
    });
    const btnBurger = document.querySelector('.menu__btn'),
          menu = document.querySelector('.menu__list');


    btnBurger.addEventListener('click', () => {
        if (!menu.classList.contains('menu-active')) {
            menu.classList.add('menu-active');
        } else {
            menu.classList.remove('menu-active');
        }
    });
    
    $('.header__btn-menu').on('click', function () {
        $('.header__box').toggleClass('active');
        $('.header__logo').toggleClass('hide');
    });

    // $('.product-one__tabs').on('click', function(event) {
    //     let id = $(this).attr('data-id');
    //     $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
    //     $('.product-one__tabs').find('.tab').removeClass('active');
    //     $(this).addClass('active');
    //     $('#' + id).addClass('active-tab').fadeIn();
    //     return false;

    // });
    $(".tab_item").not(":first").hide();
    $(".product-one__tabs .tab").click(function() {
	$(".product-one__tabs .tab").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active-tab");

    var mixer = mixitup('.products__inner-box');

});
