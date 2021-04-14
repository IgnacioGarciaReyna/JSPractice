const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcular);
function calcular() {
    const inpTipoPoliza = document.getElementById('inpTipoPoliza').value;
    const inpAlcohol = document.getElementById('inpAlcohol').value;
    const inpLentes = document.getElementById(`inpLentes`).value;
    const inpEnfermedad = document.getElementById('inpEnfermedad').value;
    const edadCliente = Number(document.getElementById('edadCliente').value);
    let polizaInicial = 0;
    let incrementoAlcohol = 0;
    let incrementoLentes = 0;
    let incrementoEnfermedad = 0;
    let incrementoEdad = 0;

    if (inpTipoPoliza == "tipoA") {
        polizaInicial = 1200;
    } else {
        polizaInicial = 950;
    }

    if (inpAlcohol == "valorSi") {
        incrementoAlcohol = polizaInicial * 0.10;
    }

    if (inpLentes == "valorSi") {
        incrementoLentes = polizaInicial * 0.05;
    }

    if (inpEnfermedad == "valorSi") {
        incrementoEnfermedad = polizaInicial * 0.05;
    }

    if (edadCliente >= 40) {
        incrementoEdad = polizaInicial * 0.40;
    } else {
        incrementoEdad = polizaInicial * 0.20;
    }

    let poliza = polizaInicial + incrementoAlcohol + incrementoLentes + incrementoEnfermedad + incrementoEdad;
    const contenedorResultado = document.getElementById('contenedorResultado');
    contenedorResultado.innerHTML = `<div class="alert alert-success">La poliza para este cliente es de: $${poliza}. </div>`;
}