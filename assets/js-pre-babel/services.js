jQuery(document).ready(function($) {

  // page-in effects
  let fadeIn        = "transition.fadeIn";
  let slideUpIn     = "transition.slideUpIn";

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
