import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './shared/pages/notfound/notfound.component';
import { HomeComponent } from  './contexts/guest/home/home.component';
import { LoginComponent } from './contexts/guest/login/login.component';
import { DashboardComponent } from './contexts/frontoffice/dashboard/dashboard.component';
import { VehicleComponent } from './contexts/frontoffice/vehicle/vehicle.component';
import { RecepcionClientesComponent } from './contexts/backoffice/recepcion/recepcion-clientes/recepcion-clientes.component';
import { RecepcionVehiculosComponent } from './contexts/backoffice/recepcion/recepcion-vehiculos/recepcion-vehiculos.component';
import { RecepcionVehiculoComponent } from './contexts/backoffice/recepcion/recepcion-vehiculo/recepcion-vehiculo.component';
import { RecepcionServiciosComponent } from './contexts/backoffice/recepcion/recepcion-servicios/recepcion-servicios.component';
import { ServiceComponent } from './contexts/frontoffice/service/service.component';
import { TallerServiciosComponent } from './contexts/backoffice/taller/servicios/taller-servicios/taller-servicios.component';
import { TallerServicioComponent } from './contexts/backoffice/taller/servicios/servicio/Taller-Servicio.component';
import { AdminDashboardComponent } from './contexts/backoffice/admin-dashboard/admin-dashboard.component';
import { AdminClientesComponent } from './contexts/backoffice/administracion/admin-clientes/admin-clientes.component';
import { AdminClienteComponent } from './contexts/backoffice/administracion/admin-cliente/admin-cliente.component';
const routes: Routes = [
  {path:'',      component: HomeComponent},
  {path:'login', component: LoginComponent},

  {path:'admin/dashboard', component: AdminDashboardComponent},
  {path:'admin/recepcion/servicios', component: RecepcionServiciosComponent},
  {path:'admin/taller/servicios/:id', component: RecepcionServiciosComponent},
  {path:'admin/recepcion/clientes', component: RecepcionClientesComponent},
  {path:'admin/recepcion/vehiculos', component: RecepcionVehiculosComponent},
  {path:'admin/recepcion/vehiculo/:id', component: RecepcionVehiculoComponent},
  {path:'admin/recepcion/servicios', component: TallerServiciosComponent},
  {path:'admin/recepcion/servicio/:id', component: TallerServicioComponent},

  {path:'admin/administracion/clientes', component: AdminClientesComponent},
  {path:'admin/administracion/cliente', component: AdminClienteComponent},

  {path: 'dashboard', component: DashboardComponent},
  {path: 'vehiculo/:id', component: VehicleComponent},
  {path: 'servicio/:id', component: ServiceComponent},

  {path: '**', component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
