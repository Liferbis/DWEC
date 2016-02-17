var contenedor;
var texto;

var padre; //padre de artistas
var titulos;//solo los titulos
var artis; //solo artistas
var datos; //xml entero

var nodoRespuesta;
var nodoSelected;
var nodoTablaArt;
var nodoTablaTi;
var nodoCaratulas;
var nodoCar;

addEventListener("load", init);

function init(){	
	submitForm(1);
	nodoSelected = document.getElementById('selected');
	nodoRespuesta = document.getElementById('respuesta');
	nodoCaratulas = document.getElementById("caratulas");
	

	nodoSelected.addEventListener("change", datosArtista);
	setTimeout(datosCaratulas, 500);//setTimeOut porque cargaba antes la funcion que ajax y daba error
}

function cargarDatos(arr){
	//arr es el documento XML para navegar es por nodos
	//document.element en este caso == catalogo

	// datos = arr;
	artis = arr.documentElement.getElementsByTagName("artist");
	titulos = arr.documentElement.getElementsByTagName("title");

	for(var i = 0; i < artis.length; i++){
		var arrAtt = new Array();
		arrAtt['value'] = artis[i].childNodes[0].textContent;
		nodoSelected.appendChild(CrearEtiquetas('option', artis[i].childNodes[0].textContent , arrAtt));
	}
}

function datosArtista(){
	borrarHijos(nodoRespuesta);
	
	var hors = nodoSelected.selectedIndex;
	var artistaElegido = nodoSelected.options[hors].value;
	
	for(var i = 0; i < artis.length; i++){
		if(artis[i].childNodes[0].textContent == artistaElegido){
			padre = artis[i].parentNode;
			break;
		}
	}

	var arrAtt = new Array();
	arrAtt['class'] = "tabla";
	arrAtt['id'] = "tabla";


	nodoRespuesta.appendChild(CrearEtiquetas("table", null , arrAtt));
	nodoTablaArt = document.getElementById("tabla");

	nodoTablaArt.appendChild(CrearEtiquetas("thead", null , null));
	
	var aux = nodoTablaArt.getElementsByTagName("thead")[0];
	var a1 = new Array();
	a1['id'] = "thed";
	aux.appendChild(CrearEtiquetas("tr", null , a1));

	aux = document.getElementById("thed");
	aux.appendChild(CrearEtiquetas("th", "Titulo", null));
	aux.appendChild(CrearEtiquetas("th", "Artista", null));
	aux.appendChild(CrearEtiquetas("th", "Pais", null));
	aux.appendChild(CrearEtiquetas("th", "Compañía", null));
	aux.appendChild(CrearEtiquetas("th", "Precio", null));
	aux.appendChild(CrearEtiquetas("th", "Año", null));

	nodoTablaArt.appendChild(CrearEtiquetas("tbody", null , null));

	var aux = nodoTablaArt.getElementsByTagName("tbody")[0];
	var a2 = new Array();
	a2['id'] = "tbo";
	aux.appendChild(CrearEtiquetas("tr", null , a2));

	aux = document.getElementById("tbo");

	var title = padre.getElementsByTagName("title")[0].childNodes[0].textContent;
	var artist = padre.getElementsByTagName("artist")[0].childNodes[0].textContent;
	var country = padre.getElementsByTagName("country")[0].childNodes[0].textContent;
	var company = padre.getElementsByTagName("company")[0].childNodes[0].textContent;
	var price = padre.getElementsByTagName("price")[0].childNodes[0].textContent;
	var year = padre.getElementsByTagName("year")[0].childNodes[0].textContent;

	aux.appendChild(CrearEtiquetas("td", title, null));
	aux.appendChild(CrearEtiquetas("td", artist, null));
	aux.appendChild(CrearEtiquetas("td", country, null));
	aux.appendChild(CrearEtiquetas("td", company, null));
	aux.appendChild(CrearEtiquetas("td", price, null));
	aux.appendChild(CrearEtiquetas("td", year, null));
}

function datosCaratulas(){
	borrarHijos(nodoCaratulas);

	//datos = submitForm(0);
	//alert(titulos);

	//titulos = datos.getElementsByTagName("title");
		
	var arrAtt = new Array();
	arrAtt['class'] = "tabla";
	arrAtt['id'] = "tablaTitle";


	nodoCaratulas.appendChild(CrearEtiquetas("table", null , arrAtt));
	nodoTablaTi = document.getElementById("tablaTitle");

	nodoTablaTi.appendChild(CrearEtiquetas("thead", null , null));
	
	var aux = nodoTablaTi.getElementsByTagName("thead")[0];
	var a1 = new Array();
	a1['id'] = "thedTi";
	aux.appendChild(CrearEtiquetas("tr", null , a1));

	aux = document.getElementById("thedTi");
	aux.appendChild(CrearEtiquetas("th", "Titulo", null));
	aux.appendChild(CrearEtiquetas("th", "Caratula", null));

	var tbo = new Array();
	tbo["id"] = "tboTi";
	nodoTablaTi.appendChild(CrearEtiquetas("tbody", null , tbo));

	
	var aux1 = nodoTablaTi.getElementsByTagName("tbody")[0];
	// var a2 = new Array();
	// a2['id'] = "tboTi";
	

	// aux = document.getElementById("tboTi");

	for(var i = 0; i < titulos.length; i++){
		var n = i + 1;

		aux1.appendChild(CrearEtiquetas("tr", null , null));

		var aux = aux1.getElementsByTagName("tr")[i];

		var idTd = new Array();
		idTd["id"] = n;
		 
		var title = titulos[i].childNodes[0].textContent;

		var td = CrearEtiquetas("td", title, idTd);
		aux.appendChild(td);

		if(i==0){
			var rows = new Array();
			rows["id"] = "row";
			rows["rowspan"] = titulos.length+1;
			var roww = CrearEtiquetas("td", null , rows);
			aux.appendChild(roww);
			var rows1 = new Array();
			rows1["id"] = "imagenCa";
			var row1 = CrearEtiquetas("article", null , rows1);
			roww.appendChild(row1);
		}

		td.addEventListener("mouseover", function(){
			var num = this.id;
			var imgTi = new Array();
			imgTi["src"]="imagenes/imagen" + num + ".jpg";
			imgTi["class"]="imagen";
			var sitio = document.getElementById("imagenCa");
			var idTdIm = CrearEtiquetas("img", null, imgTi);
			sitio.appendChild(idTdIm);
		});

		td.addEventListener("mouseout", function(){
			var sitio = document.getElementById("imagenCa");
			borrarHijos(sitio);
		});

		//aux.appendChild(CrearEtiquetas("td", null, null));

		// var idTdd = document.getElementById("i" + n);
		// idTdd.appendChild();
		
		
	}

}

