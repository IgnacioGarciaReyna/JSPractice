let btnMostrarArray = document.getElementById('btnMostrarArray');
btnMostrarArray.addEventListener('click', crearArray);

let arreglo1 = [];
let arreglo2 = [];


function crearArray () {
    for(let i = 0; i < 30; i++) {
        numero = Math.floor(Math.random() * (300 - 101)) + 101;
        arreglo1[i] = numero;
        let isInpar = validarNumeroPrimo(numero);
        if (isInpar == true) {
            arreglo2.push(numero);
        }
    }

    let container1 = document.getElementById('container1');
    let container2 = document.getElementById('container2');
    container1.innerHTML = `<div class="alert alert-success">El array inicial es: <br> [${arreglo1}]</div>`;
    container2.innerHTML = `<div class="alert alert-success">Los números impares son: <br> [${arreglo2}]</div>`;

    btnMostrarArray.disabled = true;
}

function validarNumeroPrimo (numero) {
    if (numero % 2 == 0) {
        return false;
    }
    return true;
}


    
    
    




    
    
