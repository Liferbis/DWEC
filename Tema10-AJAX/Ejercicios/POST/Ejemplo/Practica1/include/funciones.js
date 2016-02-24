var fomu;
var texto;
var nombre;
var apellido;

addEventListener("load", init);

function init(){	
	fomu = document.getElementById("envia");

	fomu.addEventListener("click", function(){
										texto = datosForm();
										submitForm(texto);
									});
}

function datosForm(){
	nombre = document.getElementById("nombre").value;
	apellido = document.getElementById("apellido").value;

	return "nombre="+nombre+"&apellido="+apellido;
}







