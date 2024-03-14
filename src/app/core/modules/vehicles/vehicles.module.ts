import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';
import { VehicleServicesComponent } from './vehicle-services/vehicle-services.component';



@NgModule({
  declarations: [
    VehicleCardComponent,
    VehicleServicesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    VehicleCardComponent,
    VehicleServicesComponent
  ]
})
export class VehiclesModule { }
