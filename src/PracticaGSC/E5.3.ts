/*
===== Código de TypeScript =====
*/

class Employee {
    
    constructor(public title: string, public salary: number) {
        
    }
}

const employee = new Employee('Ingeniero', 100000);

console.log('[Ejercicio 5.3]', `El titulo del nuevo empleado es ${employee.title} y gana $ ${employee.salary}`);
//1 Hacer que las propiedades de title y salary estén explícitamente disponibles públicamente
//2 Reduzca la clase a tres líneas de código manteniendo la funcionalidad
