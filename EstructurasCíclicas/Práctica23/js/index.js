const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', ordenarNumeros);

function ordenarNumeros () {
    let numeroActual = 0;
    let sumaImpares = 0;
    let sumaPares = 0;
    let cantidadPares = 0;
    let cantidadImpares = 0;

    for (let i=0;i<30;i++) {
        numeroActual = Number(prompt('Ingrese un número entero:'));
        if (isNaN(numeroActual) == true) {
            alert('Por favor, ingrese un número válido.');
            i = i - 1;
        } else if (numeroActual % 2 != 0) {
            sumaImpares = sumaImpares + numeroActual;
            cantidadImpares++;
        } else {
            sumaPares = sumaPares + numeroActual;
            cantidadPares++;
        }
    }

    const promedioPares = sumaPares / cantidadPares;

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `<div class="alert alert-success">La suma de los ${cantidadImpares} números impares da: ${sumaImpares}. <br> El promedio de los ${cantidadPares} números pares da: ${promedioPares} </div>`;
    
}

