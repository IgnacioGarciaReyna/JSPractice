const inpNumeros = document.getElementById('inpNumeros');
const btnMostrarArrays = document.getElementById("btnMostrarArrays");

inpNumeros.addEventListener("keyup", almacenarValores);
btnMostrarArrays.addEventListener("click", mostrarArrays);
let numeros1 = [];
let numeros2 = [];
let numeros3 = [];
let indice = 0;

function almacenarValores (event) {
    if (event.key != "Enter") {
        return;
    }

    if (inpNumeros.value == "") {
        alert("Debe ingresar un número");
        return;
    } 

    if (isNaN(inpNumeros.value)) {
        alert("Por favor, ingresar un valor númerico");
        return;
    }

    if (indice < 5) {
        numeros1.push(Number(inpNumeros.value));
        indice++;
        inpNumeros.value = "";
        console.log(numeros1);
    }else if (indice < 10) {
        numeros2.push(Number(inpNumeros.value));
        indice++;
        inpNumeros.value = "";
        console.log(numeros2);
    } else {
        alert("Alcanzó el limite de guardado.");
        inpNumeros.value = "";
    }
}


function mostrarArrays () {
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
    const container3 = document.getElementById('container3');


    numeros3 = numeros1 + "," + numeros2;
    
    container1.innerHTML = `<div class="alert alert-success">El primer array está compuesto por: <br> [${numeros1}]</div>`;
    container2.innerHTML = `<div class="alert alert-success">El segundo array está compuesto por: <br> [${numeros2}]</div>`;
    container3.innerHTML = `<div class="alert alert-success">El tercer array está compuesto por: <br> [${numeros3}]</div>`;
}