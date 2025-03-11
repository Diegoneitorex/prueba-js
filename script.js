document.getElementById('btn-ver-catalogo').addEventListener('click', function() {
    alert('Catálogo de vehículos');
    // Puedes redirigir a otra página o mostrar un catálogo dinámicamente
    // window.location.href = 'catalogo.html';
});

document.querySelectorAll('.btn-comprar').forEach(button => {
    button.addEventListener('click', function() {
        alert('¡Vehículo agregado al carrito!');
        // Aquí puedes implementar la lógica para agregar al carrito o redirigir a una página de pago
    });
});