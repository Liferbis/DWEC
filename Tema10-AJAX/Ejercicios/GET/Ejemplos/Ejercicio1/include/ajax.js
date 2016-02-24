function cargaenlace(lin){
    var respuesta;
    
// 1-CREAR OBJETO
    if (window.XMLHttpRequest)   {
        respuesta = new XMLHttpRequest();
        respuesta.overrideMimeType('text/xml');

    } else if (window.ActiveXObject) {
        respuesta = new ActiveXObject("Microsoft.XMLHTTP");   
    }


    respuesta.open ('GET', lin, true);

    respuesta.send (null);

        
    respuesta.onreadystatechange = muestracontenido;   

    function muestracontenido (){
        
        if(respuesta.readyState  == 4){ // ya ha pasado todos los estados
            if(respuesta.status == 200){ // esta perfecto y sin errores
                
                document.getElementById('res').innerHTML = respuesta.responseText;
            }else{
                document.getElementById('respuesta').value="Codigo de error " + respuesta.status;
            }
        }  
    };  
}