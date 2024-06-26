import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from 'src/app/core/guards/admin.guard';
import { TallerServiciosListComponent } from './services/taller-servicios-list/taller-servicios-list.component';
import { TallerVehicleListComponent } from './vehicles/taller-vehicle-list/taller-vehicle-list.component';
import { TallerVehicleComponent } from './vehicles/taller-vehicle/taller-vehicle.component';
import { ServicesViewComponent } from '../recepcion/services/services-view/services-view.component';

const routes: Routes = [
  {
    path: '',
    children: [

      { path: 'servicios/:status', component: TallerServiciosListComponent, canActivate: [adminGuard] },
      { path: 'vehiculos', component: TallerVehicleListComponent, canActivate: [adminGuard] },
      { path: 'vehiculos/:id', component: TallerVehicleComponent, canActivate: [adminGuard] },
      { path: 'servicios-view/:id', component: ServicesViewComponent, canActivate: [adminGuard] },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TallerRoutingModule { }
