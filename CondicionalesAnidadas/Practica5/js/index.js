const btnCalcularAumento = document.getElementById('btnCalcularAumento');

btnCalcularAumento.addEventListener('click', calcularAumento);

function calcularAumento() {
    let tipoTarjeta = document.getElementById('sltTipoTarjeta').value;
    let creditoActual = Number(document.getElementById('inpCredito').value);
    let resultado = "";
    let aumentoTotal = 0;

    if (creditoActual =="" || creditoActual == 0) {
        alert(`Es necesario ingresar el crédito actual`);
        return;
    }

    if (tipoTarjeta == "tipo1") {
        aumentoTotal = creditoActual * 1.25;
    } else if (tipoTarjeta == "tipo2") {
        aumentoTotal = creditoActual *1.35;
    } else if (tipoTarjeta == "tipo3") {
        aumentoTotal = creditoActual * 1.4;
    } else {
        aumentoTotal = creditoActual * 1.5;
    }

    resultado = `El total de crédito que se le asignó es: $${aumentoTotal}`;

    let resultContainer = document.getElementById('resultContainer');

    resultContainer.innerHTML= `
    <div class="alert alert-success"> ${resultado}</div>
    `;
}