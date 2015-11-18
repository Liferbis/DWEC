function factura(empresa, cliente, infor){
	this.empresa = empresa;
	this.cliente = cliente;
	this.infor = infor;
	this.linea= new Array();

	this.AgregarElementos=AgregarElementos;
	this.CalculaFactura=CalculaFactura;
	this.ver=ver;
	this.muestra = muestra;
}

function AgregarElementos(descripcion, precio, cantidad){
	var aux=new Array(descripcion, precio, cantidad);
	this.linea.push(aux);
}

function CalculaFactura(){
	var aux=0;
	var precioT=0;
	var iv=this.infor.IVA;
	for(variable in this.linea){
		aux=(Number(this.linea[variable][1])*iv)*0.1;
		aux = aux*(this.linea[variable][2]);
		precioT = Number(aux); 
	}
	this.infor.importeT=precioT;
}

function ver(){
	var n =Number(this.infor.importeT);
	return n;
	
}

function muestra() { 
	var cadena = "Datos Empresa: <br><strong>" + this.empresa.mue() + "</strong><br>Datos Cliente: <br><strong>" + this.cliente.mir() + " </strong><br> Información: <strong>"+ this.infor.tot() + "</strong>";
	return(cadena); 
}