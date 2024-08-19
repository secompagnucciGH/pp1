// script.js

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    const inicioSection = document.getElementById('inicio');
    const gestionarPedidosSection = document.getElementById('gestionarPedidos');
    const soporteSection = document.getElementById('soporte');
  
    // Manejo de visibilidad
    links.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        
        if (link.getAttribute('href') === '#gestionarPedidos') {
          inicioSection.style.display = 'none';
          soporteSection.style.display = 'none';
          gestionarPedidosSection.style.display = 'block';
        } else if (link.getAttribute('href') === '#inicio') {
          gestionarPedidosSection.style.display = 'none';
          soporteSection.style.display = 'none';
          inicioSection.style.display = 'block';
        } else if (link.getAttribute('href') === '#soporte') {
          inicioSection.style.display = 'none';
          gestionarPedidosSection.style.display = 'none';
          soporteSection.style.display = 'block';
        }
      });
    });
  });

// Manejo de la active class para botones
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(link => link.parentElement.classList.remove('active')); // Remueve la clase activa de todos los enlaces
            link.parentElement.classList.add('active'); // Añade la clase activa al enlace actual
        });
    });
});
