class Foco {
    encendido;

    constructor() {
        this.encendido = this.encendido;
    }

    encender () {
        this.encendido = true;
        return "./../assets/focoEncendido.jpg";
    }

    apagar () {
        this.encendido = false;
        return "./../assets/focoApagado.png";
    }
}


