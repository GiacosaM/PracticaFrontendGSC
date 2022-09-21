import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventosComponent } from './pages/eventos/eventos.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    EventosComponent,
    DetalleComponent,
    HomeComponent
  ],
  exports: [
    EventosComponent,
    DetalleComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule
  ]
})
export class EventsModule { }
