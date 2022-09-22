/**
 * Template Name: Siimple - v4.8.0
 * Template URL: https://bootstrapmade.com/free-bootstrap-landing-page/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

function capturar() {

    function Alimento(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
    var nombreagregar = document.getElementById("nombre").value;
    if (nombreagregar.length == 0 || /^\s+$/.test(nombre)) {
        Swal.fire('Debe agregar el nombre del alimento', '', 'warning')
        return false;
    }
    var cantidadagregar = document.getElementById("cantidad").value;
    if (cantidadagregar == "") {
        Swal.fire('Debe agregar el peso ', '', 'warning')
        return false;
        return true;
    }
    ;
    nuevoalimento = new Alimento(nombreagregar, cantidadagregar);
    agregarnuevo();

}
;


var basedatos = [];

function agregarnuevo() {
    basedatos.push(nuevoalimento);
    document.getElementById("tabla").innerHTML += '<tbody><td>' + nuevoalimento.nombre + '</td><td>' + nuevoalimento.cantidad + '</td></tbody>';
}
;

function calcular() {
    document.getElementById("resultados").style.display = "block";
}

function eliminar() {

    document.getElementById("tabla").remove = '<tbody><td>' + nuevoalimento.nombre + '</td><td>' + nuevoalimento.cantidad + '</td></tbody>';

}







(function () {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
    }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
    }
    }

    /**
     * Mobile nav toggle
     */
    const toogleNav = function () {
        let navButton = select('.nav-toggle')
        navButton.classList.toggle('nav-toggle-active')
        navButton.querySelector('i').classList.toggle('bx-x')
        navButton.querySelector('i').classList.toggle('bx-menu')

        select('.nav-menu').classList.toggle('nav-menu-active')
    }
    on('click', '.nav-toggle', function (e) {
        toogleNav();
    })

    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.nav-menu .drop-down > a', function (e) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('drop-down-active')
        this.parentElement.classList.toggle('active')
    }, true)

    /**
     * Scrool links with a class name .scrollto
     */
    on('click', '.scrollto', function (e) {
        if (select(this.hash)) {
            select('.nav-menu .active').classList.remove('active')
            this.parentElement.classList.toggle('active')
            toogleNav();
        }
    }, true)

})()