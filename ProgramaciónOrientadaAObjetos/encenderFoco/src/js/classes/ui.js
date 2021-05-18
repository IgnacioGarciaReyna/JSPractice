const btnInterruptor = document.getElementById("btnInterruptor");
btnInterruptor.addEventListener("click", prenderApagarFoco);

function prenderApagarFoco() {
    const foco = new Foco();
    let src = "";
    if(foco.encendido == true) {
        src = foco.apagar();
    } else {
        src = foco.encender();
    }

    let imgFoco = document.getElementById("contenedor");

    imgFoco.setAttribute("src", src);
}