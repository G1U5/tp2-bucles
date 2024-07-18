let suma = 0;

while (true) {
  let input = prompt("Introduce un número:");

  if (input === null) {
    break;
  }

  let numero = Number(input);

  if (isNaN(numero)) {
    alert("No has introducido un número válido");
    continue;
  }

  suma += numero;
}

alert(`La suma total de los números es: ${suma}`);
