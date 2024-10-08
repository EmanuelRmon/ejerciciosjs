function seleccionarProductos() {
    // Definir el menú con un array de objetos
    let menu = [
      { nombre: "Pizza", precio: 8000 },{ nombre: "Hamburguesa", precio: 5000 },{ nombre: "Papas Fritas", precio: 3000 },
      { nombre: "Refresco", precio: 2000 },{ nombre: "Helado", precio: 4000 }
    ];

    // Variable para almacenar el total
    let total = 0;
    let seleccion;

    // Mostrar el menú y permitir la selección
    while (true) {
      // Mostrar el menú al usuario
      seleccion = prompt("Escribe el nombre del producto o 'pagar' para terminar:\n" +
        menu.map(item => item.nombre + " - $" + item.precio).join("\n"));

      // Si el usuario escribe "pagar", termina la selección
      if (seleccion.toLowerCase() === "pagar") {
        break;
      }

      // Buscar el producto en el menú
      let producto = menu.find(item => item.nombre.toLowerCase() === seleccion.toLowerCase());

      // Verificar si el producto existe
      if (producto) {
        // Sumar el precio al total
        total += producto.precio;
        alert("agregaste" + producto.nombre + " por $" + producto.precio + ". total: $" + total);
      } else {
        alert("Producto no encontrado. Por favor selecciona un producto válido.");
      }
    }

    // Mostrar el total a pagar
    alert("total a pagar: $" + total);
  }

  window.onload = seleccionarProductos;