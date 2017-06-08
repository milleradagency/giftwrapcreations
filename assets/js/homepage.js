jQuery(document).ready(function($) {

  // Slick Slider
  // http://kenwheeler.github.io/slick/
  $('.homepage-slider').slick({
    accessibility:  true,       // Enables tabbing and arrow key navigation
    autoplay:       false,      // Enables Autoplay
    autoplaySpeed:  3000,       // Autoplay Speed in milliseconds
    arrows:         false,      // Prev/Next Arrows
    draggable:      true,       // Enable mouse dragging
    infinite:       false,      // Infinite loop sliding
    mobileFirst:    true,       // Responsive settings use mobile first calculation
    pauseOnHover:   true,       // Pause Autoplay On Hover
    slidesToShow:   1,          // # of slides to show
    slidesToScroll: 1,          // # of slides to scroll
    speed:          600,        // Slide/Fade animation speed
    swipe:          true        // Enable swiping
  });

});
