const btnAveriguar = document.getElementById('btnAveriguar');
btnAveriguar.addEventListener('click', averiguar);
function averiguar () {
    const numero1 = Number(document.getElementById('numero1').value);
    const numero2 = Number(document.getElementById('numero2').value);
    const contenedorRespuesta = document.getElementById('contenedorRespuesta');

    if (numero1 >= numero2 && (numero1 % numero2) == 0) {
        contenedorRespuesta.innerHTML = `<div class="alert alert-success">${numero1} es múltipo de ${numero2}.</div>`;
    } else if (numero2 >= numero1 && (numero2 % numero1) == 0) {
        contenedorRespuesta.innerHTML = `<div class="alert alert-success">${numero2} es múltipo de ${numero1}.</div>`;
    } else {
        contenedorRespuesta.innerHTML = `<div class="alert alert-danger">Los números no son múltiplos entre si.</div>`;
    }
    
}