function Disco(titulo, grupo, fecha){
	this.titulo = titulo;
	this.grupo = grupo;
	this.fecha = fecha;
	this.ver = mostrar;
}

function mostrar() { 
	var cadena = "<h1>Titulo: " + this.titulo + "</h1>" + "<h3>Grupo: " + this.grupo + " Fecha:"+ this.fecha + "</h3>";
	return(cadena); 
} 

