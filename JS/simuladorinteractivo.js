let metodo = prompt("¿Desea alquilar o comprar");
const cotizador = "Gracias por contactarse con nosotros"
funcion sumarDosNumeros (numero1 , numero2){
    let result =numero1 + numero2;
    return result;
}

while (metodo != "") {
    switch (metodo.toUpperCase()) {
        case "Alquilar":
            let diasalquiler = parseInt 
            
            if (diasalquiler.toUpperCase () => "1") {
                alert("Genial! El envío es gratis!");
                alert(agradecimiento)
                metodo = ""
            }
            
            else {
               const otraProvincia = prompt ("¿Te gustaría que te presupuestemos el envío?")
                if (otraProvincia.toUpperCase() == "SI") {
                    prompt("ingresá tu correo electrónico y te contactaremos");
                    alert(agradecimiento)
                    metodo = ""
                }

                else {

                    alert(agradecimiento);
                    metodo = ""
                }
            }
            break

        case "ALQUILAR":
            alert("¿Cuantos dias?")

            alert(agradecimiento);
            metodo = ""

            break
        default:
            alert("No podemos procesar su solicitud")
            metodo = prompt("¿Desea alquilar o comprar");
            break
    }


}
