var nombre;
nombre = prompt('Dime tu nombre ', '');
alert("Saludos " + nombre + ", lee las instrucciones de la página");

function meses() {
    var meses = ["enero", "febrero", "marzo", "abril", "mayo", 
                 "junio", "julio", "agosto", "septiembre", "octubre", 
                 "noviembre", "diciembre"];
    var i;
    var contenido = ""; // Variable para acumular el texto

    for (i = 0; i <= 11; i++) {
        contenido += "Mes " + (i + 1) + ": " + meses[i] + "<br>";
    }
    contenido += "<br><em>Para volver a iniciar las funciones recarga la página</em><br>";

    // Inyectamos el resultado en el div correspondiente
    document.getElementById("resultadoMeses").innerHTML = contenido;
}

function tablaMulti(numero) {
    // Si la caja de texto está vacía, no hacemos nada
    if (!numero) return;

    var j;
    var contenido = ""; // Variable para acumular la tabla

    contenido += "<h3>Tabla del " + numero + ":</h3>";
    for (j = 1; j <= 10; j++) {
        contenido += numero + " x " + j + " = " + (numero * j) + "<br>";
    }
    contenido += "<br><em>Para volver a iniciar las funciones recarga la página</em><br>";

    // Inyectamos el resultado en el div correspondiente
    document.getElementById("resultadoTabla").innerHTML = contenido;
}