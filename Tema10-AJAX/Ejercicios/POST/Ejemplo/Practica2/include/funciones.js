var formu;
var texto;

addEventListener("load", init);

function init(){	/*
	re = document.getElementById('rei');

	re.addEventListener("click", limpiar);*/
	formu = document.getElementById('envia');

	formu.addEventListener("click", function(){
										texto = datosForm();
										submitForm(texto);
									});
}

function datosForm(){
	var mail = document.getElementById("envioEmail").value;

	var ctv1 = document.getElementById("envioContra1").value;
	var ctv2 = document.getElementById("envioContra2").value;
	

	return "envioEmail="+mail+"&envioContra1="+ctv1+"&envioContra2="+ctv2;
}

/*function limpiar(){
	document.getElementById("envioEmail").rese;
	document.getElementById("envioContra1").rese;
	document.getElementById("envioContra2").rese;
}*/