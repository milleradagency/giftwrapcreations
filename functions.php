<?php
/**
 * Child theme functions
 *
 * When using a child theme (see http://codex.wordpress.org/Theme_Development
 * and http://codex.wordpress.org/Child_Themes), you can override certain
 * functions (those wrapped in a function_exists() call) by defining them first
 * in your child theme's functions.php file. The child theme's functions.php
 * file is included before the parent theme's file, so the child theme
 * functions would be used.
 *
 * Text Domain: oceanwp
 * @link http://codex.wordpress.org/Plugin_API
 *
 */

// ==============================================================
// Load the parent style.css file
// @link http://codex.wordpress.org/Child_Themes
// ==============================================================
function oceanwp_child_enqueue_parent_style() {
	// Dynamically get version number of the parent stylesheet (lets browsers re-cache your stylesheet when you update your theme)
	$theme   = wp_get_theme( 'OceanWP' );
	$version = $theme->get( 'Version' );

	// ------------------------------
  // # jQuery, jQuery UI, and jQuery Migrate
  wp_register_script( 'jquery-v3', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', null, $version, false );
  wp_enqueue_script( 'jquery-v3' );
  wp_register_script( 'jquery-ui', 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js', null, $version, false );
  wp_enqueue_script( 'jquery-ui' );
  wp_register_script( 'jquery-migrate-v3', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.0.0/jquery-migrate.min.js', null, $version, false );
  wp_enqueue_script( 'jquery-migrate-v3' );

	// ------------------------------
	// # Velocity.js
	wp_enqueue_script( 'velocity', 'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.0/velocity.min.js', array( 'jquery-v3' ), $version, true );

	// ------------------------------
	// # VelocityUI.js
	wp_enqueue_script( 'velocity_ui', 'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.0/velocity.ui.min.js', array( 'velocity' ), $version, true );

	// ------------------------------
	// # Load the stylesheet
  wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( 'oceanwp-style' ), $version );

	// ------------------------------
	// # Global Custom Scripts
	wp_enqueue_script( 'dgwc', get_stylesheet_directory_uri() . '/assets/js/dgwc.js', array( 'velocity_ui' ), $version, true );

	// ------------------------------
	// # App.js
	wp_enqueue_script( 'appJS', get_stylesheet_directory_uri() . '/assets/js/app.js', array( 'velocity_ui' ), $version, true );

	// ------------------------------
  // # PAGE => Homepage
	if ( is_page( array( 'Elementor', 'Home' ) ) ) {
  // if ( is_page( 'Home' ) ) {
		// sudoSlider styles
    // wp_enqueue_style( 'sudoSlider', get_stylesheet_directory_uri() . '/assets/plugins/sudoslider/css/style.css', $version );
    // sudoSlider scripts
    // wp_enqueue_script( 'sudoSlider', get_stylesheet_directory_uri() . '/assets/plugins/sudoslider/js/jquery.sudoSlider.min.js', array( 'jquery' ), $version, true );
		// sudoSlider init script
    wp_enqueue_script( 'homepage-custom', get_stylesheet_directory_uri() . '/assets/js/homepage.js', array( 'jquery-slick' ), $version, true );
  }

	// ------------------------------
  // # PAGE => Elementor
  if ( is_page( 'Elementor' ) ) {
		// sudoSlider init script
    wp_enqueue_script( 'meetAnita-custom', get_stylesheet_directory_uri() . '/assets/js/meetAnita.js', array( 'velocity_ui' ), $version, true );
		wp_enqueue_script( 'services-custom', get_stylesheet_directory_uri() . '/assets/js/services.js', array( 'velocity_ui' ), $version, true );
		wp_enqueue_script( 'contact-custom', get_stylesheet_directory_uri() . '/assets/js/contact.js', array( 'velocity_ui' ), $version, true );
  }

	// ------------------------------
  // # PAGE => Meet Anita
  if ( is_page( 'Meet Anita' ) ) {
		// sudoSlider init script
    wp_enqueue_script( 'meetAnita-custom', get_stylesheet_directory_uri() . '/assets/js/meetAnita.js', array( 'velocity_ui' ), $version, true );
  }

	// ------------------------------
  // # PAGE => Services
  if ( is_page( 'Services' ) ) {
		// sudoSlider init script
    wp_enqueue_script( 'services-custom', get_stylesheet_directory_uri() . '/assets/js/services.js', array( 'velocity_ui' ), $version, true );
  }

	// ------------------------------
  // # PAGE => Contact
  if ( is_page( 'Contact' ) ) {
		// sudoSlider init script
    wp_enqueue_script( 'contact-custom', get_stylesheet_directory_uri() . '/assets/js/contact.js', array( 'velocity_ui' ), $version, true );
  }

}
add_action( 'wp_enqueue_scripts', 'oceanwp_child_enqueue_parent_style' );



// ==============================================================
// Load uikit + the custom minified & mapped stylesheet
// ==============================================================
function dgwc_css() {
	// Dynamically get version number of the parent stylesheet (lets browsers re-cache your stylesheet when you update your theme)
	$theme   = wp_get_theme( 'OceanWP' );
	$version = $theme->get( 'Version' );

	// ------------------------------
	// UIkit
	// https://getuikit.com
	wp_enqueue_style( 'uikit', 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.24/css/uikit.min.css', $version );
	wp_enqueue_script( 'uikit', 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.24/js/uikit.min.js', array( 'jquery-v3' ), $version, true );
	wp_enqueue_script( 'uikit-icons', 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.24/js/uikit-icons.min.js', array( 'uikit' ), $version, true );

	// ------------------------------
	// Load the custom stylesheet
  wp_enqueue_style( 'main', get_stylesheet_directory_uri() . '/assets/css/main.css',
		array(
			// 'child-style',
			// 'simple-line-icons',
			// 'oceanwp-google-font-lato',
			// 'oceanwp-google-font-open-sans',
			// 'oceanwp-google-font-montserrat',
			// 'stylepress-theme-addons',
			// 'stylepress-email',
			// 'stylepress-nav-menu',
			// 'stylepress-formstyles',
			// 'stylepress-tooltips',
			// 'dtbaker_page_slider',
			// 'oe-widgets-style',
			'uikit',
		), $version, 'all' );

}
add_action( 'wp_enqueue_scripts', 'dgwc_css', 2000 );
