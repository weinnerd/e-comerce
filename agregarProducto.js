document.getElementById('agregarProductoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    let nombre = document.getElementById('nombreProducto').value;
    let marca = document.getElementById('marcaProducto').value;
    let precio = document.getElementById('precioProducto').value;
    let imagen = document.getElementById('imagenProducto').value;

    let nuevoProducto = {
        id: Date.now().toString(), // Convertir el ID a string
        nombre,
        marca,
        precio,
        imagen
    };
    productos.push(nuevoProducto);
    localStorage.setItem('productos', JSON.stringify(productos));

    alert('Producto agregado correctamente');
    // Limpiar formulario
    document.getElementById('agregarProductoForm').reset();
    // Opcional: Redireccionar a inicio
    // window.location.href = 'index.html';
});
