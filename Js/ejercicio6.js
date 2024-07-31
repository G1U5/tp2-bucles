/*
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
*/
for (let piramide = 1; piramide <= 30; piramide++){
    for (let rep = 0; rep < piramide; rep++ ){
        document.write(piramide)
    }
    document.write('<br>')
}