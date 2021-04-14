const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcular);
function calcular() {
    const inpPeso = Number(document.getElementById(`inpPeso`).value);
    const inpRegion = document.getElementById('inpRegion').value;
    let precio = 0;
    if (inpRegion == "region1") {
        precio = inpPeso * 11;
    } else if (inpRegion == "region2") {
        precio = inpPeso * 10;
    } else if (inpRegion == "region3") {
        precio = inpPeso * 12;
    } else if (inpRegion == "region4") {
        precio = inpPeso * 24;
    } else {
        precio = inpPeso * 27;
    }

    const contenedorResultado = document.getElementById('contenedorResultado');
    contenedorResultado.innerHTML = `<div class="alert alert-success">El precio del envío es de: $${precio}.</div>`;
}