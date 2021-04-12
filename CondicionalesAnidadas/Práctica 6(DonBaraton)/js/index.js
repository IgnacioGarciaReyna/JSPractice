const botonCalcular = document.getElementById('botonCalcular');
botonCalcular.addEventListener('click', calcularDescuento);
function calcularDescuento() {
    const inpPrecio = Number(document.getElementById('inpPrecio').value);
    let descuento = 0;
    let precioFinal = 0;
    const contenedorDescuento = document.getElementById('contenedorDescuento');
    const contenedorPrecioFinal = document.getElementById('contenedorPrecioFinal');

    if (inpPrecio == 0 || inpPrecio == "") {
        alert(`Es necesario ingresar el valor del traje`);
        return;
    }

    if(inpPrecio > 3600){
        descuento = inpPrecio * .16;
    } else {
        descuento = inpPrecio * .07;
    }

    precioFinal = inpPrecio - descuento;
    
    contenedorDescuento.innerHTML = `<div class="alert alert-success">El descuento para este traje es de: $${descuento}</div>`;
    contenedorPrecioFinal.innerHTML = `<div class="alert alert-success">El precio final del traje es: $${precioFinal}</div>`;

}