const inpNumeros1 = document.getElementById('inpNumeros1');
const inpNumeros2 = document.getElementById('inpNumeros2');
const btnMostrarArrays = document.getElementById("btnMostrarArrays");
const inpLongitud = document.getElementById("inpLongitud");


inpLongitud.addEventListener("keyup", determinarLongitud)
inpNumeros1.addEventListener("keyup", crearArray1);
inpNumeros2.addEventListener("keyup", crearArray2);
btnMostrarArrays.addEventListener("click", mostrarArrays);
let numeros1 = [];
let numeros2 = [];
let numeros3 = [];

let longitud = 0;

inpNumeros1.disabled = true;
inpNumeros2.disabled = true;






function determinarLongitud (event) {
    if (event.key != "Enter") {
        return;
    }

    if (inpLongitud.value == "" | inpLongitud.value <= 0) {
        alert("Debe ingresar un número mayor a cero");
        return;
    } 

    if (isNaN(inpLongitud.value)) {
        alert("Por favor, ingresar un valor númerico");
        return;
    }

    longitud = inpLongitud.value;

    inpLongitud.disabled = true;
    inpNumeros1.disabled = false;

}

function crearArray1 (event) {
    if (event.key != "Enter") {
        return;
    }

    if (inpNumeros1.value == "") {
        alert("Debe ingresar un número");
        return;
    } 

    if (isNaN(inpNumeros1.value)) {
        alert("Por favor, ingresar un valor númerico");
        return;
    }

    if (numeros1.length < longitud - 1) {
        numeros1.push(Number(inpNumeros1.value));
        inpNumeros1.value = "";
        console.log(numeros1);
    } else {
        numeros1.push(Number(inpNumeros1.value));
        inpNumeros1.value = "";
        alert("Alcanzó el limite de guardado.");
        inpNumeros1.disabled = true;
        inpNumeros2.disabled = false;
    }
}

function crearArray2 (event) {
    if (event.key != "Enter") {
        return;
    }
    if (inpNumeros2.value == "") {
        alert("Debe ingresar un número");
        return;
    } 

    if (isNaN(inpNumeros2.value)) {
        alert("Por favor, ingresar un valor númerico");
        return;
    }
    if (numeros2.length < longitud - 1) {
        numeros2.push(Number(inpNumeros2.value));
        inpNumeros2.value = "";
        console.log(numeros2);
    } else {
        numeros2.push(Number(inpNumeros2.value));
        inpNumeros2.value = "";
        alert("Alcanzó el limite de guardado.");
        inpNumeros2.disabled = true;
    }
}



function almacenarValores () {
    
    if (indice < 5) {
        numeros1.push(Number(inpNumeros.value));
        indice++;
        inpNumeros.value = "";
        console.log(numeros1);
    } else {
        alert("Alcanzó el limite de guardado.");
        inpNumeros.value = "";
    }
}


function mostrarArrays () {
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
    const container3 = document.getElementById('container3');


    numeros3 = numeros1.concat(numeros2);
    
    container1.innerHTML = `<div class="alert alert-success mt-3">El primer array está compuesto por: <br> [${numeros1}]</div>`;
    container2.innerHTML = `<div class="alert alert-success mt-3">El segundo array está compuesto por: <br> [${numeros2}]</div>`;
    container3.innerHTML = `<div class="alert alert-success mt-3">El tercer array está compuesto por: <br> [${numeros3}]</div>`;
}