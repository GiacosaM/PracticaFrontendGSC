/*
===== Código de TypeScript =====
*/

class Animal {
        constructor(private name:string) { }
        move(meters:number) {
            console.log(`${this.name} se movio Clase PAdre ${meters}m.`);
        }
}
    
class Snake extends Animal {
    

    move(meters:number) {
        console.log('Deslizandose...');
        super.move(meters);
    // debe invocar al metodo `move` del padre, con un deslizamiento predeterminado
    // de 5 metros
    }
}
    
class Pony extends Animal{
    

    move(meters:number) {
        console.log('Galopando...');
        super.move(meters);
    // debe invocar al metodo `move` del padre con un galope predeterminado
    // de 60 metros
    }
}

    // La clase Animal no debe ser instanciable.
    // Eliminar o comentar una vez que se logra el error deseado.
    const andrew = new Animal("Andrew el Animal");
    andrew.move(5);

    const sammy = new Snake("Sammy la serpiente");
    sammy.move(5);
    //console.log(sammy.name); // debe devolver error

    const pokey = new Pony("Pokey el pony");
    pokey.move(34);
    //console.log(pokey.name); // Should devolver error

    //1 Añadir tipos
    //2 Hacer que la clase Snake herede de Animal
    //3 Hacer que la clase Pony herede Animal
    //4 Hacer que el miembro del nombre no pueda ser accedido públicamente

