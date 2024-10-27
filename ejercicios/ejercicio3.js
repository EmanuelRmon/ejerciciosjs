function verificarPremio() {
    let edad = parseInt(prompt("¿Cuantos años tienes?"));

    let genero = prompt("¿Cual es tu genero? (Escribe H para hombre o M para mujer)").toUpperCase();

    let premio = "";

    if (isNaN(edad)|| edad<=0) {
      alert("ingresa una edad válida");
      return;
    }

    if (edad <= 10) {
      premio = "Recibes un jugo";
    } else if (edad > 18) {
      premio = "Recibes una cerveza";
    }

    if (genero === "M") {
      premio += "tambien recibes un pedazo de pizza hawaiana";
    } else if (genero === "H") {
      premio += "tambien recibes un pedazo de pizza de tres carnes";
    }

    if (premio === "") {
      premio = "no recibes ningún premio";
    }

    alert(premio);
  }
  verificarPremio()