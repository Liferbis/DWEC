function multi(){
	var texto="";
	for (var i=0 ; i <= 10; i++) {
		texto+="El número es "+i+"</br>";
	};
	document.write("<h3>"+texto+"</h3>");
	botonVolver();
}

function botonVolver(){
	document.write("<button type='button'><a href='index.html'>Volver</a></button>");
}
