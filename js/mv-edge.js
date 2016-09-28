jQuery(document).ready(function () {
    var navigation = responsiveNav(".nav-collapse", {
        // Close the navigation when it's tapped
        closeOnNavClick: true
    });
        
        var maxheight = 0;
        
        jQuery('.economic-op-stat-box').each(function () {
            maxheight = (jQuery(this).height() > maxheight ? jQuery(this).height() : maxheight); 
        });
        
        jQuery('.economic-op-stat-box').height(maxheight);


        //jQuery('#about-stats-section').on('intoView', triggeredEvent);

     });

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = jQuery('.site-header').outerHeight()+20;

jQuery(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = jQuery(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (jQuery( window ).width() < 768 ) {
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            jQuery('.site-header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + jQuery(window).height() < jQuery(document).height()) {
                jQuery('.site-header').removeClass('nav-up').addClass('nav-down');
            }
        }
        }
    
    lastScrollTop = st;
}
// Smooth scroll hash links


jQuery(document).ready(function(){
  jQuery('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = jQuery(this.hash);
      $target = $target.length && $target
      || jQuery('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top - 100;
        jQuery('html,body')
        .animate({scrollTop: targetOffset}, 500);
       return false;
      }
    }
  });
});

/*
    By Osvaldas Valutis, www.osvaldas.info
    Available for use under the MIT License
*/



;(function( $, window, document, undefined )
{
    $.fn.doubleTapToGo = function( params )
    {
        if( !( 'ontouchstart' in window ) &&
            !navigator.msMaxTouchPoints &&
            !navigator.userAgent.toLowerCase().match( /windows phone os 7/i ) ) return false;

        this.each( function()
        {
            var curItem = false;

            $( this ).on( 'click', function( e )
            {
                var item = $( this );
                if( item[ 0 ] != curItem[ 0 ] )
                {
                    e.preventDefault();
                    curItem = item;
                }
            });

            $( document ).on( 'click touchstart MSPointerDown', function( e )
            {
                var resetItem = true,
                    parents   = $( e.target ).parents();

                for( var i = 0; i < parents.length; i++ )
                    if( parents[ i ] == curItem[ 0 ] )
                        resetItem = false;

                if( resetItem )
                    curItem = false;
            });
        });
        return this;
    };
})( jQuery, window, document );

jQuery(document).ready(function(){
    jQuery( 'nav li.menu-item-has-children' ).doubleTapToGo();
});

/* Animation Triggers and customizations */

// function to trigger animation 
/*And use it like this:

jQuery('#yourElement').animateCss('bounce');

*/
jQuery.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            jQuery(this).removeClass('animated ' + animationName);
        });
    }
});
jQuery.fn.extend({
    scrollIntoView: function (elementToWatch) {
        var win = jQuery(window);
        var fold = jQuery(this);
        var inTheFold = false;


        //set the item to visable when it is 15% of the way up the screen;

        win.scroll(function () {
        var winHeight = win.height();
        var itemTop = fold.offset().top;
        var itemEnter = itemTop - (winHeight * .75);
    
        
            if (win.scrollTop() >= itemEnter )
            {  
                if (!inTheFold) {
                  inTheFold = true;
                  fold.addClass('in-view');
                  fold.removeClass('out-of-view');
                  fold.trigger({
            type: "intoView",
            item: fold,
        });
                }
    
            }         });
    }
});

