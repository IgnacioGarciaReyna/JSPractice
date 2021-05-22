class UI {
    textoVotar = "";
    votaciones;


    eliminarPantalla1 () {
        this.textoVotar = document.getElementById("VoteTopic").value;

        let pantalla1 = document.getElementById("pantalla1");
        pantalla1.remove();
    }

    crearPantalla2 () {
        const pantalla2 = document.createElement("div");
        pantalla2.setAttribute("id", "pantalla2");

        const container = document.getElementById("container");
        container.appendChild(pantalla2);

        const divTexto = document.createElement("div");
        divTexto.innerText = this.textoVotar;
        divTexto.setAttribute("class", "contenedorTexto");

        //button favor
        const buttonFavor = document.createElement("button");
        buttonFavor.innerText = "A favor";
        buttonFavor.setAttribute("class", "btn btn-outline-success btn-block");
        buttonFavor.setAttribute("id", "btnFavor");

        //button contra
        const buttonContra = document.createElement("button");
        buttonContra.innerText = "En contra";
        buttonContra.setAttribute("class", "btn btn-outline-warning btn-block");
        buttonContra.setAttribute("id", "btnContra");

        //button abstencion
        const buttonAbstencion = document.createElement("button");
        buttonAbstencion.innerText = "Abstención";
        buttonAbstencion.setAttribute("class", "btn btn-outline-info btn-block");
        buttonAbstencion.setAttribute("id", "btnAbstencion");

        //button Finalizar
        const buttonFinalizar = document.createElement("button");
        buttonFinalizar.innerText = "Finalizar";
        buttonFinalizar.setAttribute("class", "btn btn-outline-danger btn-block");
        buttonFinalizar.setAttribute("id", "btnFinalizar");

        pantalla2.appendChild(divTexto);
        pantalla2.appendChild(buttonFavor);
        pantalla2.appendChild(buttonContra);
        pantalla2.appendChild(buttonAbstencion);
        pantalla2.appendChild(buttonFinalizar);

        document.addEventListener("click", this.validarClick)
    }


    renovarPantalla1() {
        let pantalla2 = document.getElementById("pantalla2");
        pantalla2.remove();

        //pantalla1
        const pantalla1 = document.createElement("div");
        pantalla1.setAttribute("id", "pantalla1");
        
        //header
        const header = document.createElement("header");
        const h1 = document.createElement("h1");
        h1.innerText = `Votaciones`;

        //input
        const formGroup = document.createElement("div");
        formGroup.setAttribute("class", "form-group");
        const labelForm = document.createElement("label");
        labelForm.innerText = `Escriba el texto de la pregunta que se sometera a votación`;
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "VoteTopic");
        input.setAttribute("class", "form-control");

        //buttom
        const button = document.createElement('button');
        button.setAttribute("type", "button");
        button.setAttribute("id", "btnAceptar");
        button.setAttribute("class", "btn btn-primary btn-lg btn-block");
        button.innerText = `Aceptar`;

        //orden
        const container = document.getElementById("container");
        container.appendChild(pantalla1);
        pantalla1.appendChild(header);
        header.appendChild(h1);

        pantalla1.appendChild(formGroup);
        pantalla1.appendChild(button);

        formGroup.appendChild(labelForm);
        formGroup.appendChild(input);

        let btnAceptar = document.getElementById("btnAceptar");

        btnAceptar.addEventListener("click", eliminarPantallas);
    }
    
}


let btnAceptar = document.getElementById("btnAceptar");

btnAceptar.addEventListener("click", eliminarPantallas);

const votaciones = new Votaciones();

function eliminarPantallas () {
    const ui = new UI ();

    ui.eliminarPantalla1();
    ui.crearPantalla2();
    document.addEventListener("click", validarClick);
}

function validarClick (event) {
    if (event.target.id !== "btnFinalizar") {
        votaciones.increaseVote(event.target.id);

    } else if (event.target.id == "btnAceptar") {
        eliminarPantallas();
    } else {
        alert (`
        El número de votos a favor es: ${votaciones.aFavor}
        El número de votos en contra es: ${votaciones.enContra}
        El número de abstenciones es: ${votaciones.abstencion}

        `);

        votaciones.aFavor = 0;
        votaciones.enContra = 0;
        votaciones.abstencion = 0;

        const ui = new UI ();
        ui.renovarPantalla1();

    }
    
}