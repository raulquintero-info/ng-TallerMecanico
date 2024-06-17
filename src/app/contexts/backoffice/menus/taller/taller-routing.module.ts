import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from 'src/app/core/guards/admin.guard';
import { TallerServiciosListComponent } from './services/taller-servicios-list/taller-servicios-list.component';
import { TallerVehicleListComponent } from './vehicles/taller-vehicle-list/taller-vehicle-list.component';

const routes: Routes = [
  {
    path: '',
    children: [

      { path: 'servicios', component: TallerServiciosListComponent, canActivate: [adminGuard] },
      { path: 'vehiculos', component: TallerVehicleListComponent, canActivate: [adminGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TallerRoutingModule { }
