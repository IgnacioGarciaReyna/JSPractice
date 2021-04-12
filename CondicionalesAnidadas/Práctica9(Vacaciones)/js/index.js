const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcular);
function calcular () {
    const inpKm = document.getElementById('inpKm').value;
    let destino = "";

    if (inpKm < 1500) {
        alert(`Tus kilometros no alcanzan para irte de vacaciones. Pero no te preocupes, puedes divertirte en casa!`);
        return;
    }

    if (inpKm < 1600) {
        destino = "México";
    } else if (inpKm < 2400) {
        destino = "México o P.V";
    } else if (inpKm < 2600) {
        destino = "México, P.V. o Acapulco";
    } else {
        destino = "México, P.V., Acapulco o Cancún"
    }

    const contenedorResultado = document.getElementById('contenedorResultado');
    contenedorResultado.innerHTML = `<div class="alert alert-success">Con los kilometros que puedes comprar puedes irte de vacaciones a ${destino}.</div>`;
}