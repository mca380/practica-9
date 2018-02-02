function calcularData(){
    
    data= new Date (document.getElementById ("dataInici").value);
    dia = data.getDate ();
    
    if (dia != 1) {
        document.getElementById ("dataInici").focus();
        return false;
    } else {
        return true;
    }
}
function calcularPagament() {
    if (calcularData()) {
        
        var pagament = 0;
        var capital = document.getElementById("capital").value;
        var interessos = parseFloat(document.getElementById("interessos").value); 
        var termini = document.getElementById("termini").value;
        var dataInici = document.getElementById("dataInici").value;
        var datatFi;
        var numTermini = parseInt(termini);
        
        var data = new Date(dataInici);
        var any = data.getFullYear();
        var mes = data.getMonth();
        var dia = data.getDate();
        var datatFi = new Date((any + numTermini), mes, dia)
        
        
        interessos = interessos/12;
        termini = termini*12;
        pagament = (capital*interessos) / (100 *(1-Math.pow(1+(interessos/100),-termini)));
      
        
        resultat = "L'import a pagar és de "+(Math.round(pagament * 100) / 100)+" € al mes. Acabaràs de pagar dia "+datatFi.toLocaleDateString("en-US");
        document.getElementById("resultat").innerHTML = resultat;
    }else{
        
    }
    return false;
}



