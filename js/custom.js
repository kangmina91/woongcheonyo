$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');

    })

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._se_').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        })
    })


    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        parallax: true,
        // centeredSlides: true,
        speed: 2000,
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
        slideActiveClass: 'on',
    });

    $('.main_visual .arrows .left').on('click', function () {
        mainSlide.slidePrev();
    })


    $('.main_visual .arrows .right').on('click', function () {
        mainSlide.slideNext();
    })



    const noticeSlide = new Swiper('.notice_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,

        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            }

        }
    });


    $('.main_notice .arrows .left').on('click', function () {
        noticeSlide.slidePrev();
    })


    $('.main_notice .arrows .right').on('click', function () {
        noticeSlide.slideNext();
    })



    $('.scroll').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;
        console.log(st);

        if ($(window).width() < 767) {
            $('html, body').animate({ scrollTop: st }, 600);
        } else {
            $('html, body').animate({ scrollTop: st - 80 }, 600);
        }

    })


    // 탑 스크롤 
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    })
    // 탑 스크롤 없앴다가 나타나게 만들기
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 1000 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
    })


    $('.mobile_btn').on('click', function () {
        $('.gnb').toggleClass('on');
        $('.header').toggleClass('oo');
    })

    $('.gnb .main_menu>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            // $(this).parent().siblings().find('.sub_menu').stop().slideUp();
        }
    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
    })

    $('gnb').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();

        }
    })

})