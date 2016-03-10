
$(document).ready(function(){

	$("#left").click(function(){
		$(".block").animate({"left":"+=50px"}, "slow");
	});

	$("#right").click(function(){
		$(".block").animate({"left":"-=50px"}, "slow");
	});

	$("div").click(function(){
		$("div").animate({
			width:"70%",
			opacity:"0.5",
			marginLeft:"0.6in",
			fontSize: "3em",
			borderWidth: "10px"
		}, 1500);
	});	


});