import { Injectable } from '@angular/core';
import APIManager from '../../utils/APIManager';

const REFRESH_RATE = 60000;

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  public flights: Flight[];
  public selectedFlightId: String = "";
  public selectedFlightInfo: Flight | undefined;
  public selectedWorkerId: String = "";
  private timeoutId: any; 

  public loadFlights(workerId: String) {
    fetch(APIManager.getFlights(workerId))
    .then(res => res.json())
    .then(res => {
      this.selectedWorkerId = workerId;
      this.flights = res || [];
      this.refresh();
    });
  }

  private refresh() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    if (this.selectedWorkerId) {
      this.timeoutId = setTimeout(() => {
        this.loadFlights(this.selectedWorkerId);
        this.refresh();
      }, REFRESH_RATE);
    }
  }

  public setSelectedFlightId(flightId: String) {
    this.selectedFlightId = flightId;
  }

  public setFlightInfo(flightInfo: Flight) {
    this.selectedFlightInfo = flightInfo;
  }
  
  constructor() { 
    this.flights = []
  }

}
