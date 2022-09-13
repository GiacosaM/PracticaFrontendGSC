/*
===== Código de TypeScript =====
*/

const numberCollection: Array<any> = [];
const stringCollection: Array<any> = [];

function pushToCollection<T>(item:T, collection:Array<T>):Array<T> {
    collection.push(item);
    console.log(collection);
    return collection;
}
// Anadir algunas cosas a las colecciones
pushToCollection(false, stringCollection);
pushToCollection('hi', stringCollection);
pushToCollection([], stringCollection);
pushToCollection(1, numberCollection);
pushToCollection(2, numberCollection);
pushToCollection(3, numberCollection);

const incrementedByTwo = numberCollection.map((num) => num + 2);
console.log (incrementedByTwo);

console.log('[Ejercicio 3.7]', `[${incrementedByTwo}] debe ser igual a [3,4,5]`);

//1 Implementar ‘pushToCollection‘ como una función genérica. (Esto debería crear errores
    //en tiempo de compilación en lugares donde se agregan valores incorrectos a una colección
    //determinada. Fije estos valores a los tipos correctos)
//2 Una vez hecho genérico, ‘pushToCollection‘ debe ser suficientemente *generic* para operar
    //en artículos y colecciones de cualquier tipo mientras se continúa aplicando que conicidan