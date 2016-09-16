<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package MV_Edge
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info content-width">
			<?php if ( is_active_sidebar( 'footer_copyright_center' ) ) { ?>
	           <div class="footer-center">
	           	   <?php dynamic_sidebar( 'footer_copyright_center' ); ?>
	           </div>
                     <?php } ?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
