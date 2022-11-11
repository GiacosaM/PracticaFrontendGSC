import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { AgregarEditarPersonaComponent } from './dashboard/agregar-editar-persona/agregar-editar-persona.component';
import { ListadoPersonasComponent } from './dashboard/listado-personas/listado-personas.component';
import { VerPersonaComponent } from './dashboard/ver-persona/ver-persona.component';


@NgModule({
  declarations: [
    AgregarEditarPersonaComponent,
    ListadoPersonasComponent,
    VerPersonaComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
