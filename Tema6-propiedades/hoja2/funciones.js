var c = "";
var frase;
var pala;

var posicion = 0;


addEventListener('load', carga, false);

function carga(){
	fuera();
}

function fuera(){
	document.getElementById("caden").setAttribute('hidden','hidden');
	document.getElementById("bot").setAttribute('hidden','hidden');
	}

function myCad(){
	c = document.getElementById("cad").value;
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

function div(){
	frase = c.split(".");
}

function mos(){
	var texto="";
	for(var i = 0; i < frase.length; i++){
		texto += "<p>*Frase " + (i+1) + ": " + frase[i] + "</p>";	
	}
	document.getElementById('respuesta').innerHTML = texto;
}

function nu(){
	var texto="El total de frases es: " + frase.length;
	document.getElementById('respuesta').innerHTML = texto;
}

function extP(){
	var texto="";
	for(var i = 0; i < frase.length; i++){
		var pala = frase[i].split(" ");
		texto +="<p>**FRASE: " + frase[i] + " Con un total de: " + pala.length + " palabras</p>";
		for(var j = 0; j < pala.length; j++){
			texto += "<p>*" + pala[j] + "</p>";
		}			
	}
	document.getElementById('respuesta').innerHTML = texto;
}

function maxL(){
	var texto="La frase más larga es: ";
	var aux = "";
	var an = 0;
	for(var i = 0; i < frase.length; i++){
		if(an < frase[i].length){
			aux = frase[i];
			posicion = i;
		}		
	}
	texto += aux;
	document.getElementById('respuesta').innerHTML = texto;
}

function efrase(){


}