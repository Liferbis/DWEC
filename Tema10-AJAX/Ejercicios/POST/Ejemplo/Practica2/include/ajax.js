function submitForm(texto){
    var respuesta;
    
// 1-CREAR OBJETO
    if (window.XMLHttpRequest)   {
        respuesta = new XMLHttpRequest();
        respuesta.overrideMimeType('text/xml');

    } else if (window.ActiveXObject) {
        respuesta = new ActiveXObject("Microsoft.XMLHTTP");   
    }


    respuesta.open ('POST', 'fichero/fichero.php', true);
    respuesta.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    respuesta.send (texto);

        
    respuesta.onreadystatechange = muestracontenido;   

    function muestracontenido (){
        
        if(respuesta.readyState  == 4){ // ya ha pasado todos los estados
            if(respuesta.status == 200){ // esta perfecto y sin errores
                
                document.getElementById('res').innerHTML = respuesta.responseText;
            }else{
                document.getElementById('res').value="Codigo de error " + respuesta.status;
            }
        }  
    };  
}