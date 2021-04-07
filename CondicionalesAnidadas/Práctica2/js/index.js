const btnCalculardigitos = document.getElementById('btnCalcularDigitos');
btnCalculardigitos.addEventListener('click', calcularDigitos);

function calcularDigitos() {
    const inpNumero1 = Number(document.getElementById('inpNumero1').value);
    let resultado = "";
    if (inpNumero1 <= 999) {
        resultado = "El número cuenta con 3 dígitos";
        if(inpNumero1 <= 99) {
            resultado = "El número es de 2 dígitos";
            if(inpNumero1 <= 9) {
                resultado = "El número es de 1 dígito"
            }
    }
}else {
        resultado = "El número es de mas de 3 dígitos"; 
    }
    

    const containerResult = document.getElementById('containerResult');
    containerResult.innerText = resultado;
}
