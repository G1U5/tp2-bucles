/*
Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
 Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
*/
resultado = "";
do {
  let palabra = prompt("Ingrese una cadena de texto");
  if (resultado == "") {
    resultado = palabra;
  } else {
    resultado = resultado + "-" + palabra;
  }
} while (confirm("¿Desea continuar?"));
document.write(resultado);
