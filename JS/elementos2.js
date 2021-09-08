let diasAlquiler=  parseInt(prompt("Ingrese días de alquiler"))

function calcularPrecioAlquiler(numero1, numero2, numero3) {
    
    let precioAlquiler = 500;
    let resultado = diasAlquiler * precioAlquiler;
    let precioDescuentoSemana = 300;
    let precioDescuentoQuincena = 1000;
    let precioDescuentoMensual = 2000;
    
    if (diasAlquiler <= 7) {
        let precioSemana = ((diasAlquiler * precioAlquiler) - precioDescuentoSemana);
        alert ("El Precio de tu alquiler es " + precioSemana);
    }
    else if ((diasAlquiler >= 8) && (diasAlquiler <= 14)) {
        let precioQuincena = ((diasAlquiler * precioAlquiler) - precioDescuentoQuincena);
        alert ("El Precio de tu alquiler es " + precioQuincena);

    }
    else if ((diasAlquiler >= 15) && (diasAlquiler <= 30)) {
        let precioMensual = ((diasAlquiler * precioAlquiler) - precioDescuentoMensual);
        alert ("El Precio de tu alquiler es " + precioMensual);

    }

    else {
        alert("Comunicate con nosotros y te presupuestamos la mejor opción");
    }
}
calcularPrecioAlquiler()
