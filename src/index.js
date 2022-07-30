


function resetSlick(slick_slider, settings) {
    $(window).on('resize', function () {
        if (window.matchMedia('(max-width: 320px)').matches) {
            if (slick_slider.hasClass('slick-initialized')) {
                slick_slider.slick('unslick');
            }
            return
        }

        if (!slick_slider.hasClass('slick-initialized')) {
            return slick_slider.slick(settings);
        }
    });
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
slick_slider = $('.content');
settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: 'linear',
    pauseOnHover: true,
    dots: true,
    speed: 300,

    responsive: [
        {
            breakpoint: 1024,
            settings: {

                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                mobileFirst: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

};
$(function () {
    slick_slider.slick(settings);
    resetSlick(slick_slider, settings);


    //nav button
    $('.prev').on('click', () => {
        slick_slider.slick('slickPrev')
    })
    $('.next').on('click', () => {
        slick_slider.slick('slickNext')
    })
    if (window.matchMedia('(max-width: 600px)').matches) {
        // do functionality on screens smaller than 768px
//         alert('hello tablet');
    }
});
