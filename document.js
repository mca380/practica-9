function calcularPagament()
{

//Variables

var capital;
var interes;
var dataInici;
var termini;
//Bucle per el termini

for (i=0; i<termini.length; i++)

{


//Fórmula

var resultat=((capital*interes) / 100 *(1-Math.pow((1+(interes/100)/12),(-termini))));



//Aquesta darrera mostra el resultat dins la casella

document.getElementById("pagamentMensual").innerHTML=resultat;

}
}
