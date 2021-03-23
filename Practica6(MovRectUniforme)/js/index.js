const btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener("click", calcularDistancia);

function calcularDistancia() {
    const velocidad = Number(document.getElementById('velocidad').value);
    const tiempo = Number(document.getElementById('tiempo').value);

    let resultado = velocidad * tiempo;

    

    const containerResultado = document.getElementById('resultado');
    containerResultado.innerText = `Los distancia recorrida en ${tiempo} segundos es de ${resultado} metros`;
}