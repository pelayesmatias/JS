const amoladoras = [ { id: 1, modelo: "AMOLADORA ANGULAR 5`",tamanio:"125 mm",potencia:"1300W con escobillas de carbón",precio:1200},
                  { id: 2,  modelo: "AMOLADORA ANGULAR 7`",tamanio:"180 mms",potencia:"2000 W con interruptor de encendido/apagado", precio:1800 },
                  { id: 3,  modelo: "AMOLADORA ANGULAR 9`",tamanio:" 230 mm",potencia:"400 W con interruptor de emergencia ",precio: 2200 },]


class maquinas{

    constructor(maquinas){
        this.id = maquinas.id
        this.modelo = maquinas.modelo
        this.tamanio = maquinas.tamanio
        this.precio = maquinas.precio
    }
}

const Amoladora= new maquinas({id:4,modelo:"AMOLADORA ANGULAR 4`",tamanio:"125 mm", potencia: "850 W con interruptor lateral,tamanio",precio:1000})
amoladoras.push(Amoladora)
const AmoladoraB = new maquinas({id:5,modelo:"AMOLADORA ANGULAR A BATERIA",tamanio:"115 mm", potencia: "36 V equipado con motor sin escobillas",precio:2000})
amoladoras.push(AmoladoraB)

const Agregar = []

const Alquilar = (modelomaquinas) =>{
     
        let maquinas = amoladoras.find(maquinas => maquinas.modelo == modelomaquinas )
        if(maquinas){
         Agregar.push(maquinas)
        }else{
            console.log ("No contamos con ese maquinas")
        }
} 

Alquilar("Amoladora")
console.log (Agregar)
const buscarTamanio = (tamaniomaquinas) =>{

    const busqueda = amoladoras.filter(maquinas => maquinas.tamanio === tamaniomaquinas)
    console.log(busqueda)
}
buscarTamanio("125 mm")



