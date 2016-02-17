var img;

addEventListener("load",init);
function init(){
	img=document.getElementById("imagen");
		img.addEventListener("mouseover",cambio);
		img.addEventListener("mouseout",inicio);
}

function cambio(){
	this.src="img2.jpg";
}
function inicio(){
	this.src="img1.jpg";
}