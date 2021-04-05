const btnEvlNum = document.getElementById('btnEvlNum');

btnEvlNum.addEventListener('click', evaluarNumeros);

function evaluarNumeros() {
    const inpNumero1 = Number(document.getElementById("inpNumero1").value);
    const inpNumero2 = Number(document.getElementById("inpNumero2").value);
    let numeroMayor = 0;
        const alertaResult = document.getElementById("alertResult")
    if (inpNumero1 > inpNumero2) {
        //Inicio de bloque TRUE
        alertaResult.innerHTML=`El número mayor es ${inpNumero1}`;
        //Final del bloque TRUE
        } else {
            alertaResult.innerHTML=`El número mayor es ${inpNumero2}`;
    }
}