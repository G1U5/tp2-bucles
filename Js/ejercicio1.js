//Pedimos al usuario que ingrese su edad
const edad = parseInt(prompt('Ingrese su edad'))
// Si es mayor a 18 años
if (edad >= 18){
    document.write(`Edad ingresada: ${edad}, puede conducir`)
}
// Si es menor a 18 años
else if (edad < 18){
    document.write(`Edad ingresada: ${edad}, no puede conducir`)
}
// Si no ingresa ningún número válido
else{
    document.write('No es un número válido')
}