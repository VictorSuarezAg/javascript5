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

    //Ejercicio 6
    var btnEjercicio6 = document.querySelector('.ejercicio6');

    btnEjercicio6.addEventListener("click", function () {
        document.write("Los arrays se utilizan cuando almacenamos múltiples valores de una sola variable, mientras que un objeto puede contener múltiples variables con sus valores. <br>" +
        "un array también se puede considerar como un objeto y tiene la mayoría de las funcionalidades del objeto. <br> Tiene algunas características adicionales como length, pop(), slice(), etc.")
    })

    //Ejercicio 7
    var btnEjercicio7 = document.querySelector('.ejercicio7');

    btnEjercicio7.addEventListener("click", function () {
        document.write("<h2>Propiedades</h2><br><br>" + 
        "<b>Length</b> = Esta propiedad muestra la cantidad total de elementos dentro de un array.<br>" + 
        "<b>Delete</b> = Esta propiedad permite borrar un elemento del array, esto deja un espacio en blanco en el array<br><br>" + 
        "<h2>Funciones</h2><br><br>" + 
        "<b>sort()</b> = El método sort() ordena los elementos de un array localmente y devuelve el array <br>" + 
        "<b>Array.from()</b> = El método Array.from() crea una nueva instancia de Array a partir de un objeto iterable. <br>" + 
        "<b>Array.of()</b> = El método Array.of() crea una nueva instancia Array con un número variable de elementos pasados como argumento, independientemente del número o del tipo.")
    })

     //Ejercicio 8
    var btnEjercicio8 = document.querySelector('.ejercicio8');

    btnEjercicio8.addEventListener("click", function () {
        var frutas = ["Mango", "Papaya", "Fresa", "Sandia"]

        var resPop = frutas.pop(); // Se espera Sandia
        frutas.push("Banano"); // Se agrega como ultimo elemento del array

        document.write("El resultado de la funcion pop() es el ultimo elemento del array en este caso se espera Sandia =" + resPop + "<br>" + 
        "El resultado de push es agregar un elemento al final del array por lo que en este caso se espera que el ultimo elemento del array sea Banano = " + frutas + "<br>")

        var frutas2 = frutas.slice(1, 3);

        frutas.splice(1, 0, "Kiwi");

        document.write("El metodo splice realiza una copia del primer array con los elementos seleccionados como en el ejemplo de frutas2 solo se copian 2 elementos = " + frutas2 + "<br>" + 
        "El metodo splice cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. = " + frutas);
    })

     //Ejercicio 9
    var btnEjercicio9 = document.querySelector('.ejercicio9');

    btnEjercicio9.addEventListener("click", function () {
        var frutas = ["Mango", "Papaya", "Fresa", "Sandia"]

        for (let i = 0; i < frutas.length; i++) {
            document.write(frutas[i] + " - ")
        }
    })

     //Ejercicio 10
    var btnEjercicio10 = document.querySelector('.ejercicio10');

    btnEjercicio10.addEventListener("click", function () {
        var frutas = ["Mango", "Papaya", "Fresa"]

        document.write("Estos son los elementos originales ")
        for (let i = 0; i < frutas.length; i++) {
            document.write(frutas[i] + " - ")
        }

        document.write("<br> Estos son los nuevos elementos ")

        frutas.push("Sandia", "Kiwi");

        for (let i = 0; i < frutas.length; i++) {
            document.write(frutas[i] + " - ")
        }
    })

    //Ejercicio 11
    var btnEjercicio11 = document.querySelector('.ejercicio11');

    btnEjercicio11.addEventListener("click", function () {
        var arreglo11 = [3,5,9,10,35,42,12,22,25]

        var centro = Math.floor(arreglo11.length / 2);

        document.write("Este es el primer elemento = " + arreglo11[0] + "<br>" + 
        "Este el ultimo elemento = " + arreglo11[arreglo11.length - 1] + "<br>" + 
        "Este es el elemento del centro = " + arreglo11[centro]);
    })

    //Ejercicio 12
    var btnEjercicio12 = document.querySelector('.ejercicio12');

    btnEjercicio12.addEventListener("click", function () {
        var arreglo12 = [3,5,9,10,35,42,12,22,25]
        var impares = [];
        var pares = [];
        var par = 0;
        var impar = 0;

        for (let i = 0; i < arreglo12.length; i++) {
            if (arreglo12[i] % 2 == 0) {
                pares[par] = arreglo12[i];
                par++;
            }else {
                impares[impar] = arreglo12[i];
                impar++;
            }
        }
        document.write("<h1> Numeros Impares: " + impares.length + "</h1>");
        for (let e = 0; e < impares.length; e++) {
            document.write("<p>" + impares[e] + "</p>");
        }
        document.write("<h1> Numeros Pares: " + pares.length + "</h1>");
        for (let p = 0; p < pares.length; p++) {
            document.write("<p>" + pares[p] + "</p>");
        }
    })

     //Ejercicio 13
    var btnEjercicio13 = document.querySelector('.ejercicio13');

    btnEjercicio13.addEventListener("click", function () {
        var arreglo13 = ["tomate", "banano", "manzana", "pera", "cebolla", "papa", "fresas", "Ajo", "Sandia"]; 
        var frutas = [arreglo13.indexOf("banano"),  arreglo13.indexOf("manzana"), arreglo13.indexOf("pera"), arreglo13.indexOf("fresas"), arreglo13.indexOf("Sandia") ]
        var vegetales = [arreglo13.indexOf("tomate"),  arreglo13.indexOf("cebolla"), arreglo13.indexOf("papa"), arreglo13.indexOf("Ajo")]

        document.write("<h2>Frutas: </h2>" + frutas + "<br><br>" + 
        "<h2>Vegetales: </h2>" + vegetales);
    })

    //Ejercicio 14
    var btnEjercicio14 = document.querySelector('.ejercicio14');

    btnEjercicio14.addEventListener("click", function () {
        var arreglo14 = [29,5,40,10,35,42,12,22,25,1,3];
        
        arreglo14.sort(function(a, b) {
            return a - b;
        })

        document.write(arreglo14)
    })

    //Ejercicio 15
    var btnEjercicio15 = document.querySelector('.ejercicio15');

    btnEjercicio15.addEventListener("click", function () {
        var arreglo15 = [29,5,40,10,35,42,12,22,25,1,3];
        
        arreglo15.sort(function(a, b) {
            return b - a;
        })

        document.write(arreglo15)
    })

    //Ejercicio 16
    var btnEjercicio16 = document.querySelector('.ejercicio16');

    btnEjercicio16.addEventListener("click", function () {
        var arreglo16 = [2,4,6,8,10,12,14,16,18,20,22];
        
        arreglo16.sort(() => Math.random() - 0.5);

        document.write(arreglo16)
    })

    //Ejercicio 17
    var btnEjercicio17 = document.querySelector('.ejercicio17');

    btnEjercicio17.addEventListener("click", function () {
        var arreglo1 = [3,5,9,10,35,42,12,22,25];
        var arreglo2 = [9,5,33,12,7,20,22,3,8]; 
        var suma1 = 0;
        var suma2 = 0;
        for (let index = 0; index < arreglo1.length; index++) {
            suma1 = suma1 + arreglo1[index];
            suma2 = suma2 + arreglo2[index];
            document.write(arreglo1[index] + " + " + arreglo2[index] + " = " + (arreglo1[index] + arreglo2[index]) + "<br>")
            
        }
    })
});