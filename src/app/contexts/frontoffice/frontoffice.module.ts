import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehiclesModule } from 'src/app/core/modules/vehicles/vehicles.module';
import { ServiceComponent } from './service/service.component';



@NgModule({
  declarations: [
    DashboardComponent,
    VehicleComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    VehiclesModule,
  ]
})
export class FrontofficeModule { }
