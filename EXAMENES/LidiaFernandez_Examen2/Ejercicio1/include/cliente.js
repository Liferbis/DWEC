function cliente(nombreC, direC, teleC, DNI){
	this.nombreC = nombreC;
	this.direC = direC;
	this.teleC = teleC;
	this.DNI = DNI;

	// this.plantas = new Array();
	
	// this.PlantaPuerta=aplantpuert;
	// this.Imprime=Imprime;
	// this.AProp=AProp;
	this.mir = mir;
}

function mir() { 
	var cadena = "Cliente: <strong>" + this.nombreC + "</strong><br>Direccion: <strong>" + this.direC + " </strong><br> Telefono: <strong>"+ this.teleC + "</strong><br>DNI: <strong>" + this.DNI + " </strong>";
	return(cadena); 
}