function calcularSuma() {
    let n = parseInt(prompt("Introduce un número n:"));

    if (isNaN(n) || n <= 0) {
      alert("Por favor, introduce un número válido mayor que 0.");
      return;
    }

    let suma = 0;
    for (let i = 1; i <= n; i++) {
      suma += i;
    }

    alert("La suma de los números del 1 al " + n + " es: " + suma);
  }
  window.onload = calcularSuma;