$(function () {
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
});
