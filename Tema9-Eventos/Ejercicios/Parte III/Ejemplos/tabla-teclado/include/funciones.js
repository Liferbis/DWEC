addEventListener("load", init);

var elemento;
var kpu;
var kpr;
var ksu;

function init(){

	elemento = document.documentElement;
	// kpu = document.getElementById("ky_pu");
	// kpr = document.getElementById("ky_pr");
	// ksu = document.getElementById("ky_su");
	
	elemento.addEventListener("keypress", keyss);
	elemento.addEventListener("keydown", keyss);
	elemento.addEventListener("keyup", keyss);
}

function keyss(){
	
	if(event.type == "keypress"){
		var texto = event.keyCode;
		document.getElementById('ky_rpr').innerHTML = texto;
		var letra = String.fromCharCode(texto);
		document.getElementById('ky').innerHTML = letra;
	}

	if(event.type == "keydown"){
		var aux = event.keyCode;
		document.getElementById('ky_rpu').innerHTML = aux;
	}

	if(event.type == "keyup"){
		var aux = event.keyCode;
		document.getElementById('ky_rsu').innerHTML = aux;
	}

	if(!event.type){
		alert("5");
	}

}	
	

// function kdow(){
	
// }

// function ksuelta(){
	
// }