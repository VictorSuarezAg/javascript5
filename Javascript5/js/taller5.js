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
            pasatiempos: "Jugar, Caminar"
        }
        alert("Nombre: " + datos.nombre + ", Pasatiempos: " + datos.pasatiempos);
    })
});