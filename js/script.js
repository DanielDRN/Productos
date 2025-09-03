/* Buscador */
document.getElementById('buscador').addEventListener('input', function() {
    const texto = this.value.toLowerCase();
    document.querySelectorAll('.card').forEach(card => {
        const nombre = card.querySelector('h2').textContent.toLowerCase();
        card.style.display = nombre.includes(texto) ? '' : 'none';
    });
});

