var body;
var caja;
var colores=["#bebebe","#505050","#808080"];

addEventListener("load", init);
function init(){
	body=document.body;
	caja=document.getElementsByClassName("color");

	body.style.backgroundColor="#000";
	for(var i=0;i<caja.length;i++){
		caja[i].style.backgroundColor=colores[i];
	}
}

function cambiarFondo(posicion){
	var aux=body.style.backgroundColor;
	body.style.backgroundColor=caja[posicion].style.backgroundColor;
	caja[posicion].style.backgroundColor=aux;
}