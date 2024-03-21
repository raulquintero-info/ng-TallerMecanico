import { Component, Input } from '@angular/core';
import { Customer } from 'src/app/core/interfaces/customers.interface';

@Component({
  selector: 'app-m-vehicle-list',
  templateUrl: './m-vehicle-list.component.html',
  styleUrls: ['./m-vehicle-list.component.css']
})
export class MVehicleListComponent {
  @Input() vehicles: any = [];
  @Input() pathVehicle: string = "";
}
