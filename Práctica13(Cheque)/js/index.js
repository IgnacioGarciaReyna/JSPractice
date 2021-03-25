const buttonCalcular = document.getElementById('buttonCalcular');
buttonCalcular.addEventListener('click', calcularCheque);
function calcularCheque() {
    const cantidadDias = Number(document.getElementById('cantidadDias').value);
    const valorHotel = Number(document.getElementById('valorHotel').value);
    const valorComida = Number(document.getElementById('valorComida').value);
    const valorExtra = 100;
    
    const totalHotel = (cantidadDias * valorHotel);
    const totalComida = (cantidadDias * valorComida);
    const totalExtra = (cantidadDias * valorExtra);
    const cheque = totalHotel + totalComida + totalExtra;
    
    const contenedorHotel = document.getElementById('contenedorHotel');
    const contenedorComida = document.getElementById('contenedorComida');
    const contenedorExtra = document.getElementById('contenedorExtra');
    const contenedorCheque = document.getElementById('contenedorCheque');
    contenedorHotel.innerText = `Los gatos previstos para el hotel son $${totalHotel}`;
    contenedorComida.innerText = `Los gatos previstos para comida son $${totalComida}`;
    contenedorExtra.innerText = `Los gatos previstos para extras son $${totalExtra}`;
    contenedorCheque.innerText = `El valor total del cheque es de $${cheque}`;
}