const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', encontrarKm);

function encontrarKm() {
    let a = 150;
    for (let z=70; z != a; z++) {
        a = a-1;
    }


    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `<span>Las dos personas se encuentran en el kilometro ${a}.</span>`;
}