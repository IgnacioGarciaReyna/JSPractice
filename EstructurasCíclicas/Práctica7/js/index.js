const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', imprimirNumeros);

function imprimirNumeros() {
    let resultadoAcumulado = "";
    for (let i=100; i>=0; i--) {
        resultadoAcumulado += `<li class="list-group-item">${i}</li>`;
    }
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = resultadoAcumulado;
}