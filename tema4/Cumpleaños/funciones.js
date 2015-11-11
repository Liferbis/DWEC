
var Meses = ["Enero", "Febrero", "Marzo", "Abril",	"Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var nom;
var fe;
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
	if(nom=="" && fe ==""){
		alert("HAY DATOS ÇINCORRECTOS O VACIOS!!\n No se guarda ningun dato!!");
	}else{
		persona = [fe , nom];
		cumpleanos.push(persona);
		alert("Introducido correctamente!!");
		fuera();
		nom = "";
		fe = "";
	}
}

function mostrarTodo(){
	var texto= "<table class='tabla'><thead><tr><th>Mes</th><th>Nombre</th></tr></thead><tbody>";
	for(variable in cumpleanos){
		texto += "<tr>";
		for (var i = 0; i < cumpleanos[variable].length; i++) {
			texto += "<td>" + cumpleanos[variable][i] + "</td>";
		};
		texto += "</tr>";
	}
	document.getElementById('tabla').innerHTML = texto;
}