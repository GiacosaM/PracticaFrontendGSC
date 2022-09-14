/*
===== Código de TypeScript =====
*/

class Student {
    public StSchool: string = 'Harry Herpson High School';
    constructor(private name: string) { };
    introduction() {
        console.log('[Ejercicio 5.6]', `Hola, mi nombre es ${this.name} y asisto a ${this.StSchool}`); }

    get school ():string {
        return this.StSchool;
    }
}
    
    const student = new Student('Morty');
    console.log(student.school);
    student.introduction();
    //1 Elimine el error sin cambiar las referencias a ‘Student.school‘