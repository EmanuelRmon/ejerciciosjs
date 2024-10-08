ingresa = prompt("escribe un dia de la semana")
ingresa= ingresa.toLowerCase()
switch (ingresa) {
    case "lunes":
        console.log("entre semana");
        break;
    case "martes":
        console.log("entre semana");
        break;
    case "miercoles":
        console.log("entre semana");
        break;
    case "jueves":
        console.log("entre semana");
        break;
    case "viernes":
        console.log("entre semana");
        break;
    case "sabado":
        console.log("finde");
        break;
    case "domingo":
        console.log("finde");
        break;
        
    default:
        console.log("error");
        break;
}