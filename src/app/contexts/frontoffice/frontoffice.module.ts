import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarFrontComponent } from './navbar-front/navbar-front.component';
import { RouterModule } from '@angular/router';
import { VehiclesModule } from 'src/app/core/modules/vehicles/vehicles.module';
import { ServicesModule } from 'src/app/core/modules/services/services.module';
import { GarageVehiclesFormComponent } from './pages/vehiculos/garage-vehicles-form/garage-vehicles-form.component';
import { GarageVehiclesListComponent } from './pages/vehiculos/garage-vehicles-list/garage-vehicles-list.component';
import { ServiceComponent } from './pages/mi-garage/service/service.component';
import { GarageVehiclesViewComponent } from './pages/vehiculos/garage-vehicles-view/garage-vehicles-view.component';
import { FrontofficeRoutingModule } from './frontoffice-routing.module';



@NgModule({
  declarations: [
    NavbarFrontComponent,
    GarageVehiclesFormComponent,
    GarageVehiclesListComponent,
    ServiceComponent,
    GarageVehiclesViewComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    VehiclesModule,
    ServicesModule,
    FrontofficeRoutingModule

  ],
  exports: [
    NavbarFrontComponent
  ]
})
export class FrontofficeModule { }
