const btnPromediar = document.getElementById('btnPromediar');
btnPromediar.addEventListener('click', promediar);
function promediar() {
    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);
    const nota3 = Number(document.getElementById('nota3').value);
    const nota4 = Number(document.getElementById('nota4').value);
    const contenedorPromedio = document.getElementById('contenedorPromedio');
    let promedio = 0;

    if (nota1 < nota2 && nota1 < nota3 && nota1 < nota4) {
        promedio = (nota2 + nota3 + nota4) / 3;
    } else if (nota2 < nota1 && nota2 < nota3 && nota2 < nota4) {
        promedio = (nota1 + nota3 + nota4) / 3;
    } else if (nota3 < nota1 && nota3 < nota2 && nota3 < nota4) {
        promedio = (nota1 + nota2 + nota4) / 3;
    } else {
        promedio = (nota1 + nota2 + nota3) / 3;
    }

    contenedorPromedio.innerHTML = `<div class="alert alert-success">El promedio es de : ${promedio}</div>`;
}