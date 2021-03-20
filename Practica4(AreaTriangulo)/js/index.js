let btnCalcular = document.getElementById("btnCalcular");


btnCalcular.addEventListener('click', calcularArea);


function calcularArea() {
    let baseTriangulo = Number(document.getElementById("baseTriangulo").value);
    let alturaTriangulo = Number(document.getElementById("alturaTriangulo").value);

    let resultado = alturaTriangulo * baseTriangulo * 0.5;

    let containerResultado = document.getElementById("resultado");

    containerResultado.innerHTML=`
    <em>El resultado es:</em> ${resultado}
    `;
}