var poner_rojo = function(){ $(this).css("color", "rgb(255, 0, 0)")};
var poner_azul = function(){ $(this).css("color", "rgb(0, 0, 255)")};

$(document).ready(function(){

	$("p").toggle(poner_rojo,poner_azul);
		
	//Con libreria 1.2.6 sino no funciona
	


});