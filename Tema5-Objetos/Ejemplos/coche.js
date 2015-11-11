function coche(marca, modelo, anyo, pro){
	this.marca = marca;
	this.modelo = modelo;
	this.anyo = anyo;
	this.pro = pro;
	this.ver = mostrar;
}

function mostrar() { 
	var cadena = "Marca: " + this.marca + "\n" + "modelo: " + this.modelo + " Año:"+ this.anyo + "Propietario: " + this.pro.ver();
	return(cadena); 
} 

function prueba(){
	var persona1 = new persona("Lidia","24","F");
	var persona2 = new persona("Luis","38","M");
	
	var coche2 = new coche("BMW","z4","2015", persona2);
	var coche1 = new coche("Peugeot","205 - Generation","1999", persona1);
	alert(persona1.ver());
	alert(coche1.ver());
	document.getElementById('pru').innerHTML = coche1.ver();
	document.getElementById('pr').innerHTML = coche2.ver();
}