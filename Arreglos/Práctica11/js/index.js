let inpCadena = document.getElementById('inpCadena');
inpCadena.addEventListener('keyup', crearArray);
let btnMostrarArray = document.getElementById('btnMostrarArray');
btnMostrarArray.addEventListener('click', mostrarArray);

btnMostrarArray.disabled = true;
let letrasCadena = [];
let letrasCadenaMastres = [];

function crearArray(event) {
    if(event.key != "Enter") {
        return;
    }
    let Cadena = inpCadena.value;
    if(Cadena == "") {
        alert(`Por favor, ingrese una Cadena.`);
        return;
    }
    if(isNaN(Cadena) == false) {
        alert(`Este programa no acepta números. Por favor, ingrese una Cadena.`);
        return;
    }

    

    letrasCadena = Array.from(Cadena);
    console.log(letrasCadena);

    for(let i = 0; i < letrasCadena.length; i++) {
        let letra = letrasCadena[i].charCodeAt();
        console.log(letra);
        let letraMasTres = letra + 3;
        let letraString = "";
        letraString = String.fromCharCode(letraMasTres);
        letrasCadenaMastres.push(letraString);
    }

    console.log(letrasCadenaMastres);

    btnMostrarArray.disabled = false;
    inpCadena.disabled = true;
}

function mostrarArray () {

    let container = document.getElementById('container');
    container.innerHTML = `<div class="alert alert-success">El array resulante es: [${letrasCadenaMastres}]</div>`;

    btnMostrarArray.disabled = true;
}