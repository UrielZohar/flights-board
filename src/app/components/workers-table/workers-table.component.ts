import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../../services/workers/workers.service';
import { FlightsService } from '../../services/flights/flights.service';

@Component({
  selector: 'app-workers-table',
  templateUrl: './workers-table.component.html',
  styleUrls: ['./workers-table.component.scss'],
})
export class WorkersTableComponent implements OnInit {

  constructor(
    public workersService: WorkersService,
    private flightsService: FlightsService) { }

  ngOnInit() {
  }

  loadFlights(workerId: string): void {
    this.flightsService.loadFlights(workerId);
    this.workersService.setSelectedWorkerId(workerId);
  }

}
