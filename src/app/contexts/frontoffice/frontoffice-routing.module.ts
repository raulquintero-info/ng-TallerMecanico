import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { normalGuard } from 'src/app/core/guards/normal.guard';
import { ServiceComponent } from './pages/mi-garage/service/service.component';
import { GarageVehiclesListComponent } from './pages/vehiculos/garage-vehicles-list/garage-vehicles-list.component';
import { GarageVehiclesViewComponent } from './pages/vehiculos/garage-vehicles-view/garage-vehicles-view.component';

const routes: Routes = [
  {
    path:'',
    children:[

      {path: 'mi-garage', component: GarageVehiclesListComponent, canActivate: [normalGuard]},
      {path: 'mi-garage/mi-vehiculo/:id', component: GarageVehiclesViewComponent, canActivate: [normalGuard]},
      {path: 'mi-garage/servicio-view/:id', component: ServiceComponent, canActivate: [normalGuard]},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
