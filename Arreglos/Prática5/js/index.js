let NumerosPrimos = [];
const inpLongitud = document.getElementById('inpLongitud');
const inpMinimo = document.getElementById('inpMinimo');
const inpMaximo = document.getElementById('inpMaximo');
const btnMostrar = document.getElementById('btnMostrar');
inpMinimo.addEventListener('keypress', almacenarMinimo);
inpMaximo.addEventListener('keypress', almacenarMaximo);
inpLongitud.addEventListener('keypress', AlmacenarNumerosPrimos);
btnMostrar.addEventListener('click', mostrarPrimos);
btnMostrar.disabled = true;
inpMaximo.disabled = true;
inpLongitud.disabled = true;


function almacenarMinimo (event) {
    let minimo = inpMinimo.value;
    if (event.key != "Enter") {
        return;
    }
    if (isNaN(minimo) == true) {
        alert('Es necesario que ingrese un valor numérico');
        return;
    }
    if (Number(minimo) <= 0) {
        alert('Ingrese una mínimo válido');
        return;
    }
    if (minimo == "") {
        alert('Es necesario que ingrese algún valor.');
        return;
    }

    inpMaximo.disabled = false;
    inpMinimo.disabled = true;
}
function almacenarMaximo (event) {
    let maximo = inpMaximo.value;
    if (event.key != "Enter") {
        return;
    }
    
    if (isNaN(maximo) == true) {
        alert('Es necesario que ingrese un valor numérico');
        return;
    }
    if (Number(maximo) <= 0) {
        alert('Ingrese una maximo válida');
        return;
    }
    if (maximo == "") {
        alert('Es necesario que ingrese algún valor.');
        return;
    }

    if (maximo <= Number(inpMinimo.value)) {
        alert('El máximo debe ser mayor al mínimo');
        return;
    }

    btnMostrar.disabled = false;
    inpMaximo.disabled = true;
    inpLongitud.disabled = false;
}


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

    let min = inpMinimo.value;
    let max = inpMaximo.value;

    for (let index = 0; index < longitud; index++) {
        let numero = Math.floor(Math.random() * (max - min)) + min;
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

    let numeroMayor = 0;
    let indiceMayor = 0;

    for (let indexMayor = 0; indexMayor < NumerosPrimos.length; indexMayor++) {
        if (NumerosPrimos[indexMayor] > numeroMayor) {
            numeroMayor = NumerosPrimos[indexMayor];
            indiceMayor = indexMayor;
        }
    }

    const contenedorMayor = document.getElementById('contenedorMayor');
    contenedorMayor.innerHTML = `<div class="alert alert-success">El valor mas alto es ${numeroMayor} de indice ${indiceMayor}</div>`;
    const containerResult = document.getElementById('containerResult');
    containerResult.innerHTML = acumuladorPrimos;
}