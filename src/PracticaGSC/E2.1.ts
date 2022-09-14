/*
===== Código de TypeScript =====
*/
interface Cartitem {
    id: number;
    titulo:string;
    idVariante: number;
}
function agregarAlCarro(id: number, titulo: string, idVariante?: number)  {
    let producto:Cartitem = {
        id: id,
        titulo: titulo,
        idVariante: idVariante
    }

    console.log('[Ejercicio 2.1]', `Agregando "${producto.titulo}" al carro de compras.`);
    }
    
agregarAlCarro(1, 'Zapatos de cuero',1);
//1 Crea una interfaz ‘CartItem‘ y reemplaza el tipo de parametros con ella
//2 Hacer idVariante opcional
    