var res;

//botones SESSION
var btnGS;
var btnOS;
var btnES;

//botones LOCAL
var btnGO;
var btnOO;
var btnEO;

//DATOS
var nom;
var ema;

addEventListener("load", init);

function init(){	
	res = document.getElementById('respuesta');
	btnGS = document.getElementById("btnGS");
	btnOS = document.getElementById("btnOS");
	btnES = document.getElementById("btnES");
	btnGO = document.getElementById("btnGO");
	btnOO = document.getElementById("btnOO");
	btnEO = document.getElementById("btnEO");

	btnGS.addEventListener("click", guarSesion);
	btnOS.addEventListener("click", obSesion);
	btnES.addEventListener("click", eliSesion);
	btnGO.addEventListener("click", guarLocal);
	btnOO.addEventListener("click", obLocal);
	btnEO.addEventListener("click", eliLocal);

}


function recogeDatos(){
	nom = document.getElementById("nombre").value;
	ema = document.getElementById("email").value;
}

function guarSesion() {
	recogeDatos();
	sessionStorage.nombre=nom;
	sessionStorage.email=ema;  
}

function obSesion() {
	var aux = sessionStorage.getItem("nombre");
	var auxx = sessionStorage.getItem("email");
	document.getElementById("nombre").value = aux;
	document.getElementById("email").value = auxx;
}

function eliSesion() {
	sessionStorage.removeitem("nombre");
	sessionStorage.removeitem("email");
}

function guarLocal() {
	recogeDatos();
	localStorage.nombre=nom; 
	localStorage.email=ema;
}

function obLocal() {
	var aux = localStorage.getItem("nombre");
	var auxx = localStorage.getItem("email");
	document.getElementById("nombre").value = aux;
	document.getElementById("email").value = auxx;
}

function eliLocal() {
	localStorage.removeItem("nombre");
	localStorage.removeItem("email");
}