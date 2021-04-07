const buttonVerificar = document.getElementById('buttonVerificar');
buttonVerificar.addEventListener('click', verificar);
function verificar() {
    const cantidadUnidadesSemanales = Number(document.getElementById('cantidadUnidadesSemanales').value);
    let contenedorRespuesta = document.getElementById('contenedorRespuesta');
    if (cantidadUnidadesSemanales > 100) {
        contenedorRespuesta.innerText = `Al operario le corresponde un incentivo`;
    } else {
        contenedorRespuesta.innerText = `Al operario no le corresponde ningún incentivo`;
    }
} 