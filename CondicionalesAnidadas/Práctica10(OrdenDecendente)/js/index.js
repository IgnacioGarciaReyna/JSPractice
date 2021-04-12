const btnOrdenar = document.getElementById('btnOrdenar');
btnOrdenar.addEventListener('click', ordenar);
function ordenar () {
    const inpNumA = Number(document.getElementById('inpNumA').value);
    const inpNumB = Number(document.getElementById('inpNumB').value);
    const inpNumC = Number(document.getElementById('inpNumC').value);
    orden = "";


    if (inpNumA > inpNumB) {
        if (inpNumB > inpNumC) {
            orden = `${inpNumA}, ${inpNumB}, ${inpNumC}.`;
        } else if (inpNumC > inpNumA) {
            orden = `${inpNumC}, ${inpNumA}, ${inpNumB}.`;
        } else {
            orden = `${inpNumA}, ${inpNumC}, ${inpNumB}.`;
        }
    } else {
        if (inpNumA > inpNumC) {
            orden = `${inpNumB}, ${inpNumA}, ${inpNumC}.`;
        } else if (inpNumC > inpNumB) {
            orden = `${inpNumC}, ${inpNumB}, ${inpNumA}.`;
        } else {
            orden = `${inpNumB}, ${inpNumC}, ${inpNumA}.`;
        }
    }

    const contenedorResultado = document.getElementById('contenedorResultado');
    contenedorResultado.innerHTML = `<div class="alert alert-success">El orden ascendente de los números ingresados es : ${orden}</div>`;
}