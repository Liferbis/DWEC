function enviarPeticionAjax(direccion,callback){
	var respuesta;

	//1.CREAR OBJETO
	if(window.XMLHttpRequest){
	 	respuesta=new XMLHttpRequest();
		respuesta.overrideMimeType('text/xml');
	}else{
		if(window.ActiveXObject){
			respuesta=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}

	//3.REALIZAR LA PETICIÓN
	respuesta.open('GET',direccion,true);
	respuesta.send(null);

		//alert("ajaxMain"+ datos);
		respuesta.onreadystatechange=cargarContenido;


		function cargarContenido(){
		
		if(respuesta.readyState == 4){
		
			if(respuesta.status == 200){

				callback(respuesta.responseXML);
				//datos = respuesta.responseText;
				
			}else{
				datos = "ERROR DE ESTADO DE LA PÁGINA: el servidor ha devuelto el código  " + respuesta.status;
			}

		}else{
			datos =  "ERROR DE CARGA: la respuesta ajax se ha quedado en el nivel " + respuesta.readyState+" de ejecución.";
		}
		//alert(datos);
	};
}

