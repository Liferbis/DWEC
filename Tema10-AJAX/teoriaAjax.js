//PASOS CREAR PETICION XAJAX

//1.CREAR OBJETO
	if(window.XMLHttpRequest){
		var xhr=new XMLHttpRequest();
		//especificar tipo para navegadores mozilla
		xhr.overrideMimeType('text/xml');
	}else{
		if(window.ActiveXObject){
			var xhr=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
//2.ESTABLECER EL CÓDIGO
	xhr.onreadystatechange=function(){
		//codigo a ejecutarse cuando se haya recibido la respuesta
	}
//3.REALIZAR LA PETICIÓN
	xhr.open('GET','http://ejemplo.com/fichero.xml',true);
	xhr.send(null);