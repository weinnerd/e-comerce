document.addEventListener('DOMContentLoaded', function () {
    mostrarProductosCarrito();
});

function mostrarProductosCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let itemsCarrito = document.getElementById('itemsCarrito');
    let total = 0;

    itemsCarrito.innerHTML = '';

    carrito.forEach((producto) => {
        // Asumiendo que 'producto' tiene 'id', 'nombre', 'precio', y 'cantidad'
        let totalProducto = producto.precio * producto.cantidad;
        total += totalProducto;

        itemsCarrito.innerHTML += `
            <p>${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: $${totalProducto}</p>
        `;
    });

    document.getElementById('totalCarrito').textContent = `$${total}`;
}

function resetearCarrito() {
    // Limpiar el carrito completamente
    localStorage.removeItem('carrito');
    location.reload(); // Esto recargará la página `carrito.html` y mostrará el carrito vacío.

    // Actualizar la interfaz para reflejar el carrito vacío
    actualizarContadorCarrito();

}

document.getElementById('btnComprar').addEventListener('click', function() {
    // Obtener el elemento donde quieres mostrar el mensaje
    var contenedorMensaje = document.getElementById('mensajeCompra');
    
    // Establece el mensaje que quieres mostrar
    contenedorMensaje.innerHTML = '<p>¡Gracias por tu compra!</p>';
    
    // Opcional: Añade alguna clase para estilizar el mensaje si es necesario
    contenedorMensaje.classList.add('mensaje-exito');
});
