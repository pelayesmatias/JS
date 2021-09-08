class herramientas {
    constructor(nombre, precio, disponible, stock, dias) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
        this.stock = stock;
        this.dias = dias;

    }
   
    PrecioFinal() {
        
        if (this.disponible == true) {
            let descuento = "Si llevás " + this.nombre + " "+ "te hacemos un 20% de descuento, ahora sale"+ " "  + "$" + (this.precio - ((20 * this.precio)/100)) + " " + "por día";
            console.log(descuento);
        }
        else {
            let error = `Lo sentimos, ${this.nombre} no está disponible en este momento`
            console.log(error);
        }
    }
    Confirmacion(){
        if(this.stock > 0){
            console.log("Gracias por su alquiler de" + " " + this.nombre + " "+  "por" + " " + this.dias +" "+ "días. El precio total es de $ " + ((this.precio * this.dias) - ((20) * (this.precio*this.dias)) /100));
        }
        else{
            let sinstock = `No tenemos stock de ${this.nombre}`
            console.log(sinstock);
        }
    
    }
}
const amoladora = new herramientas("AMOLADORA ANGULAR AG 125-13S", 500, true, 5, 4)
const carretilla = new herramientas("CARRETILLA CHAPA", 500, true, 3, 15)
const compresor = new herramientas("COMPRESOR 250 lts", 800, false, 0, 8)
const cortadoraCeramica = new herramientas("CORTADORA MANUAL TX-710 MAX", 2000, true, 2, 9)
const desmalezadora = new herramientas("FS 450 DESBROZADORA", 2000, true, 3, 20)

amoladora.PrecioFinal()
amoladora.Confirmacion()
carretilla.PrecioFinal()
carretilla.Confirmacion()
compresor.PrecioFinal()
compresor.Confirmacion()
cortadoraCeramica.PrecioFinal()
cortadoraCeramica.Confirmacion()
desmalezadora.PrecioFinal()
desmalezadora.Confirmacion()































