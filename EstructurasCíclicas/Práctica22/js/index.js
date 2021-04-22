const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', calcularImpuesto);

function calcularImpuesto () {
   let modeloActual = "";
   let categoriaActual = 0;
   let valorActual = 0;
   let impuestoActual = 0;
   let impuestoTotal = 0;
   let totalCategoria1 = 0;
   let totalCategoria2 = 0;
   let totalCategoria3 = 0;
   let continuar = "Si";
   let acumuladorModelos = '';
   let pregunta = '';


   while (continuar == "Si") {
       modeloActual = prompt(`Ingrese el modelo del auto a registrar:`);
       valorActual = Number(prompt(`Ingrese el valor del auto ${modeloActual}:`));
       
       continuar = "";
       while (continuar != "Si" && continuar != "No") {
            categoriaActual = Number(prompt(`Ingrese la categoria del auto ${modeloActual} con valor $${valorActual}:`));
            if (categoriaActual == 1) {
                impuestoActual = valorActual * .10;
                continuar = "No";
                totalCategoria1 = totalCategoria1 + impuestoActual;
            } else if (categoriaActual == 2) {
                impuestoActual = valorActual * .07;
                continuar = "No";
                totalCategoria2 = totalCategoria2 + impuestoActual;
            } else if (categoriaActual == 3) {
                impuestoActual = valorActual * .05;
                continuar = "No";
                totalCategoria3 = totalCategoria3 + impuestoActual;
            } else {
                alert("Por favor ingrese una categoría valida (1, 2 o 3).");
            }
       }

       acumuladorModelos += `<li class="list-group-item">El automovil modelo ${modeloActual} que vale $${valorActual} y es de categoria ${categoriaActual} lleva un impuesto de $${impuestoActual}.</li>`;

       pregunta = prompt(`Presione "aceptar" para agregar otro automovil o "cancelar" para finalizar la aplicación.`);
       if (pregunta == null) {
           continuar = "No";
       } else {
           continuar = "Si";
       }
       


   }

   impuestoTotal = totalCategoria1 + totalCategoria2 + totalCategoria3;

   const containerTotal = document.getElementById('containerTotal');
   containerTotal.innerHTML = `<div class="alert alert-danger">El impuesto total que debe abonar la compañia es de: ${impuestoTotal}</div>`;

   const containerCategorias = document.getElementById('containerCategorias');
   containerCategorias.innerHTML = `<div class="alert alert-danger">El impuesto que se abona por la categoría 1 es de: ${totalCategoria1}. <br>El impuesto que se abona por la categoría 2 es de: ${totalCategoria2}. <br>El impuesto que se abona por la categoría 1 es de: ${totalCategoria3}.</div>`;

   const containerModelos = document.getElementById('containerModelos');
   containerModelos.innerHTML = `<div class="alert alert-danger">A continuación se detalla el impuesto a abonar por cada modelo:</div> <br>` + acumuladorModelos;


}

