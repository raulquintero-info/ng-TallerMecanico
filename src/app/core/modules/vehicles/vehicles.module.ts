import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';
import { VehicleServicesComponent } from './vehicle-services/vehicle-services.component';
import { MVehicleListComponent } from './m-vehicle-list/m-vehicle-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    VehicleCardComponent,
    VehicleServicesComponent,
    MVehicleListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    VehicleCardComponent,
    VehicleServicesComponent,
    MVehicleListComponent
  ]
})
export class VehiclesModule { }
