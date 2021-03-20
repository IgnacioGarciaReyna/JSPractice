//Suma
let btnSumar = document.getElementById('btnSuma');

btnSumar.addEventListener('click', sumarDosNumeros);

function sumarDosNumeros() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    
    let resultado = numero1 + numero2;

    let containerResultado = document.getElementById('containerReponse')

    containerResultado.innerText = resultado;
}

//Resta
let btnResta = document.getElementById('btnResta');

btnResta.addEventListener('click', restarDosNumeros);

function restarDosNumeros() {
    let numero1Resta = Number(document.getElementById('numero1Resta').value);
    let numero2Resta = Number(document.getElementById('numero2Resta').value);
    
    let resultadoResta = numero1Resta - numero2Resta;

    let containerResultado = document.getElementById('containerReponseResta')

    containerResultado.innerText = resultadoResta;
}

//Multiplicación
let btnMulti = document.getElementById('btnMulti');

btnMulti.addEventListener('click', multiDosNumeros);

function multiDosNumeros() {
    let numero1Multi = Number(document.getElementById('numero1Multi').value);
    let numero2Multi = Number(document.getElementById('numero2Multi').value);
    
    let resultadoMulti = numero1Multi * numero2Multi;

    let containerResultado = document.getElementById('containerReponseMulti')

    containerResultado.innerText = resultadoMulti;
}


//División
let btnDiv = document.getElementById('btnDiv');

btnDiv.addEventListener('click', divDosNumeros);

function divDosNumeros() {
    let numero1Div = Number(document.getElementById('numero1Div').value);
    let numero2Div = Number(document.getElementById('numero2Div').value);
    
    let resultadoDiv = numero1Div / numero2Div;

    let containerResultado = document.getElementById('containerReponseDiv')

    containerResultado.innerText = resultadoDiv;
}