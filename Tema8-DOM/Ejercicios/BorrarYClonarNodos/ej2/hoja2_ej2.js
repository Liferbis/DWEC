var imagenes;
var section;

addEventListener("load",init);
function init(){
	section=document.body.getElementsByTagName("section")[0];

	imagenes=section.getElementsByTagName("img");
//	alert(imagenes);

	//imagenes=document.images;
	for(var i=0;imagenes.length;i++){
		alert(imagenes[i]);
		imagenes[i].src="img.png";
	}




}

function borrarLento(){
	if(imagenes.length>0){
		section.removeChild(imagenes[0]);
	}

	if(imagenes.length==0){
		section.appendChild(crearParr());
	}
}

	function crearParr(){
		var p=document.createElement("p");
		p.setAttribute("id","alerta");

		var texto=document.createTextNode("Ya están eliminadas todas las imágenes.");
		p.appendChild(texto);

		return p;
	}