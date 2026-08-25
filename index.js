function calcularTabuada(){

    if (event) event.preventDefault();

 let tabuada  = Number (document.getElementById("numero").value);

 

 let resultadoCompleto = "";

for(let i = 1; i <=10; i++){

 document.getElementById("paragrafo").innerHTML =  resultadoCompleto += tabuada +" X "+ i +"="+ tabuada*i+ "<br>";
 


}


parágrafo.innerHTML = resultadoCompleto;
}