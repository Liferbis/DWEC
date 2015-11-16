function Persona(Nombre, dni, direccion, tele){
	this.Nombre = Nombre;
	this.dni = dni;
	this.direccion = direccion;
	this.tele = tele;
	this.ver = mostrar;
}

function mostrar() { 
	var cadena = "Nombre: <strong>" + this.Nombre + "</strong> dni: <strong>" + this.dni + "</strong><br>Direccion: <strong>"+ this.direccion + "</strong> Telefono: <strong>" + this.tele + "</strong><br>";
	return(cadena); 
} 