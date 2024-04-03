document.addEventListener('DOMContentLoaded', function() {
    mostrarProductos();

    // Función para mostrar productos
    function mostrarProductos() {
        let productos = JSON.parse(localStorage.getItem('productos')) || [];
        let productosAdminContainer = document.getElementById('productosAdminContainer');
        productosAdminContainer.innerHTML = ''; // Limpiar la tabla antes de mostrar los productos

        productos.forEach(function(producto, index) {
            let fila = `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td><img src="${producto.imagen}" width="50" height="50"></td>
                    <td>${producto.nombre}</td>
                    <td>${producto.marca}</td>
                    <td>${producto.precio}</td>
                    <td>
                        <button class="btn btn-primary btn-sm" onclick="editarProducto(${index})">Editar</button>
                        <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>
                    </td>
                </tr>
            `;
            productosAdminContainer.innerHTML += fila;
        });
    }

    // Función para eliminar producto
    window.eliminarProducto = function(index) {
        let productos = JSON.parse(localStorage.getItem('productos'));
        productos.splice(index, 1); // Elimina el producto seleccionado
        localStorage.setItem('productos', JSON.stringify(productos)); // Actualiza el localStorage
        mostrarProductos(); // Refresca la lista de productos
        alert('Producto eliminado correctamente');
    };

    // La función para editar producto requerirá de una lógica adicional
    // que podría incluir mostrar un modal o una nueva página con el formulario de edición.
});
