$(function(){

  var grads = $('.grad').children();

  //Handles nav toggle color change
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll > 600) {
      $('.nav-toggle').css('color', 'white');
      $('.caption').css('display', 'none');
    }

    if( scroll > 200){
      var scrollness = scroll/200;
      grads[0].css('height', scrollness);
    }
    // if(scroll > 300){
    //   for( var i = 0 ; i < grads.length ; i++ ){
    //     var grad = $('.grad div:nth-child(' + i + ')');
    //     grad.css('height', '2vh');
    //   }
    // }
    else {
      $('.nav-toggle').css('color', 'black');
      $('.caption').css('display', 'block');
      var grad1 = $('.grad div:nth-child(1)');

      for( var i = 0 ; i < grads.length ; i++ ){
        var grad = $('.grad div:nth-child(' + i + ')')
        grad.removeAttr('style');
      }

    }

  });

  //Initialize wow.js
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       false,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)

    }
  );
  wow.init();

  //Initialize slider
  $('.portfolio').slick({
    dots: true,
    speed: 500,
    prevArrow: '<i class="fa fa-3x fa-chevron-left slider-control"></i>',
    nextArrow: '<i class="fa fa-3x fa-chevron-right slider-control"></i>'
  });

  //HANDLES NAVIGATION TOGGLING
  $('.nav-toggle-wrapper').on('click', '.nav-toggle', function(e){
    $('.nav-toggle').toggleClass('hidden');
    $('.page-content').toggleClass('page-content-blurred');
    $('.side-nav').toggleClass('sidenav-open');
    $('i.fa-close').removeClass('hidden');
  });
  $('.side-nav').on('click', 'i.fa-close', function(e){
    $('i.fa-close').addClass('hidden');
    $('.side-nav').toggleClass('sidenav-open');
    $('.nav-toggle').toggleClass('hidden');
    $('.page-content').toggleClass('page-content-blurred');
  });


  //HANDLES SCROLL TO NAVIGATION
  $('.side-nav ul').on('click', 'a.scroll-link', function(e){
    e.preventDefault();
    var sec = $(this).attr('data-link');
    sec = '.section-' + sec + ' .content-wrapper';
    $('i.fa-close').addClass('hidden');
    $('.side-nav').toggleClass('sidenav-open');
    $('.nav-toggle').toggleClass('hidden');
    $('.page-content').toggleClass('page-content-blurred');
    $('html, body').animate({
      scrollTop: ($(sec).offset().top
    )}, 800);
    return false;
  });


  $('body').on('click', 'i.fa-chevron-down', function(e){
    e.preventDefault();
    var sec = $(this).attr('data-link');
    sec = '.section-' + sec + ' .content-wrapper';
    $('html, body').animate({
      scrollTop: ($(sec).offset().top
    )}, 800);
    return false;
  });

  $('.side-nav').on('click', 'h1', function(e){
    $('i.fa-close').addClass('hidden');
    $('.side-nav').toggleClass('sidenav-open');
    $('.nav-toggle').toggleClass('hidden');
    $('.page-content').toggleClass('page-content-blurred');
    $('html, body').animate({
      scrollTop: ($('.header').offset().top
    )}, 800);
  });
});
