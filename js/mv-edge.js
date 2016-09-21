jQuery(document).ready(function () {
    var navigation = responsiveNav(".nav-collapse", {
        // Close the navigation when it's tapped
        closeOnNavClick: true
    });
        new WOW().init();
        
        var maxheight = 0;
        
        jQuery('.economic-op-stat-box').each(function () {
            maxheight = (jQuery(this).height() > maxheight ? jQuery(this).height() : maxheight); 
        });
        
        jQuery('.economic-op-stat-box').height(maxheight);
     });