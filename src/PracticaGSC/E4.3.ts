/*
    ===== Código de TypeScript =====
*/

const numbers= [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

function flatten<T>(array:T[]):T[] {
    const flattened= [];
    for (const element of array) {
        
        if (Array.isArray(element)) {
            element; 
            flattened.push(...element);
            
        } else {
            element; 
            flattened.push(element);
        }   
    }
return flattened;
}

const flattenedNumbers = flatten(numbers);
console.log('[Ejercicio 4.3]', flattenedNumbers);

//Añadir anotaciones de tipo (‘any‘ excluido)
//Inspeccione el tipo de ‘element‘ en diferentes ramas de código
//Bonificación: convertir ‘flatten‘ en una función genérica