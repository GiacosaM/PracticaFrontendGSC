import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { ComponentFixture } from '@angular/core/testing';
import { AgregarEditarPersonaComponent } from './components/dashboard/agregar-editar-persona/agregar-editar-persona.component';
import { ListadoPersonasComponent } from './components/dashboard/listado-personas/listado-personas.component';
import { VerPersonaComponent } from './components/dashboard/ver-persona/ver-persona.component';

const routes: Routes = [
  
 
 { path: 'listadoPersona', component: ListadoPersonasComponent},
  { path: 'agregarPersona', component: AgregarEditarPersonaComponent},
  { path: 'editarPersona/:id', component: AgregarEditarPersonaComponent},
  { path: 'verPersona/:id', component: VerPersonaComponent}, 
  { path: '', redirectTo: '/auth', pathMatch: 'full'},
  { path: '**', redirectTo: 'listadoPersona', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
