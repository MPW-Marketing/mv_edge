<?php /* Template Name: Full Width Color Bar Page */
/**
 * 
 *
 * This is the template that displays pages that have full width bars, content must be contained in a size limited div or it will run all the way to the edge of the browser.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package MV_Edge
 */
get_header(); ?>

	<div id="primary" class="content-area">
		<?php  $hide_title = get_field( 'hide_heading' );
    if ( $hide_title !== 'Yes'){ ?>
	<header class="entry-header content-width">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->
<?php } ?>
		<main id="main" class="site-main" role="main">

			<?php
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'full' );

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile; // End of the loop.
			?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();