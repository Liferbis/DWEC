function submitForm(valor){
    var respuesta;
    
    if (window.XMLHttpRequest)   {
        respuesta = new XMLHttpRequest();
        respuesta.overrideMimeType('text/xml');

    } else if (window.ActiveXObject) {
        respuesta = new ActiveXObject("Microsoft.XMLHTTP");   
    }

    respuesta.open ('GET', 'php/pagina1.php?cod='+valor , true);
    respuesta.send (null);

        
    respuesta.onreadystatechange = muestracontenido;   

    function muestracontenido (){
         
        if(respuesta.readyState  == 4){ // ya ha pasado todos los estados
            if(respuesta.status == 200){ // esta perfecto y sin errores
                if(valor != 0){
                    cargarDatos(respuesta.responseText);
                }
                //document.getElementById('res').innerHTML = "Recibido:" + respuesta.responseText;              
            }else{
                document.getElementById('res').innerHTML = "Codigo de error " + respuesta.status;
            }
        }  
    }; 

    //function cargarDatos(respuesta.responseText);
}