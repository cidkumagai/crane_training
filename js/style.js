$(function(){  
  $('.index_top_pic li').hide(); //.fade liの要素をすべてhideする  
  $('.index_top_pic li:first').addClass("active").show();
}); 
$(function(){
  $('.white_left1').click(function(){
    $('.first').find('.index_top_pic_img1').fadeOut(1500);
    $('.forth').find('.index_top_pic_img4').fadeIn(1500);
    $(this).removeClass('arrow_on');
    $('.white_right1').removeClass('arrow_on');
    $('.white_left4').addClass('arrow_on');
    $('.white_right4').addClass('arrow_on');
    // $(this).removeClass('lef_on');
    // $(this).removeClass('inversion');
    // $('.white_right1').removeClass('right_on');
    // $('.white_right1').removeClass('inversion');
    // $('.white_left4').addClass('inversion2');
    // $('.white_right4').addClass('right_on');
  });
  $('.white_right1').click(function(){
    $('.first').find('.index_top_pic_img1').fadeOut(1500);
    $('.second').find('.index_top_pic_img2').fadeIn(1500);
    $(this).removeClass('arrow_on');
    $('.white_left1').removeClass('arrow_on');
    $('.black_left2').addClass('arrow_on');
    $('.black_right2').addClass('arrow_on');
    // $(this).removeClass('right_on');
    // $(this).removeClass('inversion2');
    // $('.white_left1').removeClass('right_on');
    // $('.white_lef1').removeClass('inversion2');
    // $('.black_left2').addClass('inversion');
    // $('.black_right2').addClass('right_on');
  });
  $('.black_left2').click(function(){
    $('.first').find('.index_top_pic_img1').addClass('active');
    $('.second').removeClass('active');
    $('.second').find('.index_top_pic_img2').fadeOut(1500);
    $('.first').find('.index_top_pic_img1').fadeIn(1500);
    $(this).removeClass('arrow_on');
    $('.black_right2').removeClass('arrow_on');
    $('.white_right1').addClass('arrow_on');
    $('.white_left1').addClass('arrow_on');
    // $(this).removeClass('inversion');
    // $('.black_right2').removeClass('inversion2');
    // $('.black_left2').removeClass('left_on');
    // $('.white_right1').addClass('inversion2');
    // $('.white_left1').addClass('left_on');
  });
  $('.black_right2').click(function(){
    $('.second').find('.index_top_pic_img2').fadeOut(1500);
    $('.third').find('.index_top_pic_img3').fadeIn(1500);
    $(this).removeClass('arrow_on');
    $('.black_left2').removeClass('arrow_on');
    $('.black_left3').addClass('arrow_on');
    $('.black_right3').addClass('arrow_on');
    // $('.black_left2').removeClass('inversion');
    // $(this).removeClass('right_on');
    // $('.black_left3').addClass('inversion');
    // $('.black_right3').addClass('right_on');
    // $('.black_left2').removeClass('left_on');
  });
  $('.black_left3').click(function(){
    $('.third').find('.index_top_pic_img3').fadeOut(1500);
    $('.second').find('.index_top_pic_img2').fadeIn(1500);
    $(this).removeClass('arrow_on');
    $('.black_right3').removeClass('arrow_on');
    $('.black_left2').addClass('arrow_on');
    $('.black_right2').addClass('arrow_on');
    // $(this).removeClass('inversion');
    // $(this).removeClass('left_on');
    // $('.black_right3').removeClass('right_on');
    // $('.black_right3').removeClass('inversion2');
    // $('.black_right2').addClass('inversion2');
    // $('.black_left2').addClass('left_on');
  });
  $('.black_right3').click(function(){
    $(this).next().find('.index_top_pic_img3').fadeOut(1500);
    $('.forth').find('.index_top_pic_img4').fadeIn(1500);
    $(this).removeClass('arrow_on');
    $('.black_left3').removeClass('arrow_on');
    $('.white_left4').addClass('arrow_on');
    $('.white_right4').addClass('arrow_on');
    // $(this).removeClass('right_on');
    // $('.black_left3').removeClass('inversion');
    // $('.white_left4').addClass('inversion');
    // $('.white_right4').addClass('right_on');
  });
  $('.white_left4').click(function(){
    $(this).next().next().find('.index_top_pic_img4').fadeOut(1500);
    $('.index_top_pic_img3').fadeIn(1500);
    $(this).removeClass('arrow_on');
    $('.white_right4').removeClass('arrow_on');
    $('.black_left3').addClass('arrow_on');
    $('.black_right3').addClass('arrow_on');
    // $(this).removeClass('inversion');
    // $('.black_left3').addClass('left_on');
    // $('.white_right4').removeClass('right_on');
    // $('.black_right3').addClass('inversion2');
  });
  $('.white_right4').click(function(){
    $('.forth').find('.index_top_pic_img4').fadeOut(1500);
    $('.first').find('.index_top_pic_img1').fadeIn(1500);
    $(this).removeClass('arrow_on');
    $('.white_left4').removeClass('arrow_on');
    $('.white_right1').addClass('arrow_on');
    $('.white_left1').addClass('arrow_on');
    // $(this).removeClass('right_on');
    // $('.white_left4').removeClass('inversion');
    // $('.white_right1').addClass('right_on');
    // $('.white_left1').addClass('inversion2');
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



