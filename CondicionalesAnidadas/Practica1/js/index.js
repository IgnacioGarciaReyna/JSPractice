const btnEvaluarNumeros = document.getElementById('btnEvaluarNumeros');

btnEvaluarNumeros.addEventListener('click', evaluarNumeros);

function evaluarNumeros() {
    const inpNumero1 = Number(document.getElementById('inpNumero1').value);
    const inpNumero2 = Number(document.getElementById('inpNumero2').value);
    const inpNumero3 = Number(document.getElementById('inpNumero3').value);
    let resultado = "";
    if (inpNumero1 > inpNumero2) {
        if (inpNumero1 > inpNumero3) {
            resultado = "El primer número es el mayor";
        } else {
            resultado = "El tercer número es el mayor";
        }
    } else { 
        if (inpNumero2 > inpNumero3) {
            resultado = "El segundo número es el mayor";
        } else {
            resultado = "El tercer número es el mayor";
        }
    }

    const containerResult = document.getElementById('containerResult');
    
    containerResult.innerText = resultado;
}