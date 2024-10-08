function calcularMatricula() {
    // Valor inicial de la matrícula
    const valorMatricula = 1000000;

    // Solicitar el promedio del estudiante
    let promedio = parseFloat(prompt("introduce tu promedio"));

    // Verificar si el promedio es válido
    if (isNaN(promedio) || promedio < 0 || promedio > 5) {
      alert("introduce un promedio entre 0 y 5");
      return;
    }

    // Variable para el valor final de la matrícula
    let valorFinal = valorMatricula;

    // Determinar el descuento basado en el promedio
    if (promedio >= 3 && promedio < 4) {
      valorFinal -= valorMatricula * 0.05; // 5% de descuento
    } else if (promedio >= 4) {
      valorFinal -= valorMatricula * 0.50; // 50% de descuento
    }

    // Mostrar el valor de la matrícula final
    alert("El valor de la matrícula es $" + valorFinal.toLocaleString('es-CO'));
  }

  window.onload = calcularMatricula;