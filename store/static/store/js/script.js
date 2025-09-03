// This file contains JavaScript functionality for the JD Store.

document.addEventListener('DOMContentLoaded', function() {
    const detallesButtons = document.querySelectorAll('.detalles');
    const modal = document.getElementById('modal-detalles');
    const modalImg = document.getElementById('modal-img');
    const modalNombre = document.getElementById('modal-nombre');
    const modalPrecio = document.getElementById('modal-precio');
    const modalDescripcion = document.getElementById('modal-descripcion');
    const closeButton = document.querySelector('.close');

    detallesButtons.forEach(button => {
        button.addEventListener('click', function() {
            modalImg.src = button.getAttribute('data-img');
            modalNombre.textContent = button.value;
            modalPrecio.textContent = button.getAttribute('data-precio');
            modalDescripcion.textContent = button.getAttribute('data-descripcion') || '';
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});