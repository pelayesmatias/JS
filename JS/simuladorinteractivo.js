let diasAlquiler=  parseInt(prompt("Ingrese días de alquiler"))

function calcularPrecioAlquiler(numero1, numero2, numero3) {

    let precioAlquiler = 500;
    let resultado = diasAlquiler * precioAlquiler;
    let precioDescuentoSemana = 300;
    let precioDescuentoQuincena = 1000;
    let precioDescuentoMensual = 2000;

    if (diasAlquiler <= 7) {
        let precioSemana = ((resultado) - precioDescuentoSemana);
        alert ("Promoción por semana! El Precio de tu alquiler es " + precioSemana);
    }
    else if ((diasAlquiler >= 8) && (diasAlquiler <= 14)) {
        let precioQuincena = ((resultado) - precioDescuentoQuincena);
        alert ("Super promo quincenal! El Precio de tu alquiler es " + precioQuincena);

    }
    else if ((diasAlquiler >= 15) && (diasAlquiler <= 30)) {
        let precioMensual = ((resultado) - precioDescuentoMensual);
        alert ("Nos volvimos locos! Promo Mensual: El Precio de tu alquiler es " + precioMensual);

    }

    else {
        alert("Comunicate con nosotros a info@rentalpyp.com y te presupuestamos la mejor opción");
    }
}
calcularPrecioAlquiler()