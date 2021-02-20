import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../../services/flights/flights.service';

@Component({
  selector: 'app-workers-flights-table',
  templateUrl: './workers-flights-table.component.html',
  styleUrls: ['./workers-flights-table.component.scss'],
})
export class WorkersFlightsTableComponent implements OnInit {
  displayedColumns: string[] = ['num', 'from', 'from_date', 'to', 'to_date'];
  constructor(public flightsService: FlightsService) {
  }

  loadInfomation(selectedFlight: Flight) {
    this.flightsService.setSelectedFlightId(selectedFlight.num);
    this.flightsService.setFlightInfo(selectedFlight);
    
  }

  ngOnInit() {
  }

}
