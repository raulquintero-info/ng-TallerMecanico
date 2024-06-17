import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from 'src/app/core/guards/admin.guard';
import { CustomersFormComponent } from './customers/customers-form/customers-form.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomersViewComponent } from './customers/customers-view/customers-view.component';
import { RecepcionCustomersVehicleComponent } from './customers/recepcion-customers-vehicle/recepcion-customers-vehicle.component';
import { FacturasViewComponent } from './facturas/facturas-view/facturas-view.component';
import { ServicesFormComponent } from './services/services-form/services-form.component';
import { ServicesListComponent } from './services/services-list/services-list.component';
import { ServicesViewComponent } from './services/services-view/services-view.component';
import { RecepcionVehicleComponent } from './vehicles/recepcion-vehicle/recepcion-vehicle.component';
import { VehiclesFormComponent } from './vehicles/vehicles-form/vehicles-form.component';
import { VehiclesListComponent } from './vehicles/vehicles-list/vehicles-list.component';

const routes: Routes = [
  {
    path: '',
    children: [

      { path: 'servicios', component: ServicesListComponent, canActivate: [adminGuard] },
      { path: 'servicios-form/:id/:idVehiculo', component: ServicesFormComponent, canActivate: [adminGuard] },
      { path: 'servicios-view/:id/:idVehiculo', component: ServicesViewComponent, canActivate: [adminGuard] },
      { path: 'servicios-view/:id', component: ServicesViewComponent, canActivate: [adminGuard] },

      { path: 'clientes', component: CustomersListComponent, canActivate: [adminGuard] },
      { path: 'clientes-form/:id', component: CustomersFormComponent, canActivate: [adminGuard] },
      { path: 'clientes-view/:id', component: CustomersViewComponent, canActivate: [adminGuard] },

      { path: 'vehiculos', component: VehiclesListComponent, canActivate: [adminGuard] },
      { path: 'vehiculos/por-cliente/:id', component: RecepcionCustomersVehicleComponent, canActivate: [adminGuard] },
      { path: 'vehiculos/por-cliente-sel/:id', component: RecepcionCustomersVehicleComponent, canActivate: [adminGuard] },
      { path: 'vehiculos/:id', component: RecepcionVehicleComponent, canActivate: [adminGuard] },
      { path: 'vehiculos-form/:idVehicle', component: VehiclesFormComponent, canActivate: [adminGuard] },
      { path: 'clientes/:idCustomer/vehiculo-form/:idVehicle', component: VehiclesFormComponent, canActivate: [adminGuard] },

      { path: 'facturas-view/:idFactura', component: FacturasViewComponent, canActivate: [adminGuard] },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecepcionRoutingModule { }
