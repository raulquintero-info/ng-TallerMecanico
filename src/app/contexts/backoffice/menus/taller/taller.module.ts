import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TallerRoutingModule } from './taller-routing.module';
import { TallerServiciosListComponent } from './services/taller-servicios-list/taller-servicios-list.component';
import { TallerVehicleListComponent } from './vehicles/taller-vehicle-list/taller-vehicle-list.component';
import { VehiclesModule } from 'src/app/core/modules/vehicles/vehicles.module';
import { ServicesModule } from 'src/app/core/modules/services/services.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TallerVehicleComponent } from './vehicles/taller-vehicle/taller-vehicle.component';


@NgModule({
  declarations: [
    TallerServiciosListComponent,
    TallerVehicleListComponent,
    TallerVehicleComponent


  ],
  imports: [
    CommonModule,
    TallerRoutingModule,
    VehiclesModule,
    ServicesModule,
    SharedModule

  ]
})
export class TallerModule { }
