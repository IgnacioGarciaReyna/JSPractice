const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcular);
function calcular() {
    const inpCantPasajeros = Number(document.getElementById('inpCantPasajeros').value);
    const inpTipoBus = document.getElementById('inpTipoBus').value;
    let valorBoleto = 0;
    let precioIndividual = 0;
    let precioTotal = 0;

    if (inpCantPasajeros == 0){
        alert(`Se debe ingresar la cantidad de pasajeros`);
        return;
    }

    if (inpTipoBus == "tipoA") {
        valorBoleto = 1.5;
    } else if (inpTipoBus == "tipoB") {
        valorBoleto = 2;
    } else if (inpTipoBus == "tipoC") {
        valorBoleto = 2.5;
    } else {
        valorBoleto = 3;
    }

    if (inpCantPasajeros >= 20) {
        precioIndividual = valorBoleto;
        precioTotal = inpCantPasajeros * precioIndividual;
    } else {
        precioTotal = valorBoleto * 20;
        precioIndividual = precioTotal / inpCantPasajeros;
    }

    const contenedorPrecioPersona = document.getElementById('contenedorPrecioPersona');
    const contenedorPrecioTotal = document.getElementById('contenedorPrecioTotal');
    contenedorPrecioPersona.innerHTML = `<div class="alert alert-success">El costo que abona cada pasajero es de: $${precioIndividual}</div>`;
    contenedorPrecioTotal.innerHTML = `<div class="alert alert-success">El costo total del viaje es de: $${precioTotal}</div>`;
}