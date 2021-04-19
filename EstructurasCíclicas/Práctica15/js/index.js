const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', realizarEleccion);

function realizarEleccion () {
    let continuar = true;
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let candidato4 = 0;

    

    while (continuar == true) {
        let voto = prompt(`Ingrese el número de su candidato (Entre 1 y 4) o el número 0 para finalizar la elección:`);
        if (isNaN(voto) == true || voto == null || voto > 4 || voto < 0) {
            alert("Por favor, ingrese un número valido.");
            return;
        } else if (voto == 0) {
            continuar = false;
        } else {
            voto = Number(voto);
            if (voto == 1) {
                candidato1++;
            } else if (voto == 2) {
                candidato2++;
            } else if (voto == 3) {
                candidato3++;
            } else {
                candidato4++;
            }
        }
    }


    const totalVotantes = candidato1 + candidato2 + candidato3 + candidato4;
    const porcentaje1 = (candidato1 * 100) / totalVotantes;
    const porcentaje2 = (candidato2 * 100) / totalVotantes;
    const porcentaje3 = (candidato3 * 100) / totalVotantes;
    const porcentaje4 = (candidato4 * 100) / totalVotantes;

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = 
    `<div class="alert alert-success">
        El candidato 1 tiene ${candidato1} votos y acumula el ${porcentaje1}% del total.
        <br>
        El candidato 2 tiene ${candidato2} votos y acumula el ${porcentaje2}% del total.
        <br>
        El candidato 3 tiene ${candidato3} votos y acumula el ${porcentaje3}% del total.
        <br>
        El candidato 4 tiene ${candidato4} votos y acumula el ${porcentaje4}% del total.
    </div>`;


}