const btnComparar = document.getElementById('btnComparar');
btnComparar.addEventListener('click', comparar);
function comparar () {
    const cifra1 = document.getElementById('cifra1').value;
    const cifra2 = document.getElementById('cifra2').value;
    const cifra3 = document.getElementById('cifra3').value;
    const contenedorRespuesta = document.getElementById('contenedorRespuesta');

    if (cifra1 >= 10 || cifra2 >= 10 || cifra3 >=10) {
        alert(`Usted debe ingresar solo un dígito por entrada.`)
        return;
    }

    if (cifra1 == cifra3) {
        contenedorRespuesta.innerHTML = `<div class="alert alert-success">El número es capicua!</div>`;
    } else {
        contenedorRespuesta.innerHTML = `<div class="alert alert-danger">El número no es capicua.</div>`;
    }
}