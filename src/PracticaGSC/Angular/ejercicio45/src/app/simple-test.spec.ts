import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('Una simple prueba', () => {
    let verdadero:boolean;
        it("Verdadero debe ser Verdadero", function() {
            verdadero = true;
            expect(verdadero).toBe(true);
        });
});