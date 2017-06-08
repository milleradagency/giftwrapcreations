jQuery(document).ready(function($) {

  // page-in effects
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

  $(".elementor-row h1").velocity( fadeIn );

  $(".elementor-row p").velocity( fadeIn, {
    stagger: 100,
    drag: true,
  });

  $(".elementor-section-wrap .elementor-flip-box").velocity( slideUpIn, {
    stagger: 300,
    drag: true,
  });

});
