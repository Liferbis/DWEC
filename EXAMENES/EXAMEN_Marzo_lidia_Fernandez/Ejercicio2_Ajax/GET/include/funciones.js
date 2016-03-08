var caja;
var nodoRespuesta;
var dn;
var btnDn;

var nombre;
var apellido;
var direccion;

addEventListener("load", init);

function init(){	
	caja = document.getElementById('dat');

	caja.addEventListener("keydown", esNumero);
	//caja.addEventListener("input", setDisponibles);
	nodoRespuesta = document.getElementById('respuesta');
	btnDn =document.getElementById("btnDn");

	btnDn.addEventListener("click", comienzo);
}

function esNumero(){
	var tecla=event.keyCode;
	
	if(tecla == 97){
		caja.value = "1";
	}else if(tecla == 98){
		caja.value = "2";
	}else if(tecla == 99){
		caja.value = "3";	
	}else{
		event.preventDefault();
	}
}

function comienzo() {
	dn = caja.value;
	submitForm(dn);
}

function cargarDatos(arr){
	var n = arr.substring((arr.indexOf("nombre")+9), (arr.indexOf(",")-1)) ;
	var a = arr.substring((arr.indexOf("apellido")+11), (arr.lastIndexOf(",")-1));
	var d = arr.substring((arr.indexOf("direccion")+12), (arr.lastIndexOf("'")));
	
	borrarHijos(nodoRespuesta);

	var arrAr = new Array();
	arrAr['id'] = "nom";
	nodoRespuesta.appendChild(CrearEtiquetas('p', n, arrAr));
	
	

	var arrAr = new Array();
	arrAr['id'] = "ape";
	nodoRespuesta.appendChild(CrearEtiquetas('p', a, arrAr));
	

	var arrAr = new Array();
	arrAr['id'] = "dire";
	nodoRespuesta.appendChild(CrearEtiquetas('p', d, arrAr));


	nombre = document.getElementById("nom");
	apellido = document.getElementById("ape");
	direccion = document.getElementById("dire");

	apellido.addEventListener("mouseover", clase);
	nombre.addEventListener("mouseover", clase);
	direccion.addEventListener("mouseover", clase);
	apellido.addEventListener("mouseout", normal);
	nombre.addEventListener("mouseout", normal);
	direccion.addEventListener("mouseout", normal);
	
	
}

function clase() {
	this.style.color = "#f54";
	this.style.border = "1px solid #0FD8EF";
}

function normal() {
	this.style.color = "#000";
	this.style.border = "0px  ";
}






