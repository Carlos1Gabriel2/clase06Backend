/*
Define una funcion saludar que tome un parametro nombre de tipo string y devuelva
un string que diga "Hola, nombre".

Define una funcion suma que tome dos parametros a y b, ambos de tipo number y
devuelva su suma como un number.
*/
function saludar(nombre) {
    return "Hola, ".concat(nombre);
}
function suma(a, b) {
    return a + b;
}
console.log(saludar("Carlos")); //Debería imprimir "Hola, Carlos"
console.log(suma(5, 3)); // Debería imprimir 8
