function calcularSuma() {
    let n = parseInt(prompt("Introduce un numero n:"));

    if (isNaN(n) || n <= 0) {
      alert("introduce un numero mayor que 0");
      return;
    }

    let suma = 0;
    for (let i = 1; i <= n; i++) {
      suma += i;
    }

    alert("la suma de los numeros del 1 al " + n + " es: " + suma);
  }
  calcularSuma()