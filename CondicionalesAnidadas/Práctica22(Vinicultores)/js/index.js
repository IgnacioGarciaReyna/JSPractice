const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcular);
function calcular() {
    const inpPrecioInicial = Number(document.getElementById('inpPrecioInicial').value);
    const inpTipoUva = document.getElementById('inpTipoUva').value;
    const inpSizeUva = document.getElementById('inpSizeUva').value;
    let precioFinal = 0;

    if (inpTipoUva == "tipoA" && inpSizeUva == "size1") {
        precioFinal = inpPrecioInicial + 20;
    } else if (inpTipoUva == "tipoA" && inpSizeUva == "size2") {
        precioFinal = inpPrecioInicial + 30;
    } else if (inpTipoUva == "tipoB" && inpSizeUva == "size1") {
        precioFinal = inpPrecioInicial - 30;
    } else if (inpTipoUva == "tipoB" && inpSizeUva == "size2") {
        precioFinal = inpPrecioInicial - 50;
    } else {
        alert (`Usted debe elegir un tipo y un tamaño de uva.`);
        return;
    }

    const contenedorResultado = document.getElementById('contenedorResultado');
    contenedorResultado.innerHTML = `<div class="alert alert-success">El precio que se debe pagar por las uvas es de: ${precioFinal}C.</div>`;

}