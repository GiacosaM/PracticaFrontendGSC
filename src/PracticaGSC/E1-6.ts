/*
    ===== Código de TypeScript =====
*/

const elementoInventario: [string, number] [] = [['tuerca', 11]];

// despues lo desestructuramos
const [nombre, cantidad] = elementoInventario[0];

const mensaje:string = agregarInventario(nombre, cantidad);

console.log('[Ejercicio 1.6]', mensaje);

function agregarInventario(nombre: string, cantidad: number): string {
return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
}
