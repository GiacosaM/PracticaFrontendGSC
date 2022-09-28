import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[dateValidate][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: DateValidateDirective,
        multi: true,
    }]
})

export class DateValidateDirective implements Validator{
    @Input() date!:string;
    
    constructor() {}
    validate( control: FormControl): ValidationErrors | null  {
        

        let inputValue: Date = new Date(control.value);

        if (inputValue.toString() === 'Invalid Date') {
            return { 'invalidDate': true, message: 'Fecha NO Valida!' };
          }

        return (new Date(inputValue).getDay() === 5 || new Date(inputValue).getDay() === 6 ) 
            ? {'invalidDate': true, message: 'No puede ser un Fin de semana' }
            : null;
        
    }

}