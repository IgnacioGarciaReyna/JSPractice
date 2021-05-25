let auto = document.getElementById("auto");
console.log(auto.getBoundingClientRect());

let conteiner = document.getElementById("conteiner");
console.log(conteiner.getBoundingClientRect());

document.addEventListener("keydown", desplazarAuto);



const automovil = new Auto ();

function desplazarAuto (event) {
    console.log(event.key);
    
    if (event.key == "ArrowLeft" && automovil.Left > 0) {
        auto.setAttribute("src", "./../assets/autoIzquierda.jpg");
        automovil.moverIzquierda();
        auto.style.left = automovil.Left + "%";
    } else if (event.key == "ArrowRight" && automovil.Left < 80) {
        auto.setAttribute("src", "./../assets/autoDerecha.jpg");
        automovil.moverDerecha();
        auto.style.left = automovil.Left + "%";
    } else if (event.key == "ArrowDown" && automovil.Top < 80) {
        auto.setAttribute("src", "./../assets/autoAbajo.jpg");
        automovil.moverAbajo();
        auto.style.top = automovil.Top + "%";
    } else if (event.key == "ArrowUp" && automovil.Top > 0) {
        auto.setAttribute("src", "./../assets/autoArriba.jpg");
        automovil.moverArriba();
        auto.style.top = automovil.Top + "%";
    }
    console.log(auto.getBoundingClientRect());
}