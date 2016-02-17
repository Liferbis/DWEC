addEventListener("load", load);

var inputs;

function load(){
	inputs = document.getElementById("formulario").getElementsByTagName("input");

	for(var i = 0; i< inputs.length; i++){
		inputs[i].addEventListener("focus", foco);
		// BLUR cuando se va el foco
		inputs[i].addEventListener("blur", fuerafoco);
	}
}

function foco(){
	this.style.background = " #c0c0c0";
}
function fuerafoco(){
	this.style.background = " #fff";
}