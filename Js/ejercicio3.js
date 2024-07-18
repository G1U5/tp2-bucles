let resultado = "";

while (true) {
  const cadena = prompt("Ingrese una cadena de texto");
  if (cadena === null) {
    break;
  }

  if (resultado === "") {
    resultado += cadena;
  } else {
    resultado += '-' + cadena;
  }
}
document.write(`Cadenas ingresadas: ${resultado}`);
