//alert("Hola este es mi Javascript");

let nombre = "Laritza";

console.log(nombre);

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento "Acerca de mí"
    var acercaDeMiElemento = document.querySelector(".acerca-de h2");

    // Tu condición, por ejemplo, si el usuario ha iniciado sesión
   let usuarioHaIniciadoSesion = true;

    // Condición para modificar el texto del elemento "Acerca de mí"
    if (usuarioHaIniciadoSesion) {
        acercaDeMiElemento.textContent = "Acerca de mí (Usuario conectado)";
    } else {
        acercaDeMiElemento.textContent = "Acerca de mí (Usuario no conectado)";
    }
});

let nombre1 = "Laritza";
let nacionalidad = "Cubana";
let pasatiempos = "Leer libros de suspenso y superacion personal";

function modificarTextoAcercaDeMi(nombre1, nacionalidad, pasatiempos) {
    let contenido = `Me llamo ${nombre1}, soy ${nacionalidad} pero vivo en Montevideo/Uruguay. Mis pasatiempos son ${pasatiempos}, también me gusta salir a caminar por la Rambla por las tardes. Soy una estudiante continua del mundo del Testing de software, buscando oportunidades para integrarme a este mundo de tecnología.`;

    // Obtener el elemento "Acerca de mí"
    var acercaDeMiElemento = document.querySelector(".acerca-de .about");

    // Modificar el texto del elemento "Acerca de mí" con el nuevo texto
    acercaDeMiElemento.textContent = contenido;
}

// Llamar a la función para modificar el texto del elemento "Acerca de mí"
modificarTextoAcercaDeMi(nombre1, nacionalidad, pasatiempos);

document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    const menuToggle = document.getElementById('check');
    const menuNav = document.querySelector('.menu');

    // Agregar evento de clic al botón del menú
    menuToggle.addEventListener('click', () => {
        // Alternar la clase 'active' en el menú de navegación
        menuNav.classList.toggle('active');
    });
});
