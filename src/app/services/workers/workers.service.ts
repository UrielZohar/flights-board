import { Injectable } from '@angular/core';
import APIManager from '../../utils/APIManager';


@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  public workers: Worker[];
  public selectedWorkerId: string = "";

  constructor() {
    this.workers = [];
    this.loadWorkers();
  }

  public setSelectedWorkerId(workerId: string) {
    this.selectedWorkerId = workerId;
  }

  async loadWorkers() {
    fetch(APIManager.getWorkers)
    .then(res => res.json())
    .then(res => {
      this.workers = res || [];
    });
  }
}
