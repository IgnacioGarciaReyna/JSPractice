const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', evaluarNumero);

function evaluarNumero() {
    let continuar = true;
    let ventaMayor = 0;
    let ventaMedio = 0;
    let ventaMenor = 0;
    let acumuladoMayor = 0;
    let acumuladoMedio = 0;
    let acumuladoMenor = 0;

    while (continuar == true) {
        let venta = prompt(`Ingrese el valor de la venta`);
        if (isNaN(venta) == true) {
            alert("Es necesario que ingrese solo números");
        } else if (venta == null) {
            continuar = false;
        } else {
            venta = Number(venta);
            if (venta > 1000) {
                ventaMayor++;
                acumuladoMayor = acumuladoMayor + venta;
            } else if (venta > 500) {
                ventaMedio++;
                acumuladoMedio = acumuladoMedio + venta;
            } else {
                ventaMenor++;
                acumuladoMenor = acumuladoMenor + venta;
            }
        }
    }

    let resultContainer = document.getElementById('resultContainer');

    resultContainer.innerHTML = `<span> Se realizaron ${ventaMayor} ventas por mas de $1000 que acumulan un total de $${acumuladoMayor}, ${ventaMedio} entre $500 y $1000 que acumulan un total de $${acumuladoMedio} y ${ventaMenor} ventas menores a $500 que acumulan un total de $${acumuladoMenor}.</span>`
}