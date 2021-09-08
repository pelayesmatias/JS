const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;

const iva   = x => x * 0.21;
let diasAlquiler  = prompt("Ingrese días de alquiler");
alert("Los dias ingresados " + diasAlquiler );
let precioDia = 100;  

let nuevoPrecio = (suma(precioDia, iva(diasAlquiler)), diasAlquiler); 
console.log(nuevoPrecio);

let anio= 2021
let mes = 12
let dia = 1


const tuEdad = (diaNacimiento,mesNacimiento,anioNacimiento)=>{

	

	if(yaCumplioAnios(diaNacimiento,mesNacimiento,anioNacimiento)){

		return "Tu edad es " + (anio - anioNacimiento)
	
	}else if(cumpleanios(diaNacimiento,mesNacimiento,anioNacimiento)){

		return "Feliz cumpleaños, tenes " + (anio - anioNacimiento) + " años"
	}else{

		return "Tu edad es " + (anio - anioNacimiento - 1)
	}

	
}

const cumpleanios = (diaNacimiento,mesNacimiento)=>{

    if(diaNacimiento == dia && mesNacimiento == mes){

    	return true
    }else{

    	return false
    }

}

const yaCumplioAnios = (diaNacimiento,mesNacimiento)=>{

if(mesNacimiento < mes || (mesNacimiento == mes && diaNacimiento < dia)){

	return true
}else{

	return false
}

}

console.log(tuEdad(01,12,1984))


function descuentoContado (precioFinalDescuento){
    return precioFinalDescuento;
    }
    