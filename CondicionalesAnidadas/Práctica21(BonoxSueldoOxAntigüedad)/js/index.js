const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcular);
function calcular () {
    const inpAntiguedad = Number(document.getElementById('inpAntiguedad').value);
    const inpSueldo = Number(document.getElementById('inpSueldo').value);
    let bonoAntiguedad = 0;
    let bonoSueldo = 0;
    let bonoFinal = 0;

    if (inpAntiguedad > 2 && inpAntiguedad < 5) {
        bonoAntiguedad = inpSueldo * 1.20;
    } else if (inpAntiguedad > 5) {
        bonoAntiguedad = inpSueldo * 1.30;
    } else {
        bonoAntiguedad = 0;
    }

    if (inpSueldo < 1000) {
        bonoSueldo = inpSueldo * 1.25;
    } else if (inpSueldo > 1000 && inpSueldo <= 3500) {
        bonoSueldo = inpSueldo * 1.15;
    } else {
        bonoSueldo = inpSueldo * 1.10;
    }

    if (inpAntiguedad > inpSueldo) {
        bonoFinal = bonoAntiguedad;
    } else {
        bonoFinal = bonoSueldo;
    }

    const contenedorBono = document.getElementById('contenedorBono');
    contenedorBono.innerHTML = `<div class="alert alert-success">El bono correspondiente a este trabajador con ${inpAntiguedad} años de antiguedad y con un sueldo de $${inpSueldo} es de: ${bonoFinal}. </div>`;

}