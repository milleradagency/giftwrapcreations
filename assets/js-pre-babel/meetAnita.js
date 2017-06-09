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

  $(".uk-box-shadow-medium").delay( 600 ).velocity( fadeIn );

  $("#anitaBio p").velocity( slideUpIn, {
    stagger: 300,
    drag: true,
  });

  // page-out effects for certain links
  let logo          = $(".custom-logo-link");
  let menu          = $(".menu-link");

  menu.on("click", function() {
    $("#meetAnita").velocity( fadeOut );
  });

});
