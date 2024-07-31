/*
17- Realiza un script que muestre la posición de la primera vocal de un texto
introducido por teclado.
*/

const texto = prompt("Introduce el texto:");

const vocales = "aeiouAEIOU";

let primeraVocal;
for (let i = 0; i < texto.length; i++) {
  if (vocales.includes(texto[i])) {
    primeraVocal = texto[i];
    break;
  }
}

if (primeraVocal) {
  document.write(`La primera vocal es: ${primeraVocal}`);
} else {
  document.write("No se encontraron vocales en el texto.");
}
