let inpPalabra = document.getElementById('inpPalabra');
inpPalabra.addEventListener('keyup', crearArray);
let btnMostrarArray = document.getElementById('btnMostrarArray');
btnMostrarArray.addEventListener('click', mostrarArray);

btnMostrarArray.disabled = true;
let letrasPalabraReversa = [];

function crearArray(event) {
    if(event.key != "Enter") {
        return;
    }
    let palabra = inpPalabra.value;
    if(palabra == "") {
        alert(`Por favor, ingrese una palabra.`);
        return;
    }
    if(isNaN(palabra) == false) {
        alert(`Este programa no acepta números. Por favor, ingrese una palabra.`);
        return;
    }

    let letrasPalabra = [];

    letrasPalabra = Array.from(palabra);
    console.log(letrasPalabra);

    letrasPalabraReversa = letrasPalabra.reverse();
    console.log(letrasPalabraReversa);

    btnMostrarArray.disabled = false;
    inpPalabra.disabled = true;
}

function mostrarArray () {

    let container = document.getElementById('container');
    container.innerHTML = `<div class="alert alert-success">El array invertido es: [${letrasPalabraReversa}]</div>`;

    btnMostrarArray.disabled = true;
}