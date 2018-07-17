$(document).ready(function(){
  $('.nav-button').click(function(){
    $('.nav-button').toggleClass('change');
  });
  $(window).scroll(function(){
  let position = $(this).scrollTop();
  if (position >= 200) {
    $('.nav-menu').addClass('custom-navbar');
  } else {$('.nav-menu').removeClass('custom-navbar');
  }
});
$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 650){
      $('.ae-img').addClass('fromLeft');
      $('.hobbies-text').addClass('fromRight');
    } else{
      $('.ae-img').removeClass('fromLeft');
      $('.hobbies-text').removeClass('fromRight');
    }
  });
});
