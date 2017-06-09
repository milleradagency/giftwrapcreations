// ==============================================================
//
// # GLOBAL VARIABLES
//
// ==============================================================

// -----------------------------------------
// ## velocityUI.js transition variables
const fadeIn        = "transition.fadeIn";
const fadeOut       = "transition.fadeOut";
const slideUpIn     = "transition.slideUpIn";
const slideUpOut    = "transition.slideUpOut";
const slideDownIn   = "transition.slideDownIn";
const slideDownOut  = "transition.slideDownOut";
const slideRightIn  = "transition.slideRightIn";
const slideRightOut = "transition.slideRightOut";
const slideLeftIn   = "transition.slideLeftIn";
const slideLeftOut  = "transition.slideLeftOut";




// ==============================================================
//
// # HOMEPAGE SLIDER
//
// ==============================================================
jQuery(function($) {

  // -----------------------------------------
  // ## HOMEPAGE SLIDER - local variables
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

  // -----------------------------------------
  // ## HOMEPAGE SLIDER - prevent default
  $("#homepage-tabs a").click( function( e ) {
    e.preventDefault();
  });

  // -----------------------------------------
  // ## HOMEPAGE SLIDER - page-in load fx
  $("#homepage-tabs-one").velocity( fadeIn );
  $("#homepage-tabs-one [class^=homepage-tabs-text]").velocity( slideUpIn, { stagger: 300, drag: true, } );
  $("#homepage-tabs-one .homepage-tabs-img").velocity( fadeIn );


  // -----------------------------------------
  // ## HOMEPAGE SLIDER - controls & functions for tab one
  back1.click( kill1_for3 );
  next1.click( kill1_for2 );

  function kill1_for3() {
    // These multiple animate calls are queued to run one after the other
    $("#homepage-tabs-one [class^=homepage-tabs-text]").velocity( slideLeftOut, { stagger: 100, drag: false, } );
    $("#homepage-tabs-one .homepage-tabs-img").velocity( fadeOut );
    $("#homepage-tabs-one").velocity( fadeOut );
      console.log( "Tab-One killed." );
    $("#homepage-tabs-three").velocity( fadeIn );
    $("#homepage-tabs-three [class^=homepage-tabs-text]").velocity( slideRightIn, { delay: 300, stagger: 300, drag: true, } );
    $("#homepage-tabs-three .homepage-tabs-img").velocity( fadeIn );
      console.log( "Tab-Three loaded." );
  }

  function kill1_for2() {
    // These multiple animate calls are queued to run one after the other
    $("#homepage-tabs-one [class^=homepage-tabs-text]").velocity( slideLeftOut, { stagger: 100, drag: false, } );
    $("#homepage-tabs-one .homepage-tabs-img").velocity( fadeOut );
    $("#homepage-tabs-one").velocity( fadeOut );
      console.log( "Tab-One killed." );
    $("#homepage-tabs-two").velocity( fadeIn );
    $("#homepage-tabs-two [class^=homepage-tabs-text]").velocity( slideRightIn, { delay: 300, stagger: 300, drag: true, } );
    $("#homepage-tabs-two .homepage-tabs-img").velocity( fadeIn );
      console.log( "Tab-Two loaded." );
  }


  // -----------------------------------------
  // ## HOMEPAGE SLIDER - controls & functions for tab two
  back2.click( kill2_for1 );
  next2.click( kill2_for3 );

  function kill2_for1() {
    // These multiple animate calls are queued to run one after the other
    $("#homepage-tabs-two [class^=homepage-tabs-text]").velocity( slideLeftOut, { stagger: 100, drag: false, } );
    $("#homepage-tabs-two .homepage-tabs-img").velocity( fadeOut );
    $("#homepage-tabs-two").velocity( fadeOut );
      console.log( "Tab-Two killed." );
    $("#homepage-tabs-one").velocity( fadeIn );
    $("#homepage-tabs-one [class^=homepage-tabs-text]").velocity( slideRightIn, { delay: 300, stagger: 300, drag: true, } );
    $("#homepage-tabs-one .homepage-tabs-img").velocity( fadeIn );
      console.log( "Tab-One loaded." );
  }

  function kill2_for3() {
    // These multiple animate calls are queued to run one after the other
    $("#homepage-tabs-two [class^=homepage-tabs-text]").velocity( slideLeftOut, { stagger: 100, drag: false, } );
    $("#homepage-tabs-two .homepage-tabs-img").velocity( fadeOut );
    $("#homepage-tabs-two").velocity( fadeOut );
      console.log( "Tab-Two killed." );
    $("#homepage-tabs-three").velocity( fadeIn );
    $("#homepage-tabs-three [class^=homepage-tabs-text]").velocity( slideRightIn, { delay: 300, stagger: 300, drag: true, } );
    $("#homepage-tabs-three .homepage-tabs-img").velocity( fadeIn );
      console.log( "Tab-Three loaded." );
  }


  // -----------------------------------------
  // ## HOMEPAGE SLIDER - controls & functions for tab three
  back3.click( kill3_for2 );
  next3.click( kill3_for1 );

  function kill3_for2() {
    // These multiple animate calls are queued to run one after the other
    $("#homepage-tabs-three [class^=homepage-tabs-text]").velocity( slideLeftOut, { stagger: 100, drag: false, } );
    $("#homepage-tabs-three .homepage-tabs-img").velocity( fadeOut );
    $("#homepage-tabs-three").velocity( fadeOut );
      console.log( "Tab-Three killed." );
    $("#homepage-tabs-two").velocity( fadeIn );
    $("#homepage-tabs-two [class^=homepage-tabs-text]").velocity( slideRightIn, { delay: 300, stagger: 300, drag: true, } );
    $("#homepage-tabs-two .homepage-tabs-img").velocity( fadeIn );
      console.log( "Tab-Two loaded." );
  }

  function kill3_for1() {
    // These multiple animate calls are queued to run one after the other
    $("#homepage-tabs-three [class^=homepage-tabs-text]").velocity( slideLeftOut, { stagger: 100, drag: false, } );
    $("#homepage-tabs-three .homepage-tabs-img").velocity( fadeOut );
    $("#homepage-tabs-three").velocity( fadeOut );
      console.log( "Tab-Three killed." );
    $("#homepage-tabs-one").velocity( fadeIn );
    $("#homepage-tabs-one [class^=homepage-tabs-text]").velocity( slideRightIn, { delay: 300, stagger: 300, drag: true, } );
    $("#homepage-tabs-one .homepage-tabs-img").velocity( fadeIn );
      console.log( "Tab-One loaded." );
  }

}); // end homepage slider
