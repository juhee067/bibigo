AOS.init({
    duration: 1200
});

$(function () {
    $('.left_slider').slick({
        arrows: false,

        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    })
    $('.right_slider').slick({
        arrows: false,
        slidesToShow: 3,
        asNavFor: '.left_slider',

    });
    $('.sincerity-right i:nth-child(1)').on('click', function () {
        $('.right_slider').slick('slickPrev')
    });
    $('.sincerity-right i:nth-child(2)').on('click', function () {
        $('.right_slider').slick('slickNext')
    });

    $('.fixed').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200)
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > 500) {
            $('.fixed').fadeIn(300)
        } else {
            $('.fixed').fadeOut(1000)
        }
    })

});
