function mostrarTablaMultiplicar() {
    let numero = parseInt(prompt("Introduce el numero para la tabla de multiplicar:"));

    let limite = parseInt(prompt("Introduce el limite hasta donde mostrar la tabla:"));
    
    if (isNaN(numero) || isNaN(limite) || limite <= 0) {
      alert("introduce cararcteres validos.");
      return;
    }

    let total = 0;
    let resultadoTabla = "";

    for (let i = 1; i <= limite; i++) {
      let resultado = numero * i;
      resultadoTabla += numero + " x " + i + " = " + resultado + "\n";
      total += resultado;
    }

    alert("Tabla de multiplicar dell " + numero + " hasta " + limite + ":\n\n" + resultadoTabla);

    alert("El total de los resultadosss es: " + total);
  }

  window.onload = mostrarTablaMultiplicar;