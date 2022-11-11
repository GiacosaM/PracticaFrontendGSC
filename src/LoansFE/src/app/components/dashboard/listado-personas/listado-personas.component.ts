import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Persona } from '../../../interfaces/persona';
import { PersonaService } from '../../../services/persona.service';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit, AfterViewInit  {

  displayedColumns: string[] = ['apellido','nombre', 'mail', 'telefono', 'acciones' ];
  dataSource = new MatTableDataSource<Persona>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  constructor(private _snackBar: MatSnackBar, private _personaService: PersonaService) { }

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  
  
  
    ngAfterViewInit(){
      this.dataSource.paginator = this.paginator;
      this.paginator._intl.itemsPerPageLabel = 'Cant. por Pagina'
      this.dataSource.sort = this.sort;
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    obtenerPersonas () {
      this.loading=true;
      this._personaService.getPersonas().subscribe({

        next: (data) => {
          this.loading=false;
          this.dataSource.data=data;
        },
        error: (e) => { 
          this.loading =false;
          alert('Opps, parece que ocurrio un error')
        },
        complete: () => console.info('complete')
      })
    
    }
  
    eliminarPersona(id: number) {
      this.loading = true;

      this._personaService.deletePersona(id).subscribe(()=> {
          this._personaService.mensajeExito('El registro fue eliminado correctamente');
          this.loading = false;
          this.obtenerPersonas();
      });      
    }
    
    
  }
  










