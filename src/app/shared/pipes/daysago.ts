import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysago'
})
export class DaysagoPipe implements PipeTransform {

  transform(dateString: string){
    let currentDate = new Date();
    let lastDate: Date;
    lastDate = new Date(dateString);

    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
      - Date.UTC(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate()) ) /(1000 * 60 * 60 * 24));
}
}
