var clientes = new Array();
var saldo;
var per;
var fe;
var dn;

addEventListener('load', carga, false);

function carga(){
	var pers = new Persona("LIDIA", "75550677x", "LA RABIA", 666666666);
	var otro = new Cuenta(pers,0000666888999222563325, 1000000 );
	clientes.push(otro);

	var pers = new Persona("LUIS", "13111999z", "LA PESTE", 766766766);
	var otro = new Cuenta(pers,02226668882254444, 500 );
	clientes.push(otro);

	var pers = new Persona("PEPO", "13589699a", "LA DESGANA", 945856958);
	var otro = new Cuenta(pers,225874256987456, 20 );
	clientes.push(otro);

	fuera();
}

function fuera(){
	document.getElementById("saldo").disabled  = true;
	document.getElementById("person").disabled = true;
	document.getElementById("enviar").disabled = true;
	document.getElementById("retira").disabled = true;

	document.getElementById("saldo").setAttribute('hidden','hidden');
	document.getElementById("person").setAttribute('hidden','hidden');
	document.getElementById("enviar").setAttribute('hidden','hidden');
	document.getElementById("retira").setAttribute('hidden','hidden');
}

function dentro(){
	document.getElementById("saldo").disabled  = false;
	document.getElementById("person").disabled = false;
	document.getElementById("enviar").disabled = false;
	document.getElementById("retira").disabled = false;

	document.getElementById("saldo").removeAttribute('hidden');
	document.getElementById("person").removeAttribute('hidden');
	document.getElementById("enviar").removeAttribute('hidden');
	document.getElementById("retira").removeAttribute('hidden');
}

function mySaldo(){
	saldo = Number(document.getElementById("saldo").value);
}

function myPer(){
	per = document.getElementById("person").value;
}

function introducir(){
	saldo = "";
	per = "";
	dentro();
}

function Idatos(){
	fuera();
	var texto;

	if(saldo == "" || per == ""){
		texto="<h3 class='resM'>HAY DATOS INCORRECTOS O VACIOS!! <br> No se guarda ningun dato!!</h3>";
	
	}else{
		per=per.toUpperCase();
		var pos=false;
		for(variable in clientes){
			var clien = clientes[variable].DatosP.Nombre;
			var clien = clien.toUpperCase();
			if(clien == per){
				clientes[variable].inser(saldo);
				pos=true;
				texto="<h3 class='resB'>Modificado correctamente!!</h3>";
			}
		}

		if(pos == false){
			texto="<h3 class='resM'>No existe esa persona!!</h3>";
		}
	}
	document.getElementById('respuesta').innerHTML = texto;
}

function Rdatos(){
	fuera();
	var texto;

	if(saldo == "" || per == ""){
		texto="<h3 class='resM'>HAY DATOS INCORRECTOS O VACIOS!! <br> No se guarda ningun dato!!</h3>";
	
	}else{
		per=per.toUpperCase();
		var pos=false;
		for(variable in clientes){
			var clien = clientes[variable].DatosP.Nombre;
			var clien = clien.toUpperCase();
			if(clien == per){
				clientes[variable].ret(saldo);
				pos=true;
				texto="<h3 class='resB'>Modificado correctamente!!</h3>";
			}
		}

		if(pos == false){
			texto="<h3 class='resM'>No existe esa persona!!</h3>";
		}
	}
	document.getElementById('respuesta').innerHTML = texto;
}

function mostrarTodo(){
	fuera();
	var texto="";
	if(clientes.length == 0){
		texto="<h3 class='resM'>No tienes clientes!!</h3>";
	}else{
		
		for(variable in clientes){
			texto += "<p class='resB'>";
			texto += clientes[variable].ver();
			texto += "</p>";
		}

	}
	
	document.getElementById('respuesta').innerHTML = texto;
}

function mostrarUS(){
	fuera();
	var texto="";
	if(clientes.length == 0){
		texto="<h3 class='resM'>No tienes clientes!!</h3>";
	}else{
		
		for(variable in clientes){
			texto += "<p class='resB'>Nombre: <strong>";
			texto += clientes[variable].DatosP.Nombre;
			texto += "</strong> Saldo: <strong>";
			texto += clientes[variable].Saldo;
			texto += "</strong></p>";
		}

	}
	
	document.getElementById('respuesta').innerHTML = texto;
}