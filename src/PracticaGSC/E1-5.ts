/*
    ===== Código de TypeScript =====
*/

const secuencia: Array<number> = Array.from(Array(10).keys());

const animales: Array <string> =['pinguino', 'oso hormiguero', 'zorro', 'jirafa'];

const cadenasYNumeros: [ number, string ] [] = [[1, 'uno'], [2, 'dos'], [3, 'tres']];

const todosMisArreglos = [...secuencia, ...animales, ...cadenasYNumeros];

console.log('Ejercicio 1.5', todosMisArreglos);