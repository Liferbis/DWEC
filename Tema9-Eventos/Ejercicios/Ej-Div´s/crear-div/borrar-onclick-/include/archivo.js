addEventListener("load", loade);

var Bcrea;
var Bborra;
var nc;
var di;

function loade(){
	di = document.getElementById("divs");
	fueraTodo();
}

function fueraTodo(){
	//document.getElementById("cr").setAttribute('hidden','hidden');
	document.getElementById("crea").setAttribute('hidden','hidden');

	//document.getElementById("bo").setAttribute('hidden','hidden');
	document.getElementById("borra").setAttribute('hidden','hidden');

	document.getElementById("botones").removeAttribute('hidden');
	//document.getElementById("bo").removeAttribute('hidden');
	
}

function fueraBotones(){
	document.getElementById("botones").setAttribute('hidden','hidden');
}

function crear(){
	fueraBotones();
	document.getElementById("crea").removeAttribute('hidden');
}

function borrar(){
	fueraTodo();
	fueraBotones();
	document.getElementById("borra").removeAttribute('hidden');
}

function bo(){
	// sin evento seria:
	// function bo(objet){

	di.removeChild(this);
}

function ncrea(){
	nc = document.getElementById("ncrearcion").value;
}

function crd(){
	
	//padre divs
	
	for(var i = 0; i < nc; i++){
		var nodo = document.createElement('div');
		nodo.setAttribute("class", "esd");
		nodo.addEventListener("click", bo);
		// sin evento seria:
		//nodo.setAttribute("onclick", "bo(this)");
		di.appendChild(nodo);

	}
}

