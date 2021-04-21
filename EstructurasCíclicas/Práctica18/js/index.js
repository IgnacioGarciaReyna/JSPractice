const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', obtenerPerfectos);

function obtenerPerfectos () {
    const numero = prompt("Ingrese el número hasta el que se imprimiran los números perfectos:")

    if (numero == null || isNaN(numero)){
        alert("Por favor, ingrese un número valido.")
    }


    let i = 1;
    let sumaDivisores = 0;
    let acumulacionPerfectos = '';
    let existenPerfectos = "No";

    while (i < numero) {
        sumaDivisores = 0;
        for (let j = 1 ; j < i ; j++) {
            if (i % j == 0) {
                sumaDivisores = sumaDivisores + j;
            }
        }
        if (sumaDivisores == i) {
            acumulacionPerfectos += `<li class="list-group-item">${i}</li>`;
            existenPerfectos = "Si";
        }
        i++;
    }

    if (existenPerfectos == "No") {
        acumulacionPerfectos = `No existen números perfectos menores a ${numero}`;
    }

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `Los números perfectos menores a ${numero} son: <br>` + acumulacionPerfectos;
}