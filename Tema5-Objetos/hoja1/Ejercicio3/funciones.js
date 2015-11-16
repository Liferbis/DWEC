var num = "";
var c = "";
var p = "";
var pu = "";
var CP = "";
var name = "";

var edificios = new Array();


addEventListener('load', carga, false);

function carga(){
	fuera();
}

function fuera(){
	document.getElementById("edificio").setAttribute('hidden','hidden');
	document.getElementById("plantas").setAttribute('hidden','hidden');
	document.getElementById("prop").setAttribute('hidden','hidden');
}

function mycalle(){
	c = document.getElementById("calle").value;
}

function myNum(){
	num = Number(document.getElementById("numero").value);
}

function myCP(){
	CP = Number(document.getElementById("CP").value);
}

function myplanta(){
	p = Number(document.getElementById("plantas").value);
}

function mypuerta(){
	pu = Number(document.getElementById("puerta").value);
}

function myName(){
	name = document.getElementById("name").value;
}

function crea(){
	document.getElementById("edificio").removeAttribute('hidden');
} 

function cons(){
	fuera();
	var texto="";
	if(c == "" || num == "" || CP==""){
		texto="<h3 class='resM'>NO HAY DATOS <br> debes crear el edificio antes</h3>";
		document.getElementById('respuesta').innerHTML = texto;
	}else{
		document.getElementById("plantas").removeAttribute('hidden');
	}	
}

function pro(){
	var num = "";
	var c = "";
	var name = "";
	document.getElementById("prop").removeAttribute('hidden');
}

function paso1(){
	fuera();
	var texto="";
	if(c == "" || num == "" || CP==""){
		texto="<h3 class='resM'>HAY DATOS INCORRECTOS O VACIOS!! <br> No se guarda ningun dato!!</h3>";
		document.getElementById('respuesta').innerHTML = texto;
	}else{
		cons();
	}

}

function paso2(){
	fuera();
	var texto="";
	if(p == "" || pu == ""){
		texto="<h3 class='resM'>HAY DATOS INCORRECTOS O VACIOS!! <br> No se guarda ningun dato!!</h3>";
	}else{
		var edi = new edificio(c, num, CP);
		edi.PlantaPuerta(p,pu);
		edificios.push(edi);
		texto="<h3 class='resB'>Edificio creado correctamente!!</h3>";	
	}
	document.getElementById('respuesta').innerHTML = texto;
}

function paso3(){
	fuera();
	var texto="";
	var pos=false;
	if(num == "" || c == "" || name == "" ){
		texto="<h3 class='resM'>HAY DATOS INCORRECTOS O VACIOS!! <br> No se guarda ningun dato!!</h3>";
	}else{
		c = c.toUpperCase();
		for(variable in edificios){
			var cal = edificios[variable].calle;
			cal = cal.toUpperCase();
			if(c == cal){
				edificios[variable].AProp(p, pu, name);
				pos=true;
				texto="<h3 class='resB'>Modificado correctamente!!</h3>";
			}
		}
		if(pos == false){
			texto="<h3 class='resM'>No existe esa calle!! <br> No se guardan los datos</h3>";
		}
	}
	document.getElementById('respuesta').innerHTML = texto;
}

function Imprim(){

}
