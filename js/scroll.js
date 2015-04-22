
function scroll () {
if (element >= numberOfTeams) { //to stop scroll function when draw is complete
//$("html, body").animate({scrollTop:0}, 300);
return;} else {
scrollCounter++;
if (scrollCounter <= 2) {
	$("html, body").animate({scrollTop:0}, 300);
	}else if (scrollCounter <= 4) {
	 $("html, body").animate({scrollTop:385}, 300);
	} else if(scrollCounter <= 6){
	 $("html, body").animate({scrollTop:770}, 300);
	} else if (scrollCounter <= 7) {
	 $("html, body").animate({scrollTop:1275}, 300);
	};
	
	if (scrollCounter == scrollId) {
		scrollCounter = 0;};
}
}