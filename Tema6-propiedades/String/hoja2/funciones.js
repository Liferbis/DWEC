var c = "";
var f;
var frase;
var pala;
var palabra = "";
var posicion = 0;


addEventListener('load', carga, false);

function carga(){
	fuera();
}

function fuera(){
	document.getElementById("caden").setAttribute('hidden','hidden');
	//document.getElementById("fas").setAttribute('hidden','hidden');
	document.getElementById("bot").setAttribute('hidden','hidden');
	}

function myCad(){
	c = document.getElementById("cad").value;
}

function myFra(){
	f = Number(document.getElementById("fra").value);
}

function myPa(){
	palabra = document.getElementById("pa").value;
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
			an = frase[i].length;
			aux = frase[i];
			posicion = i;
		}		
	}
	texto += aux;
	document.getElementById('respuesta').innerHTML = texto;
}

function efrase(){
	var texto="Elige una frase: </br><ol>";
	
	for(var i = 0; i < frase.length; i++){
		texto +="<li>" + frase[i] + " </li>";			
	}

	texto += "</ol></br>Introduce el número de la frase:</br><input type=number id='fra' min='1' max='" + frase.length + "' oninput='myFra()' placeholder='Número de la frase'><button class='botones' type='button' id='fras' onclick='fras()'>Deletrear frase!!</button>";
	document.getElementById('respuesta').innerHTML = texto;
}

function fras(){
	f = f-1;
	var palabras = frase[f].split(" ");
	var texto="Elige una palabra: </br>";
	
	for(var i = 0; i < palabras.length; i++){
		texto +="<li>" + palabras[i] + " </li>";			
	}

	texto += "</br>Introduce la palabra que quieres deletrear:</br><input type='text' id='pa'  oninput='myPa()' placeholder='Introduce la palabra'><button class='botones' type='button' id='del' onclick='del()'>Deletrear palabra!!</button>";
	document.getElementById('respuesta').innerHTML = texto;

}

function del(){
	var texto = "<strong>" + palabra + "</strong><table class='table'><thead><tr><th>Posición</th><th>Letra</th></tr></thead><tbody>";
	for (var i = 0; i < palabra.length; i++) {
		texto += "<tr><td>" + i + "</td><td>" + palabra.charAt(i) + "</td></tr>"; 
	}
	texto += "</tbody></table>";
	document.getElementById('respuesta').innerHTML = texto;
}
			
		
function eifrase(){
	var texto = "<strong>" + palabra + "</strong><table class='table'><thead><tr><th>Posición</th><th>Letra</th></tr></thead><tbody>";
	for (var i = (palabra.length-1); i >= 0 ; i--) {
		texto += "<tr><td>" + i + "</td><td>" + palabra.charAt(i) + "</td></tr>"; 
	}
	texto += "</tbody></table>";
	document.getElementById('respuesta').innerHTML = texto;
}
