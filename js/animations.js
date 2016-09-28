jQuery( document ).ready(function(){
	jQuery('.stat-value').each(function(){
		var thisParWidth = jQuery(this).parent('.stat-row').width();
		var prevItemWidth = jQuery(this).prev('.stat-name').width();
		var thisWidth = jQuery(this).width();
		var paddingUse = thisParWidth - prevItemWidth - thisWidth - 11;
		jQuery(this).css('padding-left', paddingUse);
	})
	//jQuery('.home-section').each(function(){jQuery(this).scrollIntoView();});
	jQuery('.industry-image').each(function(){jQuery(this).scrollIntoView();});
	jQuery('.industry-info').each(function(){jQuery(this).scrollIntoView();});
	jQuery('#about-stats-section').scrollIntoView();
	jQuery('#economic-ops').scrollIntoView();
	jQuery('.economic-indicators').scrollIntoView();
	jQuery('.hexagon-boxes').scrollIntoView();
	jQuery('.mv-stats-container').scrollIntoView();
	jQuery('.wage-info').scrollIntoView();
	jQuery('#business-assistance').scrollIntoView();
 

	jQuery('.industry-left').on('intoView', slideLeft);
	jQuery('.industry-right').on('intoView', slideRight);
	jQuery('#about-stats-section').on('intoView', expandUp);
	jQuery('#economic-ops').on('intoView', expandUp);
	jQuery('.economic-indicators').on('intoView', showEachIndi);
	jQuery('.hexagon-boxes').on('intoView', showEachHex);
	jQuery('.mv-stats-container').on('intoView', showStats);
	jQuery('.wage-info').on('intoView', showWageStats);
	jQuery('#business-assistance').on('intoView', runStatCounter);

});
function slideLeft (e) {
	console.log('slideLeft');
	//e.item.animateCss('slideInLeft');
	TweenLite.to(e.item, 1, {left:"0", ease:Power2.easeInOut});
}

function slideRight (e) {
	console.log('slideRight');
	//e.item.animateCss('slideInRight')
	TweenLite.to(e.item, 1, {right:"0", ease:Power2.easeInOut});
}
function expandUp (e) {
	console.log('expandUp');
	//e.item.children('.content-width').animateCss('slideInUp');
	TweenLite.set(e.item, {height:"auto"});
    TweenLite.from(e.item, 2, {height:0});
    TweenLite.to(e.item, 2, {paddingTop:"4rem",paddingBottom:"4rem", onComplete:runCounter(e.item)});
}
function runCounter (e) {
	console.log('eh ');
	console.log(e);
	var ods = e.find('.odometer');
	ods.each(function(){
		console.log(jQuery(this).attr('data-number-value'));
		jQuery(this).html(jQuery(this).attr('data-number-value'));
	})
}
function runStatCounter (e) {
	console.log('eh2 ');
	console.log(e.item);
	var eh = e.item;
	var ods = eh.find('.odometer');
	ods.each(function(){
		console.log(jQuery(this).attr('data-number-value'));
		jQuery(this).html(jQuery(this).attr('data-number-value'));
	})
}

function showEachIndi (e) {
	console.log('showEachIndi');
	var draw = SVG('eco-indicators-canvas');
	var canvas = jQuery("#eco-indicators-canvas");
	var mvHeight = jQuery('#mv-stats td.row-title .cell-container').height();
	var mvPos = jQuery('#mv-stats').position();
	var nyPos = jQuery('#ny-stats').position();
	var usPos = jQuery('#us-stats').position();
	var mvCenter = mvPos.top + (mvHeight/2);
	//var mvLine = 	draw.line(mvPos.left, mvCenter, 999, mvCenter);
	var table = e.item;
	var cells = table.find('.cell-container');
	var tl = new TimelineLite();
	tl.staggerTo(cells, 2, {opacity:"1"}, 0.5);
	tl.play();
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
	console.log('showStats');
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

	tl.to('#stat-pop .stat-name .cell-info', 1, {opacity:1});
	tl.to('#stat-pop .stat-value', 3, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-pop .stat-value .cell-info', 1, {opacity:1}, "-=0.25");
	tl.to('#stat-med-age  .stat-name .cell-info', 1, {opacity:1}, "-=0.75");
	tl.to('#stat-med-age .stat-value', 3, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-med-age .stat-value .cell-info', 1, {opacity:1}, "-=0.25");
	tl.to('#stat-young-age  .stat-name .cell-info', 1, {opacity:1}, "-=0.75");
	tl.to('#stat-young-age .stat-value', 3, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-young-age .stat-value .cell-info', 1, {opacity:1}, "-=0.25");
	tl.to('#stat-wage  .stat-name .cell-info', 1, {opacity:1}, "-=0.75");
	tl.to('#stat-wage .stat-value', 3, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-wage .stat-value .cell-info', 1, {opacity:1}, "-=0.25");
	


tl.play();

	
	//TweenLite.to(".stat-value", 5, {paddingLeft:"10px"});
}
function showWageStats (e) {
	console.log('showWageStats');
	var statDiv = e.item;

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

	tl.to('#stat-mfg .stat-name .cell-info', 1, {opacity:1});
	tl.to('#stat-mfg .stat-value', 3, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-mfg .stat-value .cell-info', 1, {opacity:1}, "-=0.25");
	tl.to('#stat-food  .stat-name .cell-info', 1, {opacity:1}, "-=0.75");
	tl.to('#stat-food .stat-value', 3, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-food .stat-value .cell-info', 1, {opacity:1}, "-=0.25");
	tl.to('#stat-aviation  .stat-name .cell-info', 1, {opacity:1}, "-=0.75");
	tl.to('#stat-aviation .stat-value', 3, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-aviation .stat-value .cell-info', 1, {opacity:1}, "-=0.25");
	tl.to('#stat-cyber  .stat-name .cell-info', 1, {opacity:1}, "-=0.75");
	tl.to('#stat-cyber .stat-value', 3, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-cyber .stat-value .cell-info', 1, {opacity:1}, "-=0.25");
	tl.to('#stat-nano  .stat-name .cell-info', 1, {opacity:1}, "-=0.75");
	tl.to('#stat-nano .stat-value', 3, {paddingLeft:"10px"}, "-=0.25");
	tl.to('#stat-nano .stat-value .cell-info', 1, {opacity:1}, "-=0.25");
	


tl.play();

	
	//TweenLite.to(".stat-value", 5, {paddingLeft:"10px"});
}
function showEachHex (e) {
	console.log('showEachHex');
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
tl.to([centerHex, topCenterline.node, topRightline.node, bottomRightline.node,bottomLeftline.node,topLeftline.node], 2, {opacity:"1"});
//add another sequenced tween (by default, tweens are added to the end of the timeline which makes sequencing simple)
tl.to(topCenterline.node, 2, {attr:{y2:topCenterHexY}, ease:Linear.easeNone});
//offset the next tween by 0.75 seconds so there's a gap between the end of the previous tween and this new one
tl.to(topCenterHex, 2, {opacity:1});

//overlap the next tween with the previous one by 0.5 seconds (notice the negative offset at the end)
tl.to(topRightline.node, 2, {attr:{y2:topRightHexY,x2:topRightHexX}, ease:Linear.easeNone}, "-=0.5");
tl.to(topRightHex, 2, {opacity:1});
//overlap the next tween with the previous one by 0.5 seconds (notice the negative offset at the end)
tl.to(bottomRightline.node, 2, {attr:{y2:bottomRightHexY,x2:bottomRightHexX}, ease:Linear.easeNone}, "-=0.5");
tl.to(bottomRightHex, 2, {opacity:1});
//overlap the next tween with the previous one by 0.5 seconds (notice the negative offset at the end)
tl.to(bottomLeftline.node, 2, {attr:{y2:bottomLeftHexY,x2:bottomLeftHexX}, ease:Linear.easeNone}, "-=0.5");
tl.to(bottomLeftHex, 2, {opacity:1});
//overlap the next tween with the previous one by 0.5 seconds (notice the negative offset at the end)
tl.to(topLeftline.node, 2, {attr:{y2:topLeftHexY,x2:topLeftHexX}, ease:Linear.easeNone}, "-=0.5");
tl.to(topLeftHex, 2, {opacity:1});



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
}
