const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', obtenerListado);

function obtenerListado () {
    let continuar = "Si";
    let acumuladosJulio = '';
    let acumuladosTotal = '';
    let totalActual = 0;
    let totalMayor = 0;
    let claveMayor = 0;
    let mesActual = 0;
    let claveActual = 0;
    
    while (continuar == "Si") {
        
        claveActual = prompt("Ingrese el código de la industria");
        

        for (let i = 1 ; i <= 12 ; i++) {
            mesActual = Number(prompt(`Ingrese el valor del mes ${i}`));
            if (i == 7 && mesActual > 3000000) {
                acumuladosJulio += `<li class="list-group-item">La producción del mes de Julio de la fábrica de clave ${claveActual} fue de $${mesActual}.</li>`;
                totalActual = totalActual + mesActual;
            } else if (mesActual == 0 || isNaN(mesActual)) {
                alert("Por favor, ingrese un número valido.")
                i = i -1;
            } else {
                totalActual = totalActual + mesActual;
            }
        }

        acumuladosTotal += `<li class="list-group-item">La producción anual de la fábrica de clave ${claveActual} fue de $${totalActual}.</li>`;

        if (totalActual > totalMayor) {
            totalMayor = totalActual;
            claveMayor = claveActual;
        }

        totalActual = 0;
        
        continuar = "";
        while (continuar != "No" && continuar !="Si") {
            continuar = prompt("Ingrese 'Si' para agregar una industria. Ingrese 'No' para finalizar la aplicación.");
            if (continuar != "Si" && continuar != "No") {
                alert("Porfavor, ingrese una respuesta válida.");
            } else if (continuar == "No") {
                continuar = "No";
            }
        }


    }

    let containerTotales = document.getElementById('containerTotales');
    containerTotales.innerHTML = acumuladosTotal;

    let containerMaxima = document.getElementById('containerMaxima');
    containerMaxima.innerHTML = `<div class="alert alert-success">La fábrica que mas produjo en el año es la de clave ${claveMayor} con una producción de $${totalMayor}.</div>`;

    let containerJulio = document.getElementById('containerJulio');
    containerJulio.innerHTML = acumuladosJulio;

}