let inpLongitud = document.getElementById('inpLongitud');
inpLongitud.addEventListener('keyup', crearArray);
let btnMostrarArray = document.getElementById('btnMostrarArray');
btnMostrarArray.addEventListener('click', buscarPares);

let arreglo1 = [];
let arreglo2 = [];

btnMostrarArray.disabled = true;


function crearArray (event) {
    longitud = inpLongitud.value;
    if (event.key != "Enter") {
        return;
    }
    if (longitud == "") {
        alert('Por favor, ingrese una longitud.');
        return;
    }
    if (isNaN(longitud) == true) {
        alert(`Por favor, ingrese un valor numérico.`);
        return;
    }

    for(let i = 0; i < longitud; i++) {
        let numero = Math.floor(Math.random() * (100 - 2)) + 2;
        arreglo1[i] = numero;
    }

    btnMostrarArray.disabled = false;
    inpLongitud.disabled = true;
}



function buscarPares () {
    
    for(let i = 0; i < arreglo1.length; i++) {
        let numero = arreglo1[i];
        if (numero % 2 == 0) {
            arreglo2.push(arreglo1[i]);
        }
    }
    
    
    

    btnMostrarArray.disabled = true;
    console.log(arreglo1);
    console.log(arreglo2);


    let container1 = document.getElementById('container1');
    container1.innerHTML = `<div class="alert alert-danger">El primer arreglo contiene: [${arreglo1}]</div>`;
    let container2 = document.getElementById('container2');
    container2.innerHTML = `<div class="alert alert-success">El segundo arreglo contiene: [${arreglo2}]</div>`;
}