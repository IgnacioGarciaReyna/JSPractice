const btnCalculardigitos = document.getElementById('btnCalcularDigitos');
btnCalculardigitos.addEventListener('click', calcularDigitosOL);

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

function calcularDigitosOL () {
    const inpNumero1 = Number(document.getElementById('inpNumero1').value);
    let resultado = "";

    if (inpNumero1 >=99 && inpNumero1 <= 999) {
        resultado = "El número cuenta con 3 dígitos";
    } else if (inpNumero1 > 9 && inpNumero1 <= 99) {
        resultado = "El número cuenta con 2 dígitos";
    } else if (inpNumero1 > 0 && inpNumero1 <= 9) {
        resultado = "El número cuenta con 1 dígitos";
    } else {
        resultado = "El número cuenta con más de 3 dígitos";
    }

    const containerResult = document.getElementById('containerResult');
    containerResult.innerText = resultado;
}