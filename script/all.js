$(document).ready(function () {
    // menu效果
    $('.menu-hamburgerIcon').on('click', function (e) {
      e.preventDefault();
      $('.nav').toggleClass('menu-show');
    });

    $('.menu li').click(function (e) { 
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });
  });