//Solamente funciona con la ventana en tamaño 770px x 747px
document.addEventListener("click", validateHitbox);

function validateHitbox(event) {
    const language = document.getElementById("language").value;
    const parteCuerpo = document.getElementById("parteCuerpo");
    console.log(`X=${event.x} Y=${event.y}`);
    if (event.x >= 156 && event.x <= 170 && event.y >= 143 && event.y <= 163) {
        if (language == 1) {
            console.log("Right hand");
            parteCuerpo.innerText = ` Right hand`;
        } else {
            console.log("Mano derecha");
            parteCuerpo.innerText = ` Mano derecha`;
        }
    } else if (event.x >= 223 && event.x <= 235 && event.y >= 206 && event.y <= 216) {
        if (language == 1) {
            console.log("Left hand")
            parteCuerpo.innerText = ` Left hand`;
        } else {
            console.log("Mano izquierda");
            parteCuerpo.innerText = ` Mano izquierda`;
        }
    } else if (event.x >= 183 && event.x <= 213 && event.y >= 92 && event.y <= 117) {
        if (language == 1) {
            console.log("Face")
            parteCuerpo.innerText = ` Face`;
        } else {
            console.log("Cara")
            parteCuerpo.innerText = ` Cara`;
        }
    } else if (event.x >= 134 && event.x <= 179 && event.y >= 316 && event.y <= 346) {
        if (language == 1) {
            console.log("Right foot")
            parteCuerpo.innerText = ` Right foot`;
        } else {
            console.log("Pie derecho")
            parteCuerpo.innerText = ` Pie derecho`;
        }
    } else if (event.x >= 211 && event.x <= 241 && event.y >= 326 && event.y <= 352) {
        if (language == 1) {
            console.log("Left foot");
            parteCuerpo.innerText = ` Left foot`;
        } else {
            console.log("Pie izquierdo");
            parteCuerpo.innerText = ` Pie izquierdo`;
        }
    } else if (event.x >= 201 && event.x <= 229 && event.y >= 202 && event.y <= 318) {
        if (language == 1) {
            console.log("Left leg");
            parteCuerpo.innerText = ` Left leg`;
        } else {
            console.log("Pierna izquierda");
            parteCuerpo.innerText = ` Pierna izquierda`;
        }
    } else if (event.x >= 156 && event.x <= 190 && event.y >= 208 && event.y <= 314) {
        if (language == 1) {
            console.log("Right leg");
            parteCuerpo.innerText = ` Right leg`;
        } else {
            console.log("Pierna derecha");
            parteCuerpo.innerText = ` Pierna derecha`;
        }
    } else if (event.x >= 234 && event.x <= 264 && event.y >= 129 && event.y <= 212) {
        if (language == 1) {
            console.log("Left arm");
            parteCuerpo.innerText = ` Left arm`;
        } else {
            console.log("Brazo izquierdo");
            parteCuerpo.innerText = ` Brazo izquierdo`;
        }
    } else if (event.x >= 134 && event.x <= 168 && event.y >= 132 && event.y <= 183) {
        if (language == 1) {
            console.log("Right arm");
            parteCuerpo.innerText = ` Right arm`;
        } else {
            console.log("Brazo derecho");
            parteCuerpo.innerText = ` Brazo derecho`;
        }
    } else if (event.x >= 174 && event.x <= 224 && event.y >= 163 && event.y <= 202) {
        if (language == 1) {
            console.log("Belly");
            parteCuerpo.innerText = ` Belly`;
        } else {
            console.log("Panza");
            parteCuerpo.innerText = ` Panza`;
        }
    } else if (event.x >= 178 && event.x <= 220 && event.y >= 119 && event.y <= 154) {
        if (language == 1) {
            console.log("Chest");
            parteCuerpo.innerText = ` Chest`;
        } else {
            console.log("Pecho");
            parteCuerpo.innerText = ` Pecho`;
        }
    }
}