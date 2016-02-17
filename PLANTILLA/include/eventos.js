function borrarHijos(contenedor){
	while(contenedor.childNodes.length>0){
		contenedor.removeChild(contenedor.childNodes[0]);
	}
}

function escribe(contenedor, texto){
	contenedor.appendChild(document.createTextNode(texto));
}

function insertarAtributos(tag,att){
	for(indice in att){
		tag.setAttribute(indice,att[indice]);
	}
}

function CrearEtiquetas(tag, contenido, arrAtt){
	//tag es un strins que indica el tipo de estiqueta que es (div, span, section, ....) puede ser null
	//contenido es el contenido que va dentro, puede ser null
	//arrAtt array de atributos asociativo puedes der null
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

