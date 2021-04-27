const inpNumeros = document.getElementById('inpNumeros');
const btnCalcularMedia = document.getElementById("btnCalcularMedia");

inpNumeros.addEventListener("keyup", almacenarValores);
btnCalcularMedia.addEventListener("click", calcularMedia);
let numerosAlmacenados = [];
let indice = 0;

function almacenarValores (event) {
    if (event.key != "Enter") {
        return;
    }

    if (inpNumeros.value == "") {
        alert("Debe ingresar un número");
        return;
    } 

    if (isNaN(inpNumeros.value)) {
        alert("Por favor, ingresar un valor númerico");
        return;
    }

    if (indice <= 10) {
        numerosAlmacenados[indice] = Number(inpNumeros.value);
        indice++;
        inpNumeros.value = "";
        console.log(numerosAlmacenados);
    } else {
        alert("Alcanzó el limite de guardado.");
        inpNumeros.value = "";
    }
}


function calcularMedia () {
    const contenedorMedia = document.getElementById('contenedorMedia');

    let totalArreglo = 0;
    let mediaArreglo = 0;
    for (let indice = 0; indice < numerosAlmacenados.length; indice++) {
        totalArreglo = totalArreglo + numerosAlmacenados[indice];
    }
    
    mediaArreglo = totalArreglo / numerosAlmacenados.length;

    contenedorMedia.innerHTML = `<div class="alert alert-success">La media del arreglo es : ${mediaArreglo}.</div>`;

    numerosAlmacenados = [];
    indice = 0;
}