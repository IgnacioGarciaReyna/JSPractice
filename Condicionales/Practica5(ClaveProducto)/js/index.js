const botonCalcular = document.getElementById('botonCalcular');
botonCalcular.addEventListener('click', calcular);

function calcular() {
    const nombreProducto = document.getElementById('nombreProducto').value;
    const claveProducto = Number(document.getElementById('claveProducto').value);
    const precioProductoOrig = Number(document.getElementById('precioProductoOrig').value);
    let precioProductoDesc = 0;
    

    if (claveProducto == 01) {
        precioProductoDesc = precioProductoOrig * .90;
    } else {
        precioProductoDesc = precioProductoOrig * .80;
    }

    const contenedorSalida = document.getElementById('contenedorSalida');
    contenedorSalida.innerText = 
    `Nombre: ${nombreProducto} 
    Clave: ${claveProducto} 
    Precio Original: ${precioProductoOrig} 
    Precio con Descuento: ${precioProductoDesc}`;
}