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
	var texto="<br><strong> PLANTA-BAJA </strong><br> <**> Porteria <br><**> Buzones <br><**> Ascensor <br>";;
	for(variable in this.plantas){
		texto +="<br><strong> PLANTA : " + (Number(variable)+1) + "</strong><br>";
		for(var i = 0; i < this.plantas[variable].length; i++){
			if(this.plantas[variable][i] == undefined){
				texto +=" <**> Puerta: " + (i+1) + " Propietario: -Ninguno-</br>";
			}else{
				texto +=" <**> Puerta: " + (i+1) + " Propietario: " + (this.plantas[variable][i]) + " </br>";
			}
		}
		texto += " </ul>";
	}
	return texto;
}

function muestra() { 
	var cadena = "Calle: <strong>" + this.calle + "</strong><br>Número: <strong>" + this.numero + " </strong><br> Código Postal: <strong>"+ this.cp + "</strong>";
	return(cadena); 
}
