const buttonCalcular = document.getElementById('buttonCalcular');
buttonCalcular.addEventListener('click', calcularMayor);

function calcularMayor() {
    const nombre1 = document.getElementById('nombre1').value;
    const edad1 = Number(document.getElementById('edad1').value);
    const nombre2 = document.getElementById('nombre2').value;
    const edad2 = Number(document.getElementById('edad2').value);
    const contenedorResultado = document.getElementById('contenedorResultado');

    if (edad1 > edad2) {
        contenedorResultado.innerText = `${nombre1} es mayor que ${nombre2}`;
        } else {
            contenedorResultado.innerText = `${nombre2} es mayor que ${nombre1}`;
    }
}