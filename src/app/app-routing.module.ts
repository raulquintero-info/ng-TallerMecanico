import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/modules/auth/pages/login/login.component';
import { RegisterComponent } from './core/modules/auth/pages/register/register.component';
import { HomeComponent } from './contexts/publicoffice/pages/home/home.component';
import { DashboardBackComponent } from './contexts/backoffice/pages/dashboard-back/dashboard-back.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { LogoutComponent } from './core/modules/auth/pages/logout/logout.component';
import { GarageVehiclesListComponent } from './contexts/frontoffice/pages/vehiculos/garage-vehicles-list/garage-vehicles-list.component';
import { ServiceComponent } from './contexts/frontoffice/pages/mi-garage/service/service.component';
import { GarageVehiclesViewComponent } from './contexts/frontoffice/pages/vehiculos/garage-vehicles-view/garage-vehicles-view.component';
import { ServicesListComponent } from './contexts/backoffice/pages/recepcion/services/services-list/services-list.component';
import { ServicesFormComponent } from './contexts/backoffice/pages/recepcion/services/services-form/services-form.component';
import { CustomersListComponent } from './contexts/backoffice/pages/recepcion/customers/customers-list/customers-list.component';
import { CustomersFormComponent } from './contexts/backoffice/pages/recepcion/customers/customers-form/customers-form.component';
import { VehiclesListComponent } from './contexts/backoffice/pages/recepcion/vehicles/vehicles-list/vehicles-list.component';
import { VehiclesFormComponent } from './contexts/backoffice/pages/recepcion/vehicles/vehicles-form/vehicles-form.component';
import { ServicesViewComponent } from './contexts/backoffice/pages/recepcion/services/services-view/services-view.component';
import { VehiclesServicesListComponent } from './contexts/backoffice/pages/recepcion/vehicles/vehicles-services-list/vehicles-services-list.component';
import { adminGuard } from './core/guards/admin.guard';
import { normalGuard } from './core/guards/normal.guard';
import { NotAuthorizedComponent } from './shared/pages/not-authorized/not-authorized.component';
import { TallerServiciosListComponent } from './contexts/backoffice/pages/taller/services/taller-servicios-list/taller-servicios-list.component';
import { TallerVehicleListComponent } from './contexts/backoffice/pages/taller/vehicles/taller-vehicle-list/taller-vehicle-list.component';
import { RecepcionCustomersVehicleComponent } from './contexts/backoffice/pages/recepcion/customers/recepcion-customers-vehicle/recepcion-customers-vehicle.component';
import { RecepcionVehicleComponent } from './contexts/backoffice/pages/recepcion/vehicles/recepcion-vehicle/recepcion-vehicle.component';
import { MarcasListComponent } from './contexts/backoffice/pages/catalogos/marcas/marcas-list/marcas-list.component';
import { MarcasFormComponent } from './contexts/backoffice/pages/catalogos/marcas/marcas-form/marcas-form.component';
import { ModelosListComponent } from './contexts/backoffice/pages/catalogos/modelos/modelos-list/modelos-list.component';
import { ModelosFormComponent } from './contexts/backoffice/pages/catalogos/modelos/modelos-form/modelos-form.component';
import { RolesListComponent } from './contexts/backoffice/pages/catalogos/roles/roles-list/roles-list.component';
import { RolesFormComponent } from './contexts/backoffice/pages/catalogos/roles/roles-form/roles-form.component';
import { TipoMotorListComponent } from './contexts/backoffice/pages/catalogos/tipo-motor/tipo-motor-list/tipo-motor-list.component';
import { TipoMotorFormComponent } from './contexts/backoffice/pages/catalogos/tipo-motor/tipo-motor-form/tipo-motor-form.component';
import { CustomersViewComponent } from './contexts/backoffice/pages/recepcion/customers/customers-view/customers-view.component';
import { EstatusServicioListComponent } from './contexts/backoffice/pages/catalogos/estatus-servicio/estatus-servicio-list/estatus-servicio-list.component';
import { EstatusServicioFormComponent } from './contexts/backoffice/pages/catalogos/estatus-servicio/estatus-servicio-form/estatus-servicio-form.component';
import { EmployeesListComponent } from './contexts/backoffice/pages/sistema/employees/employees-list/employees-list.component';
import { EmployeesFormComponent } from './contexts/backoffice/pages/sistema/employees/employees-form/employees-form.component';
import { UsersListComponent } from './contexts/backoffice/pages/sistema/users/users-list/users-list.component';
import { UsersFormComponent } from './contexts/backoffice/pages/sistema/users/users-form/users-form.component';
import { FacturasViewComponent } from './contexts/backoffice/pages/recepcion/facturas/facturas-view/facturas-view.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},

  {path: 'mi-garage', component: GarageVehiclesListComponent},
  {path: 'mi-garage/mi-vehiculo/:id', component: GarageVehiclesViewComponent},
  {path: 'mi-garage/servicio-view/:id', component: ServiceComponent},

  {path:'admin/dashboard', component: DashboardBackComponent},

  {path: 'admin/recepcion/servicios', component: ServicesListComponent, canActivate: [adminGuard]},
  {path: 'admin/recepcion/servicios-form/:id/:idVehiculo', component: ServicesFormComponent},
  {path: 'admin/recepcion/servicios-view/:id/:idVehiculo', component: ServicesViewComponent},
  {path: 'admin/recepcion/servicios-view/:id', component: ServicesViewComponent},

  {path: 'admin/recepcion/clientes', component: CustomersListComponent},
  {path: 'admin/recepcion/clientes-form/:id', component: CustomersFormComponent},
  {path: 'admin/recepcion/clientes-view/:id', component: CustomersViewComponent},

  {path: 'admin/recepcion/vehiculos', component: VehiclesListComponent},
  {path: 'admin/recepcion/vehiculos/por-cliente/:id', component: RecepcionCustomersVehicleComponent},
  {path: 'admin/recepcion/vehiculos/por-cliente-sel/:id', component: RecepcionCustomersVehicleComponent},
  {path: 'admin/recepcion/vehiculos/:id', component: RecepcionVehicleComponent},
  {path: 'admin/recepcion/vehiculos-form/:idVehicle', component: VehiclesFormComponent},
  {path: 'admin/recepcion/clientes/:idCustomer/vehiculo-form/:idVehicle', component: VehiclesFormComponent},

  {path: 'admin/recepcion/facturas-view/:idFactura', component: FacturasViewComponent},

  {path: 'admin/taller/servicios', component: TallerServiciosListComponent},
  {path: 'admin/taller/vehiculos', component: TallerVehicleListComponent},

  {path: 'admin/sistema/usuarios', component: UsersListComponent},
  {path: 'admin/sistema/usuarios-editar/:id', component: UsersFormComponent},
  {path: 'admin/sistema/usuarios-nuevo/:id', component: UsersFormComponent},

  {path: 'admin/catalogos/marcas', component: MarcasListComponent},
  {path: 'admin/catalogos/marcas-form/:id', component: MarcasFormComponent},

  {path: 'admin/catalogos/modelos/:idMarca', component: ModelosListComponent},
  {path: 'admin/catalogos/modelos-form/:id', component: ModelosFormComponent},

  {path: 'admin/catalogos/roles', component: RolesListComponent},
  {path: 'admin/catalogos/roles-form/:id', component: RolesFormComponent},

  {path: 'admin/catalogos/tipos-motor', component: TipoMotorListComponent},
  {path: 'admin/catalogos/tipos-motor-form/:id', component: TipoMotorFormComponent},

  {path: 'admin/catalogos/estatus-servicio', component: EstatusServicioListComponent},
  {path: 'admin/catalogos/estatus-servicio-form/:id', component: EstatusServicioFormComponent},

  {path: 'admin/sistema/empleados', component: EmployeesListComponent},
  {path: 'admin/sistema/empleados-form/:id', component: EmployeesFormComponent},

  {path: 'not-authorized', component: NotAuthorizedComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
