var musica = new Array();
var tit;
var gru;
var fe;

addEventListener('load', carga, false);

function carga(){
	fuera();
}

function fuera(){
	document.getElementById("nombre").disabled=true;
	document.getElementById("grupo").disabled=true;
	document.getElementById("fecha").disabled=true;
	document.getElementById("enviar").disabled=true;

	document.getElementById("nombre").setAttribute('hidden','hidden');
	document.getElementById("grupo").setAttribute('hidden','hidden');
	document.getElementById("fecha").setAttribute('hidden','hidden');
	document.getElementById("enviar").setAttribute('hidden','hidden');
}

function dentro(){
	document.getElementById("nombre").disabled=false;
	document.getElementById("fecha").disabled=false;
	document.getElementById("grupo").disabled=false;
	document.getElementById("enviar").disabled=false;

	document.getElementById("nombre").removeAttribute('hidden');
	document.getElementById("grupo").removeAttribute('hidden');
	document.getElementById("fecha").removeAttribute('hidden');
	document.getElementById("enviar").removeAttribute('hidden');
}

function myTitulo(){
	tit = document.getElementById("nombre").value;
}

function myGrupo(){
	gru = document.getElementById("grupo").value;
}

function myFunction(){
	fe = document.getElementById("fecha").value;
}

function introducir(){
	tit = "";
	gru = "";
	fe = "";
	dentro();
}

function Gdatos(){
	var texto;
	if(tit == "" || fe == "" || gru == ""){
		texto="<h3 class='resM'>HAY DATOS INCORRECTOS O VACIOS!! <br> No se guarda ningun dato!!</h3>";
	}else{
		var d = new Disco(tit, gru, fe);
		musica.push(d);
		texto="<h3 class='resB'>Introducido correctamente!!</h3>";
		fuera();
		tit = "";
		gru = "";
		fe = "";
	}

	document.getElementById('respuesta').innerHTML = texto;
}

function mostrarTodo(){
	var texto;
	if(musica.length == 0){
		texto="<h3 class='resM'>No tienes musica!!</h3>";
	}else{
		
		for(variable in musica){
			texto= "<p class='resB'>";
			texto += musica[variable].ver();
			texto += "</p>";
		}

	}
	
	document.getElementById('respuesta').innerHTML = texto;
}