class Proyectil {
    velocidadInicial = 0;
    angulo = 0;

    posicionesBotton = [];
    posicionesLeft = [];

    constructor(velocidadInicialPm, anguloPm) {
        this.velocidadInicial = velocidadInicialPm;
        this.angulo = anguloPm;

        //confirmamos que llego la info
        console.log(`
            velocidad -->${this.velocidadInicial}
            ángulo --> ${this.angulo}
            `);
    }

    calcularDistanciaX (t) {
        let distanciaX = 
            this.velocidadInicial * Math.cos(this.angulo * (Math.PI / 180)) * t;
        return distanciaX;
    }

    calcularDistanciaY (t) {
        let distanciaY = this.velocidadInicial * Math.sin(this.angulo * (Math.PI / 180));
        distanciaY = distanciaY * t -0.5 * 9.8 * Math.pow(t, 2);

        return distanciaY;
    }


    almacenarRecorrido () {
        let tiempo = 0;
        while (true) {
            tiempo += 0.01;
            let left = this.calcularDistanciaX(tiempo);
            let bottom = this.calcularDistanciaY(tiempo);
            if (left < 0 || bottom < 0 || left >= 100 ||bottom >= 100) {
                break;
            }
        
            this.posicionesLeft.push(left);
            this.posicionesBotton.push(bottom);
        }
    }

}

let proyectil = new Proyectil(45, 45);

proyectil.almacenarRecorrido() ;

let posicionesX = proyectil.posicionesLeft;
let posicionesY = proyectil.posicionesBotton;
console.log("🚀 ~ file: proyectil.class.js ~ line 56 ~ posicionesY", posicionesY);
console.log("🚀 ~ file: proyectil.class.js ~ line 55 ~ posicionesX", posicionesX);