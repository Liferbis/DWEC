var valorProducto;
var IVA;
var num1;
var num2;
addEventListener('load', inicio, false);
function inicio(){
	valorProducto=parseFloat(prompt("Introduce el valor:"));
	IVA=parseFloat(prompt("Introduce el iva:"));
}

function datosMedia(){
	num1=parseFloat(prompt("Introduce el valor 1"));
	num2=parseFloat(prompt("Introduce el valor 2"));
}
function aplicar_IVA(valorProducto, IVA ){
	var productoConIVA= valorProducto* IVA;
	alert("El precio del producto ("+ valorProducto +"), apicando el IVA del " + IVA + " es: " + productoConIVA);
	datosMedia();
}

function calmedia (num1, num2){
	var media= (num1+num2)/2;
	return media;	
}