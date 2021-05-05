let btnMostrarArray = document.getElementById('btnMostrarArray');
btnMostrarArray.addEventListener('click', mostrarArrays);

let arrayInicial = [0,1,2,3,4,5,6,7,8,9];
let arrayReverse = [];

function mostrarArrays () {
    for(let i = 0; i < arrayInicial.length; i++) {
        let numero = arrayInicial[arrayInicial.length - 1] - arrayInicial[i];
        arrayReverse.push(numero);
    }

    let container1 = document.getElementById('container1');
    let container2 = document.getElementById('container2');
    container1.innerHTML = `<div class="alert alert-success">El array inicial es: [${arrayInicial}]</div>`;
    container2.innerHTML = `<div class="alert alert-success">El array invertido es: [${arrayReverse}]</div>`;

    btnMostrarArray.disabled = true;
}