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

document.addEventListener('DOMContentLoaded', function() {
    const buscador = document.getElementById('buscador');
    const cards = document.querySelectorAll('.productos .card');

    buscador.addEventListener('input', function() {
        const texto = buscador.value.toLowerCase();
        cards.forEach(card => {
            const nombre = card.querySelector('h2');
            if (nombre && nombre.textContent.toLowerCase().includes(texto)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });

        // condicion por si el buscador no encuentra nada pero arriba del footer
        const noResults = Array.from(cards).every(card => card.style.display === 'none');
        let noResultsDiv = document.getElementById('no-results');
        if (noResults) {
            if (!noResultsDiv) {
                noResultsDiv = document.createElement('div');
                noResultsDiv.id = 'no-results';
                noResultsDiv.textContent = 'No se encontraron productos.';
                document.querySelector('.productos').appendChild(noResultsDiv);
            }
        } else {
            if (noResultsDiv) {
                noResultsDiv.remove();
            }
        }
    });
});
