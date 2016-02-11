var elemento;
var nodo;
var imagenes = new Array();
var non = new Array();
var documento;
var contenedor;

addEventListener("load", init);

function init(){
	imagenes =  [
			"imagenes/capricornio.gif",
			"imagenes/leo.gif",
			"imagenes/cancer.gif",
			"imagenes/aries.gif",
			"imagenes/libra.gif",
			"imagenes/piscis.gif",
			"imagenes/tauro.gif",
			"imagenes/virgo.gif",
			"imagenes/geminis.gif",			
			"imagenes/acuario.gif",
			"imagenes/escorpio.gif",
			"imagenes/sagitario.gif"
		];

	contenedor = document.getElementById("horos");
    elemento = document.getElementById("boton");
    nodo = document.getElementById('res');

    elemento.addEventListener("click", submitForm);
}

function cargarHoros(){
	BorraContenido(conte);
	cargaDatos(tag, contenido, null);
}

function BorraContenido(conte){
	while (conte.hasChildNodes() ) {
		conte.removeChild(conte.childNodes[0]);
	}	
}

function cargaDatos(tag, contenido, arrAtt){
	if(contenido != null){
		contenedor.appendChild(document.createTextNode(texto));
	}

	if( tag != null){

	}


}
	