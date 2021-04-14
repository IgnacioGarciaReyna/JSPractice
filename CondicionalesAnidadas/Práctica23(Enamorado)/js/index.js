const btnCalcular= document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcular);
function calcular () {
    const inpPresupuesto = Number(document.getElementById('inpPresupuesto').value);
    let regalo = "";

    if (inpPresupuesto == 0 || inpPresupuesto == "") {
        alert (`Se debe ingresar un presupuesto.`)
        return;
    }

    if (inpPresupuesto <= 10) {
        regalo = "una tarjeta";
    } else if (inpPresupuesto <= 100) {
        regalo = "un chocolate o una tarjeta";
    } else if (inpPresupuesto <= 250) {
        regalo = "flores, un chocolate o una tarjeta";
    } else {
        regalo = "un anillo, flores, un chocolate o una tarjeta"
    }
    
    const contenedorResultado = document.getElementById('contenedorResultado');
    contenedorResultado.innerHTML = `<div class="alert alert-success">Según tu presupuesto puede regalar: ${regalo}.</div>`;
}