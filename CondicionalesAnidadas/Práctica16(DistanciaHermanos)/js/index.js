const btnComparar = document.getElementById('btnComparar');
btnComparar.addEventListener('click', comparar);
function comparar () {
    const inpHermano1 = Number(document.getElementById('inpHermano1').value);
    const inpHermano2 = Number(document.getElementById('inpHermano2').value);
    let diferencia = 0;
    const contenedorComparacion = document.getElementById('contenedorComparacion');
    let hermanoMayor = 0;
    let hermanoMenor = 0;

    if (inpHermano1 == inpHermano2) {
        contenedorComparacion.innerHTML = `<div class="alert alert-danger">Ambos hermanos tienen la misma edad.</div>`;
        return;
    } else if (inpHermano1 > inpHermano2 ) {
        diferencia = inpHermano1 - inpHermano2;
        hermanoMayor = inpHermano1;
        hermanoMenor = inpHermano2;
    } else {
        diferencia = inpHermano2 - inpHermano1;
        hermanoMayor = inpHermano2;
        hermanoMenor = inpHermano1;
    }

    contenedorComparacion.innerHTML = `<div class="alert alert-success">El hermano de ${hermanoMayor} años es mayor que el hermano de ${hermanoMenor} años por ${diferencia} años de diferencia!</div>`;
}