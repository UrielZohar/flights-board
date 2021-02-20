import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../../services/flights/flights.service';

@Component({
  selector: 'app-flight-information',
  templateUrl: './flight-information.component.html',
  styleUrls: ['./flight-information.component.scss']
})
export class FlightInformationComponent implements OnInit {

  constructor(public flightsService: FlightsService) { }

  ngOnInit() {
  }

}
