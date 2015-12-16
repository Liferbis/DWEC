var c = "";
var a = "";
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
	var texto="";
	if(c.length < 10 || c.length == 10 ){
		texto="<h3 class='resM'>MAL, la cadena tiene que tener mas de 10 caracteres </h3>";
	}else{
		texto="<h3 class='resB'>Cadena creada</h3>";
		document.getElementById("bot").removeAttribute('hidden');
	}	
	document.getElementById('respuesta').innerHTML = texto;
}

function oc(){
	var texto="El octavo caracter es: ";
	texto += c.charAt(8);
	document.getElementById('respuesta').innerHTML = texto;
}

function pri(){
	var aux = c.charAt(8);
	var texto="La 1º posición en la que aparece es: ";
	texto += c.indexOf(aux);
	document.getElementById('respuesta').innerHTML = texto;
}

function ult(){
	var aux = c.charAt(8);
	var texto="La última posición en la que aparece es: ";
	texto += c.lastIndexOf(aux);
	document.getElementById('respuesta').innerHTML = texto;
}

function cuat(){

	a = c.substring(c.indexOf(c.charAt(8)), c.lastIndexOf(c.charAt(8)));
	var texto = "El resultado es: " + a;
	document.getElementById('respuesta').innerHTML = texto;
}

function maxM(){
	var ca = "";
	var aux = "";
	for(var i = 0; i < a.length; i++){
		if(i%2==0){
			aux = a.charAt(i);
			aux = aux.toUpperCase();
			ca += aux;
		}else{
			aux = a.charAt(i);
			aux = aux.toLowerCase();
			ca += aux;
		}
	}
	var texto = "El resultado es: " + ca;
	document.getElementById('respuesta').innerHTML = texto;
}