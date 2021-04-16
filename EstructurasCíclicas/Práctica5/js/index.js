const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', evaluarNumero);

function evaluarNumero() {
    let continuar = true;
    let numeroMayor = 0;
    let numeroMenor = 0;
    while (continuar == true) {
        let numero = prompt(`Ingrese el numero a evaluar`);
        if (isNaN(numero) == true) {
            alert("Es necesario que ingrese solo números");
        } else if (numero == null) {
            continuar = false;
        } else {
            numero = Number(numero);
            if (numero >= 500) {
                numeroMayor++;
            } else {
                numeroMenor++;
            }
        }
    }

    let resultContainer = document.getElementById('resultContainer');

    resultContainer.innerHTML = `<span>Ingresó ${numeroMayor} números mayores a 500 e ingresó ${numeroMenor} números menores a 500.</span>`
}