function submitForm(datos){
    var respuesta;
    
    if (window.XMLHttpRequest)   {
        respuesta = new XMLHttpRequest();
        respuesta.overrideMimeType('text/xml');

    } else if (window.ActiveXObject) {
        respuesta = new ActiveXObject("Microsoft.XMLHTTP");   
    }

    respuesta.open ('GET', 'datos/listado.txt', true);
    respuesta.send (null);

        
    respuesta.onreadystatechange = muestracontenido;   

    function muestracontenido (){
         
        if(respuesta.readyState  == 4){ // ya ha pasado todos los estados
            if(respuesta.status == 200){ // esta perfecto y sin errores
                
                if(datos!=null){
                    filtraDatos(respuesta.responseText);
               }else{
                    cargarDatos(respuesta.responseText);
               }
                             
            }else{
                document.getElementById('res').innerHTML = "Codigo de error " + respuesta.status;
            }
        }  
    }; 

    //function cargarDatos(respuesta.responseText);
}