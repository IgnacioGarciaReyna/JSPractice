let btnCalcular = document.getElementById("btnCalcular");


btnCalcular.addEventListener('click', calcularCosto);


function calcularCosto() {
    let costoMateriales = Number(document.getElementById("costoMaterial").value);
    let anchoPared = Number(document.getElementById("AnchoPared").value);
    let altoPared = Number (document.getElementById("AltoPared").value);

    let resultado = altoPared * anchoPared * costoMateriales;

    let containerResultado = document.getElementById("resultado");

    containerResultado.innerHTML=`
    <em>El resultado es:</em> ${resultado}
    `;
}