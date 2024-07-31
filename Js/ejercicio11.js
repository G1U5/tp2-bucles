/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el
nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/
let primerNombre = prompt('Ingrese el primer nombre')
let primeraEdad = parseInt(prompt('Ingrese la edad'))

let segundoNombre = prompt('Ingrese el segundo nombre')
let segundaEdad = parseInt(prompt('Ingrese la edad'))

let tercerNombre = prompt('Ingrese el tercer nombre')
let terceraEdad = parseInt(prompt('Ingrese la edad'))

let maximo = Math.max(primeraEdad,segundaEdad,terceraEdad)

if (maximo == primeraEdad){
    document.write(`El mayor es: ${primerNombre}`)
}else if (maximo == segundaEdad){
    document.write(`El mayor es: ${segundoNombre}`)
}else{
    document.write(`El mayor es: ${tercerNombre}`)
}