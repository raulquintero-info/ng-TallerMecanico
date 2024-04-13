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


  emitDelete(id: number){
    this.onDeleteById.emit(id);
    console.log('idVehiculo', id)
  }


  // private vehiclesService = inject(VehiclesService);
  // private toastService = inject(ToastService);
  // delete(id: number){

  //   this.vehiclesService.deleteById(id).subscribe({
  //     next: (resp: any)=>{
  //       this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: ' Registro Eliminado', type:'success' })
  //       console.log('vehiculo eliminado');
  //     },
  //     error: (resp: any)=>{
  //       this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: ' No se pudo Eliminar el Registro', type:'danger' })

  //     }
  //   });

  // }
}
