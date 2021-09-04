let metodo = prompt("¿Desea alquilar o comprar");
const agradecimiento = "Gracias por contactarse con nosotros"

while (metodo != "") {
    switch (metodo.toUpperCase()) {
        case "COMPRAR":
            const provincia = prompt("¿De que provincia sos?");
            
            if (provincia.toUpperCase () == "MENDOZA") {
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
            alert("El servicio de alquiler se encuentra momentáneamente suspendido")
            alert(agradecimiento);
            metodo = ""

            break
        default:
            alert("No podemos procesar su solicitud")
            metodo = prompt("¿Desea alquilar o comprar");
            break
    }


}

































