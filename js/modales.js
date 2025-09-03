/* Modal detallada dinámica */
const modalDetalles = document.getElementById('modal-detalles');
const modalImg = document.getElementById('modal-img');
const modalNombre = document.getElementById('modal-nombre');
const modalPrecio = document.getElementById('modal-precio');
const modalDescripcion = document.getElementById('modal-descripcion');
const btnDetalles = document.querySelectorAll('.detalles');
const closeBtn = modalDetalles.querySelector('.close');

btnDetalles.forEach(btn => {
    btn.addEventListener('click', () => {
        modalImg.src = btn.getAttribute('data-img');
        modalNombre.textContent = btn.value;
        modalPrecio.textContent = btn.getAttribute('data-precio');
        modalDescripcion.textContent = btn.getAttribute('data-descripcion');
        modalDetalles.style.display = 'flex';
        modalDetalles.setAttribute('aria-hidden', 'false');
        closeBtn.focus();
        document.body.style.overflow = 'hidden';
    });
});

modalDetalles.addEventListener('click', (e) => {
    if (e.target === modalDetalles || e.target.classList.contains('close')) {
        cerrarModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (modalDetalles.style.display === 'flex' && e.key === 'Escape') {
        cerrarModal();
    }
});

function cerrarModal() {
    modalDetalles.style.display = 'none';
    modalDetalles.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}