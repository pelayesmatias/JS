function sumarPrecio (precio1,precio2){
    let resultado =precio1+precio2;
    return resultado;
}
let primerPrecio = parseInt(prompt("Ingrese el precio del primer producto:"));
let segundoPrecio = parseInt(prompt("Ingrese el precio del segundo producto:"));
let totalCompraSinIva = sumarPrecio (primerPrecio, segundoPrecio);
let aviso = (alert ("Por el aniversario de nuestra empresa te hacemos un descuento $500"))
let descuento = 500;
function calcularIva (preciosinIva){
let total = preciosinIva *1.21;
let precioFinalDescuento = total - descuento;
console.log(("El precio final con IVA es: " + total));
console.log(("El precio final con descuento es: " + precioFinalDescuento));

return total;
}
function descuentoContado (precioFinalDescuento){
return precioFinalDescuento;
}

calcularIva(totalCompraSinIva)
descuentoContado()
sumarPrecio()
































