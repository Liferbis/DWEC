// Crear Cookie
function crearCookie (nombre, value){ // ,exdays) { para poner dias
    var expire = new Date();
    expire.setTime(expire.getTime() + 355500);
    // + (exdays *24*60*60*1000 )); para dias
    // Estableces el tiempo de expiración, en dias
    var cokie = nombre + "=" + value + ";expires=" + expire.toUTCString() + ";";
    document.cookie = cokie;
    alert(document.cookie);
}

// Leer Cookie
function leerCookie(nombre) {
    var keyValue = document.cookie.match("(^|;) ?" + nombre + "=([^;]*)(;|$)");
    if (keyValue) {
        return keyValue[2];
    } else {
        return null;
    }
}

// Eliminar una Cookie concreta
function eliminarCookie(nombre) {
    document.cookie = nombre + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}