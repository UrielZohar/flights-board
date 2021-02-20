import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WorkersTableComponent } from './components/workers-table/workers-table.component';
import { WorkersFlightsTableComponent } from './components/workers-flights-table/workers-flights-table.component';
import { FlightInformationComponent } from './components/flight-information/flight-information.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { FlightDurationPipe } from './pipes/flight-duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WorkersTableComponent,
    WorkersFlightsTableComponent,
    FlightInformationComponent,
    FlightDurationPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
