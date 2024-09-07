$(document).ready(function () {
    // RWD menu展開效果
    $('.menu-hamburgerIcon').on('click', function (e) {
      e.preventDefault();
      $('.nav').toggleClass('menu-show');
    });
    
    // myFav-icon (fontAwesome偽元素)點擊切換icon
    $('.myFav-icon i').click(function (e) { 
      e.preventDefault();
      $(this).toggleClass('fa-brands fa-gratipay');
    });
   
    // goToTop icon 使用捲動百分比顯示按鈕
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
    // goToTop icon 點擊後捲動至頂端
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