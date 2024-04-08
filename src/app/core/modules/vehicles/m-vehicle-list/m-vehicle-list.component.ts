import { Component, Input, inject } from '@angular/core';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';
import { VehiclesService } from 'src/app/core/services/vehicles.service';

@Component({
  selector: 'app-m-vehicle-list',
  templateUrl: './m-vehicle-list.component.html',
  styleUrls: ['./m-vehicle-list.component.css']
})
export class MVehicleListComponent {
  @Input() vehicles: Vehiculo[] = [];
  @Input() pathVehicle: string = "";

  private vehiclesService = inject(VehiclesService);

  delete(id: number){

    this.vehiclesService.deleteById(id).subscribe({
      next: (resp: any)=>{
        console.log('vehiculo eliminado');
      }
    });

  }
}
