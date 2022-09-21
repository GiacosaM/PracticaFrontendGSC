import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree, CanDeactivate } from '@angular/router';

import { Observable } from 'rxjs';
import { EventosService } from './events/services/eventos.service';
import { DetalleComponent } from './events/pages/detalle/detalle.component';


@Injectable({
  providedIn: 'root'
})
export class EventsGuard implements   CanActivate, CanDeactivate<DetalleComponent>  {

  constructor( private router: Router, private service: EventosService, private route: ActivatedRoute) {}


  canDeactivate(component: DetalleComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const estado=component.estado();
    
    if (estado === true) {
      return true;
    } else {
      return false;
    }
    
  } 

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    const id = route.params['id'];
        
    if (this.service.getUserById(id) === undefined) {
      
      return false;
    }
    
    return true;
    
  }
 
}
