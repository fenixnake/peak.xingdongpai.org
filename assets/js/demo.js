/**
 * demo.js
 * https://reqing.org
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2018, cooerson
 * https://reqing.org
 */

$('.dot').on('click', function(e) {
  
  e.preventDefault();
  // get current slide
  var current = $('.ci-active').data('slide'),
  // get button data-slide
  next = $(this).data('slide');
  // remove and add active class to this item
  $('.dot').removeClass('active');
  $(this).addClass('active');

  if (current === next) {
    return false;
  } else {
    $('.ci-slider-holder').find('.ci-slider-container[data-slide=' + next + ']').addClass('pre-active');
    $('.ci-active').addClass('animate--end');
    setTimeout(function() {
      $('.pre-active').removeClass('animate--start pre-active').addClass('ci-active');
      $('.animate--end').addClass('animate--start').removeClass('animate--end ci-active');
    }, 800);
  }

});
