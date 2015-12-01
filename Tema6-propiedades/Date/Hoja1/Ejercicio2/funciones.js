addEventListener('load', carga, false);

var x1;
var x2;

function carga(){
	fuera();
}

function fuera(){
	document.getElementById("caden").setAttribute('hidden','hidden');
}

function cons(){
	document.getElementById("caden").removeAttribute('hidden');
}

function resta(){
	var texto = "";

	x1 = new Date(document.fuu.d1.value);
	x2 = new Date(document.fuu.d2.value);
	
	if(x1<x2){
		texto = "<p >ERROR la fecha 1 tiene que ser mayor!!</p>";
	}else{
		texto = "<p >Milisegundos: ";
		texto += (x1-x2);
		texto += "</p>";
		texto += "<p >Dias: ";
		texto += ((x1-x2)/86400000);
		texto += "</p>";
	}
		
	document.getElementById('respuesta').innerHTML = texto;
}