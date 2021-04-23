const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', escribirSerie);

function escribirSerie () {
    let numeroActual = 5;
    let sumaTotal = 0;
    let acumuladorNumeros = `<li class="list-group-item">${numeroActual}</li>`;

    for (let i = 1; sumaTotal <= 1800 ; i++) {  
        if (i % 2 == 0) {
            numeroActual = numeroActual + 3;
            acumuladorNumeros += `<li class="list-group-item">${numeroActual}</li>`;
        } else {
            numeroActual = numeroActual + 2;
            acumuladorNumeros += `<li class="list-group-item">${numeroActual}</li>`;
        }
        
        sumaTotal = sumaTotal + numeroActual;
    }
    

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = acumuladorNumeros;
    
}

