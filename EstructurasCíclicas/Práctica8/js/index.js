const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', calcularAhorro);

function calcularAhorro () {
    let horasAcumuladas = 0;
    let resultadoAcumuladorMensajes = '';
    const inpValorHora = Number(document.getElementById('inpValorHora').value);
    let cobroAcumulado = 0;
    let cobroDia = 0;

    if (inpValorHora == "" || inpValorHora == 0) {
        alert(`Se requiere ingresar el valor de la hora trabajada.`);
        return;
    }

    for (let x=1; x<=6; x++) {
        let cantidadHoras = Number(prompt(`Ingrese la cantidad de horas trabajadas el día"${x}`))
        
        horasAcumuladas = horasAcumuladas + cantidadHoras;
        cobroDia = cantidadHoras * inpValorHora;
        cobroAcumulado = cobroAcumulado + cobroDia;
        resultadoAcumuladorMensajes += `<li class="list-group-item"> La cantidad de horas trabajadas el día ${x} es ${cantidadHoras} por lo que se cobrara ${cobroDia}`;
    }
    const acumulacionDias = document.getElementById('acumulacionDias');
    acumulacionDias.innerHTML = resultadoAcumuladorMensajes;
    
    const resultContainer = document.getElementById('resultContainer');
    
    resultContainer.innerHTML= `El total de horas trabajadas es de ${horasAcumuladas}.
    Por estas horas se cobrará: $${cobroAcumulado}`;
}