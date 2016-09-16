<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package MV_Edge
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'mv_edge' ); ?></a>

	<header id="masthead" class="site-header" role="banner">
        <section class="content-width">
		<div class="site-branding">
			<?php
            if (  get_theme_mod( 'custom_logo' ) != '') { mv_edge_the_custom_logo(); } else {
            ?>
            <style type="text/css">
			.site-title,
		.site-description {
			position: relative;
		}
		</style>
		<?php
				if ( is_front_page() && is_home() ) : ?>
					<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php else : ?>
					<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php
			endif;

			$description = get_bloginfo( 'description', 'display' );
			if ( $description || is_customize_preview() ) : ?>
				<p class="site-description"><?php echo $description; /* WPCS: xss ok. */ ?></p>
			<?php
			endif; 
            }?>
		</div><!-- .site-branding -->
        <div class="nav-container">
		<nav id="site-navigation" class="main-navigation nav-collapse" role="navigation">
			<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu', 'container' => '' ) ); ?>
		</nav><!-- #site-navigation -->
            <?php if ( is_active_sidebar( 'header_right_widget' ) ) { ?>
	           <div class="header-right">
	           	   <?php dynamic_sidebar( 'header_right_widget' ); ?>
	           </div>
                     <?php } ?>
            </div><!--.nav-container->
        </section>
	</header><!-- #masthead -->

	<div id="content" class="site-content">
