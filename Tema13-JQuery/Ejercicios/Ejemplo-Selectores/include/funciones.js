$(document).ready(function(){
	alert("cargando...");
	$("a").click(function(evento){
		jAlert("Has clicado en el enlace!!", "Básico JQuery");
		evento.preventDefault();
	});

	$("#parrafo").click(function(evento){
		jAlert(evento.target.textContent, 'Alert dialog');
	});

	$(".item").click(function(evento){
		jAlert(evento.target.textContent, "Básico JQuery");
	});
});

