var datos="los ponis muerden";

function cargarDatos(xmlDoc){

	borrarHijos(contenedor);

	var nodos=formatearXML(xmlDoc);
	
	for(var i=0;i<nodos.length;i++){
		contenedor.appendChild(nodos[i]);
	}
	

	borrarHijos(contDatos);
	//for(var i=0;i<xmlDoc.childNodes.length;i++){
		var tag=xmlDoc.childNodes[0].nodeName;
		contDatos.appendChild(crearEtiqueta(null,("<"+tag+">"+xmlDoc.childNodes[0].innerHTML+"</"+tag+">"),null));
	//}
	//contDatos.appendChild(crearEtiqueta(null,xmlDoc.documentElement.innerHTML,null));
}

	function formatearXML(doc){
		var indices=["superficie","capital","idioma","poblacion"];
		
		var arrNodos=new Array();

		var raiz=doc.documentElement;

			for(var i=0;i< indices.length;i++){
				var elemento=raiz.getElementsByTagName(indices[i])[0];

				var texto=indices[i]+" : "+elemento.innerHTML;
				var parrafo=crearEtiqueta("p",texto,null);

				arrNodos.push(parrafo);
			}


		return arrNodos;
	}