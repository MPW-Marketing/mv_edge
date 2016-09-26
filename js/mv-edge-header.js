//try{Typekit.load({ async: true });}catch(e){};

jQuery(document).ready(function(){
	jQuery(function () {
    	var win = jQuery(window);
    	var fold = jQuery('#business-assistance');
    	var inTheFold = false;
    	var winHeight = win.height();
    	var itemTop = fold.offset().top;
    	//set the item to visable when it is 25% of the way up the screen;
    	var itemEnter = itemTop - (winHeight*.75);
	console.log(winHeight);
    	win.scroll(function () {
	
    	    console.log(win.scrollTop());
    	    console.log(fold.offset().top);
    	    console.log(inTheFold);
    	    console.log(itemEnter);
		
    	    if (win.scrollTop() >= itemEnter )
    	    {  
    	        if (!inTheFold) {
    	          inTheFold = true;
    	          console.log("VIEWED BELOW THE FOLD");
    	        }
	
    	    } else if (win.scrollTop() <= fold.offset().top || win.scrollTop() >= fold.offset().top+fold.height() ) {
	
    	        if (inTheFold) {
    	            inTheFold = false;
    	          console.log("EXITED THE FOLD");
    	        }
	
    	    }
    	});

	});
});