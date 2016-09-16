<?php
/**
 * components functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package ONEmerging_Tech
 */

if ( ! function_exists( 'onemerging_tech_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the aftercomponentsetup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function onemerging_tech_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on components, use a find and replace
	 * to change 'onemerging_tech' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'onemerging_tech', get_template_directory() . '/languages' );

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

	add_image_size( 'onemerging_tech-featured-image', 640, 9999 );
	add_image_size( 'onemerging_tech-portfolio-featured-image', 800, 9999 );

	// This theme uses wp_nav_menu() in two locationa.
	register_nav_menus( array(
		'top' => esc_html__( 'Top', 'onemerging_tech' ),
        'icon-menu' => esc_html__( 'Logo-Icon', 'onemerging_tech' ),
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

	/*
	 * Enable support for Post Formats.
	 * See https://developer.wordpress.org/themes/functionality/post-formats/
	 */
	add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'onemerging_tech_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
 // Enable support for Custom Logo   
    add_theme_support( 'custom-logo', array(
	'height'      => 40,
	'width'       => 40,
	'flex-height' => true,
	'flex-width'  => true,
) );
}
endif;
add_action( 'after_setup_theme', 'onemerging_tech_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function onemerging_tech_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'onemerging_tech_content_width', 640 );
}
add_action( 'after_setup_theme', 'onemerging_tech_content_width', 0 );

/**
 * Return early if Site Logo is not available.
 */
function onemerging_tech_the_site_logo() {
if ( function_exists( 'the_custom_logo' ) ) {
    $html = '';
    $custom_logo_id = get_theme_mod( 'custom_logo' );
 
    // We have a logo. Logo is go.
    if ( $custom_logo_id ) {
        $logo_link = get_option( 'logo_link' );
        if ($logo_link === '') {$logo_link =  esc_url( home_url( '/' )); }
        $html = sprintf( '<a href="%1$s" class="custom-logo-link" rel="home" itemprop="url">%2$s</a>',
            $logo_link,
            wp_get_attachment_image( $custom_logo_id, 'full', false, array(
                'class'    => 'custom-logo',
                'itemprop' => 'logo',
            ) )
        );
    }
 
    // If no logo is set but we're in the Customizer, leave a placeholder (needed for the live preview).
    elseif ( is_customize_preview() ) {
        $html = sprintf( '<a href="%1$s" class="custom-logo-link" style="display:none;"><img class="custom-logo"/></a>',
            esc_url( home_url( '/' ) )
        );
    }
    $logo =  get_custom_logo();
    echo $html;
	}
}

/*customize the size of the menu icons*/
add_filter( 'menu_image_default_sizes', 'menu_image_size');
           
function menu_image_size ($sizes) {

  // remove the default 36x36 size
  unset($sizes['menu-36x36']);
     unset($sizes['menu-36x9']);

  // add a new size
  $sizes['menu-36x36'] = array(161,42);

  // return $sizes (required)
  return $sizes;

}
/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function onemerging_tech_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'onemerging_tech' ),
		'id'            => 'sidebar-1',
		'description'   => '',
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
        'name' => 'Footer Right Side',
        'id' => 'footer_right_widget',
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="footer-widget-title">',
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
add_action( 'widgets_init', 'onemerging_tech_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function onemerging_tech_scripts() {
	wp_enqueue_style( 'onemerging_tech-style', get_stylesheet_uri() );

	//wp_enqueue_script( 'onemerging_tech-navigation', get_template_directory_uri() . '/assets/js/navigation.js', array(), '20151215', true );

    wp_enqueue_script( 'onemerging_tech_js', get_template_directory_uri() . '/assets/js/onemerging_tech.js', array('responsive-nav', 'jquery'), '1.0', true );
    wp_enqueue_script( 'responsive-nav', get_template_directory_uri() . '/assets/js/responsive-nav.js', array(), '1.0.39', true );

	wp_enqueue_script( 'onemerging_tech-skip-link-focus-fix', get_template_directory_uri() . '/assets/js/skip-link-focus-fix.js', array(), '20151215', true );
    wp_enqueue_script( 'modernizr',  get_template_directory_uri() . '/assets/js/modernizr-custom.js',array() , false , false );
    wp_script_add_data( 'modernizr', 'conditional', 'lt IE 9' );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'onemerging_tech_scripts' );

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

/*add vertical align shortcode */

function on_vertical_align ( $atts, $content = null ) {
    $atta = shortcode_atts( array(
        'wrapper' => 'div',
    ), $atts );
    $cont = '';
    $cont .= '<div class="vertical-center">';
    $cont .= '<'.$atta['wrapper'].'>';
    $cont .= $content;
    $cont .= '</'.$atta['wrapper'].'>';
    $cont .= '</div>';

    return do_shortcode( $cont );

}

add_shortcode( 'vertical_align', 'on_vertical_align' );

function shortcode_empty_paragraph_fix( $content ) {

    // define your shortcodes to filter, '' filters all shortcodes
    $shortcodes = array( '' );
    
    foreach ( $shortcodes as $shortcode ) {
        
        $array = array (
            '<p>[' . $shortcode => '[' .$shortcode,
            '<p>[/' . $shortcode => '[/' .$shortcode,
            $shortcode . ']</p>' => $shortcode . ']',
            $shortcode . ']<br />' => $shortcode . ']',
            '<br>['. $shortcode => '[' .$shortcode
        );

        $content = strtr( $content, $array );
    }

    return $content;
}

add_filter( 'the_content', 'shortcode_empty_paragraph_fix' );
