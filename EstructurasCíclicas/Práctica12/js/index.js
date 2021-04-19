const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', realizarULAM);

function realizarULAM () {
    let inpNumero = Number(document.getElementById('inpNumero').value);
    let acumulacionNumeros = '';

    if (inpNumero <= 0) {
        alert ('El número ingresado debe ser un número positivo entero');
        return;
    }

    acumulacionNumeros += `<li class="list-group-item">${inpNumero}</li>`;

    while (inpNumero > 1) {
        if(inpNumero % 2 == 0) {
            inpNumero = inpNumero / 2;
        } else {
            inpNumero = (inpNumero * 3) + 1;
        }

        acumulacionNumeros += `<li class="list-group-item">${inpNumero}</li>`;
    }

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = acumulacionNumeros;
}