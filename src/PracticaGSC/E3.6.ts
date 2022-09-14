/*
    ===== Código de TypeScript =====
*/
let capitalize: (val1: string) => string;
let multiply: (val1: number, val2:number) => number;

capitalize = function (value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

multiply= function (x: number, y: number): number {
return x * y;
}

console.log('[Ejercicio 3.6]', capitalize(`habil ${multiply(5, 10)}`));
// Arreglar los errores