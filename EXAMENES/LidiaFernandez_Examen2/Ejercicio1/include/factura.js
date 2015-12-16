function factura(empresa, cliente, infor){
	this.empresa = empresa;
	this.cliente = cliente;
	this.infor = infor;
	this.linea= new Array();

	this.AgregarElementos = AgregarElementos;
	this.CalculaFactura = CalculaFactura;
	this.ver = ver;
	this.muestra = muestra;
	this.line = line;
}

function AgregarElementos(descripcion, precio, cantidad){
	var aux = new Array(descripcion, precio, cantidad);
	this.linea.push(aux);
}

function CalculaFactura(){
	var aux=0;
	var precioT=0;
	var iv=(this.infor.IVA/100)+1;
	for(variable in this.linea){
		aux = Number(this.linea[variable][1]*iv);
		aux = aux*(this.linea[variable][2]);
		precioT += Number(aux); 
	}
	this.infor.importeT=precioT;
}

function line(){
	var texto="<table class='prod'><thead><tr><th>Articulo</th><th>Precio</th><th>Cantidad</th></tr></thead><tbody>";

	for(variable in this.linea){
		texto +="<tr><td>" + this.linea[variable][0] + "</td>";
		texto +="<td>" + this.linea[variable][1] + "</td>";
		texto +="<td>" + this.linea[variable][2] + "</td></tr>"; 
	}
	texto += "</tbody></table>";

	return texto;
}

function ver(){
	var n =Number(this.infor.importeT);
	return n;	
}

function muestra() { 
	var cadena = "<article class='empresa'>Datos Empresa: <br>" + this.empresa.mue() + "</article><article class='cliente'>Datos Cliente: <br>" + this.cliente.mir() + "</article><article >" + this.line() + "</article><article class='infor'> Información: "+ this.infor.tot() + "</article><article class='im'><img src='include/captura.png' alt='imagen' />";
	return(cadena); 
}