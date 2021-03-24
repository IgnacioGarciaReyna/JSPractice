const botonDistancia = document.getElementById('botonDistancia');
botonDistancia.addEventListener("click", calcularDistancia);
function calcularDistancia() {
    const abscisaA = Number(document.getElementById('abscisaA').value);
    const ordenadaA = Number(document.getElementById('ordenadaA').value);
    const abscisaB = Number(document.getElementById('abscisaB').value);
    const ordenadaB = Number(document.getElementById('ordenadaB').value);
    let distancia = Math.sqrt(Math.pow((abscisaB - abscisaA), 2)  + Math.pow((ordenadaB - ordenadaA), 2));
    const contenedorDistancia = document.getElementById('contenedorDistancia');
    contenedorDistancia.innerText = `La distancia entre ambos puntos es ${distancia}`;
    
}