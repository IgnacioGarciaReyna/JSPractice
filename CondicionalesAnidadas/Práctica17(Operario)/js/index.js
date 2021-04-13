const buttonVerificar = document.getElementById('buttonVerificar');
buttonVerificar.addEventListener('click', verificar);
function verificar() {
    const cantidadUnidadesSemanales = Number(document.getElementById('cantidadUnidadesSemanales').value);
    let contenedorRespuesta = document.getElementById('contenedorRespuesta');
    if (cantidadUnidadesSemanales > 100) {
        contenedorRespuesta.innerHTML = `<div class="alert alert-success">Al operario le corresponde un incentivo</div>`;
    } else {
        contenedorRespuesta.innerHTML = `<div class="alert alert-danger">Al operario no le corresponde ningún incentivo</div>`;
    }
} 