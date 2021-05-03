let btnMostrarArray = document.getElementById('btnMostrarArray');
btnMostrarArray.addEventListener('click', crearArray);

let arreglo1 = [];
let arreglo2 = [];
let i = 0;

function crearArray () {
    continuar = true;
    
    while(continuar == true) {
        let palabra = prompt(`Ingrese el valor del indice ${i}:`);
        if (palabra == "") {
            alert('Por favor, ingrese una palabra.');
        }else if (isNaN(palabra) == false) {
            alert(`Por favor, ingrese palabras. Los numero no son permitidos en este programa.`);
        } else {
            arreglo1[i] = palabra;
            i++;
        }
        continuar = confirm(`Presione "Aceptar" para agregar un nuevo valor. Para terminar presione "Cancelar".`);
    }

    i1 = 0;
    i2 = 0;
    const vocales = ["a", "e", "i", "o", "u"];
    let acumulador1 = ``;
    let acumulador2 = ``;

    while(i1 < arreglo1.length) {
        let cadenaEnMinuscula = arreglo1[i1].toLowerCase();
        let primerCaracter = cadenaEnMinuscula.charAt(0);
        if (vocales.indexOf(primerCaracter) != -1) {
            arreglo2[i2] = arreglo1[i1];
            acumulador2 += ` ${arreglo2[i2]},`;
            i2++;
        }
        acumulador1 += ` ${arreglo1[i1]},`;
        i1++; 
    }

    btnMostrarArray.disabled = true;
    console.log(arreglo1);
    console.log(arreglo2);


    let container1 = document.getElementById('container1');
    container1.innerHTML = `<div class="alert-danger">El primer arreglo contiene: [${acumulador1}]</div>`;
    let container2 = document.getElementById('container2');
    container2.innerHTML = `<div class="alert-success">El segundo arreglo contiene: [${acumulador2}]</div>`;
}