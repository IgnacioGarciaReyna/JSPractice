const btnCalcularCompra = document.getElementById('btnCalcularCompra');
btnCalcularCompra.addEventListener('click', calcularDescuentoCompra);

function calcularDescuentoCompra() {
    const costoCompra = Number(document.getElementById('inpCostoCompra').value);
    let costoDescuento = 0;

    if (costoCompra > 1000) {
        costoDescuento = costoCompra * .8;
    } else {
        costoDescuento = costoCompra;
    }

    const alertResult = document.getElementById('alertResult');

    alertResult.innerText=`El costo total de la compra es: ${costoDescuento}`;
}