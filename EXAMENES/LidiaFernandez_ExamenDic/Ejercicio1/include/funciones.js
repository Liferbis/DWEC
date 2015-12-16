var opc1;
var opc2;
var opc3;
var im;
var aux;
var myWindow;

addEventListener('load', carga, false);

function carga(){
	im = [
		"include/imagenes/paris.png",
		"include/imagenes/londres.png",
		"include/imagenes/berlin.png",
		"include/imagenes/roma.png"
	];
}

function viaje(){
	opc1 = document.fuu.sal.value;
	opc2 = document.fuu.des.value;
	opc3 = document.fuu.trans.value;
	switch(opc2){
		case "p":
			aux = im[0];
			break;
		case "l":
			aux = im[1];
			break;
		case "b":
			aux = im[2];
			break;
		case "r":
			aux = im[3];
			break;
	}
	
	//alert(opc1+"4"+opc2+"4"+opc3);
	ventana();
}

function ventana(){
	myWindow= window.open("" , "" , "width=300,height=300,scrollbars=NO");
	myWindow.moveTo( ((screen.width-300)/2) , ((screen.height-300)/2) );
	var texto="<html><head><title>Viaje</title><link href='include/estilo.css' rel='stylesheet'></head><body><div id='vi'><p>Salida desde: <strong>" + opc1 + "</strong></p><p>Medio de transporte: <strong>" + opc3 + "</strong></p><img src='" + aux + "' id='viaj'><p><button onclick='window.close()'>Cerrar ventana</button></p></div></body></html>";

	myWindow.document.write(texto);
}