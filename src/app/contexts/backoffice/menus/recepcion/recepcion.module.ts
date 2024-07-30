import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecepcionRoutingModule } from './recepcion-routing.module';
import { CustomersFormComponent } from './customers/customers-form/customers-form.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomersViewComponent } from './customers/customers-view/customers-view.component';
import { RecepcionCustomersVehicleComponent } from './customers/recepcion-customers-vehicle/recepcion-customers-vehicle.component';
import { CustomersModule } from 'src/app/core/modules/customers/customers.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacturasViewComponent } from './facturas/facturas-view/facturas-view.component';
import { ServicesFormComponent } from './services/services-form/services-form.component';
import { ServicesListComponent } from './services/services-list/services-list.component';
import { ServicesViewComponent } from './services/services-view/services-view.component';
import { RecepcionVehicleComponent } from './vehicles/recepcion-vehicle/recepcion-vehicle.component';
import { VehiclesFormComponent } from './vehicles/vehicles-form/vehicles-form.component';
import { VehiclesListComponent } from './vehicles/vehicles-list/vehicles-list.component';
import { VehiclesServicesListComponent } from './vehicles/vehicles-services-list/vehicles-services-list.component';
import { VehiclesModule } from 'src/app/core/modules/vehicles/vehicles.module';

import { ServicesModule } from 'src/app/core/modules/services/services.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FacturasListComponent } from './facturas/facturas-list/facturas-list.component';
import { CustomersPdfComponent } from './customers/customers-pdf/customers-pdf.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { VehiclesPdfComponent } from './vehicles/vehicles-pdf/vehicles-pdf.component';
import { ServicesPdfComponent } from './services/services-pdf/services-pdf.component';


@NgModule({
  declarations: [
    CustomersFormComponent,
    CustomersListComponent,
    CustomersViewComponent,
    RecepcionCustomersVehicleComponent,

    FacturasViewComponent,

    ServicesFormComponent,
    ServicesListComponent,
    ServicesViewComponent,

    RecepcionVehicleComponent,
    VehiclesFormComponent,
    VehiclesListComponent,
    VehiclesServicesListComponent,
    FacturasListComponent,
    CustomersPdfComponent,
    VehiclesPdfComponent,
    ServicesPdfComponent


  ],
  imports: [
    CommonModule,
    RouterModule,
    RecepcionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule,
    CustomersModule,
    VehiclesModule,
    ServicesModule,
    SharedModule,
  ]
})
export class RecepcionModule { }
