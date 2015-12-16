var fech;
var an;
var aD;
var aI;
var mD;
var mI;
var dI;
var dD;
var aux;
var texto;
var tie;
var myWindow;


function cumple(){
	fech = new Date(document.fuu.fecN.value);
	dI = parseInt(fech.getDate());
	mI = parseInt(fech.getMonth())+1;
	aI = parseInt(fech.getFullYear() );
	aux = new Date();
	dD = parseInt(aux.getDate());
	mD = parseInt(aux.getMonth())+1;
	aD = parseInt(aux.getFullYear() );
	calculaEdad();
}

function calculaEdad(){
	
	if(aI > aD){
		texto = "Todavia no has nacido!!";
	}else{
		an = aD-aI;
		// alert(an);
		if(mI>mD){
			texto = "Tienes " + an + " años";
		}else if(mI == mD){
			if( dI > dD){
				an--;
				texto = "Tienes " + an + " años";
			}else{
				texto = "Tienes " + an + " años";
			}
		}else{
			texto = "Tienes " + an + " años";
		}
	}
	calculaTiem();
}

function calculaTiem(){
	
	var mmm = mI-1;
 	var sig = new Date();
 	var annnn = sig.getFullYear()+1;
	sig.setFullYear(annnn);
	sig.setDate(dI);
	sig.setMonth(mmm);
	
	var dif =parseInt( (sig-aux) / (1000*60*60*24));
	//alert(aux);

	tie = dif + " dias ";
	ventana();
}

function ventana(){
	myWindow= window.open("" , "" , "width=300,height=300,scrollbars=NO");
	//myWindow.moveBy(362,234);
	var tex = "<html><head><title>CUMPLEAÑOS</title><link href='include/estilo.css' rel='stylesheet'></head><body><div id='vi'><h1>" + texto + "</h1><h1>Tu proximo cumpleaños seta dentro de : " + tie + "</h1><p><button onclick='window.close()'>Cerrar ventana</button></p></div></body></html>";

	myWindow.document.write(tex);
}