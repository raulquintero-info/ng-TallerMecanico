import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarBackComponent } from './components/navbar-back/navbar-back.component';
import { DashboardBackComponent } from './menus/dashboard-back/dashboard-back.component';
import { RouterModule } from '@angular/router';
import { CustomersListComponent } from './menus/recepcion/customers/customers-list/customers-list.component';
import { CustomersFormComponent } from './menus/recepcion/customers/customers-form/customers-form.component';
import { ServicesFormComponent } from './menus/recepcion/services/services-form/services-form.component';
import { ServicesListComponent } from './menus/recepcion/services/services-list/services-list.component';
import { VehiclesListComponent } from './menus/recepcion/vehicles/vehicles-list/vehicles-list.component';
import { VehiclesFormComponent } from './menus/recepcion/vehicles/vehicles-form/vehicles-form.component';
import { VehiclesModule } from 'src/app/core/modules/vehicles/vehicles.module';
import { ServicesModule } from 'src/app/core/modules/services/services.module';
import { ServicesViewComponent } from './menus/recepcion/services/services-view/services-view.component';
import { VehiclesServicesListComponent } from './menus/recepcion/vehicles/vehicles-services-list/vehicles-services-list.component';
import { CustomersModule } from 'src/app/core/modules/customers/customers.module';
import { TallerServiciosListComponent } from './menus/taller/services/taller-servicios-list/taller-servicios-list.component';
import { TallerVehicleListComponent } from './menus/taller/vehicles/taller-vehicle-list/taller-vehicle-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecepcionCustomersVehicleComponent } from './menus/recepcion/customers/recepcion-customers-vehicle/recepcion-customers-vehicle.component';
import { RecepcionVehicleComponent } from './menus/recepcion/vehicles/recepcion-vehicle/recepcion-vehicle.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { MarcasListComponent } from './menus/catalogos/marcas/marcas-list/marcas-list.component';
import { MarcasFormComponent } from './menus/catalogos/marcas/marcas-form/marcas-form.component';
import { MarcasModule } from 'src/app/core/modules/marcas/marcas.module';
import { ModelosListComponent } from './menus/catalogos/modelos/modelos-list/modelos-list.component';
import { ModelosFormComponent } from './menus/catalogos/modelos/modelos-form/modelos-form.component';
import { ModelosModule } from 'src/app/core/modules/modelos/modelos.module';
import { ToastModule } from 'src/app/core/modules/toast/toast.module';
import { RolesListComponent } from './menus/catalogos/roles/roles-list/roles-list.component';
import { RolesFormComponent } from './menus/catalogos/roles/roles-form/roles-form.component';
import { RolesModule } from 'src/app/core/modules/roles/roles.module';
import { TipoMotorListComponent } from './menus/catalogos/tipo-motor/tipo-motor-list/tipo-motor-list.component';
import { TipoMotorFormComponent } from './menus/catalogos/tipo-motor/tipo-motor-form/tipo-motor-form.component';
import { TiposMotorModule } from 'src/app/core/modules/tipos-motor/tipos-motor.module';
import { CustomersViewComponent } from './menus/recepcion/customers/customers-view/customers-view.component';
import { EstatusServicioListComponent } from './menus/catalogos/estatus-servicio/estatus-servicio-list/estatus-servicio-list.component';
import { EstatusServicioFormComponent } from './menus/catalogos/estatus-servicio/estatus-servicio-form/estatus-servicio-form.component';
import { EstatusServicioModule } from 'src/app/core/modules/estatus-servicio/estatus-servicio.module';
import { EmployeesListComponent } from './menus/sistema/employees/employees-list/employees-list.component';
import { EmployeesFormComponent } from './menus/sistema/employees/employees-form/employees-form.component';
import { EmployeesModule } from 'src/app/core/modules/employees/employees.module';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';
import { UsersListComponent } from './menus/sistema/users/users-list/users-list.component';
import { UsersFormComponent } from './menus/sistema/users/users-form/users-form.component';
import { UsersModule } from 'src/app/core/modules/users/users.module';
import { FacturasViewComponent } from './menus/recepcion/facturas/facturas-view/facturas-view.component';
import { DepartamentosFormComponent } from './menus/catalogos/departamentos/departamentos-form/departamentos-form.component';
import { DepartamentosListComponent } from './menus/catalogos/departamentos/departamentos-list/departamentos-list.component';
import { DepartamentosModule } from "../../core/modules/departamentos/departamentos.module";
import { BackofficeRoutingModule } from './backoffice-routing.module';


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
        EmployeesFormComponent,
        PaginationComponent,
        UsersFormComponent,
        UsersListComponent,
        FacturasViewComponent,
        DepartamentosFormComponent,
        DepartamentosListComponent
    ],
    exports: [
        NavbarBackComponent
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
        EmployeesModule,
        UsersModule,
        DepartamentosModule,
        BackofficeRoutingModule,
    ]
})
export class BackofficeModule { }
