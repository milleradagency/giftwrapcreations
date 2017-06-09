// document.ready

// HOMEPAGE SLIDER
jQuery(function($) {

  let fadeIn        = "transition.fadeIn";
  let fadeOut       = "transition.fadeOut";
  let slideUpIn     = "transition.slideUpIn";
  let slideUpOut    = "transition.slideUpOut";
  let slideDownIn   = "transition.slideDownIn";
  let slideDownOut  = "transition.slideDownOut";
  let slideRightIn  = "transition.slideRightIn";
  let slideRightOut = "transition.slideRightOut";
  let slideLeftIn   = "transition.slideLeftIn";
  let slideLeftOut  = "transition.slideLeftOut";

  let back1         = $("#hpt-back1");
  let next1         = $("#hpt-next1");
  let back2         = $("#hpt-back2");
  let next2         = $("#hpt-next2");
  let back3         = $("#hpt-back3");
  let next3         = $("#hpt-next3");

  let active        = "homepage-tabs-active";
  let one           = $("#homepage-tabs-one");
  let two           = $("#homepage-tabs-two");
  let three         = $("#homepage-tabs-three");

  // prevent default
  $("#homepage-tabs a").click( function( e ) {
    e.preventDefault();
    //do some other stuff here
  });

  // page-in load fx
  $("#homepage-tabs-one").velocity( fadeIn );
  $("#homepage-tabs-one [class^=homepage-tabs-text]").velocity( slideUpIn, { stagger: 300, drag: true, } );
  $("#homepage-tabs-one .homepage-tabs-img").velocity( fadeIn );


  // controls 1
  back1.click( kill1_for3 );
  next1.click( kill1_for2 );

  function kill1_for3() {
    // These multiple animate calls are queued to run one after the other
    $("#homepage-tabs-one [class^=homepage-tabs-text]").velocity( slideLeftOut, { stagger: 100, drag: false, } );
    $("#homepage-tabs-one .homepage-tabs-img").velocity( fadeOut );
    $("#homepage-tabs-one").velocity( fadeOut );
    $("#homepage-tabs-three").velocity( fadeIn );
    $("#homepage-tabs-three [class^=homepage-tabs-text]").velocity( slideRightIn, { delay: 300, stagger: 300, drag: true, } );
    $("#homepage-tabs-three .homepage-tabs-img").velocity( fadeIn );
  }

  function kill1_for2() {
    // These multiple animate calls are queued to run one after the other
    $("#homepage-tabs-one [class^=homepage-tabs-text]").velocity( slideLeftOut, { stagger: 100, drag: false, } );
    $("#homepage-tabs-one .homepage-tabs-img").velocity( fadeOut );
    $("#homepage-tabs-one").velocity( fadeOut );
    $("#homepage-tabs-two").velocity( fadeIn );
    $("#homepage-tabs-two [class^=homepage-tabs-text]").velocity( slideRightIn, { delay: 300, stagger: 300, drag: true, } );
    $("#homepage-tabs-two .homepage-tabs-img").velocity( fadeIn );
  }


  // controls 2
  back2.click( kill2_for1 );
  next2.click( kill2_for3 );

  function kill2_for1() {
    // These multiple animate calls are queued to run one after the other
    $("#homepage-tabs-two [class^=homepage-tabs-text]").velocity( slideLeftOut, { stagger: 100, drag: false, } );
    $("#homepage-tabs-two .homepage-tabs-img").velocity( fadeOut );
    $("#homepage-tabs-two").velocity( fadeOut );
    $("#homepage-tabs-one").velocity( fadeIn );
    $("#homepage-tabs-one [class^=homepage-tabs-text]").velocity( slideRightIn, { delay: 300, stagger: 300, drag: true, } );
    $("#homepage-tabs-one .homepage-tabs-img").velocity( fadeIn );
  }

  function kill2_for3() {
    // These multiple animate calls are queued to run one after the other
    $("#homepage-tabs-two [class^=homepage-tabs-text]").velocity( slideLeftOut, { stagger: 100, drag: false, } );
    $("#homepage-tabs-two .homepage-tabs-img").velocity( fadeOut );
    $("#homepage-tabs-two").velocity( fadeOut );
    $("#homepage-tabs-three").velocity( fadeIn );
    $("#homepage-tabs-three [class^=homepage-tabs-text]").velocity( slideRightIn, { delay: 300, stagger: 300, drag: true, } );
    $("#homepage-tabs-three .homepage-tabs-img").velocity( fadeIn );
  }


  // controls 3
  back3.click( kill3_for2 );
  next3.click( kill3_for1 );

  function kill3_for2() {
    // These multiple animate calls are queued to run one after the other
    $("#homepage-tabs-three [class^=homepage-tabs-text]").velocity( slideLeftOut, { stagger: 100, drag: false, } );
    $("#homepage-tabs-three .homepage-tabs-img").velocity( fadeOut );
    $("#homepage-tabs-three").velocity( fadeOut );
    $("#homepage-tabs-two").velocity( fadeIn );
    $("#homepage-tabs-two [class^=homepage-tabs-text]").velocity( slideRightIn, { delay: 300, stagger: 300, drag: true, } );
    $("#homepage-tabs-two .homepage-tabs-img").velocity( fadeIn );
  }

  function kill3_for1() {
    // These multiple animate calls are queued to run one after the other
    $("#homepage-tabs-three [class^=homepage-tabs-text]").velocity( slideLeftOut, { stagger: 100, drag: false, } );
    $("#homepage-tabs-three .homepage-tabs-img").velocity( fadeOut );
    $("#homepage-tabs-three").velocity( fadeOut );
    $("#homepage-tabs-one").velocity( fadeIn );
    $("#homepage-tabs-one [class^=homepage-tabs-text]").velocity( slideRightIn, { delay: 300, stagger: 300, drag: true, } );
    $("#homepage-tabs-one .homepage-tabs-img").velocity( fadeIn );
  }

});
