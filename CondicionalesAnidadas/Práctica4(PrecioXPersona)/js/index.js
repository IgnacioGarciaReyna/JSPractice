const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcular);
function calcular() {
    const numeroPersonas = Number(document.getElementById('numeroPersonas').value);
    let contenedorResultado = document.getElementById('contenedorResultado');
    if (numeroPersonas > 300) {
        contenedorResultado.innerHTML = `<div class="alert-success"> El presupuesto es de $${numeroPersonas*75}.</div>`;
    } else if (numeroPersonas > 200) {
        contenedorResultado.innerHTML = `<div class="alert-warning"> El presupuesto es de $${numeroPersonas*85}.</div>`;
    } else {
        contenedorResultado.innerHTML = `<div class="alert-danger"> El presupuesto es de $${numeroPersonas*95}.</div>`;
    }
}