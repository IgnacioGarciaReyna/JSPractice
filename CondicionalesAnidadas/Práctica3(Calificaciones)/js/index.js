const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcular);
function calcular() {
    const calificacion1 = Number(document.getElementById('calificacion1').value);
    const calificacion2 = Number(document.getElementById('calificacion2').value);
    const calificacion3 = Number(document.getElementById('calificacion3').value);
    let promedio = (calificacion1 + calificacion2 + calificacion3) / 3 ;
    const containerPromedio = document.getElementById('containerPromedio');
    containerPromedio.innerText = `El promedio es de: ${promedio}`;
    const containerCalificacion = document.getElementById('containerCalificacion');
    if (promedio >= 9) {
        containerCalificacion.innerText = `Aprobado`;
    } else if (promedio >= 6){
        containerCalificacion.innerText = `Regular`;
    } else {
        containerCalificacion.innerText = `Reprobado`;
    }
}