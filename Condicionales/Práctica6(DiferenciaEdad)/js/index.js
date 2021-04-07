const botonVerificar = document.getElementById('botonVerificar');
botonVerificar.addEventListener('click', verificar);
function verificar() {
    const edadHermano1 = Number(document.getElementById('edadHermano1').value);
    const edadHermano2 = Number(document.getElementById('edadHermano2').value);
    let contenedorVerificacion = document.getElementById('contenedorVerificacion');
    if (edadHermano1 > edadHermano2) {
        contenedorVerificacion.innerText = `El hermano que tiene ${edadHermano1} años es mayor que el hermano que tiene ${edadHermano2} años. Lo aventaja por ${edadHermano1 - edadHermano2} años`;
    } else {
        contenedorVerificacion.innerText = `El hermano que tiene ${edadHermano2} años es mayor que el hermano que tiene ${edadHermano1} años. Lo aventaja por ${edadHermano2 - edadHermano1} años.`;
    }
}