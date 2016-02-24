var bvis;
var bacep;
var bBorra;
var res;

var texto;

var cFondo;
var nDivs;
var cDivs;
var eBorde;
var cBorde;


addEventListener("load", init);

function init(){

	bvis = document.getElementById('btnV');
	bacep = document.getElementById('btnA');
	bBorra = document.getElementById('btnB');
	res = document.getElementById("resultado");

	bvis.addEventListener("click", vis);
	bacep.addEventListener("click", acep);
	bBorra.addEventListener("click", borraCo);

	if(document.cookie){
		cFondo = leerCookie("colorF");
		nDivs = leerCookie("nunD");
		cDivs = leerCookie("colorD");
		eBorde = leerCookie("estiloB");
		cBorde = leerCookie("colorB");
		pinta();
	}

}

function recogeDatos(){
	cFondo = document.getElementById("col").value;
	nDivs = document.getElementById("num").value;
	cDivs = document.getElementById("coloresD").value;
	eBorde = document.getElementById("bordeG").value;
	cBorde = document.getElementById("bordeC").value;
}

function acep(){
	vis();
	guardaCookies();
}

function guardaCookies(){
	// deleteAllCookies();
	crearCookie( "colorF", cFondo);
	crearCookie( "nunD", nDivs);
	crearCookie( "colorD", cDivs);
	crearCookie( "estiloB", eBorde);
	crearCookie( "colorB", cBorde);
}

function vis(){
	recogeDatos();

	pinta();
}

function pinta() {
	 document.documentElement.style.background=cFondo;

	if(nDivs > 0){
		var aux = new Array();
		aux["class"]="nDivss";
		for(var i = 0; i < nDivs; i++){
			res.appendChild(CrearEtiquetas("div", null, aux));
		}
		for(var k = 0 ; k < nDivs; k++){
			document.getElementsByClassName("nDivss")[k].style.background = cDivs;
			document.getElementsByClassName("nDivss")[k].style.width = "90%";
			document.getElementsByClassName("nDivss")[k].style.height = "100px";
			document.getElementsByClassName("nDivss")[k].style.margin = "5px auto 5px auto";
			document.getElementsByClassName("nDivss")[k].style.border= eBorde + " 5px " + cBorde;
		}
	}
}

function borraCo() {
	deleteAllCookies();  
	location.reload();
}





