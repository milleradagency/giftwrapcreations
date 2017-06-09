jQuery(document).ready(function($) {

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

  // page-in effects
  $(".site-footer").delay( 1000 ).velocity( fadeIn );
  $(".site-footer").delay( 3000 ).queue(function() {
    $(".site-footer").addClass( "border-animation" );
  });


  // page-out effects for certain links
  let logo          = $(".custom-logo-link");
  let menu          = $(".menu-link");

  menu.on("click", function() {

    // slideDownOut the sections of the page
    $(".elementor-section-wrap section").velocity( slideDownOut, {
      stagger: 100,
      drag: true
    });

    // fadeOut the footer
    $("#copyright", ".site-footer").velocity( fadeOut );
    $(".site-footer").removeClass( "border-animation" );

  });

});
