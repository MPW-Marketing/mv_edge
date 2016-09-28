<?php
/**
 * MV Edge functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package MV_Edge
 */

if ( ! function_exists( 'mv_edge_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function mv_edge_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on MV Edge, use a find and replace
	 * to change 'mv_edge' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'mv_edge', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary', 'mv_edge' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'mv_edge_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
    
     // Enable support for Custom Logo   
    add_theme_support( 'custom-logo', array(
	   'height'      => 67,
	   'width'       => 240,
	   'flex-height' => true,
	   'flex-width'  => true,
    ) );
}
endif;
add_action( 'after_setup_theme', 'mv_edge_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function mv_edge_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'mv_edge_content_width', 640 );
}
add_action( 'after_setup_theme', 'mv_edge_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function mv_edge_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'mv_edge' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'mv_edge' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
	    register_sidebar( array(
        'name' => 'Footer Column 1',
        'id' => 'footer_widget_1',
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="footer-widget-title">',
        'after_title' => '</h3>',
    ) );
    register_sidebar( array(
        'name' => 'Footer Column 2',
        'id' => 'footer_widget_2',
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="footer-widget-title">',
        'after_title' => '</h3>',
    ) );
    register_sidebar( array(
        'name' => 'Footer Column 3',
        'id' => 'footer_widget_3',
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="footer-widget-title">',
        'after_title' => '</h3>',
    ) );
    register_sidebar( array(
        'name' => 'Footer Column 4',
        'id' => 'footer_widget_4',
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="footer-widget-title">',
        'after_title' => '</h3>',
    ) );
    register_sidebar( array(
        'name' => 'Header Right Side',
        'id' => 'header_right_widget',
        'before_widget' => '<div class="header-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="header-widget-title">',
        'after_title' => '</h3>',
    ) );
    register_sidebar( array(
        'name' => 'Footer Copyright Widget Center',
        'id' => 'footer_copyright_center',
        'before_widget' => '<div class="footer-copyright-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="footer-copyright-widget-title">',
        'after_title' => '</h3>',
    ) );
    register_sidebar( array(
        'name' => 'Footer Copyright Widget Left',
        'id' => 'footer_copyright_left',
        'before_widget' => '<div class="footer-copyright-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="footer-copyright-widget-title">',
        'after_title' => '</h3>',
    ) );
        register_sidebar( array(
        'name' => 'Footer Copyright Widget Right',
        'id' => 'footer_copyright_right',
        'before_widget' => '<div class="footer-copyright-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="footer-copyright-widget-title">',
        'after_title' => '</h3>',
    ) );
}
add_action( 'widgets_init', 'mv_edge_widgets_init' );


// Enable shortcodes in text widgets
add_filter('widget_text','do_shortcode');

/**
 * Enqueue scripts and styles.
 */
function mv_edge_scripts() {
	wp_enqueue_style( 'mv_edge-style', get_stylesheet_uri() );
    wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/css/font-awesome.css' );
    wp_enqueue_style( 'pure-grids', get_template_directory_uri() . '/css/pure-grids.css' );
    wp_enqueue_style( 'animate', get_template_directory_uri() . '/css/animate.css' );
    wp_enqueue_style( 'odometer-theme-min', get_template_directory_uri() . '/css/odometer-theme-minimal.css' );

    
    
   // wp_enqueue_script( 'typekit-loader', 'https://use.typekit.net/ltp3bfu.js', array(), '20151215', false );
     wp_enqueue_script( 'mv_edge_header', get_template_directory_uri() . '/js/mv-edge-header.js', array('jquery'), '20151216', false );
    
    
    wp_enqueue_script( 'mv_edge-scripts', get_template_directory_uri() . '/js/mv-edge.js', array('jquery', 'responsive-nav' ), '20151215', true );
    wp_enqueue_script( 'mv_edge-animations', get_template_directory_uri() . '/js/animations.js', array('jquery', 'mv_edge-scripts', 'svg-js', 'odometer' ), '20151215', true );
    wp_enqueue_script( 'svg-js', get_template_directory_uri() . '/js/svg.js', array('jquery' ), '20151215', true );
    wp_enqueue_script( 'odometer', get_template_directory_uri() . '/js/odometer.js', array('jquery' ), '20151215', true );
    // replaced wow with custom trigger
    //wp_enqueue_script( 'wow', get_template_directory_uri() . '/js/wow.min.js', array(), '20151215', true );
    wp_enqueue_script( 'responsive-nav', get_template_directory_uri() . '/js/responsive-nav.js', array(), '20151215', true );
    wp_enqueue_script( 'fastclick', get_template_directory_uri() . '/js/fastclick.js', array(), '20151215', true );
    wp_enqueue_script( 'scroll-js', get_template_directory_uri() . '/js/scroll.js', array(), '20151215', true );
        wp_enqueue_script( 'twenmax', get_template_directory_uri() . '/js/TweenMax.js', array('jquery'), '20151215', true );
    //wp_enqueue_script( 'mv_edge-navigation', get_template_directory_uri() . '/js/fixed-responsive-nav.js', array('responsive-nav', 'fastclick', 'scroll-js'), '20151215', true );

	wp_enqueue_script( 'mv_edge-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'mv_edge_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';

/**
 * Load the custom layouts shortcode file
 */
require get_template_directory() . '/functions/layout-functions.php';
/**
 * Load Theme Logo
 */
function mv_edge_the_custom_logo() {
    
    if ( function_exists( 'the_custom_logo' ) ) {
        the_custom_logo();
    }

}