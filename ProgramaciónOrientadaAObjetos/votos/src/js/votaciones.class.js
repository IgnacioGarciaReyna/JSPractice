class Votaciones {
    aFavor = 0;
    enContra = 0;
    abstencion = 0;

    increaseVote(getButton){
        switch(getButton) {
            case "btnFavor":
                this.aFavor++;
                break;
            case "btnContra":
                this.enContra++;
                break;
            case "btnAbstencion":
                this.abstencion++;
                break;
        }

        console.log(this.aFavor, this.enContra, this.abstencion);
    }
}