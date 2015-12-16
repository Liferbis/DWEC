var c = "";
var f;
var frase;
var pala;
var palabra = "";
var posicion = 0;
var contador;
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



function crea(){
	document.getElementById("caden").removeAttribute('hidden');
} 

function cons(){
	fuera();
	var texto="<h3 class='resB'>Texto creado</h3>";
	document.getElementById("bot").removeAttribute('hidden');
	document.getElementById('respuesta').innerHTML = texto;
	c = document.getElementById("cad").value;
	var au = new Cadenita(c);
	cadenas.push(au); 
	contador++;
	c = "";
}

function ris(){
	var texto="";
	for(var i = 0; i < cadenas.length ; i++){
		texto += cadenas[i].ristra();
	}
	document.getElementById('respuesta').innerHTML = texto;
}

function efrase(){
	var texto="Elige una cadena: </br><ol>";
	
	for(var i = 0; i < cadenas.length; i++){
		texto +="<li>" + cadenas[i] + " </li>";			
	}

	texto += "</ol></br>Introduce el número de la cadena:</br><input type=number id='fra' min='1' max='" + cadenas.length + "' placeholder='Número de la frase'><button class='botones' type='button' id='fras' onclick='fras()'>Deletrear inverso!!</button>";
	document.getElementById('respuesta').innerHTML = texto;
}

function fras(){
	f = Number(document.getElementById("fra").value);
}

function eifrase(){
	var texto = cadenas[f].reves();
	
	document.getElementById('respuesta').innerHTML = texto;
}