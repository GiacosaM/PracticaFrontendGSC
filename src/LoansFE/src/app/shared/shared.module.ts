import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms'
import {HttpClientModule } from '@angular/common/http';

// Angular Material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Componentes 
import { SpinnerComponent } from './spinner/spinner.component';
import { SidebarComponent } from './sidebar/sidebar.component';






@NgModule({
  declarations: [
    SpinnerComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    FormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    SpinnerComponent,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    SidebarComponent,
    FormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    
    
  ]
})
export class SharedModule { }
