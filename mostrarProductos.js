let productos = JSON.parse(localStorage.getItem('productos')) || [];

document.addEventListener('DOMContentLoaded', function() {
    mostrarProductos();
    actualizarContadorCarrito(); // Asegura que el contador del carrito se actualice al cargar la página
});

function mostrarProductos() {
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    let productosContainer = document.getElementById('productosContainer');
    productosContainer.innerHTML = ''; // Limpiar el contenedor antes de añadir los productos

    productos.forEach(function(producto) {
        let card = `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.marca} - $${producto.precio}</p>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-secondary btn-sm" onclick="cambiarCantidad('${producto.id}', 'decrementar')">-</button>
                        <span class="mx-2" id="cantidad-${producto.id}">1</span>
                        <button class="btn btn-secondary btn-sm" onclick="cambiarCantidad('${producto.id}', 'incrementar')">+</button>
                    </div>
                    <button class="btn btn-primary mt-3" onclick="agregarAlCarrito('${producto.id}')">Agregar al carrito</button>
                </div>
            </div>
        </div>
    `;
        productosContainer.innerHTML += card;
    });
}

function cambiarCantidad(productId, action) {
    let cantidadElemento = document.getElementById(`cantidad-${productId}`);
    let cantidadActual = parseInt(cantidadElemento.textContent);

    if (action === 'incrementar') {
        cantidadActual++;
    } else if (action === 'decrementar' && cantidadActual > 1) {
        cantidadActual--;
    }

    cantidadElemento.textContent = cantidadActual;
}

function agregarAlCarrito(productId) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let producto = productos.find(p => p.id === productId);
    let cantidad = parseInt(document.getElementById(`cantidad-${productId}`).textContent);

    let productoEnCarrito = carrito.find(p => p.id === productId);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad += cantidad;
    } else {
        producto.cantidad = cantidad;
        carrito.push(producto);
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let totalItems = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    document.getElementById('cart-count').textContent = totalItems;
}




