

function submitForm(){
    var respuesta;
    
    if (window.XMLHttpRequest)   {
        respuesta = new XMLHttpRequest();

    } else if (window.ActiveXObject) {
        respuesta = new ActiveXObject("Microsoft.XMLHTTP");   
    }

    // true =                 // false = 
  	respuesta.open ('GET', 'http://localhost/DWEC/Tema9-AJAX/Ejemplos/primerosPasos/include/datos.txt', true);
    respuesta.send (null);

        
    respuesta.onreadystatechange = muestracontenido();   

    function muestracontenido (){
        // alert(respuesta.status);
        // alert(respuesta.readyState);  

        if(respuesta.readyState  == 4){ // ya ha pasado todos los estados
            if(respuesta.status == 200){ // esta perfecto y sin errores
                document.getElementById('dyn').value="Recibido:" + respuesta.responseText;              
            }else{
                document.getElementById('dyn').value="Codigo de error " + respuesta.status;
            }
        }  
    };  
}

