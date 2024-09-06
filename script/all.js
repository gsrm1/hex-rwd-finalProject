$(document).ready(function () {
    // menu效果
    $('.menu-hamburgerIcon').on('click', function (e) {
      e.preventDefault();
      $('.nav').toggleClass('menu-show');
    });

    // goToTop icon 使用捲動百分比觸發按鈕
    function showBtnCondition(){
    const scrollTop = $(this).scrollTop();
    const docHeight = $(document).height();
    const windowHeight = $(window).height();
    const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;
    if (scrollPercent > 50){
      $('#goToTop').fadeIn();
    }
    else{
      $('#goToTop').fadeOut();
    }
  }
    $(window).scroll(showBtnCondition);

    $('#goToTop').click(function (e) { 
      $('html,body').animate({scrollTop: 0}, 800);
    });

    // goToTop icon 使用.css改變樣式
    $('#goToTop').on('mouseover', function () {
      $('.fa-circle-up').css('color', 'red');
    });
    
    $('#goToTop').on('mouseleave', function () {
      $('.fa-circle-up').css('color', 'orange');
    });

  });