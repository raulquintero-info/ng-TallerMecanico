import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecepcionClientesComponent } from './recepcion/recepcion-clientes/recepcion-clientes.component';
import { RecepcionVehiculosComponent } from './recepcion/recepcion-vehiculos/recepcion-vehiculos.component';
import { RecepcionServiciosComponent } from './recepcion/recepcion-servicios/recepcion-servicios.component';
import { TallerServicioComponent } from './taller/servicios/servicio/Taller-Servicio.component';
import { TallerServiciosComponent } from './taller/servicios/taller-servicios/taller-servicios.component';
import { VehiclesModule } from 'src/app/core/modules/vehicles/vehicles.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RecepcionVehiculoComponent } from './recepcion/recepcion-vehiculo/recepcion-vehiculo.component';
import { AdminClientesComponent } from './administracion/admin-clientes/admin-clientes.component';
import { AdminClienteComponent } from './administracion/admin-cliente/admin-cliente.component';



@NgModule({
  declarations: [
    RecepcionClientesComponent,
    RecepcionVehiculosComponent,
    RecepcionServiciosComponent,
    TallerServicioComponent,
    TallerServiciosComponent,
    AdminDashboardComponent,
    RecepcionVehiculoComponent,
    AdminClientesComponent,
    AdminClienteComponent

  ],
  imports: [
    CommonModule,
    VehiclesModule
  ]
})
export class BackofficeModule { }
