jQuery( document ).ready(function(){
	hTL = '';
	//jQuery('.stat-cell').css('opacity','0');
	jQuery('.hexagon-box').css('opacity','0');
	jQuery('.cell-info').css('opacity','0');
	jQuery('.cell-container').css('opacity','0');
	jQuery('.industry-right').css('right', '-75em');
	jQuery('.industry-left').css('left', '-75em');
	jQuery('.odometer').each(function(){
		jQuery(this).text('0');
	})
	/*jQuery('.stat-value').each(function(){
		var thisParWidth = jQuery(this).parent('.stat-row').width();
		var prevItemWidth = jQuery(this).prev('.stat-name').width();
		var thisWidth = jQuery(this).width();
		var paddingUse = thisParWidth - prevItemWidth - thisWidth - 14;
		jQuery(this).css('padding-left', paddingUse);
	})*/
	//jQuery('.home-section').each(function(){jQuery(this).scrollIntoView();});
		if ( jQuery( ".industry-image" ).length ) 		{
			jQuery('.industry-image').each(function(){
				jQuery(this).scrollIntoViewQuick();
			});
		}
		if ( jQuery( ".industry-info" ).length ) 		{
			jQuery('.industry-info').each(function(){
				jQuery(this).scrollIntoViewQuick();
			});
		}
		if ( jQuery( "#about-stats-section" ).length ) 	{
			jQuery('#about-stats-section').scrollIntoView();
		}
		if ( jQuery( "#economic-ops" ).length ) 		{
			jQuery('#economic-ops').scrollIntoView();
		}
		if ( jQuery( ".economic-indicators" ).length ) 	{
			jQuery('.economic-indicators').scrollIntoView();
		}
		if ( jQuery( ".hexagon-boxes" ).length ) 		{
			jQuery('.hexagon-boxes').scrollIntoView();
		}
		if ( jQuery( ".mv-stats-container" ).length ) 	{
			jQuery('.mv-stats-container').scrollIntoView();
		}
		if ( jQuery( ".wage-info" ).length ) 			{
			jQuery('.wage-info').scrollIntoView();
		}
		if ( jQuery( "#business-assistance" ).length ) 	{
			jQuery('#business-assistance').scrollIntoView()
		}

	jQuery('.industry-left').on('intoView', slideLeft);
	jQuery('.industry-right').on('intoView', slideRight);
	jQuery('#about-stats-section').on('intoView', expandUp);
	jQuery('#economic-ops').on('intoView', expandUp);
	jQuery('.economic-indicators').on('intoView', showEachIndi);
	jQuery('.hexagon-boxes').on('intoView', showEachHexVar);
	jQuery('.mv-stats-container').on('intoView', showStats);
	jQuery('.wage-info').on('intoView', showWageStats);
	jQuery('#business-assistance').on('intoView', runStatCounter);

});
function slideLeft (e) {
	//console.log('slideLeft');
	//e.item.animateCss('slideInLeft');
	TweenLite.to(e.item, .75, {left:"0", ease:Power2.easeInOut});
}

function slideRight (e) {
	//console.log('slideRight');
	//e.item.animateCss('slideInRight')
	TweenLite.to(e.item, .75, {right:"0", ease:Power2.easeInOut});
}
function expandUp (e) {
	e.item.css('height', 'auto');
	//e.item.css('padding-top', '4rem');
	//e.item.css('padding-bottom', '4rem');
	e.item.css('transform-origin', 'top');
	//console.log('expandUp');
	//e.item.children('.content-width').animateCss('slideInUp');
	//TweenLite.fromTo(e.item, .75, { scaleY:0, ease: Bounce.easeOut}, { scaleY:1, ease: Bounce.easeOut,onComplete:runCounter(e.item)});
	TweenLite.set(e.item, {height:"auto"});
    TweenLite.from(e.item, .75, {height:0, ease: Bounce.easeOut, onComplete:runCounter(e.item)});
    //TweenLite.to(e.item, 1, {paddingTop:"4rem",paddingBottom:"4rem", onComplete:runCounter(e.item)});
}
function runCounter (e) {
	//console.log('eh ');
	//console.log(e);
	var ods = e.find('.odometer');
	ods.each(function(){
		//console.log(jQuery(this).attr('data-number-value'));
		jQuery(this).html(jQuery(this).attr('data-number-value'));
	})
}
function runStatCounter (e) {
	//console.log('eh2 ');
	//console.log(e.item);
	var eh = e.item;
	var ods = eh.find('.odometer');
	ods.each(function(){
		console.log(jQuery(this).attr('data-number-value'));
		jQuery(this).html(jQuery(this).attr('data-number-value'));
	})
}

function showEachIndi (e) {
	//console.log('showEachIndi');
	var draw = SVG('eco-indicators-canvas');
	var canvas = jQuery("#eco-indicators-canvas");
	var headerRow = jQuery('#eco-header-row');

	var mvRow = jQuery('#mv-stats');
	var nyRow = jQuery('#ny-stats');
	var usRow = jQuery('#us-stats');
	




	var mvRowTitle 		= mvRow.find('.row-title .cell-container');
	var mvEmploy 		= mvRow.find('.employment .cell-container');
	var mvPos 			= mvRowTitle.position();
	var mvWages 		= mvRow.find('.wages .cell-container');
	var mvEstab 		= mvRow.find('.establishments .cell-container');
	var mvStemEmploy 	= mvRow.find('.stem-employment .cell-container');
	var mvExport 		= mvRow.find('.exports-table .cell-container');


	var nyRowTitle 		= nyRow.find('.row-title .cell-container');
	var nyPos 			= nyRowTitle.position();
	var nyEmploy 		= nyRow.find('.employment .cell-container');
	var nyWages 		= nyRow.find('.wages .cell-container');
	var nyEstab 		= nyRow.find('.establishments .cell-container');
	var nyStemEmploy 	= nyRow.find('.stem-employment .cell-container');
	var nyExport 		= nyRow.find('.exports-table .cell-container');

	var usRowTitle 		= usRow.find('.row-title .cell-container');
	var usPos 			= usRowTitle.position();
	var usEmploy 		= usRow.find('.employment .cell-container');
	var usWages 		= usRow.find('.wages .cell-container');
	var usEstab 		= usRow.find('.establishments .cell-container');
	var usStemEmploy 	= usRow.find('.stem-employment .cell-container');
	var usExport 		= usRow.find('.exports-table .cell-container');
	var topPadd 		= mvRowTitle.css('padding-top');

// get positions, the left side is the same for all rows so can be reused

	var mvEmployPos 	= mvEmploy.position();
	var mvWagesPos 		= mvWages.position();
	var mvEstabPos 		= mvEstab.position();
	var mvStemPos 		= mvStemEmploy.position();
	var mvExportPos 	= mvExport.position();

//get widths and heights, all cells the same size so can be reused
	var mvHeight = jQuery('#mv-stats td.row-title .cell-container').innerHeight();
	var mvWidth = jQuery('#mv-stats td.row-title .cell-container').innerWidth();
	var cellWidth = jQuery('#mv-stats .employment .cell-container').outerWidth();
	var cellMarginLeft = parseInt(jQuery('#mv-stats .employment .cell-container').css('margin-left'));
	var cellMarginRight = parseInt(jQuery('#mv-stats .employment .cell-container').css('margin-right'));
	console.log('marL '+cellMarginLeft);
	console.log('marR '+cellMarginRight);	
	
//get the centers

	var mvCenter = mvPos.top + (mvHeight/2);

	var nyCenter = nyPos.top + (mvHeight/2);

	var usCenter = usPos.top + (mvHeight/2);

	// get the right edges
	console.log('cw '+cellWidth);
	var mvEmployRight 	= mvEmployPos.left + cellWidth;
	console.log('el '+mvEmployPos.left);
	console.log('er '+mvEmployRight);

	var mvWagesRight 	= mvWagesPos.left + cellWidth;
	var mvEstabRight  	= mvEstabPos.left + cellWidth;
	var mvStemRight  	= mvStemPos.left + cellWidth;
	var mvExportRight  	= mvExportPos.left + cellWidth;

//draw the line starting points

	var mvRight = mvPos.left + mvWidth; 
	var mvline1 = 	draw.line(mvRight, mvCenter, mvRight, mvCenter);
	var mvline2 = 	draw.line(mvEmployRight+cellMarginRight, mvCenter, mvEmployRight+cellMarginRight, mvCenter);
	var mvline3 = 	draw.line(mvWagesRight+cellMarginRight, mvCenter, mvWagesRight+cellMarginRight, mvCenter);
	var mvline4 = 	draw.line(mvEstabRight+cellMarginRight, mvCenter, mvEstabRight+cellMarginRight, mvCenter);
	var mvline5 = 	draw.line(mvStemRight+cellMarginRight, mvCenter, mvStemRight+cellMarginRight, mvCenter);

 
	var nyline1 = 	draw.line(mvRight, nyCenter, mvRight, nyCenter);
	var nyline2 = 	draw.line(mvEmployRight+cellMarginRight, nyCenter, mvEmployRight+cellMarginRight, nyCenter);
	var nyline3 = 	draw.line(mvWagesRight+cellMarginRight, nyCenter, mvWagesRight+cellMarginRight, nyCenter);
	var nyline4 = 	draw.line(mvEstabRight+cellMarginRight, nyCenter, mvEstabRight+cellMarginRight, nyCenter);
	var nyline5 = 	draw.line(mvStemRight+cellMarginRight, nyCenter, mvStemRight+cellMarginRight, nyCenter);

	var usline1 = 	draw.line(mvRight, usCenter, mvRight, usCenter);
	var usline2 = 	draw.line(mvEmployRight+cellMarginRight, usCenter, mvEmployRight+cellMarginRight, usCenter);
	var usline3 = 	draw.line(mvWagesRight+cellMarginRight, usCenter, mvWagesRight+cellMarginRight, usCenter);
	var usline4 = 	draw.line(mvEstabRight+cellMarginRight, usCenter, mvEstabRight+cellMarginRight, usCenter);
	var usline5 = 	draw.line(mvStemRight+cellMarginRight, usCenter, mvStemRight+cellMarginRight, usCenter);

	//var mvLine = 	draw.line(mvPos.left, mvCenter, 999, mvCenter);
	var table = e.item;
	var cells = table.find('.cell-container');
	var tl = new TimelineLite();
	tl.to(cells, .05, {opacity:"1"});
	tl.fromTo(mvRowTitle 	, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut});
	tl.to(mvline1.node, .01, {opacity:1});
	tl.to(mvline1.node, .2, {attr:{x2:mvEmployPos.left+cellMarginLeft}, ease:Linear.easeNone});
	tl.fromTo(mvEmploy 		, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=0.3");
	tl.to(mvline2.node, .01, {opacity:1});
	tl.to(mvline2.node, .2, {attr:{x2:mvWagesPos.left+cellMarginLeft}, ease:Linear.easeNone});
	tl.fromTo(mvWages 		, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=0.3");
	tl.to(mvline3.node, .01, {opacity:1});
	tl.to(mvline3.node, .2, {attr:{x2:mvEstabPos.left+cellMarginLeft}, ease:Linear.easeNone});
	tl.fromTo(mvEstab 		, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=0.3");
	tl.to(mvline4.node, .01, {opacity:1});
	tl.to(mvline4.node, .2, {attr:{x2:mvStemPos.left+cellMarginLeft+30}, ease:Linear.easeNone});
	tl.fromTo(mvStemEmploy	, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=0.3");
	tl.to(mvline5.node, .01, {opacity:1});
	tl.to(mvline5.node, .2, {attr:{x2:mvExportPos.left+cellMarginLeft}, ease:Linear.easeNone});
	tl.fromTo(mvExport 		, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut, onComplete:tl2a()}, "-=0.3");

	/*tl.fromTo(nyRowTitle 	, .5, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=3");
	tl.to(nyline1.node, .25, {attr:{x2:mvEmployPos.left+cellMarginLeft}, ease:Linear.easeNone}, "-=3");
	tl.fromTo(nyEmploy 		, .5, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=3");
	tl.to(nyline2.node, .25, {attr:{x2:mvWagesPos.left+cellMarginLeft}, ease:Linear.easeNone}, "-=3");
	tl.fromTo(nyWages 		, .5, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=3");
	tl.to(nyline3.node, .25, {attr:{x2:mvEstabPos.left+cellMarginLeft}, ease:Linear.easeNone}, "-=3");
	tl.fromTo(nyEstab 		, .5, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=3");
	tl.to(nyline4.node, .25, {attr:{x2:mvStemPos.left+cellMarginLeft+30}, ease:Linear.easeNone}, "-=3");
	tl.fromTo(nyStemEmploy	, .5, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=3");
	tl.to(nyline5.node, .25, {attr:{x2:mvExportPos.left+cellMarginLeft}, ease:Linear.easeNone}, "-=3");
	tl.fromTo(nyExport 		, .5, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=3");
	

	tl.fromTo(usRowTitle 	, .5, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut});
	tl.to(usline1.node, .25, {attr:{x2:mvEmployPos.left+cellMarginLeft}, ease:Linear.easeNone});
	tl.fromTo(usEmploy 		, .5, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=0.25");
	tl.to(usline2.node, .25, {attr:{x2:mvWagesPos.left+cellMarginLeft}, ease:Linear.easeNone});
	tl.fromTo(usWages 		, .5, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=0.25");
	tl.to(usline3.node, .25, {attr:{x2:mvEstabPos.left+cellMarginLeft}, ease:Linear.easeNone});
	tl.fromTo(usEstab 		, .5, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=0.25");
	tl.to(usline4.node, .25, {attr:{x2:mvStemPos.left+cellMarginLeft+30}, ease:Linear.easeNone});
	tl.fromTo(usStemEmploy	, .5, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=0.25");
	tl.to(usline5.node, .25, {attr:{x2:mvExportPos.left+cellMarginLeft}, ease:Linear.easeNone});
	tl.fromTo(usExport 		, .5, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=0.25");
*/
		tl.play();
	
function tl2a () {
	var tl2 = new TimelineLite();
	tl2.fromTo(nyRowTitle 	, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "+=.25");
	tl2.to(nyline1.node, .2, {attr:{x2:mvEmployPos.left+cellMarginLeft}, ease:Linear.easeNone, onComplete:tl3a()});
	tl2.to(nyline1.node, .01, {opacity:1}, "-=.01");
	tl2.fromTo(nyEmploy 		, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=0.3");
	tl2.to(nyline2.node, .01, {opacity:1}, "-=.01");
	tl2.to(nyline2.node, .2, {attr:{x2:mvWagesPos.left+cellMarginLeft}, ease:Linear.easeNone});
	tl2.fromTo(nyWages 		, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=0.3");
	tl2.to(nyline3.node, .01, {opacity:1}, "-=.01");
	tl2.to(nyline3.node, .2, {attr:{x2:mvEstabPos.left+cellMarginLeft}, ease:Linear.easeNone});
	tl2.fromTo(nyEstab 		, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=0.3");
	tl2.to(nyline4.node, .01, {opacity:1}, "-=.01");
	tl2.to(nyline4.node, .2, {attr:{x2:mvStemPos.left+cellMarginLeft+30}, ease:Linear.easeNone});
	tl2.fromTo(nyStemEmploy	, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=0.3");
	tl2.to(nyline5.node, .01, {opacity:1}, "-=.01");
	tl2.to(nyline5.node, .2, {attr:{x2:mvExportPos.left+cellMarginLeft}, ease:Linear.easeNnne});
	tl2.fromTo(nyExport 		, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=0.3");

		tl2.play();
}

function tl3a () {
	var tl3 = new TimelineLite();
	tl3.fromTo(usRowTitle 	, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "+=.5");
	tl3.to(usline1.node, .01, {opacity:1}, "-=.01");
	tl3.to(usline1.node, .2, {attr:{x2:mvEmployPos.left+cellMarginLeft}, ease:Linear.easeNone});
	tl3.fromTo(usEmploy 		, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=0.3");
	tl3.to(usline2.node, .01, {opacity:1}, "-=.01");
	tl3.to(usline2.node, .2, {attr:{x2:mvWagesPos.left+cellMarginLeft}, ease:Linear.easeNone});
	tl3.fromTo(usWages 		, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=0.3");
	tl3.to(usline3.node, .01, {opacity:1}, "-=.01");
	tl3.to(usline3.node, .2, {attr:{x2:mvEstabPos.left+cellMarginLeft}, ease:Linear.easeNone});
	tl3.fromTo(usEstab 		, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=0.3");
	tl3.to(usline4.node, .01, {opacity:1}, "-=.01");
	tl3.to(usline4.node, .2, {attr:{x2:mvStemPos.left+cellMarginLeft+30}, ease:Linear.easeNone});
	tl3.fromTo(usStemEmploy	, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=0.3");
	tl3.to(usline5.node, .01, {opacity:1}, "-=.01");
	tl3.to(usline5.node, .2, {attr:{x2:mvExportPos.left+cellMarginLeft}, ease:Linear.easeNone});
	tl3.fromTo(usExport 		, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=0.3");
	tl3.play();
}
	//tl.staggerTo(cells, 1, {opacity:"1"}, 0.25);
	//tl.staggerFromTo(cells, 1, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, 0.25);

	//console.log(cells);
	/*TweenMax.set(cells,{opacity:"1"});
	TweenMax.staggerFrom(cells, 2, {opacity:"0"}, 0.5);
/*	cells.each(function(){
		var thisCell = jQuery(this);
		console.log(thisCell);
    	TweenLite.to(thisCell, 2, {opacity:"1", delay:0.5});
    })*/
}
function showStats (e) {
	//console.log('showStats');
	var draw = SVG('mv-stats-canvas');
	var canvas = jQuery("#mv-stats-canvas");
	var statDiv = e.item;
	var statRows = statDiv.find();
	var tl = new TimelineLite();

/* show full row then dots */
/*
	tl.to('#stat-pop .cell-info', 1, {opacity:1});
	tl.to('#stat-pop .stat-value', 3, {paddingLeft:"10px"});
	tl.to('#stat-med-age .cell-info', 1, {opacity:1}, "-=0.75");
	tl.to('#stat-med-age .stat-value', 3, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-young-age .cell-info', 1, {opacity:1}, "-=0.75");
	tl.to('#stat-young-age .stat-value', 3, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-wage .cell-info', 1, {opacity:1}, "-=0.75");
	tl.to('#stat-wage .stat-value', 3, {paddingLeft:"10px"}, "-=0.25");
	*/
/* show each cell sep */

	var statPopInfo 	= 	jQuery('#stat-pop .stat-name');
	var statPopValue 	= 	jQuery('#stat-pop .stat-value');
	var statMedAgeInfo 		= 	jQuery('#stat-med-age .stat-name');
	var statMedAgeValue 	= 	jQuery('#stat-med-age .stat-value');
	var statYoungInfo 	= 	jQuery('#stat-young-age .stat-name');
	var statYoungValue 	= 	jQuery('#stat-young-age .stat-value');
	var statWageInfo 	= 	jQuery('#stat-wage .stat-name');
	var statWageValue 	= 	jQuery('#stat-wage .stat-value');

	var statMedAgeValuePos 		= statMedAgeValue.position();
	var statMedAgeValueHeight 	= statMedAgeValue.innerHeight();
	var statMedAgeValueWidth 	= statMedAgeValue.innerWidth();

	var statMedAgeInfoPos 		= statMedAgeInfo.position();
	var statMedAgeInfoHeight 	= statMedAgeInfo.innerHeight();
	var statMedAgeInfoWidth 	= statMedAgeInfo.innerWidth();

	var statPopInfoPos 			= statPopInfo.position();
	var statPopInfoHeight 		= statPopInfo.innerHeight();
	var statPopInfoWidth 		= statPopInfo.innerWidth();

	var statPopValuePos 		= statPopValue.position();
	var statPopValueHeight 		= statPopValue.innerHeight();
	var statPopInfoWidth 		= statPopValue.innerWidth();

	var statYoungInfoPos 		= statYoungInfo.position();
	var statYoungInfoHeight 	= statYoungInfo.innerHeight();
	var statYoungInfoWidth 		= statYoungInfo.innerWidth();

	var statYoungValuePos 		= statYoungValue.position();
	var statYoungValueHeight 	= statYoungValue.innerHeight();
	var statYoungValueWidth 	= statYoungValue.innerWidth();

	var statWageInfoPos 		= statWageInfo.position();
	var statWageInfoHeight 		= statWageInfo.innerHeight();
	var statWageInfoWidth 		= statWageInfo.innerWidth();

	var statWageValuePos 		= statWageValue.position();
	var statWageValueHeight 	= statWageValue.innerHeight();
	var statWageValueWidth 		= statWageValue.innerWidth();

	var statPopRight = statPopInfoPos.left + statPopInfoWidth + 14;
	var statPopBottom = statPopInfoPos.top + statPopInfoHeight - 14;

	var statMedAgeRight = statMedAgeInfoPos.left + statMedAgeInfoWidth + 14;
	var statMedAgeBottom = statMedAgeInfoPos.top + statMedAgeInfoHeight - 14;

	var statYoungRight = statYoungInfoPos.left + statYoungInfoWidth + 14;
	var statYoungBottom = statYoungInfoPos.top + statYoungInfoHeight - 14;

	var statWageRight = statWageInfoPos.left + statWageInfoWidth + 14;
	var statWageBottom = statWageInfoPos.top + statWageInfoHeight - 14;

	var mvline1 = 	draw.line(statPopRight,statPopBottom, statPopRight, statPopBottom);

	var mvline2 = 	draw.line(statMedAgeRight,statMedAgeBottom, statMedAgeRight, statMedAgeBottom);

	var mvline3 = 	draw.line(statYoungRight,statYoungBottom, statYoungRight, statYoungBottom);

	var mvline4 = 	draw.line(statWageRight,statWageBottom, statWageRight, statWageBottom);

	var allCells = jQuery('.mv-general-stats-div .cell-info');

	tl.to([mvline1.node, mvline2.node, mvline3.node, mvline4.node, statPopInfo, statPopValue,statMedAgeInfo,statMedAgeValue,statYoungInfo, statYoungValue, statWageInfo, statWageValue, allCells], .05, {opacity:1});

	tl.fromTo(statPopInfo 	, .3, { scale:0}, { scale:1});
	tl.to(mvline1.node, .01, {opacity:1});
	tl.to(mvline1.node, .2, {attr:{x2:statPopValuePos.left}, ease:Linear.easeNone});
	tl.fromTo(statPopValue 	, .3, { scale:0}, { scale:1}, "-=.25");
	tl.fromTo(statMedAgeInfo, .3, { scale:0}, { scale:1}, "-=.5");
	tl.to(mvline2.node, .01, {opacity:1});
	tl.to(mvline2.node, .2, {attr:{x2:statMedAgeValuePos.left}, ease:Linear.easeNone});
	tl.fromTo(statMedAgeValue, .3, { scale:0}, { scale:1}, "-=.25");
	tl.fromTo(statYoungInfo , .3, { scale:0}, { scale:1}, "-=.5");
	tl.to(mvline3.node, .01, {opacity:1});
	tl.to(mvline3.node, .2, {attr:{x2:statYoungValuePos.left}, ease:Linear.easeNone});
	tl.fromTo(statYoungValue, .3, { scale:0}, { scale:1}, "-=.25");
	tl.fromTo(statWageInfo 	, .3, { scale:0}, { scale:1}, "-=.5");
	tl.to(mvline4.node, .01, {opacity:1});
	tl.to(mvline4.node, .2, {attr:{x2:statWageValuePos.left}, ease:Linear.easeNone});
	tl.fromTo(statWageValue , .3, { scale:0}, { scale:1});

/*
	tl.to('#stat-pop .stat-name .cell-info', .25, {opacity:1});
	tl.to('#stat-pop .stat-value', .75, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-pop .stat-value .cell-info', .25, {opacity:1}, "-=0.25");
	tl.to('#stat-med-age  .stat-name .cell-info', .25, {opacity:1}, "-=0.25");
	tl.to('#stat-med-age .stat-value', .75, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-med-age .stat-value .cell-info', .25, {opacity:1}, "-=0.25");
	tl.to('#stat-young-age  .stat-name .cell-info', .25, {opacity:1}, "-=0.25");
	tl.to('#stat-young-age .stat-value', .75, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-young-age .stat-value .cell-info', .25, {opacity:1}, "-=0.25");
	tl.to('#stat-wage  .stat-name .cell-info', .25, {opacity:1}, "-=0.25");
	tl.to('#stat-wage .stat-value', .75, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-wage .stat-value .cell-info', .25, {opacity:1}, "-=0.25");
	*/


tl.play();

	
	//TweenLite.to(".stat-value", 5, {paddingLeft:"10px"});
}
function showWageStats (e) {
	//console.log('showWageStats');
	var statDiv = e.item;
	var draw = SVG('mv-wages-canvas');
	var canvas = jQuery("#mv-wages-canvas");

	var tl = new TimelineLite();

/* show full row then dots */
/*
	tl.to('#stat-pop .cell-info', 1, {opacity:1});
	tl.to('#stat-pop .stat-value', 3, {paddingLeft:"10px"});
	tl.to('#stat-med-age .cell-info', 1, {opacity:1}, "-=0.75");
	tl.to('#stat-med-age .stat-value', 3, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-young-age .cell-info', 1, {opacity:1}, "-=0.75");
	tl.to('#stat-young-age .stat-value', 3, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-wage .cell-info', 1, {opacity:1}, "-=0.75");
	tl.to('#stat-wage .stat-value', 3, {paddingLeft:"10px"}, "-=0.25");
	*/
/* show each cell sep */

/*	tl.to('#stat-mfg .stat-name			 .cell-info', .25, {opacity:1});
	tl.to('#stat-mfg .stat-value		', .75, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-mfg .stat-value 		.cell-info', .25, {opacity:1}, "-=0.25");
	tl.to('#stat-food  .stat-name	 	.cell-info', .25, {opacity:1}, "-=0.25");
	tl.to('#stat-food .stat-value		', .75, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-food .stat-value	 	.cell-info', .25, {opacity:1}, "-=0.25");
	tl.to('#stat-aviation  .stat-name	 .cell-info', .25, {opacity:1}, "-=0.25");
	tl.to('#stat-aviation .stat-value	', .75, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-aviation .stat-value	 .cell-info', .25, {opacity:1}, "-=0.25");
	tl.to('#stat-cyber  .stat-name 		.cell-info', .25, {opacity:1}, "-=0.25");
	tl.to('#stat-cyber .stat-value		', .75, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-cyber .stat-value 		.cell-info', .25, {opacity:1}, "-=0.25");
	tl.to('#stat-nano  .stat-name 		.cell-info', .25, {opacity:1}, "-=0.25");
	tl.to('#stat-nano .stat-value		', .75, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-nano .stat-value		 .cell-info', .25, {opacity:1}, "-=0.25");
	
*/
	var statMfgInfo 		= 	jQuery('#stat-mfg .stat-name		');
	var statMfgValue 		= 	jQuery('#stat-mfg .stat-value	');
	var statFoodInfo	 	= 	jQuery('#stat-food  .stat-name	 ');
	var statFoodValue 		= 	jQuery('#stat-food .stat-value	');
	var statAviInfo 		= 	jQuery('#stat-aviation  .stat-name');
	var statAviValue 		= 	jQuery('#stat-aviation .stat-value');
	var statCyberInfo 		= 	jQuery('#stat-cyber  .stat-name 	');
	var statCyberValue 		= 	jQuery('#stat-cyber .stat-value	');
	var statNanoInfo 		= 	jQuery('#stat-nano  .stat-name 	');
	var statNanoValue 		= 	jQuery('#stat-nano .stat-value	');








	var statMfgValuePos 		= statMfgValue.position();
	var statMfgValueHeight 		= statMfgValue.innerHeight();
	var statMfgValueWidth 		= statMfgValue.innerWidth();

	var statMfgInfoPos 		= statMfgInfo.position();
	var statMfgInfoHeight 	= statMfgInfo.innerHeight();
	var statMfgInfoWidth 	= statMfgInfo.innerWidth();

	var statFoodInfoPos 		= statFoodInfo.position();
	var statFoodInfoHeight 		= statFoodInfo.innerHeight();
	var statFoodInfoWidth 		= statFoodInfo.innerWidth();

	var statFoodValuePos 		= statFoodValue.position();
	var statFoodValueHeight 	= statFoodValue.innerHeight();
	var statFoodInfoWidth 		= statFoodValue.innerWidth();

	var statAviInfoPos 		= statAviInfo.position();
	var statAviInfoHeight 	= statAviInfo.innerHeight();
	var statAviInfoWidth 		= statAviInfo.innerWidth();

	var statAviValuePos 		= statAviValue.position();
	var statAviValueHeight 	= statAviValue.innerHeight();
	var statAviValueWidth 	= statAviValue.innerWidth();

	var statCyberInfoPos 		= statCyberInfo.position();
	var statCyberInfoHeight 		= statCyberInfo.innerHeight();
	var statCyberInfoWidth 		= statCyberInfo.innerWidth();

	var statCyberValuePos 		= statCyberValue.position();
	var statCyberValueHeight 	= statCyberValue.innerHeight();
	var statCyberValueWidth 		= statCyberValue.innerWidth();

	var statNanoInfoPos 		= statNanoInfo.position();
	var statNanoInfoHeight 		= statNanoInfo.innerHeight();
	var statNanoInfoWidth 		= statNanoInfo.innerWidth();

	var statNanoValuePos 		= statNanoValue.position();
	var statNanoValueHeight 	= statNanoValue.innerHeight();
	var statNanoValueWidth 		= statNanoValue.innerWidth();

	var statMfgRight = statMfgInfoPos.left + statMfgInfoWidth + 14;
	var statMfgBottom = statMfgInfoPos.top + statMfgInfoHeight - 14;

	var statFoodRight = statFoodInfoPos.left + statFoodInfoWidth + 14;
	var statFoodBottom = statFoodInfoPos.top + statFoodInfoHeight - 14;

	var statAviRight = statAviInfoPos.left + statAviInfoWidth + 14;
	var statAviBottom = statAviInfoPos.top + statAviInfoHeight - 14;

	var statCyberRight = statCyberInfoPos.left + statCyberInfoWidth + 14;
	var statCyberBottom = statCyberInfoPos.top + statCyberInfoHeight - 14;

	var statNanoRight = statNanoInfoPos.left + statNanoInfoWidth + 14;
	var statNanoBottom = statNanoInfoPos.top + statNanoInfoHeight - 14;



	var mvline1 = 	draw.line(statMfgRight,statMfgBottom, statMfgRight, statMfgBottom);

	var mvline2 = 	draw.line(statFoodRight,statFoodBottom, statFoodRight, statFoodBottom);

	var mvline3 = 	draw.line(statAviRight,statAviBottom, statAviRight, statAviBottom);

	var mvline4 = 	draw.line(statCyberRight,statCyberBottom, statCyberRight, statCyberBottom);

	var mvline5 = 	draw.line(statNanoRight,statNanoBottom, statNanoRight, statNanoBottom);

	var allCells = jQuery('.wages-table  .cell-info');

	//tl.to([mvline1.node, mvline2.node, mvline3.node, mvline4.node, statPopInfo, statPopValue,statMedAgeInfo,statMedAgeValue,statYoungInfo, statYoungValue, statWageInfo, statWageValue, allCells], .1, {opacity:1});
	tl.fromTo(allCells, .05, {opacity:0}, {opacity:1});
	tl.fromTo(statMfgInfo 	, .3, { scale:0}, { scale:1});
	tl.to(mvline1.node, .01, {opacity:1});
	tl.to(mvline1.node, .2, {attr:{x2:statMfgValuePos.left}, ease:Linear.easeNone});
	tl.fromTo(statMfgValue 	, .3, { scale:0}, { scale:1}, "-=.25");
	tl.fromTo(statFoodInfo, .3, { scale:0}, { scale:1}, "-=.5");
	tl.to(mvline2.node, .01, {opacity:1});
	tl.to(mvline2.node, .2, {attr:{x2:statFoodValuePos.left}, ease:Linear.easeNone});
	tl.fromTo(statFoodValue, .3, { scale:0}, { scale:1}, "-=.25");
	tl.fromTo(statAviInfo , .3, { scale:0}, { scale:1}, "-=.5");
	tl.to(mvline3.node, .01, {opacity:1});
	tl.to(mvline3.node, .2, {attr:{x2:statAviValuePos.left}, ease:Linear.easeNone});
	tl.fromTo(statAviValue, .3, { scale:0}, { scale:1}, "-=.25");
	tl.fromTo(statCyberInfo 	, .3, { scale:0}, { scale:1}, "-=.5");
	tl.to(mvline4.node, .01, {opacity:1});
	tl.to(mvline4.node, .2, {attr:{x2:statCyberValuePos.left}, ease:Linear.easeNone});
	tl.fromTo(statCyberValue , .3, { scale:0}, { scale:1});
	tl.fromTo(statNanoInfo 	, .3, { scale:0}, { scale:1}, "-=.5");
	tl.to(mvline5.node, .01, {opacity:1});
	tl.to(mvline5.node, .2, {attr:{x2:statNanoValuePos.left}, ease:Linear.easeNone});
	tl.fromTo(statNanoValue , .3, { scale:0}, { scale:1});


tl.play();

	
	//TweenLite.to(".stat-value", 5, {paddingLeft:"10px"});
}

var showEachHexVar = function showEachHex (e) {
	//console.log('showEachHex');
	var draw = SVG('hexagon-canvas');
	var canvas = jQuery("#hexagon-canvas");
	var centerHex = jQuery("#center-hex");
	var topCenterHex = jQuery("#top-center-hex");
	var topRightHex = jQuery("#top-right-hex");
	var bottomRightHex = jQuery("#bottom-right-hex");
	var topLeftHex = jQuery("#top-left-hex");
	var bottomLeftHex = jQuery("#bottom-left-hex");

	var dh = canvas.height();
	var dw = canvas.width();
	var canvasCenterHeight = dh/2;
	var canvasCenterWidth = dw/2;
	centerHex.css('left', canvasCenterWidth - (centerHex.width()/2));
	topCenterHex.css('left', canvasCenterWidth - (topCenterHex.width()/2));
	var centerHexPos = centerHex.position();
	var centerHexY = centerHexPos.top + (centerHex.height()/2);
	var centerHexX = centerHexPos.left + (centerHex.width()/2);
	var topCenterPos = topCenterHex.position();
	var topCenterHexY = topCenterPos.top + (topCenterHex.height()/2);
	var topCenterHexX = topCenterPos.left + (topCenterHex.width()/2);
	var topRightPos = topRightHex.position();
	var topRightHexY = topRightPos.top +  (topRightHex.height()/2);
	var topRightHexX = topRightPos.left + (topRightHex.width()/2);
	var bottomRightPos =  bottomRightHex.position();
	var bottomRightHexY = bottomRightPos.top +  (bottomRightHex.height()/2);
	var bottomRightHexX = bottomRightPos.left + (bottomRightHex.width()/2);
	var topLeftPos =  topLeftHex.position();
	var topLeftHexY = topLeftPos.top +  (topLeftHex.height()/2);
	var topLeftHexX = topLeftPos.left + (topLeftHex.width()/2);
	var bottomLeftPos =  bottomLeftHex.position();
	var bottomLeftHexY = bottomLeftPos.top + ( bottomLeftHex.height()/2);
	var bottomLeftHexX = bottomLeftPos.left + (bottomLeftHex.width()/2);

	var topCenterline = 	draw.line(centerHexX, centerHexY, centerHexX, centerHexY);
	var topRightline = 		draw.line(centerHexX, centerHexY, centerHexX, centerHexY);
	var bottomRightline = 	draw.line(centerHexX, centerHexY, centerHexX, centerHexY);
	var bottomLeftline = 	draw.line(centerHexX, centerHexY, centerHexX, centerHexY);
	var topLeftline = 		draw.line(centerHexX, centerHexY, centerHexX, centerHexY);
	//create a TimelineLite instance
	var tl = new TimelineLite();
	//append a to() tween
	tl.to([centerHex, topCenterline.node, topRightline.node, bottomRightline.node,bottomLeftline.node,topLeftline.node,topCenterHex,topRightHex,bottomRightHex,bottomLeftHex,topLeftHex], .05, {opacity:"1"});
	//tl.to(centerHex, .75, { scale:1.1, ease: Bounce.easeOut}, "-=.25");
	tl.fromTo(centerHex, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "+=.15");

	//tl.to(centerHex, .75, { scale:1});
	//tl.to(centerHex, .2, {height:351, width:351});
	//add another sequenced tween (by default, tweens are added to the end of the timeline which makes sequencing simple)
	tl.to(topCenterline.node, .4, {attr:{y2:topCenterHexY}, ease:Linear.easeNone});
	//offset the next tween by 0.75 seconds so there's a gap between the end of the previous tween and this new one
	//tl.to(topCenterHex, 1, {opacity:1}, "-=0.65");
	tl.fromTo(topCenterHex, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=.3");
	
	//overlap the next tween with the previous one by 0.5 seconds (notice the negative offset at the end)
	tl.to(topRightline.node, .4, {attr:{y2:topRightHexY,x2:topRightHexX}, ease:Linear.easeNone}, "-=.8");
	//tl.to(topRightHex, 1, {opacity:1}, "-=0.65");
	tl.fromTo(topRightHex, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=.3");
	//overlap the next tween with the previous one by 0.5 seconds (notice the negative offset at the end)
	tl.to(bottomRightline.node, .4, {attr:{y2:bottomRightHexY,x2:bottomRightHexX}, ease:Linear.easeNone}, "-=.8");
	//tl.to(bottomRightHex, 1, {opacity:1}, "-=0.65");
	tl.fromTo(bottomRightHex, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=.3");
	//overlap the next tween with the previous one by 0.5 seconds (notice the negative offset at the end)
	tl.to(bottomLeftline.node, .4, {attr:{y2:bottomLeftHexY,x2:bottomLeftHexX}, ease:Linear.easeNone}, "-=.8");
	//tl.to(bottomLeftHex, 1, {opacity:1}, "-=0.65");
	tl.fromTo(bottomLeftHex, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=.3");
	//overlap the next tween with the previous one by 0.5 seconds (notice the negative offset at the end)
	tl.to(topLeftline.node, .4, {attr:{y2:topLeftHexY,x2:topLeftHexX}, ease:Linear.easeNone}, "-=.8");
	//tl.to(topLeftHex, 1, {opacity:1}, "-=0.65");
	tl.fromTo(topLeftHex, .4, { scale:0, ease: Bounce.easeOut}, { scale:1, ease: Bounce.easeOut}, "-=.3");
	
	
	
	//now we can control the entire sequence with the standard methods like these:
	
	tl.play();

		//line.animate({ ease: '<', delay: '3.5s' }).attr({ 'y2': topCenterHexY });
/*
	TweenLite.to("#SvgjsLine1008", 3, {strokeDasharray:"3", ease:Power2.easeInOut});
	//var line = draw.line(centerHexX, centerHexY, topCenterHexX, topCenterHexY).stroke({ width: 1 });
	line.animate({ ease: '<', delay: '1.5s' }).attr({ 'stroke-dasharray': '3' }).animate({'stroke-dashoffset': '0'});
	var container = e.item;
	var hexBoxes = container.find('.hexagon-box');
	//console.log(cells);
	TweenMax.set(hexBoxes,{opacity:"1"});
	TweenMax.staggerFrom(hexBoxes, 2, {opacity:"0"}, 0.5);
/*	cells.each(function(){
		var thisCell = jQuery(this);
		console.log(thisCell);
    	TweenLite.to(thisCell, 2, {opacity:"1", delay:0.5});
    })*/
    hTl = tl;
        console.log(tl);
    return tl;

}
