const botonCalcular = document.getElementById("botonCalcular");

botonCalcular.addEventListener("click", puntajeFinal );

function puntajeFinal() {
    const correctas = Number(document.getElementById("correctas").value);
    const incorrectas = Number(document.getElementById("incorrectas").value);
    const blanco = Number(document.getElementById("blanco").value);

    let resultado = (correctas * 4) + (incorrectas * (-1)) + (blanco * 0);

    const contenedorResultado = document.getElementById("contenedorResultado");
    contenedorResultado.innerText = `El puntaje final es ${resultado}`;
}