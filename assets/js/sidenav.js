$(function(){

  'use strict';

  //Initialize wow.js
  var wow = new WOW(
    {
      boxClass:     'wow',
      animateClass: 'animated',
      offset:       100,
      mobile:       false,
      live:         true,
    }
  );
  wow.init();

  //Initialize slick.js slider
  $('.portfolio').slick({
    dots: true,
    speed: 500,
    prevArrow: '<i class="fa fa-3x fa-chevron-left slider-control"></i>',
    nextArrow: '<i class="fa fa-3x fa-chevron-right slider-control"></i>'
  });

  // Cache jQuery elements
  var grads = $('.grad').children();
  var $navToggle = $('nav-toggle'),
      $caption = $('.caption'),
      $navToggleWrapper = $('.nav-toggle-wrapper'),
      $pageContent = $('.page-content'),
      $sideNav = $('.side-nav'),
      $menuCloseBtn = $('i.fa-close'),
      $navToggle = $('.nav-toggle'),
      $body = $('body');

  // Menu functions
  function toggleMenu () {
    $pageContent.toggleClass('page-content-blurred');
    $sideNav.toggleClass('sidenav-open');
    $menuCloseBtn.toggleClass('hidden')
    $navToggle.toggleClass('hidden');
    $('html, body').toggleClass('no-scroll');
  }

  function navigateToSection (section) {
    $('html, body').animate({
      scrollTop: ($(section).offset().top
    )}, 800);
  }

  function closeMenu() {
    $menuCloseBtn.addClass('hidden');
    $sideNav.toggleClass('sidenav-open');
    $navToggle.toggleClass('hidden');
    $pageContent.toggleClass('page-content-blurred');
  }

  // Event Bindings
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll > 600) {
      $navToggle.css('color', 'white');
      $caption.css('display', 'none');
    } else if ( scroll > 200) {
        // DO NOTHING
        //// TODO, add parallax style scrolling for gradient bars
    } else {
      // Change nav button color to black if Scroll is less than 600
      $navToggle.css('color', 'black');
      $caption.css('display', 'block');
    }
  });

  //HANDLES NAVIGATION TOGGLING
  $navToggleWrapper.on('click', '.nav-toggle', function(e){
    toggleMenu();
  });
  $sideNav.on('click', 'i.fa-close', function(e){
    toggleMenu();
  });

  // HANDLES SCROLL TO NAVIGATION
  $sideNav.on('click', 'a.scroll-link', function(e){
    e.preventDefault();
    var sec = $(this).attr('data-link');
    sec = '.section-' + sec + ' .content-wrapper';
    closeMenu();
    navigateToSection(sec);
    return false;
  });

  // Click on Name in Navigation
  $sideNav.on('click', 'h1', function(e){
    closeMenu();
    navigateToSection('.header')
  });

  // On click on down arrow
  $body.on('click', 'i.fa-chevron-down', function(e){
    e.preventDefault();
    var sec = $(this).attr('data-link');
    sec = '.section-' + sec + ' .content-wrapper';
    navigateToSection(sec);
    return false;
  });

});
