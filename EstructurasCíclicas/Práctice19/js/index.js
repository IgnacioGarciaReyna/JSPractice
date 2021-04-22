const btnInitApp = document.getElementById('btnInitApp');

btnInitApp.addEventListener('click', obtenerVentas);

function obtenerVentas () {
    let ciudadActual = '';
    let tiendaActual = '';
    let empleadoActual = '';
    let ventaEmpleadoActual = 0;
    let continuar = "Si"
    let acumulaEmpleados = '';
    let acumulaTiendas = '';
    let acumulaCiudades =  `<br><br><div class="alert alert-success">Ventas por ciudades de "El mandilón":</div>`;
    let ventaTiendaTotal = 0;
    let ventaCiudadTotal = 0;
    let ventaCadenaTotal = 0;

    while (continuar == "Si") {
        ciudadActual = prompt("Ingrese el nombre de la ciudad donde se encuentra la tienda:");
        if (ciudadActual == null) {
            alert("Por favor, ingrese una respuesta valida.");
            continuar = "No";
        } else {
            acumulaTiendas += `<br><br><div class="alert alert-success">Ventas de tiendas de la ciudad ${ciudadActual}:</div>`;
        }
        

        while (continuar == "Si") {
            tiendaActual = prompt(`Ingrese el nombre de la tienda de la ciudad ${ciudadActual}:`);
            acumulaEmpleados += `<br><br><div class="alert alert-success">Ventas de empleados de la tienda ${tiendaActual} de la ciudad ${ciudadActual}:</div>`;
            ventaTiendaTotal = 0;
        
            while (continuar == "Si") {
                
                empleadoActual = prompt(`Ingrese el nombre del empleado de la tienda ${tiendaActual} de la ciudad ${ciudadActual}:`);

                continuar = "";
                while (continuar != "No" && continuar !="Si") {
                    ventaEmpleadoActual = Number(prompt(`Ingrese el valor de las ventas del empleado ${empleadoActual} de la tienda ${tiendaActual} de la ciudad ${ciudadActual}:`));

                    if (isNaN(ventaEmpleadoActual) == true) {
                        alert("Por favor, ingrese un valor numerico.");
                    } else {
                        continuar = "Si";
                    }
                }   

                acumulaEmpleados += `<li class="list-group-item"> ${empleadoActual} vendió $${ventaEmpleadoActual}.</li>`;
                ventaTiendaTotal = ventaTiendaTotal + ventaEmpleadoActual;

                continuar = "";
                while (continuar != "No" && continuar !="Si") {
                    continuar = prompt(`Si desea agregar las ventas de otro empleado de la tienda ${tiendaActual} de la ciudad ${ciudadActual} ingrese "Si". De lo contrario ingrese "No":`);

                    if (continuar != "Si" && continuar != "No") {
                    alert("Por favor, ingrese una respuesta valida.");
                    }
                }
                
            }

            ventaCiudadTotal = ventaCiudadTotal + ventaTiendaTotal;
            acumulaTiendas += `<li class="list-group-item">La tienda ${tiendaActual} vendió un total de: $${ventaTiendaTotal}.</li>`;

            continuar = "";
            while (continuar != "No" && continuar !="Si") {
                continuar = prompt(`Si desea agregar las ventas de otra tienda de la ciudad ${ciudadActual} ingrese "Si". De lo contrario ingrese "No":`);

                if (continuar != "Si" && continuar != "No") {
                alert("Por favor, ingrese una respuesta valida.");
                }
            }

        }

        acumulaCiudades += `<li class="list-group-item">La ciudad ${ciudadActual} vendió un total de: $${ventaCiudadTotal}.</li>`;
        ventaCadenaTotal = ventaCadenaTotal + ventaCiudadTotal;

        continuar = "";
        while (continuar != "No" && continuar !="Si") {
            continuar = prompt(`Si desea agregar las ventas de otra ciudad ingrese "Si". De lo contrario ingrese "No":`);

            if (continuar != "Si" && continuar != "No") {
            alert("Por favor, ingrese una respuesta valida.");
            }
        }

    }

    const containerEmpleados = document.getElementById('containerEmpleados');
    containerEmpleados.innerHTML = acumulaEmpleados;

    const containerTienda = document.getElementById('containerTienda');
    containerTienda.innerHTML = acumulaTiendas;

    const containerCiudad = document.getElementById('containerCiudad');
    containerCiudad.innerHTML = acumulaCiudades;

    const containerCadena = document.getElementById('containerCadena');
    containerCadena.innerHTML = `<br><br><div class="alert alert-success">Las ventas totales de "El mandilón" fueron de: $${ventaCadenaTotal}. </div>`;

}