//salvapantalla??
// burbujas de diferentes tamaños y colores, insertar cada segundo
// pincharlas con el ratón
// a los 30 segundos mostrar resultados
var iterar;
var contCreados=0;
var contReventados=0;

addEventListener("load",init);
function init(){
	document.body.style.backgroundColor="#e0e0e0";

	iterar=setInterval(crearCirculo, 1000);
	setTimeout(fin,10000);
}

function crearCirculo(){
	var arrAtt=new Array();
	arrAtt["class"]="circulo";

	var circulo=crearEtiqueta("div",null,arrAtt);
	formatear(circulo);
	circulo.addEventListener("click",reventar);
	document.body.appendChild(circulo);
	contCreados++;
}
	function formatear(circulo){
		var medida=(Math.floor(Math.random()*300)+50);
		circulo.style.width=medida+"px";
		circulo.style.height=medida+"px";
		circulo.style.position="absolute";
		circulo.style.backgroundColor="rgba("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+0.3+")";
		circulo.style.border="1px solid #fff";
		circulo.style.borderRadius="50%";

		var altura=window.innerWidth-(medida);
		var anchura=window.innerHeight-(medida);
		circulo.style.top=Math.floor(Math.random()*altura)+"px";
		circulo.style.left=Math.floor(Math.random()*anchura)+"px";
	}

function fin(){
	clearInterval(iterar);

	var circulo=document.getElementsByClassName("circulo");
	for(var i=0;i<circulo.length;i++){
		circulo[i].style.backgroundColor="transparent";
		circulo[i].removeEventListener("click",reventar);
	}

	var texto="Se han creado "+contCreados+" burbujas, de los que has reventado "+contReventados;
	var p=crearEtiqueta("p",texto,null);

	var arrAtt=new Array();
	arrAtt["id"]="resultado";
	var resultado=crearEtiqueta("div",null,arrAtt);
		resultado.appendChild(p);
			resultado.style.position="fixed";
			resultado.style.width="100%";
			resultado.style.top="66%";
		document.body.appendChild(resultado);

}

function reventar(){
	document.body.removeChild(this);
	contReventados++;
}


//=========================
	function crearEtiqueta(tag,contenido,att){
			if(contenido!=null){
			var texto=document.createTextNode(contenido);
			}

			if(tag!=null){
				var etiqueta=document.createElement(tag);
				
				if(texto!=null){
					etiqueta.appendChild(texto);
				}
				
				if(att!=null)insertarAtributos(etiqueta,att);

				return etiqueta;
			}

			return texto;
		}

		function insertarAtributos(tag,att){
			for(indice in att){
				tag.setAttribute(indice,att[indice]);
			}
		}