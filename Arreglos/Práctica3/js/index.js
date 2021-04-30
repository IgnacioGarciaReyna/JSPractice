const inpLongitud = document.getElementById('inpLongitud');
const inpValores = document.getElementById('inpValores');
const btnMostrarValores = document.getElementById('btnMostrarValores');

inpValores.disabled = true;
btnMostrarValores.disabled = true;

inpLongitud.addEventListener("keyup", determinarLongitud);
inpValores.addEventListener("keyup", almacenarValores);
btnMostrarValores.addEventListener("click", mostrarValores);

let longitudList = 0;
let indice = 0;
let numerosAlmacenados = [];
function determinarLongitud(event) {
    if (event.key != "Enter") {
        return;
    }
    longitudList = Number(inpLongitud.value);
    inpLongitud.disabled = true;
    inpValores.disabled = false;
    btnMostrarValores.disabled = false;
}

function almacenarValores (event) {
    if (event.key != "Enter") {
        return;
    }
    if (indice >= longitudList) {
        alert ('Se llego al límite de almacenamiento');
        inpValores.value = "";
        return;
    }
    let valorIngresado = inpValores.value;
    if (valorIngresado == "") {
        alert('Por favor, ingresar un valor numérico');
        inpValores.value = "";
        return;
    }
    if (isNaN(valorIngresado)) {
        alert('Por favor, ingresar un valor numérico');
        inpValores.value = "";
        return;
    }
    for (let indice2=0; indice2<=numerosAlmacenados.length; indice2++) {
        if (valorIngresado == numerosAlmacenados[indice2]) {
            alert('Valor repetido, por favor ingresar otro');
            inpValores.value = "";
            return;
        }
    }
    numerosAlmacenados[indice] = Number(valorIngresado);
    indice++;
    inpValores.value = "";
}

function mostrarValores () {
    let numerosArreglo = '';
    for (let indice3 = 0; indice3 < numerosAlmacenados.length; indice3++){
        numerosArreglo += `<li class="list-group-item">${numerosAlmacenados[indice3]}</li>`;
    }
    const contenedorArreglo = document.getElementById('contenedorArreglo');
    contenedorArreglo.innerHTML = numerosArreglo
}

