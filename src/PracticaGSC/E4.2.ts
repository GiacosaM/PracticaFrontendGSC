/*
    ===== Código de TypeScript =====
*/

function padLeft(value: string, padding: number | string): (string) {
    
    if (typeof(padding) === "number") {
        return `${Array(padding + 1).join(' ')}${value}`;
    } else 
    {
        return padding + value;
    } 

}    

    console.log('[Ejercicio 4.2]', `
    ${padLeft('Hola', 1)}
    ${padLeft('Buen', 'Martes')}
    ${padLeft('Dia', 5)}
    ${padLeft('Hoy', 'Miercoles')}
    ${padLeft('Lunes', 'Jueves')}
    `);


    //Use un protector de tipo para completar el cuerpo de la función ‘padLeft‘