const btnCalcularRadio = document.getElementById('btnCalcularRadio');

btnCalcularRadio.addEventListener("click", CalcularRadio);

function CalcularRadio() {
    const radio = document.getElementById("inpRadio").value;
    const valorPi = 3.1415;

    let resultado = valorPi*(radio * radio);

    const containerResultado = document.getElementById("resultado");

    containerResultado.innerText= `El Área del circulo es: ${resultado}`;
}