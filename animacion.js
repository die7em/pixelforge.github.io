// Añadir la clase fade-out al hacer clic en un enlace de navegación
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');

        // Añadir la clase fade-out al body
        document.body.classList.add('fade-out');

        // Esperar a que la animación termine antes de cambiar de página
        setTimeout(() => {
            window.location.href = href;
        }, 1000); // La duración debe coincidir con la duración de la animación CSS
    });
});

// Quitar la clase fade-in después de que la página se cargue
window.addEventListener('load', () => {
    document.body.classList.remove('fade-in');
});