document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector('.overlay');
    const popup = document.querySelector('.popup');
    const opinionTextarea = document.getElementById('opinion');
    const submitButton = document.getElementById('submitBtn');
    const cancelButton = document.getElementById('cancelBtn');

    // Esperar 5 segundos antes de mostrar el popup automáticamente
    setTimeout(showPopup, 5000);

    // Función para mostrar el popup
    function showPopup() {
        overlay.style.display = 'block'; // Muestra el overlay
        popup.classList.add('show'); // Agrega la clase show al popup
    }

    // Función para ocultar el popup
    function hidePopup() {
        overlay.style.display = 'none'; // Oculta el overlay
        popup.classList.remove('show'); // Quita la clase show del popup
    }

    // Event listener para el botón Enviar
    submitButton.addEventListener('click', function() {
        const opinionText = opinionTextarea.value.trim();
        if (opinionText !== '') {
            alert('Opinión enviada: ' + opinionText); // Aquí puedes realizar el envío real del formulario
            hidePopup(); // Oculta el popup después de enviar la opinión
            opinionTextarea.value = ''; // Limpia el textarea
        } else {
            alert('Por favor escribe tu opinión.'); // Mensaje de alerta si el campo está vacío
        }
    });

    // Event listener para el botón Cancelar
    cancelButton.addEventListener('click', function() {
        hidePopup(); // Oculta el popup al hacer clic en Cancelar
    });

    // Event listener para cerrar el popup haciendo clic en el overlay
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            hidePopup();
        }
    });

    // Event listener para cerrar el popup con la tecla Esc
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            hidePopup();
        }
    });
});