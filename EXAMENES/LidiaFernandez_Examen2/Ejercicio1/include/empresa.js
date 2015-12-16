function empresa(nombreE, direE, teleE, NIF){
	this.nombreE = nombreE;
	this.direE = direE;
	this.teleE = teleE;
	this.NIF = NIF;

	// this.plantas = new Array();
	
	// this.PlantaPuerta=aplantpuert;
	// this.Imprime=Imprime;
	// this.AProp=AProp;
	this.mue = mue;
}

function mue() { 
	var cadena = "Empresa: <strong>" + this.nombreE + "</strong><br>Direccion: <strong>" + this.direE + " </strong><br> Telefono: <strong>"+ this.teleE + "</strong><br>NIF: <strong>" + this.NIF + " </strong>";
	return(cadena); 
}