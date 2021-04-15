const btnInitApp = document.getElementById('btnInitApp');
btnInitApp.addEventListener('click', calcularPromedio);
function calcularPromedio () {
    let acumuladorEstatura = 0;
    let contadorEstatura = 0;
    let continuar = true;

    while (continuar == true) {
        let estatura = prompt(`Ingrese la estatúra número ${contadorEstatura}.`)
        if (estatura == null) {
            continuar = false;
        } else {
            acumuladorEstatura = acumuladorEstatura + Number(estatura);
            contadorEstatura++
        }
    }
    let promedio = acumuladorEstatura / contadorEstatura;
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerText = `El promedio de las ${contadorEstatura} estaturas es: ${promedio}.`;
}