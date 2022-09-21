import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';

import { HomeComponent } from './events/pages/home/home.component';
import { EventosComponent } from './events/pages/eventos/eventos.component';
import { DetalleComponent } from './events/pages/detalle/detalle.component';
import { EventsGuard } from './events.guard';




const routes: Routes = [
    
    {
        path:'eventos',
        component: EventosComponent,
        
        
    },
    {
        path:'detalle/:id',
        component: DetalleComponent,
        canActivate: [EventsGuard],
        canDeactivate: [EventsGuard]
        
        
    },
    {
        path: '', 
        component: HomeComponent,
        pathMatch: 'full',
        
        
    },
    {
        path: '**',
        redirectTo: ''
    }

    


]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
export class AppRoutingModule {}