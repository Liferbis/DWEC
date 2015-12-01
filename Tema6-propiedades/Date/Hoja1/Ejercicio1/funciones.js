addEventListener('load', carga, false);
var hoy;
function carga(){
	hoy = new Date();
}
function crea(){
	
	var texto="";
	
	texto = "<p >Formato completo: ";
	texto += hoy.toGMTString() + " " + hoy.toTimeString();
	texto += "</p><p >Dia del mes: ";
	texto += hoy.getDate(); 
	texto +="</p><p >Día de la semana:";
	texto += parseInt(hoy.getDay());
	texto +="</p><p >Mes: ";
	texto += hoy.toLocaleString("es",{month:"long"});
	texto +="</p><p >Año: ";
	texto += hoy.getFullYear();
	texto +="</p><p >Fecha: ";
	texto += hoy.toLocaleDateString();
	texto +="</p><p >Fecha: ";
	texto += hoy.toLocaleString("es",{weekday:"long"}) + " " + hoy.toLocaleDateString();
	texto +="</p><p >Fecha: ";
	texto += hoy.toLocaleString("es",{weekday:"long"}) + ", " + hoy.toGMTString() ;
	
	document.getElementById('respuesta').innerHTML = texto;
}