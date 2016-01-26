addEventListener("load", loade);

var Bcrea;
var Bborra;
var nc;
var di;

function loade(){
	crea();
	di = document.getElementById("divs");
}

function fueraTodo(){
	document.getElementById("cr").setAttribute('hidden','hidden');
	document.getElementById("crea").setAttribute('hidden','hidden');

	document.getElementById("bo").setAttribute('hidden','hidden');
	document.getElementById("borra").setAttribute('hidden','hidden');

	document.getElementById("borra").removeAttribute('hidden');
	
}

function crear(){
	fueraTodo();
	document.getElementById("crea").removeAttribute('hidden');
}

function borrar(){
	fueraTodo();
	document.getElementById("borra").removeAttribute('hidden');
}

function bo(){
	this.parentNode.removeChild(this);
}

function crd(){
	nc = document.getElementById(ncrearcion).value;
	//padre divs
	var nodo = document.createElement('div');
	for(var i = 0; i < nc; i++){
		array[i]
	}
}

