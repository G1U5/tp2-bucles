/*
15- Realiza un script que cuente el número de vocales que tiene un texto.
*/
let texto = prompt("Ingrese un texto").toLowerCase();
let vocales = "a,e,i,o,u";
let conteoVocales = 0;
for (let i = 0; i < texto.length; i++) {
    // verificamos con el includes si un texto es igual a otro devolviendo true o false
  if (vocales.includes(texto[i])) {
    conteoVocales++;
  }
}
document.write(`Número de vocales: ${conteoVocales}`);
