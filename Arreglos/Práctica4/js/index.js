const inpLength = document.getElementById('inpLength');
const btnMostrarArray = document.getElementById('btnMostrarArray');

btnMostrarArray.disabled = true;

inpLength.addEventListener('keyup', determinarLength);
btnMostrarArray.addEventListener('click', mostrarArray);

let lengthArray = 0;
let arreglo = [];

function determinarLength (event) {
    if (event.key != "Enter") {
        return;
    }
    lengthArray = Number(inpLength.value);
    btnMostrarArray.disabled = false;
    inpLength.disabled = true;
}

function mostrarArray (event) {
    let acumuladorNumeros = '';
    for (let index = 0; index >= lengthArray; index ++);
}
