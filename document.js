function calcularPagament()
{

//Variables

var capital;
var interes;
var dataInici;
var termini;

//if (termini)

var resultat=((capital*interes) / 100 *(1-Math.pow((1+(interes/100)/12),(-termini))));



//Aquesta darrera mostra el resultat dins la casella

document.getElementById("pagamentMensual").innerHTML=resultat;

}

