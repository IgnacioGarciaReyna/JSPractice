const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', calcularSalario);

function calcularSalario () {
    let salarioActual = 1500;
    let acumulacionSalarios = '';

    for (let i = 1; i <= 6; i++) {
        salarioActual = salarioActual * 1.10;
        acumulacionSalarios += `<li class="list-group-item">El salario del año ${i} fue de $${salarioActual}.</li>`;
    }

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `<div class="alert alert-success">Al cabo de 6 años el profesor tiene un salario de ${salarioActual}.</div>` + acumulacionSalarios;


}