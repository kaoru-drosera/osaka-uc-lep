console.log('hello,gulp.lol');

$(function(){

  var $mainlink = $(".main-link-wrap-li, .sub-link.nyusi");
  var $sublinkwrap = $(".sub-link-wrap");
  var $nshsublink = $('.sub-link.nyusi, .nyusi-sublink-wrap');
  var $nshsublinkparent = $('.sub-link-wrap.nyusi');
  var $nshsublinkwrap = $(".nyusi-sublink-wrap");
  var $fire = $(".fire");

  $mainlink.mouseover(function(){
    $(this).find($sublinkwrap).addClass("fire");
  }).mouseout(function(){
    $(this).find($sublinkwrap).removeClass("fire");
  });

  $nshsublink.mouseover(function(){
    console.log("wwww");
    $(this).parents($nshsublinkparent).find($nshsublinkwrap).addClass("fire");
  }).mouseout(function(){
    console.log("………");
    $(this).parents($nshsublinkparent).find($nshsublinkwrap).removeClass("fire");
  });


  $(".burg").on("click",function(){
    $('.pty').toggleClass("active");
    $(this).parents().find('.header').toggleClass("active");
    $('html').toggleClass("htmlfire");
  });
  $(".closebtn").on("click",function(){
    $('.pty').removeClass("active");
    $(this).parents().find('.header').removeClass("active");
    $('html').removeClass("htmlfire");
  });


  // swiper設定

  var mySwiper = new Swiper('.herotop-sw-container', {
    // Optional parameters
    loop: true,
    effect: 'fade',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
    ,
    autoplay:{
      delay: 6000,
      desableOnInteraction:true
    },

  });

  // $(window).resize(function(){
  //   if(window.innerWidth > 767){
  //     mySwiper.params.effect = 'fade';
  //   } else {
  //     mySwiper.params.effect = 'slide';
  //   }
  //   var prm = mySwiper.params;
  //   mySwiper.destroy(true,true);
  //   mySwiper = new Swiper('.swiper-container',prm);
  // });



});



$(function(){
  // スムーズスクロール
  $('a[href^="#"]').click(function(){

    // スクロールの速度
    var speed = 400; //ミリ秒。
    // アンカーの値を取得
    var href = $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html':href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーズスクロール
    $('body,html').animate({scrollTop:position},speed,'swing');
    return false;

  });





});


  $(window).on("scroll",function(){
    scrollHeight = $(document).height(); //ドキュメントの高さ
    scrollPosition = $(window).height() + $(window).scrollTop(); //現在地
    footHeight = $(".footer").innerHeight(); //footerの高さ（＝止めたい位置）
    console.log(scrollHeight);
    console.log(scrollPosition);
    console.log(footHeight);
    if ( scrollHeight - scrollPosition  <= footHeight ) { //ドキュメントの高さと現在地の差がfooterの高さ以下になったら
       // sprint_r(scrollHeight);
       // sprint_r(scrollPosition);
       // sprint_r(footHeight);
        $("#topBtn").css({
            "position":"absolute", //pisitionをabsolute（親：wrapperからの絶対値）に変更
            "bottom": footHeight //下からfooterの高さ + 20px上げた位置に配置
        });
    } else { //それ以外の場合は
        $("#topBtn").css({
            "position":"fixed", //固定表示
            "bottom": "0" //下から20px上げた位置に
        });
    }
// https://ss-complex.com/work_top_back_button/
// https://yuyauver98.me/footer-stop-btn/
  });

  $(function(){
    $('.schedlue-modal-btn').click(function(){
      var imgSrc = $(this).children().attr('src');
      $('.schedule-modal-img').attr('src',imgSrc);
      $('.schedule-modal').fadeIn();
      $('body,html').css('overflow-y','hidden');
      return false
    });
    $('.schedule-modal').click(function(){
      $('.schedule-modal').fadeOut();
      $('body,html').css('overflow-y','visible');
      return false
    });
    $('.schedule-modal-img').click(function(){
      $('.schedule-modal').toggleClass('plus');
      return false
    });
  });


;
