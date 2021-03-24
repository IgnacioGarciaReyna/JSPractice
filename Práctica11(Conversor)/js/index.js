const buttonCalcular = document.getElementById('buttonCalcular');
buttonCalcular.addEventListener("click", realizarConversion);
function realizarConversion () {
    const metros = Number(document.getElementById('metros').value);
    let conversion = metros * 39.3701;
    const contenedorConversion = document.getElementById('contenedorConversion');
    contenedorConversion.innerText = `${metros} metros equivalen a ${conversion} pulgadas`;
}