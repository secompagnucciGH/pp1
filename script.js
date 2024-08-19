// script.js

// Evento que se ejecuta cuando el contenido del DOM ha sido completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    const inicioSection = document.getElementById('inicio');

    // Manejo de visibilidad de secciones
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            if (link.getAttribute('href') === '#gestionarPedidos') {
                inicioSection.style.display = 'none';
            } else if (link.getAttribute('href') === '#inicio') {
                inicioSection.style.display = 'block';
            }
        });
    });
});

// Activación de botones de navegación
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(link => link.parentElement.classList.remove('active')); // Remueve la clase activa de todos los enlaces
            link.parentElement.classList.add('active'); // Añade la clase activa al enlace actual
        });
    });
});
