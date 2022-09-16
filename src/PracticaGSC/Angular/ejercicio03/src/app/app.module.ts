import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { DireccionComponent } from './direccion/direccion.component';

@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponent,
    DireccionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
