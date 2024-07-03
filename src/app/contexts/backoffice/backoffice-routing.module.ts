import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { adminGuard } from 'src/app/core/guards/admin.guard';
import { DepartamentosFormComponent } from './menus/catalogos/departamentos/departamentos-form/departamentos-form.component';
import { DepartamentosListComponent } from './menus/catalogos/departamentos/departamentos-list/departamentos-list.component';
import { EstatusServicioFormComponent } from './menus/catalogos/estatus-servicio/estatus-servicio-form/estatus-servicio-form.component';
import { EstatusServicioListComponent } from './menus/catalogos/estatus-servicio/estatus-servicio-list/estatus-servicio-list.component';
import { MarcasFormComponent } from './menus/catalogos/marcas/marcas-form/marcas-form.component';
import { MarcasListComponent } from './menus/catalogos/marcas/marcas-list/marcas-list.component';
import { ModelosFormComponent } from './menus/catalogos/modelos/modelos-form/modelos-form.component';
import { ModelosListComponent } from './menus/catalogos/modelos/modelos-list/modelos-list.component';
import { RolesFormComponent } from './menus/catalogos/roles/roles-form/roles-form.component';
import { RolesListComponent } from './menus/catalogos/roles/roles-list/roles-list.component';
import { TipoMotorFormComponent } from './menus/catalogos/tipo-motor/tipo-motor-form/tipo-motor-form.component';
import { TipoMotorListComponent } from './menus/catalogos/tipo-motor/tipo-motor-list/tipo-motor-list.component';
import { DashboardBackComponent } from './menus/dashboard-back/dashboard-back.component';
import { CustomersFormComponent } from './menus/recepcion/customers/customers-form/customers-form.component';
import { CustomersListComponent } from './menus/recepcion/customers/customers-list/customers-list.component';
import { CustomersViewComponent } from './menus/recepcion/customers/customers-view/customers-view.component';
import { RecepcionCustomersVehicleComponent } from './menus/recepcion/customers/recepcion-customers-vehicle/recepcion-customers-vehicle.component';
import { FacturasViewComponent } from './menus/recepcion/facturas/facturas-view/facturas-view.component';
import { ServicesFormComponent } from './menus/recepcion/services/services-form/services-form.component';
import { ServicesListComponent } from './menus/recepcion/services/services-list/services-list.component';
import { ServicesViewComponent } from './menus/recepcion/services/services-view/services-view.component';
import { RecepcionVehicleComponent } from './menus/recepcion/vehicles/recepcion-vehicle/recepcion-vehicle.component';
import { VehiclesFormComponent } from './menus/recepcion/vehicles/vehicles-form/vehicles-form.component';
import { VehiclesListComponent } from './menus/recepcion/vehicles/vehicles-list/vehicles-list.component';
import { EmployeesFormComponent } from './menus/sistema/employees/employees-form/employees-form.component';
import { EmployeesListComponent } from './menus/sistema/employees/employees-list/employees-list.component';
import { UsersFormComponent } from './menus/sistema/users/users-form/users-form.component';
import { UsersListComponent } from './menus/sistema/users/users-list/users-list.component';
// import { TallerServiciosListComponent } from './menus/taller/services/taller-servicios-list/taller-servicios-list.component';
// import { TallerVehicleListComponent } from './menus/taller/vehicles/taller-vehicle-list/taller-vehicle-list.component';
import { NotFoundComponent } from 'src/app/shared/pages/not-found/not-found.component';
import { ProfileComponent } from 'src/app/shared/pages/profile/profile.component';
// import { NotFoundComponent } from 'src/app/shared/pages/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'recepcion',
        loadChildren: ()=>import('./menus/recepcion/recepcion.module').then(m => m.RecepcionModule)
      },
      {
        path: 'catalogos',
        loadChildren: ()=>import('./menus/catalogos/catalogos.module').then(m => m.CatalogosModule)
      },
      {
        path: 'sistema',
        loadChildren: ()=>import('./menus/sistema/sistema.module').then(m => m.SistemaModule)
      },
      {
        path: 'taller',
        loadChildren: ()=>import('./menus/taller/taller.module').then(m => m.TallerModule)
      },
      { path: 'dashboard', component: DashboardBackComponent, canActivate: [adminGuard] },
      { path: 'perfil', component: ProfileComponent, canActivate: [adminGuard] },



      {path: '**', component: NotFoundComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }

