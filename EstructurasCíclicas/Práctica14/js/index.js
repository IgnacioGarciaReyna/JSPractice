const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', compararFIBONACCI);

function compararFIBONACCI () {
    const inpNumero = Number(document.getElementById('inpNumero').value);

    if (inpNumero < 0) {
        alert (`El número debe ser entero.`);
        return;
    }

    let x = 1;
    let y = 0;
    let index = 0;
    let igualomenor = 0;

    while (inpNumero > x && inpNumero > y) {
        
        if (y == 0) {
            y = 1;
        } else if (x < y) {
            x = x + y;
        } else {
            y = x + y;
        }

        index++;
    }

    if (inpNumero < x) {
        igualomenor = y;
    } else {
        igualomenor = x;
    }
    

    const resultContainer = document.getElementById('resultContainer');

    if (inpNumero == x || inpNumero == y){
        resultContainer.innerHTML = `<div class="alert alert-success">El número ${inpNumero} pertenece la serie FIBONACCI.</div>`;
    } else {
        resultContainer.innerHTML = `<div class="alert alert-success">El número ${inpNumero} no pertenece a la serie FIBONACCI. El número inmediatamente menor es ${igualomenor}.</div>`;
    }

    
   
}