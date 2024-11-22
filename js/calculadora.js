var num1 = 0;
var num2 = 0;
var operacion = '';

function setearValor(valor){
    let valorActual =document.getElementById('id-dsplay').innerText;
    console.log(valorActual);
     document.getElementById('id-dsplay').innerText=valor;
   
}

function setearValorConcatenado(valor){
    let valorActual =document.getElementById('id-dsplay').innerText;
    console.log(valorActual);
     document.getElementById('id-dsplay').innerText=valorActual+valor;
   
}
function recibirValor(valor) {
    if (num1 === 0) {
        num1 = parseFloat(valor);
        setearValor(valor);
    } else {
        num2 = parseFloat(valor);
        setearValorConcatenado(valor);
    }
    setearValorConcatenado(valorFinal)
}

function evaluarOperacion(op) {
    operacion = op;
    setearValorConcatenado(op);
}

function igual() {
    let valorFinal;
    if (operacion === '+') {
        valorFinal = num1 + num2;
    } else if (operacion === '-') {
        valorFinal = num1 - num2;
    } else if (operacion === 'x') {
        valorFinal = num1 * num2;
    } else if (operacion === '%') {
        valorFinal = num1 / num2;
    }
    setearValor(valorFinal);
    num1 = valorFinal;
    num2 = null;
    operacion = null;
}

function limpiar() {
    num1 = null;
    num2 = null;
    operacion = null;
    setearValor('');
}