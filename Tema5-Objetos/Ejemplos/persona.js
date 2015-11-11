function persona(nombre, edad, seso){
	this.nombre = nombre;
	this.edad = edad;
	this.seso = seso;
	this.ver = muestrate;
}

function muestrate() { 
	var cadena = "nombre: " + this.nombre + "\n" + "edad: " + this.edad + " Sexo:"+ this.seso;
	return(cadena); 
} 

function p(){
	
	var persona2 = new persona("Luis","38","M");
	document.getElementById('pru').innerHTML = persona1.ver();
}