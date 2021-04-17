const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', calcularCuotas);

function calcularCuotas () {
    let resultadoAcumuladorMensajes = '';
    let cuotaAcumulado = 0;
    let cuotaMes = 10;


    for (let x=1; x<=20; x++) {
        resultadoAcumuladorMensajes += `<li class="list-group-item"> El valor de la cuota en el mes ${x} es de $${cuotaMes}</li>`;
        cuotaAcumulado = cuotaAcumulado + cuotaMes;
        cuotaMes = cuotaMes * 2;
    }

    const acumulacionMeses = document.getElementById('acumulacionMeses');
    acumulacionMeses.innerHTML = resultadoAcumuladorMensajes;
    
    const resultContainer = document.getElementById('resultContainer');
    
    resultContainer.innerHTML= `El valor total de las cuotas es de: $${cuotaAcumulado}`;
}