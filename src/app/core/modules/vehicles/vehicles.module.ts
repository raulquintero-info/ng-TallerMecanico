import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';
import { VehicleServicesComponent } from './vehicle-services/vehicle-services.component';
import { MVehicleListComponent } from './m-vehicle-list/m-vehicle-list.component';
import { RouterModule } from '@angular/router';
import { VehicleHeaderComponent } from './vehicle-header/vehicle-header.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    VehicleCardComponent,
    VehicleServicesComponent,
    MVehicleListComponent,
    VehicleHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports:[
    VehicleCardComponent,
    VehicleServicesComponent,
    MVehicleListComponent,
    VehicleHeaderComponent
  ]
})
export class VehiclesModule { }
