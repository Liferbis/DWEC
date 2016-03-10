var ocultar=function () { $(this).prev().hide("fast", ocultar); }

$(document).ready(function(){

	$("#ocultar").click( function() {
		$('span:last-child').hide( ocultar);
	});

	$("#mostrar").click( function() {
		$('span').show(500);
	});
});
