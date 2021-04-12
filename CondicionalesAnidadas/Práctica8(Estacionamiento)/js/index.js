const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcular);
function calcular() {
    const inpHoras = Number(document.getElementById('inpHoras').value);
    let valorHora = 0;

    if (inpHoras == 0 || inpHoras < 0) {
        alert(`Se debe agregar una cantidad de horas valida`);
        return;
    }

    if (inpHoras < 2) {
        valorHora = 5;
    } else if (inpHoras < 5) {
        valorHora = 4;
    } else if (inpHoras < 10) {
        valorHora = 3;
    } else {
        valorHora = 2;
    }

    let resultado = valorHora * inpHoras;
    const contenedorPrecioFinal = document.getElementById('contenedorPrecioFinal');
    contenedorPrecioFinal.innerHTML = `<div class="alert alert-success">El precio a pagar por ${inpHoras} horas es de $${resultado}. </div>`;
}