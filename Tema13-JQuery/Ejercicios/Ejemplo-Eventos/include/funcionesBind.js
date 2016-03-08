
$(document).ready(function(){

	$("p").bind("click mouseenter mouseleave", function(e){
		if($(this).css("color") != "rgb(255, 0, 0)"){
			$(this).css("color","rgb(255, 0, 0)");
		}else{
			$(this).css("color","rgb(0, 0, 255)");
		}
	});	
	
	//DESACTIVA EL CLICK DE LA FUNCION ANTERIOR
	$("#btn").click(function(e){
		$("p").unbind('click');
	});


});