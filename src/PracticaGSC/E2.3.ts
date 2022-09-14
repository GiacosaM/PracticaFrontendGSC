/*
===== Código de TypeScript =====
*/
// [no editar] (pretender que esto proviene de una version externa de la
// biblioteca `foo.d.ts`)
interface Ciudad {
    nombre: string;
    coords: Coords;
}

interface Coords {
    latitud:number,
    longitud:number
} 
// [/no editar]

const montreal = {
    coords: {
    latitud: 42.332,
    longitud: -73.324,
    },
    nombre: 'Montreal',
};

const tampa = {
    coords: {
    latitud: 27.9478,
    longitud: -82.4584,
    },
    nombre: 'Tampa',
};

function informacionCiudad(ciudad: Ciudad) {
    const coords =
    `(${ciudad.coords.latitud.toFixed(3)}, ${ciudad.coords.longitud.toFixed(3)})`;
    return `${ciudad.nombre.toUpperCase()} se encuentra en ${coords}.`;
}
console.log('[Ejercicio 2.3]',
`${informacionCiudad(montreal)} \n\n ${informacionCiudad(tampa)}`);
//1 Cree una interfaz ‘Coords‘ que tenga las propiedades numéricas ‘latitud‘ y ‘longitud‘
//2 Extienda la interfaz existente ‘Ciudad‘ (sin modificarla en línea) agregando una propiedad ‘coords‘ de tipo ‘Coords‘
//3 Corregir lo que está mal con ‘tampa‘