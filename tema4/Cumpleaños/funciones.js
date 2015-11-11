
var Meses =new Array();
var nom;
var fe;
var mesB;
var persona = new Array();
var cumpleanos = new Array();

addEventListener('load', meee, false);

function meee(){
	Meses = ["Enero",
				"Febrero",
				"Marzo",
				"Abril",
				"Mayo",
				"Junio",
				"Julio",
				"Agosto",
				"Septiembre",
				"Octubre",
				"Noviembre",
				"Diciembre"
			];
	fuera();
	
}

function myNombre(){
	nom = document.getElementById("nombre").value;
}

function myFunction(){
	var x = document.getElementById("fecha").value;
	x = parseInt(x.substring(5,7));
	fe = Meses[(x-1)];
}

function introducir(){
	nom = "";
	fe = "";
	dentro();
}

function fuera(){
	document.getElementById("nombre").disabled=true;
	document.getElementById("fecha").disabled=true;
	document.getElementById("enviar").disabled=true;
	document.getElementById("nombre").setAttribute('hidden','hidden');
	document.getElementById("fecha").setAttribute('hidden','hidden');
	document.getElementById("enviar").setAttribute('hidden','hidden');
}

function dentro(){
	document.getElementById("nombre").disabled=false;
	document.getElementById("fecha").disabled=false;
	document.getElementById("enviar").disabled=false;
	document.getElementById("nombre").removeAttribute('hidden');
	document.getElementById("fecha").removeAttribute('hidden');
	document.getElementById("enviar").removeAttribute('hidden');
}

function enviarDatos(){
	var texto;
	if(nom=="" && fe ==""){
		texto="<table class='tabla'><thead><tr><th>HAY DATOS INCORRECTOS O VACIOS!!\n No se guarda ningun dato!!</th></tr></thead></table>";
	}else{
		persona = [fe , nom];
		cumpleanos.push(persona);
		texto="<table class='tabla'><thead><tr><th>Introducido correctamente!!</th></tr></thead></table>";
		fuera();
		nom = "";
		fe = "";
	}
	document.getElementById('tabla').innerHTML = texto;
}

function mostrarTodo(){
	var texto;
	if(cumpleanos.length == 0){
		texto="<table class='tabla'><thead><tr><th>No hay ningun cumpleaños</th></tr></thead></table>";
	}else{
		texto= "<table class='tabla'><thead><tr><th>Mes</th><th>Nombre</th></tr></thead><tbody>";
		for(variable in cumpleanos){
			texto += "<tr>";
			for (var i = 0; i < cumpleanos[variable].length; i++) {
				texto += "<td>" + cumpleanos[variable][i] + "</td>";
			};
			texto += "</tr>";
		}
	}
	
	document.getElementById('tabla').innerHTML = texto;
}

function mostrarMes(){
	var contador=0;
	var texto;
	if(mesB== undefined){
		texto="<table class='tabla'><thead><tr><th>Debe seleccionar el mes para poder mostrar datos... </th></tr></thead></table>";
	}else{
		texto= "<table class='tabla'><thead><tr><th>Mes</th><th>Nombre</th></tr></thead><tbody>";
		for(variable in cumpleanos){
			texto += "<tr>";
			for (var i = 0; i < cumpleanos[variable].length; i++) {
				if(cumpleanos[variable][i] == mesB){
					contador++;
					texto += "<td>" + cumpleanos[variable][i] + "</td>";
					texto += "<td>" + cumpleanos[variable][i+1] + "</td>";
				}
			};
			texto += "</tr>";
		}
		if(contador == 0){
			texto="<table class='tabla'><thead><tr><th>En el mes de " + mesB + " no hay ningun cumpleaños</th></tr></thead></table>";
		}
	}
	
	document.getElementById('tabla').innerHTML = texto;
}

function mymes(){
	mesB = document.getElementById("me").value;
}