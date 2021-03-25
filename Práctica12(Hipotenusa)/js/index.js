const botonCalcular = document.getElementById('botonCalcular');
botonCalcular.addEventListener('click', obtenerHipotenusa);
function obtenerHipotenusa() {
    const cateto1 = Number(document.getElementById('cateto1').value);
    const cateto2 = Number(document.getElementById('cateto2').value);
    const resultado = Math.pow(cateto1, 2) + Math.pow(cateto2, 2);
    const contenedorHipotenusa = document.getElementById('contenedorHipotenusa');
    contenedorHipotenusa.innerText = `La hipotenusa es de ${resultado}`;
}