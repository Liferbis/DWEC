addEventListener("load", one);
var nodo;
var te;
var fontSize = 16;
var original= "#e0e0e0";
var org= "#C0C0C0";



function one(){
	//extraer el número de atributos
	nodo = document.getElementById("primerparrafo");
	alert("Número de atributos: " + nodo.attributes.length);

	//Nombre de los atributos
	 for (var i = 0; i < nodo.attributes.length; i++) {
	 	alert("Nombre del atributo " + i + " : " + nodo.attributes[i].name + " y valor de este: " + nodo.attributes[i].value);
	 };
}

