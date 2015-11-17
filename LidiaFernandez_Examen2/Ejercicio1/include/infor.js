function infor(importeT, IVA, pago){
	this.importeT = importeT;
	this.IVA = IVA;
	this.pago = pago;

	this.tot = tot;
}

function tot() { 
	var cadena = "Importe: <strong>" + this.importeT + "</strong><br>IVA: <strong>" + this.IVA + " </strong><br> Forma de pago: <strong>" + this.pago + " </strong>";
	return(cadena); 
}