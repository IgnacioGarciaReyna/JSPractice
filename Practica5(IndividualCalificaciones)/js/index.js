const btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener("click", calcularPromedio);

function calcularPromedio() {
    const matricula = Number(document.getElementById('matricula').value);
    const calificacion1 = Number(document.getElementById('calificacion1').value);
    const calificacion2 = Number(document.getElementById('calificacion2').value);
    const calificacion3 = Number(document.getElementById('calificacion3').value);
    const calificacion4 = Number(document.getElementById('calificacion4').value);
    const calificacion5 = Number(document.getElementById('calificacion5').value);

    let resultado = (calificacion1 + calificacion2 + calificacion3 + calificacion4 + calificacion5) / 5;

    const containerResultado = document.getElementById('resultado');
    containerResultado.innerText = `El promedio del alumno con matrícula ${matricula} es: ${resultado}`;
}





