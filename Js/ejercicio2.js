
const nota = parseInt(prompt('Ingrese una nota del 0 a 10'))

if (nota >= 0){
    let calificacion;
    if (nota >= 0 && nota <= 2){
        calificacion = 'Muy deficiente';
    } else if (nota >= 3 && nota <= 4){
        calificacion = 'Insuficiente'
    } else if (nota >= 5 && nota <= 6){
        calificacion = 'Suficiente'
    } else if (nota === 7){
        calificacion = 'Bien'
    } else if (nota >= 8 && nota <= 9){
        calificacion = 'Notable'
    } else if (nota === 10){
        calificacion = 'Sobresaliente'
    } else if (nota > 10){
        calificacion = 'Número erróneo'
    }
    alert(`Su calificación es: ${calificacion}`) 
} else{
    alert('Introduce un número válido')
}