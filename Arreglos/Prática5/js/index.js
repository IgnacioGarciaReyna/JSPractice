let NumerosPrimos = [];
const inpLongitud = document.getElementById('inpLongitud');
const btnMostrar = document.getElementById('btnMostrar');
inpLongitud.addEventListener('keypress', AlmacenarNumerosPrimos);
btnMostrar.addEventListener('click', mostrarPrimos);
btnMostrar.disabled = true;



function AlmacenarNumerosPrimos (event) {
    let longitud = inpLongitud.value;
    if (event.key != "Enter") {
        return;
    }
    
    if (isNaN(longitud) == true) {
        alert('Es necesario que ingrese un valor numérico');
        return;
    }
    if (Number(longitud) <= 0) {
        alert('Ingrese una longitud válida');
        return;
    }
    if (longitud == "") {
        alert('Es necesario que ingrese algún valor.');
        return;
    }

    for (let index = 0; index < longitud; index++) {
        let numero = Math.floor(Math.random() * (100 - 2 + 2) + 2);
        let isPrimo = validarNumeroPrimo (numero);
        if (isPrimo == true) {
            NumerosPrimos[index] = numero;
            console.log(NumerosPrimos);
        } else {
            index--;
        }
    }
    btnMostrar.disabled = false;
    inpLongitud.disabled = true;

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

function mostrarPrimos () {
    let acumuladorPrimos = '';
    for (let indexMostrar = 0; indexMostrar < NumerosPrimos.length; indexMostrar++) {
        acumuladorPrimos += `<li class="list-group-item">Indice: ${indexMostrar} Valor: ${NumerosPrimos[indexMostrar]}</li>`;
    }
    const containerResult = document.getElementById('containerResult');
    containerResult.innerHTML = acumuladorPrimos;
}