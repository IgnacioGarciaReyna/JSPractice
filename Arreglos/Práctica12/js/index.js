const btnBuscar = document.getElementById('btnBuscar');
const inpNumero = document.getElementById('inpNumero');

let numberList = [];

function llenarArray () {
    let longitud = Math.floor(Math.random() * (100 - 10) + 10);
    for (let i = 0; i < 50000; i++) {
        let randomNumber = Math.floor(Math.random() * (100000 - 1) + 1);
        numberList.push(randomNumber);
    }
    
    numberList.sort(function(a,b) {
        return a - b;
    });
    console.log(
        "🚀 ~ file: index.js ~ line 13 ~ llenarArray ~ numberList", 
        numberList
    );
}

llenarArray();

btnBuscar.addEventListener('click', buscarElementoBusquedaBinaria);

function buscarElementoBusquedaBinaria () {
    inpNumero.disabled = true;
    let firstElement = 0;
    let lastElement = numberList.length - 1;
    let find = false;
    const numeroBusqueda = Number(inpNumero.value);
    let finalMessage = ``;
    let middle = 0;
    
    console.time("inicioCiclo");
    while (firstElement <= lastElement && find == false) {
        middle = Math.floor((firstElement + lastElement) / 2);
        if (numberList[middle]== numeroBusqueda){
            find = true;
            break;
        } else {
            if(numeroBusqueda < numberList[middle]) {
                lastElement = middle - 1;
            } else {
                firstElement = middle + 1;
            }
        }
    } 
    console.log(
        "🚀 ~ file: index.js ~ line 30 ~ buscarElementoBusquedaBinaria ~ find",
        find
        );
        console.timeEnd("inicioCiclo");
    
    if (find == true) {
        finalMessage = `<div class="alert alert-success">El número ${numeroBusqueda} fue encontrado en la posición ${middle}.</div>`;
    } else {
        finalMessage = `<div class="alert alert-success">El número ${numeroBusqueda} no se encuentra en el array generado.</div>`;
    }

    let resAlert = document.getElementById('resAlert');
    resAlert.innerHTML = finalMessage;
}


/* 
Esta es la forma de realizar la busqueda con un for

function buscarElementoByFor (numeroBusqueda) {
    console.time("inicioCiclo2");
    let find = false;
    for(let index=0; index <= numberList.length - 1; index++) {
        if (numeroBusqueda == numberList[index]) {
            find = true;
            break;
        }
    }
    console.timeEnd("inicioCiclo2");
} */