import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { adminGuard } from 'src/app/core/guards/admin.guard';

import { DashboardBackComponent } from './menus/dashboard-back/dashboard-back.component';

// import { TallerServiciosListComponent } from './menus/taller/services/taller-servicios-list/taller-servicios-list.component';
// import { TallerVehicleListComponent } from './menus/taller/vehicles/taller-vehicle-list/taller-vehicle-list.component';
import { NotFoundComponent } from 'src/app/shared/pages/not-found/not-found.component';
import { ProfileComponent } from 'src/app/shared/pages/profile/profile.component';
// import { NotFoundComponent } from 'src/app/shared/pages/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'recepcion',
        loadChildren: ()=>import('./menus/recepcion/recepcion.module').then(m => m.RecepcionModule)
      },
      {
        path: 'catalogos',
        loadChildren: ()=>import('./menus/catalogos/catalogos.module').then(m => m.CatalogosModule)
      },
      {
        path: 'sistema',
        loadChildren: ()=>import('./menus/sistema/sistema.module').then(m => m.SistemaModule)
      },
      {
        path: 'reportes',
        loadChildren: ()=>import('./menus/reportes/reportes.module').then(m => m.ReportesModule)
      },
      {
        path: 'taller',
        loadChildren: ()=>import('./menus/taller/taller.module').then(m => m.TallerModule)
      },
      { path: 'dashboard', component: DashboardBackComponent, canActivate: [adminGuard] },
      { path: 'perfil', component: ProfileComponent, canActivate: [adminGuard] },



      {path: '**', component: NotFoundComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }

