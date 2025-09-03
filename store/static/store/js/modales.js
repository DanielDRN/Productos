// This file contains JavaScript functionality for handling modals in the JD Store.

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-detalles');
    const closeButton = modal.querySelector('.close');
    const detailButtons = document.querySelectorAll('.detalles');

    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const imgSrc = this.getAttribute('data-img');
            const nombre = this.value;
            const precio = this.getAttribute('data-precio');
            const descripcion = this.getAttribute('data-descripcion') || 'Descripción no disponible';

            document.getElementById('modal-img').src = imgSrc;
            document.getElementById('modal-nombre').textContent = nombre;
            document.getElementById('modal-precio').textContent = precio;
            document.getElementById('modal-descripcion').textContent = descripcion;

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