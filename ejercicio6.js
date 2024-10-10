function calcularMatricula() {

    const valorMatricula = 1000000;

    let promedio = prompt("introduce tu promedio");

    if (isNaN(promedio) || promedio < 0 || promedio > 5) {
      alert("introduce un promedio entre 0 y 5");
      return;
    }

    let valorFinal = valorMatricula;

    if (promedio >= 3 && promedio < 4) {
      valorFinal -= valorMatricula * 0.05;
    } else if (promedio >= 4) {
      valorFinal -= valorMatricula * 0.50;
    }

    alert("El valor de la matriocula es $" + valorFinal);
  }

  calcularMatricula()