var c = "";
var f;
var frase;
var pala;
var palabra = "";
var posicion = 0;
var contador = 0;
var cadenas = new Array();

addEventListener('load', carga, false);

function carga(){
	contador=0;
	fuera();
}

function fuera(){
	document.getElementById("caden").setAttribute('hidden','hidden');
	//document.getElementById("fas").setAttribute('hidden','hidden');
	document.getElementById("bot").setAttribute('hidden','hidden');
	}

function myCad(){
	c = document.getElementById("cad").value;
	cadenas[contador] = new Cadenita(c);
	contador++;
}



function crea(){
	document.getElementById("caden").removeAttribute('hidden');
} 

function cons(){
	fuera();
	var texto="<h3 class='resB'>Texto creado</h3>";
	document.getElementById("bot").removeAttribute('hidden');
	document.getElementById('respuesta').innerHTML = texto;
}

