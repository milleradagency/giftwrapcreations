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

  // page-in effects => page divs
  $(".elementor-widget-wrap div").velocity( slideUpIn, {
    stagger: 100,
    drag: true,
  });

  // page-in effects => bg img
  // thx to https://stackoverflow.com/a/32457075 for how to .delay() the
  // .addClass with a queued function
  $(".page-id-448 #wrap").delay( 2500 ).queue(function() {
    $(".page-id-448 #wrap").addClass( "bg-img-in" );
  });

  // page-out effects for certain links
  let logo          = $(".custom-logo-link");
  let menu          = $(".menu-link");

  menu.on("click", function() {
    $(".page-id-448 #wrap").addClass( "bg-img-out" );
    $(".site-footer").removeClass( "border-animation" );
  });

});
