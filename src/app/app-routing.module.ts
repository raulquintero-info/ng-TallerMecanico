import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/modules/auth/pages/login/login.component';
import { RegisterComponent } from './core/modules/auth/pages/register/register.component';
import { HomeComponent } from './contexts/publicoffice/pages/home/home.component';
// import { DashboardBackComponent } from './contexts/backoffice/pages/dashboard-back/dashboard-back.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { LogoutComponent } from './core/modules/auth/pages/logout/logout.component';
import { GarageVehiclesListComponent } from './contexts/frontoffice/pages/vehiculos/garage-vehicles-list/garage-vehicles-list.component';
import { ServiceComponent } from './contexts/frontoffice/pages/mi-garage/service/service.component';
import { GarageVehiclesViewComponent } from './contexts/frontoffice/pages/vehiculos/garage-vehicles-view/garage-vehicles-view.component';

import { normalGuard } from './core/guards/normal.guard';
import { NotAuthorizedComponent } from './shared/pages/not-authorized/not-authorized.component';

import { ErrorHttp503Component } from './shared/pages/error-http503/error-http503.component';
import { ExpiredSessionComponent } from './shared/pages/expired-session/expired-session.component';

const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},

  {
    path: 'admin',
    loadChildren: ()=>import('./contexts/backoffice/backoffice.module').then(m => m.BackofficeModule)
  },
  {
    path:'',
    loadChildren: ()=> import('./contexts/frontoffice/frontoffice.module').then(m=>m.FrontofficeModule)
  },


  // {path: 'mi-garage', component: GarageVehiclesListComponent, canActivate: [normalGuard]},
  // {path: 'mi-garage/mi-vehiculo/:id', component: GarageVehiclesViewComponent, canActivate: [normalGuard]},
  // {path: 'mi-garage/servicio-view/:id', component: ServiceComponent, canActivate: [normalGuard]},



  {path: 'not-authorized', component: NotAuthorizedComponent},
  {path: 'error-503', component: ErrorHttp503Component},
  {path: 'expired-session', component: ExpiredSessionComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '**', component: NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
