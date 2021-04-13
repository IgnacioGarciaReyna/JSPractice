const btnCambiar = document.getElementById('btnCambiar');
btnCambiar.addEventListener('click', cambiar);
function cambiar() {
    const inpPuntaje = document.getElementById('inpPuntaje').value;
    const contenedorPuntaje = document.getElementById('contenedorPuntaje');

    if (inpPuntaje == "A" || inpPuntaje == "B") {
        contenedorPuntaje.innerHTML = `<div class="alert alert-success">La nota es una: ${inpPuntaje}.</div>`;
    } else if (inpPuntaje == "C" || inpPuntaje == "D") {
        contenedorPuntaje.innerHTML = `<div class="alert alert-warning">La nota es una: ${inpPuntaje}.</div>`;
    } else {
        contenedorPuntaje.innerHTML = `<div class="alert alert-danger">La nota es una: ${inpPuntaje}.</div>`;
    }



    
}