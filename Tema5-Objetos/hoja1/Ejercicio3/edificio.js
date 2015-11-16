function edificio(calle, numero, cp){
	this.calle = calle;
	this.numero = numero;
	this.cp = cp;

	this.plantas = new Array();
	
	this.PlantaPuerta=aplantpuert;
	this.Imprime=Imprime;
	this.AProp=AProp;
	this.ver = muestra;
}

function aplantpuert(plantas, puerta){
	for(var i = 0; i < plantas; i++){
		this.plantas[i] = new Array(puerta);
	}
}

function AProp(planta, puerta, nombre){
	this.plantas[planta][puerta]=nombre;
}

function Imprime(){
	var texto="";
	for(variable in this.plantas){
		texto +="<br>Planta: " + Number(variable);
		for(var i = 0; i < this.plantas[variable].length; i++){
			texto +="Puerta: " + (i+1) + "Propietario: " + (this.plantas[variable][i]);
			
		}
		
	}
	return texto;
}

function muestra() { 
	var cadena = "Calle: <br>" + this.calle +"Número: <strong>" + this.numero + " </strong><br> Código Postal: <strong>"+ this.cp + "</strong>";
	return(cadena); 
}
