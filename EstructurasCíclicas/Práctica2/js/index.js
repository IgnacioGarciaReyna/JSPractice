const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', calcularPromedio);


function calcularPromedio () {
    //acumulador= acumula el valor que se le asigna contra la informacion que ya tiene
    let acumuladorCalificaciones = 0;
    //contador= se incrementa cada vez que tenemos una accion
    let contadorCalificaciones = 0;

    let continuar = true;

    while(continuar == true) {
        let calificacion = prompt(`Ingrese la calificacion número ${contadorCalificaciones}`);

        if(calificacion == null) {
            continuar = false;
        } else {
            acumuladorCalificaciones = acumuladorCalificaciones + Number(calificacion);

            contadorCalificaciones++;
        }
    }

    let promedio = acumuladorCalificaciones / contadorCalificaciones;
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerText = `El promedio de las calificaciones es: ${promedio}`;
}