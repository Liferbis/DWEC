var href=["https://www.google.es","https://es.yahoo.com","https://es.wikipedia.org"];
var sitio;
var enlace;

addEventListener("load",init);
function init(){
	sitio=document.getElementsByClassName("sitio");
	enlace=document.getElementsByTagName("a")[0];
}

	function enlazar(posicion){
		formatear(posicion);
		enlace.rel=href[posicion];
	}

	function formatear(posicion){
		for(var i=0;i<sitio.length;i++){
			if(i==posicion){
				sitio[i].style.color="red";
			}else{
				sitio[i].style.color="inherit";
			}
		}
	}

	function abrirNuevaVentana(link){
		window.open(link.rel,'_blank');
		return false;
	}