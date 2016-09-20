<?php
/* various functions and shortcodes for layouts */

function full_width_section ( $atts, $content=null ) {
    $atts = shortcode_atts(
		array(
			'style' => '',
			'id' => '',
            'class' => '',
		), $atts, 'full_width' );

    $cont = '<section id="';
    if ($atts['id'] != '') {
        $cont .= $atts['id'];
    } else {
        $cont .= 'section-' . rand(0, 100000);
    }
    $cont .= '" class="full-width-section';
    if ($atts['class'] != '') {
        $cont .= ' ' .$atts['class'];
    }
    $cont .= '"';
    if ($atts['style'] != '') {
        $cont .= ' style="' . $atts['style'] . '"';
    }
    $cont .= '><div class="content-width">' . $content . '</div>';
    $cont .= '</section>';
    
    return do_shortcode($cont);
    
}
function layout_row ( $atts, $content=null ) {
    $atts = shortcode_atts(
        array(
            'class' => '',
            'id' => '',
		), $atts, 'row' );
    
    
    $cont = '<div class="pure-g';
    if ($atts['class'] != '') {
        $cont .= ' ' .$atts['class'];
    }
    $cont .= '"';
    if ($atts['id'] != '') {
        $cont .= ' id="' . $atts['id'] . '" ';
    }
    $cont .= '>'.$content. '</div>';
    return do_shortcode($cont);
}

function layout_column ( $atts, $content=null ) {
        $atts = shortcode_atts(
		array(
            'class' => '',
            'columns' => "1-1",
            'sm' => '',
            'md' => '',
            'lg' => '',
            'xl' => '',
		), $atts, 'full_width' );
    $cont = '<div class="pure-u-' . $atts['columns'];
    if ($atts['sm'] != '') {
        $cont .= ' pure-u-sm' .$atts['sm'];
    }
    if ($atts['md'] != '') {
        $cont .= ' pure-u-md' .$atts['md'];
    }
    if ($atts['lg'] != '') {
        $cont .= ' pure-u-lg' .$atts['lg'];
    }
    if ($atts['xl'] != '') {
        $cont .= ' pure-u-xl' .$atts['xl'];
    }
    if ($atts['class'] != '') {
        $cont .= ' ' .$atts['class'];
        }
    $cont .= '">'.$content. '</div>';
    return do_shortcode($cont);
}

add_shortcode('full_width' , 'full_width_section');
add_shortcode('row' , 'layout_row');
add_shortcode('col' , 'layout_column');
 
