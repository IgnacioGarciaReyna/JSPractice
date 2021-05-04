let btnMostrarArray = document.getElementById('btnMostrarArray');
btnMostrarArray.addEventListener('click', crearArray);

let arreglo = [];


function crearArray (event) {
    for(let numero = 1000; numero >= 1; numero--) {
        let isPrimo = validarNumeroPrimo(numero);
        if (isPrimo == true) {
            arreglo.push(numero);
        }
    }

    let containerResult = document.getElementById('containerResult');
    containerResult.innerHTML = `<div class="alert alert-success"><p>Los números primos entre 1 y 1000 en orden descendete son: [${arreglo}]</p></div>`;
}

function validarNumeroPrimo (numero) {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor == 0) {
            //el false lo retorno cuando se encuentra algún divisor
            return false;
        }
    }
    //true lo retorno hasta que se termina el ciclo
    return true;
}


    
    
    




    
    
