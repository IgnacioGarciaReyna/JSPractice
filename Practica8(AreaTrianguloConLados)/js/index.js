const botonSemi = document.getElementById('botonSemi');
botonSemi.addEventListener("click", calcularSemi);
function calcularSemi(){
    const ladoA = Number(document.getElementById('ladoA').value);
    const ladoB = Number(document.getElementById('ladoB').value);
    const ladoC = Number(document.getElementById('ladoC').value);
    let semiperimetro = (ladoA + ladoB + ladoC) / 2;
    const contenedorSemi = document.getElementById('contenedorSemi');
    contenedorSemi.innerText = `El valor del semiperímetro es ${semiperimetro}`;
}

const botonArea = document.getElementById('botonArea');
botonArea.addEventListener("click", calcularArea);

function calcularArea() {
    const ladoA = Number(document.getElementById('ladoA').value);
    const ladoB = Number(document.getElementById('ladoB').value);
    const ladoC = Number(document.getElementById('ladoC').value);
    let semiperimetro = (ladoA + ladoB + ladoC) / 2;
    let area = Math.sqrt(semiperimetro * (semiperimetro - ladoA) * (semiperimetro - ladoB) * (semiperimetro - ladoC));
    const contenedorArea = document.getElementById('contenedorArea');
    contenedorArea.innerText = `${area}`;
}