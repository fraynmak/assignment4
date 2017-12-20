$(document).ready(function () {
  // Log message to console to verify jQuery has loaded
  console.log('jquery is loaded');
} );

$(".readmore").click(showThisOnClick);
function showThisOnClick() {
	console.log('clicked');
	$(".readmore").hide()
	$("#show-this-on-click").show()
	$(".readless").show()
} ;

$(".readless").click(hideThisOnClick);
function hideThisOnClick() {
	$(".readless").slideUp()
	$("#show-this-on-click").hide()
	$(".readmore").show()
} ;

$(".learnmore").click(learnMore);
function learnMore() {
	$("#learnmoretext").slideDown()
	$(".learnmore").hide()
} ;