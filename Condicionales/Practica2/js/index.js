const btnEvaluacion = document.getElementById('btnEvaluacion');
btnEvaluacion.addEventListener('click', evaluarCalificacion);

function evaluarCalificacion() {
    const calificacion = Number(document.getElementById("calificacion").value);
    const contenedorEvaluacion = document.getElementById("contenedorEvaluacion");
    if (calificacion > 6) {
        contenedorEvaluacion.innerHTML = `El alumno está aprovado`;
    } else {
        contenedorEvaluacion.innerHTML = `El alumno está desaprovado`;
    }
}