import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarBackComponent } from './navbar-back/navbar-back.component';
import { DashboardBackComponent } from './pages/dashboard-back/dashboard-back.component';
import { RouterModule } from '@angular/router';
import { CustomersListComponent } from './pages/recepcion/customers/customers-list/customers-list.component';
import { CustomersFormComponent } from './pages/recepcion/customers/customers-form/customers-form.component';
import { ServicesFormComponent } from './pages/recepcion/services/services-form/services-form.component';
import { ServicesListComponent } from './pages/recepcion/services/services-list/services-list.component';
import { VehiclesListComponent } from './pages/recepcion/vehicles/vehicles-list/vehicles-list.component';
import { VehiclesFormComponent } from './pages/recepcion/vehicles/vehicles-form/vehicles-form.component';
import { VehiclesModule } from 'src/app/core/modules/vehicles/vehicles.module';
import { ServicesModule } from 'src/app/core/modules/services/services.module';
import { ServicesViewComponent } from './pages/recepcion/services/services-view/services-view.component';
import { VehiclesServicesListComponent } from './pages/recepcion/vehicles/vehicles-services-list/vehicles-services-list.component';
import { CustomersModule } from 'src/app/core/modules/customers/customers.module';
import { TallerServiciosListComponent } from './pages/taller/services/taller-servicios-list/taller-servicios-list.component';
import { TallerVehicleListComponent } from './pages/taller/vehicles/taller-vehicle-list/taller-vehicle-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecepcionCustomersVehicleComponent } from './pages/recepcion/customers/recepcion-customers-vehicle/recepcion-customers-vehicle.component';
import { RecepcionVehicleComponent } from './pages/recepcion/vehicles/recepcion-vehicle/recepcion-vehicle.component';
import { PageTitleComponent } from './page-title/page-title.component';



@NgModule({
  declarations: [
    NavbarBackComponent,
    DashboardBackComponent,
    CustomersListComponent,
    CustomersFormComponent,
    ServicesFormComponent,
    ServicesListComponent,
    VehiclesListComponent,
    VehiclesFormComponent,
    ServicesViewComponent,
    VehiclesServicesListComponent,
    TallerServiciosListComponent,
    TallerVehicleListComponent,
    RecepcionCustomersVehicleComponent,
    RecepcionVehicleComponent,
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    VehiclesModule,
    ServicesModule,
    CustomersModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    NavbarBackComponent
  ]
})
export class BackofficeModule { }
