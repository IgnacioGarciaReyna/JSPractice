const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', sacarPromedios);

function sacarPromedios () {
    let numeroActual = 0;
    let mayoresACero = 0;
    let sumaPositivos = 0;
    let cantidadPositivos = 0;
    let sumaNegativos = 0;
    let cantidadNegativos = 0;
    let continuar = true;

    while (continuar == true) {
        numeroActual = Number(prompt("Ingrese un número:"));
        if (numeroActual >= 0) {
            cantidadPositivos++;
            sumaPositivos = sumaPositivos + numeroActual;
            if (numeroActual > 0) {
                mayoresACero++;
            }
        } else {
            cantidadNegativos++;
            sumaNegativos = sumaNegativos + numeroActual;
        }

        continuar = confirm(`Si desea agregar otro número presione "aceptar". Si desea finalizar la aplicación presione "cancelar"`);
    }

    const promedioPositivos = sumaPositivos / cantidadPositivos;
    const promedioTotal = (sumaNegativos + sumaPositivos) / (cantidadPositivos + cantidadNegativos);

    const containerMayoresCero = document.getElementById('containerMayoresCero');
    containerMayoresCero.innerHTML = `<div class="alert alert-success">Los números mayores a cero son un total de ${mayoresACero}. </div>`;

    const containerPromedioPositivos = document.getElementById('containerPromedioPositivos');
    containerPromedioPositivos.innerHTML = `<div class="alert alert-success">El promedio de los números positivos es ${promedioPositivos}. </div>`;

    const containerPromedioTotal = document.getElementById('containerPromedioTotal');
    containerPromedioTotal.innerHTML = `<div class="alert alert-success">El promedio de todos los números es ${promedioTotal}. </div>`;
}

