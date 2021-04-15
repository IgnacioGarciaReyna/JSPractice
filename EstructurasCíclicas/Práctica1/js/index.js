const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', calcularSumatoria);

function calcularSumatoria() {
    let resultado = 0;
    //1º inicializar una valiable
    //2º condicionar el ciclo
    //3º incrementar valor X
    for(let x=1;x<=10;x++) {
        let numero = Number(prompt(`Ingrese el número ${x}`));
        //acumuladores
        resultado = resultado + numero;
    }
    
    const resultContainer = document.getElementById('resultContainer');
    
    resultContainer.innerHTML = `<span>La suma de los 10 números es ${resultado}</span>`;
}