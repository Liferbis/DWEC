var elemento;
var nodoSelected;
var nodoRespuesta;
var nodoBoton;
var nodoImagen;
var nodoBotonO;
var imagenes = new Array();
var non = new Array();
var documento;
var contenedor;

var img;

addEventListener("load", init);

function init(){
	imagenes =  [
			"",
			"imagenes/aries.gif",
			"imagenes/tauro.gif",
			"imagenes/geminis.gif",
			"imagenes/cancer.gif",
			"imagenes/leo.gif",
			"imagenes/virgo.gif",
			"imagenes/libra.gif",
			"imagenes/escorpio.gif",
			"imagenes/sagitario.gif",
			"imagenes/capricornio.gif",
			"imagenes/acuario.gif",			
			"imagenes/piscis.gif"			
		];

	nombres =  [
			"",
			"Aries",
			"Tauro",
			"Geminis",
			"Cancer",
			"Leo",
			"Virgo",
			"Libra",
			"Escorpio",
			"Sagitario",
			"Capricornio",
			"Acuario",			
			"Piscis"			
		];

	contenedor = document.getElementById("horos");
    // elemento = document.getElementById("boton");
    nodoRespuesta = document.getElementById('res');


    // elemento.addEventListener("click", submitForm);
   
    nodoSelected = document.getElementById('selected');
	
	nodoSelected.addEventListener("change", function(){ 
												var hors = nodoSelected.selectedIndex;
												img = nodoSelected.options[hors].value;
    											submitForm(img);
    										});
}

function cargarDatos(arr){
	
	BorraContenido(nodoRespuesta);
	nodoRespuesta.appendChild(CrearEtiquetas('h1', nombres[img], null));
	nodoRespuesta.appendChild(CrearEtiquetas('p', arr, null));
	cargaBoton();
}

function cargaBoton(){
	var contenido = "Mostrar Imagen";
	var arrAtt = new Array();
	arrAtt['class'] = "btns";
	arrAtt['id']="cargabtns";

	nodoRespuesta.appendChild(CrearEtiquetas('button', contenido, arrAtt));

	nodoBoton=document.getElementById("cargabtns");
	nodoBoton.addEventListener("click", cargaImagen);
}

function ocultaImg(){
	nodoRespuesta.removeChild(nodoImagen);
	nodoBoton.removeEventListener("click", ocultaImg);
	nodoBoton.addEventListener("click", cargaImagen);
}

function cargaImagen(){
	BorraContenido(nodoBoton);
	escribe( nodoBoton , "Ocultar imagen");
	nodoBoton.removeEventListener("click", cargaImagen);
	nodoBoton.addEventListener("click", ocultaImg);

	var arrAtt = new Array();
	arrAtt['class'] = "imag";
	arrAtt['id'] = "imagi";
	arrAtt['src'] = imagenes[img];

	nodoRespuesta.appendChild(CrearEtiquetas('img', null , arrAtt));

	nodoImagen=document.getElementById("imagi");
}

function BorraContenido(conte){
	while (conte.hasChildNodes() ) {
		conte.removeChild(conte.childNodes[0]);
	}	
}

function InsertarAtributos( tag, atributo){
	for ( indice in atributo){
		tag.setAttribute(indice, atributo[indice]);
	}
}

function escribe(contenedor, texto){
	contenedor.appendChild(document.createTextNode(texto));
}

function CrearEtiquetas(tag, contenido, arrAtt){
	//tag es un strins que indica el tipo de estiqueta que es (div, span, section, ....) puede ser null
	//contenido es el contenido que va dentro, puede ser null
	//arrAtt array de atributos asociativo
	//  arrAtt = new Array();
	//  arrAtt["class"]="nombreClase";
	//  arrAtt["id"]= "nombreId";

	if(contenido != null){
		var texto = document.createTextNode(contenido);
	}

	if(tag != null){
		var etiqueta = document.createElement(tag);

		if(texto != null){
			etiqueta.appendChild(texto);
		}

		if(arrAtt != null)InsertarAtributos( etiqueta, arrAtt);

		return etiqueta;
		
	}

	return texto;

}
	