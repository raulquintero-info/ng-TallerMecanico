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
import { TallerServiciosListComponent } from './menus/taller/services/taller-servicios-list/taller-servicios-list.component';
import { TallerVehicleListComponent } from './menus/taller/vehicles/taller-vehicle-list/taller-vehicle-list.component';
import { NotFoundComponent } from 'src/app/shared/pages/not-found/not-found.component';
// import { NotFoundComponent } from 'src/app/shared/pages/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    children: [


      { path: 'dashboard', component: DashboardBackComponent, canActivate: [adminGuard] },

      { path: 'recepcion/servicios', component: ServicesListComponent, canActivate: [adminGuard] },
      { path: 'recepcion/servicios-form/:id/:idVehiculo', component: ServicesFormComponent, canActivate: [adminGuard] },
      { path: 'recepcion/servicios-view/:id/:idVehiculo', component: ServicesViewComponent, canActivate: [adminGuard] },
      { path: 'recepcion/servicios-view/:id', component: ServicesViewComponent, canActivate: [adminGuard] },

      { path: 'recepcion/clientes', component: CustomersListComponent, canActivate: [adminGuard] },
      { path: 'recepcion/clientes-form/:id', component: CustomersFormComponent, canActivate: [adminGuard] },
      { path: 'recepcion/clientes-view/:id', component: CustomersViewComponent, canActivate: [adminGuard] },

      { path: 'recepcion/vehiculos', component: VehiclesListComponent, canActivate: [adminGuard] },
      { path: 'recepcion/vehiculos/por-cliente/:id', component: RecepcionCustomersVehicleComponent, canActivate: [adminGuard] },
      { path: 'recepcion/vehiculos/por-cliente-sel/:id', component: RecepcionCustomersVehicleComponent, canActivate: [adminGuard] },
      { path: 'recepcion/vehiculos/:id', component: RecepcionVehicleComponent, canActivate: [adminGuard] },
      { path: 'recepcion/vehiculos-form/:idVehicle', component: VehiclesFormComponent, canActivate: [adminGuard] },
      { path: 'recepcion/clientes/:idCustomer/vehiculo-form/:idVehicle', component: VehiclesFormComponent, canActivate: [adminGuard] },

      { path: 'recepcion/facturas-view/:idFactura', component: FacturasViewComponent, canActivate: [adminGuard] },

      { path: 'taller/servicios', component: TallerServiciosListComponent, canActivate: [adminGuard] },
      { path: 'taller/vehiculos', component: TallerVehicleListComponent, canActivate: [adminGuard] },

      { path: 'sistema/usuarios', component: UsersListComponent, canActivate: [adminGuard] },
      { path: 'sistema/usuarios-editar/:id', component: UsersFormComponent, canActivate: [adminGuard] },
      { path: 'sistema/usuarios-nuevo/:id', component: UsersFormComponent, canActivate: [adminGuard] },

      { path: 'catalogos/marcas', component: MarcasListComponent, canActivate: [adminGuard] },
      { path: 'catalogos/marcas-form/:id', component: MarcasFormComponent, canActivate: [adminGuard] },

      { path: 'catalogos/modelos/:idMarca', component: ModelosListComponent, canActivate: [adminGuard] },
      { path: 'catalogos/modelos-form/:id', component: ModelosFormComponent, canActivate: [adminGuard] },

      { path: 'catalogos/roles', component: RolesListComponent, canActivate: [adminGuard] },
      { path: 'catalogos/roles-form/:id', component: RolesFormComponent, canActivate: [adminGuard] },

      { path: 'catalogos/tipos-motor', component: TipoMotorListComponent, canActivate: [adminGuard] },
      { path: 'catalogos/tipos-motor-form/:id', component: TipoMotorFormComponent, canActivate: [adminGuard] },

      { path: 'catalogos/estatus-servicio', component: EstatusServicioListComponent, canActivate: [adminGuard] },
      { path: 'catalogos/estatus-servicio-form/:id', component: EstatusServicioFormComponent, canActivate: [adminGuard] },

      { path: 'catalogos/departamentos', component: DepartamentosListComponent, canActivate: [adminGuard] },
      { path: 'catalogos/departamento-form/:id', component: DepartamentosFormComponent, canActivate: [adminGuard] },

      { path: 'sistema/empleados', component: EmployeesListComponent, canActivate: [adminGuard] },
      { path: 'sistema/empleados-form/:id', component: EmployeesFormComponent, canActivate: [adminGuard] },

      {path: '**', component: NotFoundComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }

