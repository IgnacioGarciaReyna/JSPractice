const inpNumeros = document.getElementById('inpNumeros');
const btnNumerosAlmacenados = document.getElementById("btnNumerosAlmacenados");

inpNumeros.addEventListener("keyup", almacenarValores);
btnNumerosAlmacenados.addEventListener("click", mostrarValores);
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

    if (indice <= 4) {
        numerosAlmacenados[indice] = Number(inpNumeros.value);
        indice++;
        inpNumeros.value = "";
        console.log(numerosAlmacenados);
    } else {
        alert("Alcanzó el limite de guardado.");
        inpNumeros.value = "";
    }
}


function mostrarValores () {
    const lstValoresAlmacenados = document.getElementById('lstValoresAlmacenados');

    let mensajeResultado = "";
    for (let indice = 0; indice < numerosAlmacenados.length; indice++) {
        mensajeResultado += `<li class="list-group-item">El número que se encuentra en el índice ${indice} es: ${numerosAlmacenados[indice]}</li>`
    }

    lstValoresAlmacenados.innerHTML = mensajeResultado;

    numerosAlmacenados = [];
    indice = 0;
}