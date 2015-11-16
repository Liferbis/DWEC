function Cuenta(DatosP, Ncuenta, Saldo){
	this.DatosP = DatosP;
	this.Ncuenta = Ncuenta;
	this.Saldo = Saldo;
	this.ver = muestra;
	this.inser= insertar;
	this.ret= retirar;
}

function insertar(sal){
	this.Saldo += sal;
}

function retirar(sal){
	this.Saldo -= sal;
}

function muestra() { 
	var cadena = "Datos Personales: <br>" + this.DatosP.ver() +"Número de cuenta: <strong>" + this.Ncuenta + " </strong><br> Saldo: <strong>"+ this.Saldo + "</strong>";
	return(cadena); 
} 

