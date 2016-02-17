addEventListener("load",init);
var viejo;
var nuevo;
function init(){
	viejo=document.getElementById("enlaces");
	nuevo=document.getElementById("enlacesnuevos");
}

function clonarNodos(){
	var hijos=viejo.childNodes;
	var it=hijos.length;

	for(var i=0;i<hijos.length;i++){
		var nodo=hijos[i].cloneNode(true);
		nuevo.appendChild(nodo);
	}
}