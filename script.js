$(function(){
	var something = $("#showCir").delay(1500).fadeIn();


$("#showCir").promise().done(function() {
   $("p").append( " I am a Circle! " );
});
})
