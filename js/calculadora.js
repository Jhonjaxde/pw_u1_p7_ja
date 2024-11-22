var num1 =0;
var num2 =0; 
var operacion ='';
var valorFinal =0;
function setearValor(valor){
    let valorActual =document.getElementById('id-dsplay').innerText;
    console.log(valorActual);
    letdocument.getElementById('id-dsplay').innerText=valor;
   
}

function setearValorConcatenado(valor){
    let valorActual =document.getElementById('id-dsplay').innerText;
    console.log(valorActual);
    letdocument.getElementById('id-dsplay').innerText=valor+valorActual;
   
}
function recibirValor(valor){
        console.log(valor)
        if(num1===null){
            num1=valor

        }else{
            num2=valor
        }
        console.log(num1)
    }

   


    function evaluarOpe(op){
        operacion= op
    }

function igual(){
    let valorFinal;
    if(operacion==='+'){
        valorFinal=num1+num2
    }else if(operacion==='-'){
        valorFinal=num1-num2
    }
    setearValor(valorFinal);
}

