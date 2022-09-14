/*
===== Código de TypeScript =====
*/
interface DatosPersona {
    nombre:string,
    edad: number
}

class Persona implements DatosPersona {
    constructor(public nombre: string, public edad: number) { 

    this.nombre= nombre;
    this.edad=edad;
    }
}

const juan = new Persona('Juan', 31);

console.log('[Ejercicio 2.2]', `${juan.nombre} tiene ${juan.edad} anios.`);
//1 Cree e implemente una interfaz en ‘Persona‘ para asegurarse de que siempre tenga acceso a las propiedades miembros ‘nombre‘ y ‘edad‘
