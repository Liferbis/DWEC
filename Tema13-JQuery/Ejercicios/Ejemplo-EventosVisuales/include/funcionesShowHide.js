var ocultar = function(){
	var r = document.getElementsByTagName("span");
	for(var i = r.length; i > 0 ; i--){
		$('span').prev().hide("slow", );
	}
	
};

$(document).ready(function(){

	$("#ocultar").click( function() {
		$('span:last-child').hide( ocultar);
	});

	$("#mostrar").click( function() {
		$('span').show( "slow");
	});
});
