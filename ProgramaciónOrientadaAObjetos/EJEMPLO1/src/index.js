/* let robot = {
    color:'Gris',
    capacidad: 100,
    consumo: 200,
    encendido: false,
    posicionX: -102,
    posicionY: -98,
    direccion: 50,
};
let robot1 = {
    color:'Rojo',
    capacidad: 150,
    consumo: 200,
    encendido: false,
    posicionX: -102,
    posicionY: -98,
    direccion: 50,
};
 */
class Robot {
    color = "";
    capacidad = 0;
    consumo = 0;
    encendido = false;
    posicionX = 0;
    posicionY = 0;


    constructor(
        colorPm, 
        capacidadPm, 
        consumoPm, 
        encendidoPm, 
        posicionXPm, 
        posicionYPm
        ) {
            this.color = colorPm;
            this.capacidad = capacidadPm;
            this.consumo = consumoPm;
            this.encendido = encendidoPm;
            this.posicionX = posicionXPm;
            this.posicionY = posicionYPm;
    }
    
    mostrarValores () {
        return `
            El robot es de color ${this.color}
            El robot tiene una capacidad de bateria de ${this.capacidad}mA
            El robot tiene consume de batería ${this.consumo} mA/h
            El robot está encendido? : ${this.encendido}
            Latitud del robot ${this.posicionX}
            Longitud del robot ${this.posicionY}
        `
    }
}


//instancia
let robot1 = new Robot('Rojo', 100, 100, false, 102, 91);
let robot2 = new Robot();
let robot3 = new Robot();
let robot4 = new Robot();
let robot5 = new Robot();

console.log(robot1.mostrarValores());