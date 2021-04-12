const btnComparar = document.getElementById('btnComparar');
btnComparar.addEventListener('click', comparar);
function comparar(){
    const presupuesto = Number(document.getElementById('presupuesto').value);
    const articulo1 = Number(document.getElementById('articulo1').value);
    const articulo2 = Number(document.getElementById('articulo2').value);
    const articulo3 = Number(document.getElementById('articulo3').value);
    const articulo4 = Number(document.getElementById('articulo4').value);
    const suma = articulo1 + articulo2 + articulo3 + articulo4;
    const contenedorRespuesta = document.getElementById('contenedorRespuesta');

    if (presupuesto >= suma) {
        contenedorRespuesta.innerHTML = `<div class="alert alert-success">El precio está dentro del presupuesto!</div>`;
    } else {
        contenedorRespuesta.innerHTML = `<div class="alert alert-danger">El precio está fuera de presupuesto!</div>`;
    }
}