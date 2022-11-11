import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentFixture } from '@angular/core/testing';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'', 
    children: [
      { path: '', component: DashboardComponent},
      { path: '**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
