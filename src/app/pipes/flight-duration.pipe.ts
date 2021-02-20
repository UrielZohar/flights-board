import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flightDuration'
})
export class FlightDurationPipe implements PipeTransform {

  transform(value: any): String {
    const hours = Math.floor(value / 60) || "";
    const minutes = (value % 60) || "";
    return `${hours && hours+'h'} ${minutes && minutes+'m'}`;
  }

}
