addEventListener('load', carga, false);
var fe;

function carga(){
	fuera();
	var hoy = new Date();
	fe = new misFechas(hoy);
}

function fuera(){
	document.getElementById("restD").setAttribute('hidden','hidden');
	document.getElementById("sumD").setAttribute('hidden','hidden');
	document.getElementById("sumA").setAttribute('hidden','hidden');
}

function restaD(){
	document.getElementById("restD").removeAttribute('hidden');
}

function sumaD(){
	document.getElementById("sumD").removeAttribute('hidden');
}

function sumaA(){
	document.getElementById("sumA").removeAttribute('hidden');
}

function resta(){
	var texto = "";
	var aux =parseInt(document.fuR.R1.value);
	
	if(isNaN(aux)){
		texto = "<article class='resM' >ERROR tiene que ser un número, no una letra!!</article>";
	}else{
		fe.RestaDias(aux);
		texto = "<article class='resB' >" + fe.visualiza() + "</article>";
	}
	document.getElementById('respuesta').innerHTML = texto;
	
}

function suma(){
	fuera();
	var texto = "";
	var aux = parseInt(document.fuS.S1.value);
	if(isNaN(aux)){
		texto = "<article class='resM' >ERROR tiene que ser un número, no una letra!!</article>";
	}else{
		fe.SumaDias(aux);
		texto = "<article class='resB' >" + fe.visualiza() + "</article>";
	}
	document.getElementById('respuesta').innerHTML = texto;
}

function sumaA(){
	fuera();
	var texto = "";
	var aux = parseInt(document.fuSA.SA1.value);
	if(isNaN(aux)){
		texto = "<article class='resM' >ERROR tiene que ser un número, no una letra!!</article>";
	}else{
		fe.SumaAnos(aux);
		texto = "<article class='resB' >" + fe.visualiza() + "</article>";
	}
	document.getElementById('respuesta').innerHTML = texto;
}

function vis(){
	fuera();
	var texto = "<article class='resB' >" + fe.visualiza() + "</article>";
	document.getElementById('respuesta').innerHTML = texto;
}