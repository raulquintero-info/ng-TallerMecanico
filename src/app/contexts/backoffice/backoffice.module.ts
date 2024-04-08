import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarBackComponent } from './components/navbar-back/navbar-back.component';
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
import { PageTitleComponent } from './components/page-title/page-title.component';
import { MarcasListComponent } from './pages/catalogos/marcas/marcas-list/marcas-list.component';
import { MarcasFormComponent } from './pages/catalogos/marcas/marcas-form/marcas-form.component';
import { MarcasModule } from 'src/app/core/modules/marcas/marcas.module';
import { ModelosListComponent } from './pages/catalogos/modelos/modelos-list/modelos-list.component';
import { ModelosFormComponent } from './pages/catalogos/modelos/modelos-form/modelos-form.component';
import { ModelosModule } from 'src/app/core/modules/modelos/modelos.module';
import { ToastModule } from 'src/app/core/modules/toast/toast.module';
import { RolesListComponent } from './pages/catalogos/roles/roles-list/roles-list.component';
import { RolesFormComponent } from './pages/catalogos/roles/roles-form/roles-form.component';
import { RolesModule } from 'src/app/core/modules/roles/roles.module';
import { TipoMotorListComponent } from './pages/catalogos/tipo-motor/tipo-motor-list/tipo-motor-list.component';
import { TipoMotorFormComponent } from './pages/catalogos/tipo-motor/tipo-motor-form/tipo-motor-form.component';
import { TiposMotorModule } from 'src/app/core/modules/tipos-motor/tipos-motor.module';
import { CustomersViewComponent } from './pages/recepcion/customers/customers-view/customers-view.component';
import { EstatusServicioListComponent } from './pages/catalogos/estatus-servicio/estatus-servicio-list/estatus-servicio-list.component';
import { EstatusServicioFormComponent } from './pages/catalogos/estatus-servicio/estatus-servicio-form/estatus-servicio-form.component';
import { EstatusServicioModule } from 'src/app/core/modules/estatus-servicio/estatus-servicio.module';
import { EmployeesListComponent } from './pages/sistema/employees/employees-list/employees-list.component';
import { EmployeesFormComponent } from './pages/sistema/employees/employees-form/employees-form.component';
import { EmployeesModule } from 'src/app/core/modules/employees/employees.module';



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
    PageTitleComponent,
    MarcasListComponent,
    MarcasFormComponent,
    ModelosListComponent,
    ModelosFormComponent,
    RolesListComponent,
    RolesFormComponent,
    TipoMotorListComponent,
    TipoMotorFormComponent,
    CustomersViewComponent,
    EstatusServicioListComponent,
    EstatusServicioFormComponent,
    EmployeesListComponent,
    EmployeesFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    VehiclesModule,
    ServicesModule,
    CustomersModule,
    MarcasModule,
    ModelosModule,
    RolesModule,
    TiposMotorModule,
    EstatusServicioModule,
    EmployeesModule
  ],
  exports: [
    NavbarBackComponent
  ]
})
export class BackofficeModule { }
