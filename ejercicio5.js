function mostrarTablaMultiplicar() {
    // Solicitar al usuario el número para la tabla
    let numero = parseInt(prompt("Introduce el número para la tabla de multiplicar:"));
    // Solicitar al usuario el límite de la tabla
    let limite = parseInt(prompt("Introduce el límite hasta donde mostrar la tabla:"));
    
    // Verificar si los valores ingresados son válidos
    if (isNaN(numero) || isNaN(limite) || limite <= 0) {
      alert("Por favor, introduce valores válidos.");
      return;
    }

    // Variable para acumular el total de las multiplicaciones
    let total = 0;
    let resultadoTabla = "";

    // Calcular la tabla de multiplicar y el total de las multiplicaciones
    for (let i = 1; i <= limite; i++) {
      let resultado = numero * i;
      resultadoTabla += numero + " x " + i + " = " + resultado + "\n";
      total += resultado;
    }

    // Mostrar la tabla de multiplicar
    alert("Tabla de multiplicar del " + numero + " hasta " + limite + ":\n\n" + resultadoTabla);
    // Mostrar el total de las multiplicaciones
    alert("El total de las multiplicaciones es: " + total);
  }

  window.onload = mostrarTablaMultiplicar;