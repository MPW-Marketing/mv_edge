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
        $cont .= ' style=" . '$atts['style'] . '"';
    }
    $cont .= '<div class="content-width">' . $content . '</div>';
    $cont .= '</section>';
    
    return do_shortcode($cont);
    
}
function layout_row ( $atts, $content=null ) {
    $atts = shortcode_atts(
        array(
            'class' => '',
		), $atts, 'row' );
    
    
    $cont = '<div class="pure-g';
    if ($atts['class'] != '') {
        $cont .= ' ' .$atts['class'];
    }
    $cont .= '">'.$content. '</div>';
    return do_shortcode($cont);
}

function layout_column ( $atts, $content=null ) {
        $atts = shortcode_atts(
		array(
            'class' => '',
            'columns' => "1-1"
		), $atts, 'full_width' );
    $cont = '<div class="pure-u-' . $atts['columns'];
    if ($atts['class'] != '') {
        $cont .= ' ' .$atts['class'];
        }
    $cont .= '">'.$content. '</div>';
    return do_shortcode($cont);
}

add_shortcode('full_width' , 'full_width_section');
add_shortcode('row' , 'layout_row');
add_shortcode('col' , 'layout_column');
 
