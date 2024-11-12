$(function () {
  /* 활동일지 슬라이드 */
  $('.gallery-list--fc.activity .thumb-slider--fc').each(function (i) {
    $(this).addClass('type' + i);

    $(this)
      .find("[class*='swiper-button']")
      .addClass('type' + i);

    $(this)
      .find('.swiper-pagination')
      .addClass('type' + i);

    var container = $(this).find('.swiper-container');
    if (container.find('.swiper-slide').length === 0) {
      $(this).find("[class*='swiper-button']").addClass('swiper-button-disabled');
    }
    if (container.find('.swiper-slide').length > 0) {
      new Swiper(container, {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 400,
        observer: true,
        observeParents: true,
        /* autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        }, */
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      });
    }
  });
 

  /* form filebox */
  $(document).on('change', '.filebox .upload-hidden', function () {
    if (window.FileReader) {
      // modern browser
      var filename = $(this)[0].files[0].name;
    } else {
      // old IE
      var filename = $(this).val().split('/').pop().split('\\').pop();
    }

    $(this).parent().parent('.filebox').find('.upload-name').val(filename);
  });

  // scroll page
  if ($('#scroll-page').length === 1) {
    var scrollSecton = $('[data-scroll]');
    var scrollNav = $('#scrollNav .nav__list');

    if (scrollNav.length > 0) {
      scrollSecton.each(function () {
        var name = $(this).attr('data-scroll');
        var target = $(this).attr('id');
        scrollNav.append('<li><a href="#' + target + '"><span>' + name + '</span></a></li>');
      });
    }

    $(document).on('click', '#scrollNav .nav__list a', function (e) {
      var target = this.hash;
      console.log(target);
      e.preventDefault();
      scrollEvt(target, $('#header .header-bottom').height(), 300);
    });

    $(window).scroll(function () {
      var headerH = $('.header-bottom').height();
      var navH = $('#scrollNav').height();

      $('.sub-cont-section[data-scroll]').each(function (index) {
        if ($(this).offset().top - (headerH + navH + 2) <= $(window).scrollTop()) {
          scrollNav.find('> li').removeClass('active');
          scrollNav.find('> li').eq(index).addClass('active');
        }

        if (index === 0 && $(this).offset().top - (headerH + navH + 10) >= $(window).scrollTop()) {
          scrollNav.find('> li').removeClass('active');
        }
      });
    });
  }

  $(window).on('scroll', function () {
    var scrollEnd = parseInt($(window).scrollTop() + $(window).outerHeight());
    var footerEnd = parseInt($('#footer').offset().top);

    if (scrollEnd >= footerEnd) {
      $('#scrollNav').addClass('hide');
    } else {
      $('#scrollNav').removeClass('hide');
    }
  });

  function scrollEvt(target, offset, time) {
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top - offset,
        },
        time,
      );
    return false;
  }

  $('input[name="eduApply1"').on("change", function () {
    var displayTarget = $(this).parents('td').find('.radio-display-target');
    if($(this).val() === '참여') {
      displayTarget.show();
    } else {
      displayTarget.hide();
    }

    
  })

  /* aos */
  AOS.init({
    once: true,
    duration: 600,
  });
});
