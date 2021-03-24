const buttonCalcular = document.getElementById('buttonCalcular');
buttonCalcular.addEventListener("click", calcularPrecio);
function calcularPrecio () {
    const precioMtC = Number(document.getElementById('precioMtC').value);
    const cantidadMtC = Number(document.getElementById('cantidadMtC').value);
    let precio = cantidadMtC * precioMtC;
    const contenedorResultado = document.getElementById('contenedorResultado');
    contenedorResultado.innerText = `El precio para una alberca de ${cantidadMtC} metros cúbicos es de $${precio}.`;
}