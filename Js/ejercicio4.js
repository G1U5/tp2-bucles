/*
4- Realiza un script que pida números hasta que se pulse “cancelar”.
 Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/
let suma = 0;
let numero = 0;
do {
  numero = prompt("Ingrese un número");
  if (!isNaN(parseInt(numero)) && numero != null) {
    suma = suma + parseInt(numero);
  } else {
    if (numero != null) {
      alert(numero + "no es un número");
    }
  }
} while (numero != null);
document.write(`Suma: ${suma}`);
