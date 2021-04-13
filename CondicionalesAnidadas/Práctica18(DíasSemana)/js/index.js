const btnCambiar = document.getElementById('btnCambiar');
btnCambiar.addEventListener('click', cambiar);
function cambiar() {
    const inpDiasSemana = document.getElementById('inpDiasSemana').value;
    const contenedorDia = document.getElementById('contenedorDia');
    contenedorDia.innerHTML = `<div class="alert alert-success">El día de la semana seleccionado es el ${inpDiasSemana}.</div>`;
}