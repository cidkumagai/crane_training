$(function(){
  $('.white1').click(function(){
    $(this).prev().find('.index_top_pic_img1').removeClass('active');
    $(this).next().next().next().find('.index_top_pic_img2').addClass('active');
    $(this).prev('.first').removeClass('on');
    $('.second').addClass('on');
    $('.black_left2').addClass('inversion');
    $(this).removeClass('arrow_on');
    $('.black_left2').addClass('arrow_on');
    $('.black_right2').addClass('arrow_on');
  });
  $('.black_left2').click(function(){
    $('.second').next().next().find('.index_top_pic_img2').removeClass('active');
    $('.first').find('.index_top_pic_img1').addClass('active');
    $('.second').removeClass('on');
    $('.first').addClass('on');
    $('.black_left2').removeClass('inversion');
    $(this).removeClass('arrow_on');
    $('.black_right2').removeClass('arrow_on');
    $('.white1').addClass('arrow_on');
    $('.black_left2').removeClass('left_on');
  });
  $('.black_right2').click(function(){
    $('.second').find('.index_top_pic_img2').removeClass('active');
    $('.third').find('.index_top_pic_img3').addClass('active');
    $('.second').removeClass('on');
    $('.third').addClass('on');
    $('.black_left2').removeClass('inversion');
    $(this).removeClass('arrow_on');
    $('.black_left2').removeClass('arrow_on');
    $('.black_left3').addClass('arrow_on');
    $('.black_right3').addClass('arrow_on');
    $('.black_left2').removeClass('left_on');
  });
  $('.black_left3').click(function(){
    $('.third').find('.index_top_pic_img3').removeClass('active');
    $('.second').find('.index_top_pic_img2').addClass('active');
    $('.third').removeClass('on');
    $('.second').addClass('on');
    $(this).removeClass('arrow_on');
    $('.black_right3').removeClass('arrow_on');
    $('.black_left2').addClass('arrow_on');
    // $('.black_left2').addClass('inversion');
    $('.black_left2').addClass('left_on');
    $('.black_right2').addClass('arrow_on');
  });
  $('.black_right3').click(function(){
    $(this).next().find('.index_top_pic_img3').removeClass('active');
    $('.forth').find('.index_top_pic_img4').addClass('active');
    $('.third').removeClass('on');
    $('.forth').addClass('on');
    $(this).removeClass('arrow_on');
    $('.black_left3').removeClass('arrow_on');
    $('.white_left4').addClass('arrow_on');
    $('.white_right4').addClass('arrow_on');
  });
  $('.white_left4').click(function(){
    $(this).next().next().find('.index_top_pic_img4').removeClass('active');
    $('.index_top_pic_img3').addClass('active');
    $('.forth').removeClass('on');
    $(this).prev().addClass('on');
    $(this).removeClass('arrow_on');
    $('.white_right4').removeClass('arrow_on');
    $('.black_left3').addClass('arrow_on');
    $('.black_right3').addClass('arrow_on');
  });
  $('.white_right4').click(function(){
    $('.forth').find('.index_top_pic_img4').removeClass('active');
    $('.first').find('.index_top_pic_img1').addClass('active');
    $('.forth').removeClass('on');
    $('.first').addClass('on');
    $(this).removeClass('arrow_on');
    $('.white_left4').removeClass('arrow_on');
    $('.white1').addClass('arrow_on');
  });
});

$(function(){
  $('.header_sp_hamburger').click(function(){
    $(this).parent().parent().find('.header_sp_menu').addClass('menu_active');
    $(this).parent().parent().find('.header_sp_menu_item').addClass('first_on');
    $(this).parent().parent().find('.background').addClass('back_on');
  });
  $('.background').click(function(){
    $(this).parent().find('.header_sp_menu').removeClass('menu_active');
    $(this).parent().find('.header_sp_menu_item').removeClass('first_on');
    $(this).parent().find('.header_sp_menu_products').removeClass('menu_on');
    $(this).parent().find('.header_sp_menu_products').removeClass('menu_on2');
    $(this).parent().find('.header_sp_menu_products_item').removeClass('first_on');
    $(this).parent().find('.header_sp_menu_products_border').removeClass('border_on');
    $(this).parent().find('.header_sp_menu_products_skin').removeClass('second_on');
    $(this).parent().find('.second').removeClass('second_on2');
    $(this).removeClass('back_on');
    $(this).parent().find('.products').removeClass('rotate');
    $(this).parent().find('.skin').removeClass('rotate');
  });
  $('.products').click(function(){
    $(this).parent().parent().find('.header_sp_menu_products').toggleClass('menu_on');
    $(this).parent().parent().find('.header_sp_menu_products').removeClass('menu_on2');
    $(this).parent().parent().find('.header_sp_menu_products_border').toggleClass('border_on');
    $(this).parent().parent().find('.header_sp_menu_products_item').toggleClass('first_on');
    $(this).toggleClass('rotate');
    $(this).parent().parent().find('.skin').removeClass('rotate');
    $(this).parent().parent().find('.header_sp_menu_products_skin').removeClass('second_on');
    $(this).parent().parent().find('.second').removeClass('second_on2');
  });
  $('.skin').click(function(){
    $(this).parent().parent().find('.header_sp_menu_products_skin').toggleClass('second_on');
    $(this).parent().parent().parent().find('.header_sp_menu_products').toggleClass('menu_on2');
    $(this).parent().parent().find('.second').toggleClass('second_on2');
    $(this).toggleClass('rotate');
  });
});