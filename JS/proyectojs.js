const Amoladora = [{ id: 1, tipo: "AMOLADORA", modelo: "ANGULAR 5", tamanio: "125 mm", potencia: "1300W con escobillas de carbón", precio: 1200, disponible: true, stock: 10 },
{ id: 2, tipo: "AMOLADORA", modelo: "ANGULAR 7", tamanio: "180 mms", potencia: "2000 W con interruptor de encendido/apagado", precio: 1800, disponible: false, stock: 0 },
{ id: 3, tipo: "AMOLADORA", modelo: "ANGULAR 9", tamanio: " 230 mm", potencia: "400 W con interruptor de emergencia ", precio: 2200, disponible: true, stock: 8 },]


class Maquina {

    constructor(maquina) {
        this.id = maquina.id
        this.tipo = maquina.tipo
        this.modelo = maquina.modelo
        this.tamanio = maquina.tamanio
        this.potencia = maquina.potencia
        this.precio = maquina.precio
        this.disponible = maquina.disponible
        this.stock = maquina.stock
    }
}

const AmoladoraA = new Maquina({ id: 4, tipo: "AMOLADORA", modelo: "ANGULAR 4", tamanio: "125 mm", potencia: "850 W con interruptor lateral,tamanio", precio: 1000, disponible: true, stock: 5 })
Amoladora.push(AmoladoraA)
const AmoladoraB = new Maquina({ id: 5, tipo: "AMOLADORA", modelo: "ANGULAR A BATERIA", tamanio: "115 mm", potencia: "36 V equipado con motor sin escobillas", precio: 2000, disponible: true, stock: 7 })
Amoladora.push(AmoladoraB)



const OrdenarPrecio = (precio) => {
    Amoladora.sort((a, b) => {
        if (a[precio] > b[precio]) {
            return 1;
        }
        if (a[precio] < b[precio]) {
            return -1;
        }
        return 0;
    });

}
let maquinaElegida;
let cantidadElegida;
let diasElegido;
let maquinaSeleccionada;
let elegirNuevaMaquina;
let precioMaquina;
let resultado = diasElegido * precioMaquina;
const Agregar = []

maquinaElegida = prompt("Elige una amoladora: ANGULAR 4 - ANGULAR 5 - ANGULAR 7 - ANGULAR 9 - ANGULAR A BATERÍA");
cantidadElegida = parseInt(prompt("¿Qué cantidad necesitás?"))
diasElegido = parseInt(prompt("Indique cantidad de días de alquiler"))

function elegirMaquina(maquinaElegida, cantidadElegida, diasElegido) {
  
       alert  ("Tu elección es Amoladora"+" "+ maquinaElegida +" "+ "por" +" " + cantidadElegida +" "+ "unidades. Los días de alquiler son"+ " " + diasElegido+" "+ "días")
 return maquinaElegida, cantidadElegida, diasElegido
}


function corroborarStock(maquinaElegida, cantidad){
    const indiceMaquina = Amoladora.findIndex(
        (maquina) => maquina.modelo === maquinaElegida);
        const maquina = Amoladora [indiceMaquina];
        
    if(maquina.stock > cantidadElegida){
        alert("Gracias por su alquiler de" + " " + maquina.modelo + " "+  "por" + " " + diasElegido +" "+ "días. El precio total es de $ " + ((maquina.precio * maquina.dias) - ((20) * (maquina.precio*maquina.dias)) /100));
    }
    else{
        let sinstock = `No tenemos stock de ${maquinaElegida}`
        alert(sinstock);
    }

}

OrdenarPrecio("precio")
console.log(Amoladora)
elegirMaquina(maquinaElegida, cantidadElegida, diasElegido)
console.log(maquina)
corroborarStock(maquinaElegida, cantidadElegida)
console.log(maquina)
