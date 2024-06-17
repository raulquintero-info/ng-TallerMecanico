import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';
import { VehiclesService } from 'src/app/core/services/vehicles.service';
import { ToastService } from '../../toast/services/toast.service';

@Component({
  selector: 'app-m-vehicle-list',
  templateUrl: './m-vehicle-list.component.html',
  styleUrls: ['./m-vehicle-list.component.css']
})
export class MVehicleListComponent {
  @Input() vehicles: Vehiculo[] = [];
  @Input() pathVehicle: string = "";
  @Output() onDeleteById: EventEmitter<number> = new EventEmitter();
  @Output() onSeleccById: EventEmitter<Vehiculo> = new EventEmitter();

  emitDelete(id: number){
    this.onDeleteById.emit(id);
    console.log('idVehiculo', id)
  }

  emitVehicle(vehicle: Vehiculo){
    this.onSeleccById.emit(vehicle);
  }


}
