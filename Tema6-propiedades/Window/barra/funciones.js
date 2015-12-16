var myWindow;
var movi;
var i;

addEventListener('load', carga, false);

function carga(){
	animateprogress("#pro",100);
	i = 0;	
}

function animateprogress (id, val){ 

	movi = setInterval("animacion()", 10);  
	
                 
}

function animacion () {
             
	if (i<=100){
	    document.getElementById("pro").setAttribute("value",i);      /* <----  Incremento el valor de la barra de progreso */
	    //document.getElementById("pro").innerHTML = i+"%";    
	    i++;
	    
	}else{
		clearInterval(movi);
		ar();
	}
                                         
}

function ar(){
	myWindow= window.open(" xxx " , " " , "width=300,height=200");
	
	var texto="<html><head><title>Ventana </title></head><body><h1>ME HE LLENADO!!! </h1><button onclick='window.close()'>Cerrar ventana</button></body></html>";

		myWindow.document.write(texto);
}



function para() {
    myWindow.close();
}