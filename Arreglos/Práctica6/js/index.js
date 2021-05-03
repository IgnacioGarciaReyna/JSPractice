const inpLongitud = document.getElementById('inpLongitud');
const inpOpcion = document.getElementById('inpOpcion');
const btnMostrarArray = document.getElementById('btnMostrarArray');

inpLongitud.addEventListener('keyup', generarAyB);
btnMostrarArray.addEventListener('click', mostrarArrays);

let a = [];
let b = [];
let c = [];

let acumuladosA = ``;
let acumuladosB = ``;
let acumuladosC = ``;

inpOpcion.disabled = true;
btnMostrarArray. disabled = true;

function generarAyB (event) {
    let longitud = inpLongitud.value;
    if (event.key != "Enter") {
        return;
    }
    if (longitud == "") {
        alert ("Por favor, ingresar una longitud para los vectores");
        return;
    }
    if (isNaN(longitud)) {
        alert ("Por favor, ingrese un número");
        return; 
    }
    if(longitud - Math.floor(longitud) != 0) {
        alert ("Por favor, ingrese un número entero");
        return;
    }

    acumuladosA += `<li class="list-group-item"><b>Arreglo A</b></li>`;
    acumuladosA += `<li class="list-group-item">Indice | Valor</li>`;
    for (let i = 0; i < longitud; i++){
        let numero = Math.floor(Math.random() * (100 + 100))-100;
        a[i] = numero;
        acumuladosA += `<li class="list-group-item">  ${i}  |  ${numero}</li>`;
    }

    acumuladosB += `<li class="list-group-item"><b>Arreglo B</b></li>`;
    acumuladosB += `<li class="list-group-item">Indice | Valor</li>`;
    for (let i = 0; i < longitud; i++){
        let numero = Math.floor(Math.random() * (100 + 100))-100;
        b[i] = numero;
        acumuladosB += `<li class="list-group-item"> ${i} | ${numero}</li>`;
    }
    
    btnMostrarArray. disabled = false;
    inpOpcion.disabled = false;
    inpLongitud. disabled = true;
}



function mostrarArrays () {
    let containerA = document.getElementById('containerA');
    let containerB = document.getElementById('containerB');
    let containerC = document.getElementById('containerC');
    let longitud = inpLongitud.value;
    let option = inpOpcion.value;

    if (option == "optionNada") {
        alert ("Por favor, elija una opción para calcular C");
        return;
    }
    
    acumuladosC += `<li class="list-group-item"><b>Arreglo C</b></li>`;
    acumuladosC += `<li class="list-group-item">Indice | Valor</li>`;

    if (option == "optionSuma") {
        for (let i = 0; i < longitud; i++){
            let numero = a[i] + b[i];
            c[i] = numero;
            acumuladosC += `<li class="list-group-item"> ${i} | ${numero}</li>`;
        }
    } else if (option == "optionResta"){
        for (let i = 0; i < longitud; i++){
            let numero = a[i] - b[i];
            c[i] = numero;
            acumuladosC += `<li class="list-group-item"> ${i} | ${numero}</li>`;
        }
    } else {
        for (let i = 0; i < longitud; i++){
            let numero = a[i] * b[i];
            c[i] = numero;
            acumuladosC += `<li class="list-group-item"> ${i} | ${numero}</li>`;
        }
    }

    

    


    containerA.innerHTML = acumuladosA;
    containerB.innerHTML = acumuladosB;
    containerC.innerHTML = acumuladosC;

    btnMostrarArray. disabled = true;
    inpOpcion.disabled = true;
}

