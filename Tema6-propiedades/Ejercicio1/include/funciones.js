var n = "";

addEventListener('load', carga, false);

function carga(){
	fuera();
}

function fuera(){
	document.getElementById("caden").setAttribute('hidden','hidden');
}

function myNum(){
	n = document.getElementById("num").value;	
}

function cons(){
	document.getElementById("caden").removeAttribute('hidden');
}

function crea(){
	fuera();
	var texto="";
	if(n == ""){
		texto="<h3 class='resM'>MAL, el numero es incorrecto </h3>";
	}else{
		texto = "<article class='TT'>Numero: ";
		texto += n;
		texto += "</article><article class='resB'>Métodos Ceil: ";
		texto += Math.ceil(n);
		texto +="</article><article class='resB'>Método Floor:";
		texto += Math.floor(n);
		texto +="</article><article class='resB'>Métodos Round: ";
		texto += Math.round(n);
		texto +="</article><article class='resB'>Métodos ParseInt: "
		texto += parseInt(n);
		texto +="</article>";
	}

	document.getElementById('respuesta').innerHTML = texto;
}