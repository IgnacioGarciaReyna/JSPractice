class Auto {
    velocidad = 6;
    Top = 0;
    Left = 0;

    moverIzquierda () {
        this.Left -= this.velocidad;
    }

    moverDerecha () {
        this.Left += this.velocidad;
    }

    moverAbajo () {
        this.Top += this.velocidad;
    }

    moverArriba () {
        this.Top -= this.velocidad;
    }
}