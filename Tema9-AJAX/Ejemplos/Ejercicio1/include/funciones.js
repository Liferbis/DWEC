var enlace1;
var enlace2;

addEventListener("load", init);

function init(){
	enlace1 = document.getElementById("e1");
	enlace2 = document.getElementById("e2");
    enlace1.addEventListener("click", function (){
    	cargaenlace("paginas/enlace1.txt");
    });
    enlace2.addEventListener("click", function (){
    	cargaenlace("paginas/enlace2.txt");
    });
}