/*
    ===== Código de TypeScript =====
*/

function add(x:number, y:number) :number {
    return x + y;
    }
    
    function sumArray(numbers):[string]{
    
    return numbers.reduce(add, 0);
    
    }
    
    const someSum: [string] = sumArray(['3', '6', '9']);
    
    console.log('[Ejercicio 3.1]', `3 + 6 + 9 === ${someSum}`);
    //1 Agregue tipos explícitos a los parámetros y el tipo de retorno
    //2 Solucione cualquier error resultante de tipos inválidos