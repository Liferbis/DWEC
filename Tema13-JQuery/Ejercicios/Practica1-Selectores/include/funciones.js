var clasActual;

$(document).ready(function(){

	$("#SelectorSimple").click(function(e){
		if(clasActual != null){
			clasActual.removeClass("destacado")
		}

		clasActual = $("div>span");
		clasActual.addClass("destacado");
	});

	$("#SelectorCombinado").click(function(e){
		if(clasActual!=null)clasActual.removeClass("destacado");

		clasActual = $("div>span, ul");
		clasActual.addClass("destacado");
	});

	$("#SelectorHijo").click(function(e){
		if(clasActual!=null)clasActual.removeClass("destacado");

		clasActual = $("ul > li > a");
		clasActual.addClass("destacado");
	});

	$("#SelectorEnlaceEspecifico").click(function(e){
		if(clasActual!=null)clasActual.removeClass("destacado");
	
		clasActual = $("a[href*='http://']");
		clasActual.addClass("destacado");
	});

	$("#SelectorEnlaceCIIN").click(function(e){
		if(clasActual!=null)clasActual.removeClass("destacado");

		clasActual = $("a[href='http://www.ciin.es']");
		clasActual.addClass("destacado");
	});

	$("#SelectorSpanConClase").click(function(e){
		if(clasActual!=null)clasActual.removeClass("destacado");

		clasActual = $("span[class]");
		clasActual.addClass("destacado");
	});

	$("#SelectorPrimerEnlaceEnPag").click(function(e){
		if(clasActual!=null)clasActual.removeClass("destacado");

		clasActual = $("a:first");
		clasActual.addClass("destacado");
	});

	$("#SelectorListaPar").click(function(e){
		if(clasActual!=null)clasActual.removeClass("destacado");

		clasActual = $("li:even");
		clasActual.addClass("destacado");
	});

	$("#SelectorCeldaTabla").click(function(e){
		if(clasActual!=null)clasActual.removeClass("destacado");

		clasActual = $("table#unaTabla td:first-child");
		clasActual.addClass("destacado");
	});

	$("#SelectorCheckedInput").click(function(e){
		if(clasActual!=null)clasActual.removeClass("destacado");

		clasActual = $("input[checked]");
		clasActual.addClass("destacado");
	});

	$("#SelectorPassword").click(function(e){
		if(clasActual!=null)clasActual.removeClass("destacado");
		clasActual = $(":password");
		clasActual.addClass("destacado");

	});

	$("#NotSelectorCheckedInput").click(function(e){
		if(clasActual!=null)clasActual.removeClass("destacado");

		clasActual = $("input:not(:checked)");
		clasActual.addClass("destacado");
	});

});