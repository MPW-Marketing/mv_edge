<?php /* Template Name: Sidebar Right Page */
/**
 * The template for displaying all pages.
 *
 * This is the template that displays sidebar right pages by default.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package MV_Edge
 */

get_header(); ?>

	<div id="primary" class="content-area has-sidebar">    
	<?php  $hide_title = get_field( 'hide_heading' );
    if ( $hide_title !== 'Yes'){ ?>
	<header class="entry-header content-width">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->
<?php } ?>
	<div class="content-container content-width">
		<main id="main" class="site-main" role="main">

			<?php
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'page' );

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile; // End of the loop.
			?>

		</main><!-- #main -->
		<?php
get_sidebar();
?>
</div><!-- .content-contanier -->
	</div><!-- #primary -->

<?php
get_footer();
