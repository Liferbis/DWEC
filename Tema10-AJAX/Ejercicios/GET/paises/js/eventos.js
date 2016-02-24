var contenedor;
var contDatos;

var selector;

addEventListener("load",init);
function init(){

	contenedor=document.getElementById("contenedor");
	contDatos=document.getElementById("file_data");

	selector=document.getElementById("sl_pais");
		selector.addEventListener("change",pedirDatos);

}

	function pedirDatos(){
		var direccion;

		if(event.type=="change"){
			var id=selector.selectedIndex;
			var get=selector.options[id].value;
			direccion="pagina1.php"+"?pa="+get;

			var funcionRellamada=cargarDatos;
		}

		enviarPeticionAjax(direccion,funcionRellamada);

	}
