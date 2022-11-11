import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos
import { SharedModule } from './shared/shared.module';

//Componentes
import { AgregarEditarPersonaComponent } from './components/dashboard/agregar-editar-persona/agregar-editar-persona.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoPersonasComponent } from './components/dashboard/listado-personas/listado-personas.component';
import { VerPersonaComponent } from './components/dashboard/ver-persona/ver-persona.component';




@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarPersonaComponent,  
    ListadoPersonasComponent,
    VerPersonaComponent,
    
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
