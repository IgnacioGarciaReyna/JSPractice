const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', obtenerPrimos);

function obtenerPrimos () {
    let acumulacionNumeros = '';
    let numero = prompt("Ingrese su número:");
    
    
    if (numero ==2 || numero == 1 || numero == 0) {
        alert(`No hay número primos menores a ${numero}`)
    }

    for (let i = 3 ; i < numero ; i++) {
        let primo = 0 ;
        for (let x = 2 ; x < i ; x++) {
            if (i % x == 0) {
                primo = 1;
            }
        }

        if (primo == 0) {
            acumulacionNumeros += `<li class="list-group-item">${i}</li>`;
        }
    }
    






    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = acumulacionNumeros;
    
}