//arrastrar un div - click
//detener arrastre - dobleclick

var html;
var elemento;

var seleccionado;

addEventListener("load",init);
function init(){
	html=document.documentElement;
	elemento=document.getElementsByClassName("elemento");
		for(var i=0;i<elemento.length;i++){
			elemento[i].addEventListener("click",coger);
			elemento[i].addEventListener("dblclick",soltar);
		}		
}

	function coger(){
		if(this.getAttribute("data-movible")!="movible"){
			this.setAttribute("data-movible","movible");
			seleccionado=this;

			html.addEventListener("mousemove",mover);	
		}	
	}
	function mover(){
		if(seleccionado.getAttribute("data-movible")=="movible"){
			seleccionado.style.top=event.clientY+"px";
			seleccionado.style.left=event.clientX+"px";
		}
	}
	function soltar(){
		if(this.getAttribute("data-movible")=="movible"){
			this.removeAttribute("data-movible");
			html.removeEventListener("mousemove",mover);
		}
	}