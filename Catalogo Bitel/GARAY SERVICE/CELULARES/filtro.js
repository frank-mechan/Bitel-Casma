const filtros = document.querySelectorAll('.filtro');
const productos = document.querySelectorAll('.producto');

filtros.forEach(filtro => {
  filtro.addEventListener('change', () => {
    const marcasSeleccionadas = Array.from(filtros)
      .filter(f => f.checked)
      .map(f => f.value);

    productos.forEach(producto => {
      const visible = marcasSeleccionadas.length === 0 || marcasSeleccionadas.some(marca => producto.classList.contains(marca));
      producto.style.display = visible ? 'block' : 'none';
    });
  });
});
