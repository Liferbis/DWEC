var nombresProductos=["Manzana","Palo","Láser","Electro","Hope"];
var stockProductos=[4,10,50,500,1];


var arrayProductos=new Array();
var arrayPedidos=new Array();

addEventListener("load", init);

	function init(){
		for(var indice in nombresProductos){
			arrayProductos[nombresProductos[indice]]=stockProductos[indice];
		}
	}

	function peticionProducto(){
		var indice;
		var unidades;
		while(!promptPedido(indice,unidades)){

		}
		mostrarProductos(arrayPedidos);
	}

	function promptPedido(indice,unidades){
		var saludo="Bienvenido a la tienduca intergaláctica.\nInserte el parámetro numérico correspondiente al producto\n";
		var listado="\t(1):Manzana\n\t(2):Palo\n\t(3): Láser\n\t(4): Electro\n\t(5): Hope\n";
		var objeto=prompt(saludo+listado);


		var validador=false;

		if(objeto==1||objeto==2||objeto==3||objeto==4||objeto==5){
			validador=true;
			indice=nombresProductos[(Number(objeto)-1)];
			unidades=prompt("¿Cuántas unidades?");

			if(calcularPedido(indice,unidades)){
				alert("Producto añadido.");
			}else{
				alert("No se ha podido añadir el producto.");
			}
		}

		if(objeto==null){
			return true;
		}

			if(!validador)alert("Inserte los parámetros numéricos indicados.");
			if(!confirm("¿Desea añadir otro producto?"))return true;

		return false;
	}

	function calcularPedido(indice,unidades){
		if(hayUnidades(indice,unidades)){
			plusPedido(indice,unidades);
			return true;
		}

		return false;
	}
	function hayUnidades(indice,unidades){

		if(arrayProductos[indice]-Number(unidades)>=0){
			arrayProductos[indice]-=Number(unidades);

			return true;
		}
		alert("he");
		return false;
	}
	function plusPedido(indice,unidades){

		if(arrayPedidos[indice]==null){
			arrayPedidos[indice]=Number(unidades);
		}else{
		
			arrayPedidos[indice]+=Number(unidades);
		}
	}

	function mostrarProductos(array){

		var texto="<table class='tabla'><thead><tr><th>Producto</th><th>Stock</th></tr></thead>";
		texto+= "<tbody><tr>";
		for(variable in array){
			texto += "<td>" + variable + "</td><td>" + array[variable] + "</td></tr>";
		}
		texto+="</tbody></table>";
		document.getElementById('tabla').innerHTML = texto;
	}

