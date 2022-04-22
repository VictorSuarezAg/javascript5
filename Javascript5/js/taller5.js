document.addEventListener("DOMContentLoaded", function() {
    /* ------------------------ */
    /* ---------Objetos-------- */
    /* ------------------------ */

    // Ejercicio 1
    var btnEjercicio1 = document.querySelector('.ejercicio1'),
        txtEjercicio1 = document.querySelector('.txtEjercicio1');

    btnEjercicio1.addEventListener("click", function () {
        var datos = {
            id: 8033373,
            nombre: "Victor",
            edad: 36,
            pasatiempos: "Jugar, Caminar"
        }
        txtEjercicio1.innerHTML = "Id: " + datos.id + "<br> Nombre: " + datos.nombre + "<br> Edad: " + datos.edad + "<br> Pasatiempos: " + datos.pasatiempos;
    })

    // Ejercicio 2
    var btnEjercicio2 = document.querySelector('.ejercicio2'),
        txtEjercicio2 = document.querySelector('.txtEjercicio2');

    btnEjercicio2.addEventListener("click", function () {
        var datos = {
            id: 8033373,
            nombre: "Victor",
            edad: 36,
            pasatiempos: "Jugar, Caminar"
        }
        txtEjercicio2.innerHTML = "Id: " + datos.id + "<br> Nombre: " + datos.nombre + "<br> Edad: " + datos.edad + "<br> Pasatiempos: " + datos.pasatiempos;
    })

    // Ejercicio 3
    var btnEjercicio3 = document.querySelector('.ejercicio3');

    btnEjercicio3.addEventListener("click", function () {
        var datos = {
            id: 8033373,
            nombre: "Victor",
            edad: 36,
            pasatiempos: "Jugar, Caminar",
            removeModal: function removeModal(){
                var modal = document.querySelector('.modal')
                if (modal) {
                    modal.remove()
                }
            },
            renderModal: function renderModal(element){
                var modal = document.createElement('div')
                modal.classList.add('modal')
                var child = document.createElement('div')
                child.classList.add('child')
                child.innerHTML = element
                modal.appendChild(child)
                document.body.appendChild(modal)
                modal.addEventListener('click', event => {
                    if (event.target.className === 'modal') {
                        datos.removeModal()
                    }
                })
            } 
        }
        var resultado = "<p><span>Nombre:</span> " + datos.nombre + "</p><p><span>Pasatiempo:</span> " + datos.pasatiempos + "</p>";

        datos.renderModal(resultado);
    })

    // Ejercicio 4
    var btnEjercicio4 = document.querySelector('.ejercicio4');

    btnEjercicio4.addEventListener("click", function () {
        var cant = prompt("Ingrese la cantidad de empleados");

        for (let i = 1; i <= cant; i++) {
            var nombre = prompt("Ingrese el nombre")
            var cargo = prompt("Ingrese el cargo")
            var salario = prompt("Ingrese el salario")
            
            var empleado = {
                nombre: nombre,
                cargo: cargo,
                salario: salario
            }

            for (prop in empleado) {
                document.write(prop + ": " + empleado[prop] + '<br>');
                document.write('<br>');
            }
        }
    })

    // Ejercicio 5
    var btnEjercicio5 = document.querySelector('.ejercicio5');

    btnEjercicio5.addEventListener("click", function () {
        var producto = {
            nombre: [],
            presentacion: [],
            valor: []
        }

        for (index = 0; index < 3; index++) {
            producto.nombre[index] = prompt("Digite producto"); 
            producto.presentacion[index] = prompt("Digite presentacion");
            producto.valor[index] = prompt("Digite valor");
        }

        /*for (prop in producto) {
            document.write(prop + ": " + producto[prop] + "<br>");
        }*/

        document.write('<table border="1">');
            for (prop in producto) {
                document.write('<tr  border="1">');
                for (let i = 0; i < 3; i++) {
                    document.write('<td  border="1">');
                    document.write(producto[prop][i]);
                    document.write('</td>');
                }
                document.write('</tr>');
            }
        document.write('</table');
    })

     /* ------------------------ */
    /* ---------Arreglos-------- */
    /* ------------------------ */

    //Ejercicio 17
    var arreglo1 = [3,5,9,10,35,42,12,22,25];
    var arreglo2 = [9,5,33,12,7,20,22,3,8]; 
    var suma1 = 0;
    var suma2 = 0;
    for (let index = 0; index < arreglo1.length; index++) {
        suma1 = suma1 + arreglo1[index];
        suma2 = suma2 + arreglo2[index];
        document.write(arreglo1[index] + " + " + arreglo2[index] + " = " + (arreglo1[index] + arreglo2[index]) + "<br>")
        
    }
});