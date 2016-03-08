function CreaContenedor() {
	var con = parseInt(valor) - 1;
	var contenedorTemas = document.getElementById("temasCre");
	borrarHijos(contenedorTemas);

//CONTENEDOR PRINCIPAL DEL TEMA
	var texto = "Tema" + valor;
	var arr = new Array ();
	arr["id"]= texto;

	contenedorTemas.appendChild(CrearEtiquetas("section", null, arr));
	var sec =document.getElementById(texto);
	//TITULO h3 DEL TEMA
	var h = CrearEtiquetas("h3", ("Tema " + valor), null);
	sec.appendChild(h);

//CONTENDOR DE FRASES Y PALABRAS
	texto = "qt" + valor;
	arr = new Array ();
	arr["id"]= texto;

	var se = CrearEtiquetas("section", null, arr);
	sec.appendChild(se);
	se = document.getElementById(texto);

//CONTENDOR DE FRASE
	texto = "frasT" + valor;
	arr = new Array ();
	arr["id"]= texto;
	arr["class"]="frase";
	var fra =CrearEtiquetas("article", null, arr);
	se.appendChild(fra);
	fra = document.getElementById(texto);
	
	//TEXTO E INPUT DE LA FRASE
	texto = "ipat" + valor;
	arr = new Array ();
	arr["type"]= "text";
	arr["id"]= texto;
	arr["disabled"]= "true";
	arr["class"]="control";
	// escribre(fra, textTemas[con]);
	fra.appendChild(CrearEtiquetas( "h2", textTemas[con] , null));
	fra.appendChild(CrearEtiquetas("input", null, arr));

//CONTENDOR DE PALABRAS
	texto = "pa" + valor;
	arr = new Array ();
	arr["id"]= texto;
	arr["class"]="palabras";
	var palas =CrearEtiquetas("article", null, arr);
	se.appendChild(palas);
	//CONTENIDO DE PALABRAS
	palas =document.getElementById(texto);

	palas.appendChild(CrearEtiquetas("p", "Arrastra la palabra y pulsa corregir", null));
	
	for(var i = 0; i < 3; i++){
		var texto = palabras[con][i];
		var arr = new Array ();
		arr["id"]= palabras[con][i];
		arr["class"]="palabra";
		palas.appendChild(CrearEtiquetas("p", texto, arr));
	}

// CONTENEDOR DE BOTONES
	arr = new Array ();
	arr["id"] = "boto";
	arr["class"]="boto";
	var bo = CrearEtiquetas("article", null, arr);
	se.appendChild(bo);
	//CONTENIDO DE PALABRAS
	bo =document.getElementById("boto");
	//BOTON CORREGIR
	arr = new Array ();
	arr["type"]= "button";
	arr["id"]= "Corregir";
	arr["value"]= "Corregir";
	bo.appendChild(CrearEtiquetas("input", null, arr));
	corregir = document.getElementById("Corregir");
	//BOTON CANCELAR
	arr = new Array ();
	arr["type"]= "button";
	arr["id"]= "Cancelar";
	arr["value"]= "Cancelar";
	bo.appendChild(CrearEtiquetas("input", null, arr));
	cancelar = document.getElementById("Cancelar");
	botones();
}

function temas(va){
	valor = va;

	CreaContenedor();
	
	var a1 = "pa" + valor;
	var a2 = "ipat" + valor;
	a = document.getElementById(a1);
	b = document.getElementById(a2);
	moviles();
}

function cargaInicio() {
	var contenedorTemas = document.getElementById("temasCre");
	borrarHijos(contenedorTemas);
	var arr = new Array ();
	arr["id"]= "inicio";
	var re = CrearEtiquetas("article", null, arr)
	contenedorTemas.appendChild(re);

	re = document.getElementById("inicio");

	re.appendChild(CrearEtiquetas("H2", "Mide tu nivel de inglés", null));
	re.appendChild(CrearEtiquetas("h3", "Empiezas con '0' errores, ", null));
	re.appendChild(CrearEtiquetas("h3", "¿Conseguiras terminal igual?", null));
	// re.appendChild(CrearEtiquetas("p", "Empieza por el tema 1" , null));

}

function cargaReinicio() {
	var contenedorTemas = document.getElementById("temasCre");
	borrarHijos(contenedorTemas);
	var arr = new Array ();
	arr["id"]= "reinicio";
	var re = CrearEtiquetas("article", null, arr)
	contenedorTemas.appendChild(re);

	re = document.getElementById("reinicio");

	re.appendChild(CrearEtiquetas("h2", "Acabas de reiniciar el nivel!!", null));
	re.appendChild(CrearEtiquetas("h2", "Tu numero de errores es '0'", null));
	re.appendChild(CrearEtiquetas("h2", "Aprobecha esta oportunidad " , null));

}

function cargaError() {
	var contenedorTemas = document.getElementById("temasCre");
	borrarHijos(contenedorTemas);

	var arr = new Array ();
	arr["id"]= "errore";
	var re = CrearEtiquetas("article", null, arr)
	contenedorTemas.appendChild(re);

	re = document.getElementById("errore");

	re.appendChild(CrearEtiquetas("h2", "ERROR !! Has fallado!!", null));
	re.appendChild(CrearEtiquetas("h3", "¿No crees que deberias de estudiar un poco más?", null));
	re.appendChild(CrearEtiquetas("h4", ("Este es tu ERROR número: "+errores) , null));

}

function sigNivel(){
	var contenedorTemas = document.getElementById("temasCre");
	borrarHijos(contenedorTemas);

	var arr = new Array ();
	arr["id"]= "siguiente";
	var re = CrearEtiquetas("article", null, arr)
	contenedorTemas.appendChild(re);

	re = document.getElementById("siguiente");

	re.appendChild(CrearEtiquetas("h2", "Muy bien!! Has acertado!!", null));
	var aus = parseInt(valor)+1;
	re.appendChild(CrearEtiquetas("h2", ("¡Pasas al nivel número " + aus ), null));
}

function textoFinal() {
	var contenedorTemas = document.getElementById("temasCre");
	
	borrarHijos(contenedorTemas);
	
	var arr = new Array();
	arr["id"] = "textos";
	
	contenedorTemas.appendChild(CrearEtiquetas("p", null, arr));
	
	var tes = document.getElementById("textos");
	
	var texto = errores + " fallos!!! "

	if(errores >= 3){
		tes.appendChild(CrearEtiquetas("p", texto, null));
		// tes.appendChild(CrearEtiquetas("br", null, null));
		tes.appendChild(CrearEtiquetas("h2", "Has llegado, muy bien, pero...", null));
		tes.appendChild(CrearEtiquetas("h3", "¿NO CREES QUE DEBERIAS ESTUDIAR UN POCO MAS?", null));
		
	}else{
		tes.appendChild(CrearEtiquetas("br", null, null));
		tes.appendChild(CrearEtiquetas("h2", texto, null));
		tes.appendChild(CrearEtiquetas("br", null, null));
		tes.appendChild(CrearEtiquetas("h2", "MUY BIEN,  pero...", null));
		tes.appendChild(CrearEtiquetas("h2", "No olvides repasar!!", null));
	}
	
	
}