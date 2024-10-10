function seleccionarProductos() {
    let menu = [
      { nombre: "Pizza", precio: 8000 },
      { nombre: "Hamburguesa", precio: 5000 },
      { nombre: "Papas Fritas", precio: 3000 },
      { nombre: "Refresco", precio: 2000 },
      { nombre: "Helado", precio: 4000 }
    ];

    let total = 0;
    let seleccion;

    while (true) {
      seleccion = prompt("Escribe el nombre del producto o 'pagar' para terminar:\n" +
        menu.map(item => item.nombre + " - $" + item.precio).join("\n"));

      if (seleccion.toLowerCase() === "pagar") {
        break;
      }

      let producto = menu.find(item => item.nombre.toLowerCase() === seleccion.toLowerCase());

      if (producto) {
        total += producto.precio;
        alert("Has agregado " + producto.nombre + " por $" + producto.precio + ". Total hasta ahora: $" + total);
      } else {
        alert("Producto no encontrado. Por favor selecciona un producto válido.");
      }
    }

    alert("El total a pagar es: $" + total);
  }
  seleccionarProductos()