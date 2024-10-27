function determinarParImpar() {
    let numero = parseInt(prompt("Introduce un numero:"));

    if (isNaN(numero)) {
      alert("caracter invalido");
      return;
    }

    if (numero % 2 === 0) {
      alert("El numero " + numero + " es par");
    } else {
      alert("El numero " + numero + " es impar");
    }
  }
  determinarParImpar()