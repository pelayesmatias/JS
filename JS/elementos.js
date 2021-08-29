let diasAlquiler = prompt("Indique cantidad de dias de alquiler");

if(diasAlquiler<=3){
    alert("Pagás alquiler por día");
}
else if ((diasAlquiler>=4) && (diasAlquiler<=7)){
    alert("Super promo: Pagás alquiler 4 días!");

}
else if ((diasAlquiler>=8) && (diasAlquiler<=15)){
    alert("Nos volvimos locos: Pagas solo 6 días");

}
else if ((diasAlquiler>=16) && (diasAlquiler<=30)){
    alert("Nos volvimos locos: Pagas solo 10 días");

}
else {
    alert("Comunicate con nosotros y te presupuestamos la mejor opción");
}