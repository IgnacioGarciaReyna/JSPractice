const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', calcularAhorro);

function calcularAhorro () {
    let ahorroActual = 1;
    let ahorroTotal = 0;

    for (let i = 1; i <= 365; i++) {
        ahorroActual = ahorroActual * 3;
        ahorroTotal = ahorroTotal + ahorroActual;
    }

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `<div class="alert alert-success">Al cabo de 1 año (365 días) el ahorro es de C${ahorroTotal}.</div>`;


}