import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehicleComponent } from './vehicle/vehicle.component';



@NgModule({
  declarations: [
    DashboardComponent,
    VehicleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FrontofficeModule { }
