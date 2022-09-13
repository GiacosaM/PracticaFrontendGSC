/*
===== Código de TypeScript =====
*/

class MC {
    greet(event:string):string {
        return `Bienvenido al ${event}`;
    }
}

const mc = new MC();

console.log('[Ejercicio 5.1]', mc.greet('espectaculo'));

//Añadir tipo de parámetro de forma explícita en método ‘greet‘
//Agregar el tipo de retorno explicito al metodo greet