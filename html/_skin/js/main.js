$(function () {
  $('.gallery-slider-inc .board-wrap--fc').addClass('swiper-container');
  $('.gallery-slider-inc .gallery-latest--fc').addClass('swiper-wrapper');
  $('.gallery-slider-inc .gallery-latest--fc > figure').addClass('swiper-slide');

  $('.gallery-slider').each(function (i) {
    $(this)
      .find('.board-wrap--fc')
      .addClass('type' + i);

    $(this)
      .find("[class*='swiper-button']")
      .addClass('type' + i);

    $(this)
      .find('.swiper-scrollbar')
      .addClass('type' + i);

    var container = $('.board-wrap--fc.type' + i);
    if (container.find('.swiper-slide').length === 0) {
      $(this).find("[class*='swiper-button']").addClass('swiper-button-disabled');
    }
    if (container.find('.swiper-slide').length > 0) {
      new Swiper(container, {
        slidesPerView: 3,
        spaceBetween: 40,
        speed: 400,
        observer: true,
        observeParents: true,
        /* autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        }, */
        /*  scrollbar: {
        el: '.swiper-scrollbar.type' + i,
        hide: false,
        dragSize: 400,
      }, */
        navigation: {
          nextEl: '.swiper-button-next.type' + i,
          prevEl: '.swiper-button-prev.type' + i,
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          430: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
        },
      });
    }
  });
});
