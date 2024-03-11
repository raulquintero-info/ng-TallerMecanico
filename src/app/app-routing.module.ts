import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './shared/pages/notfound/notfound.component';
import { HomeComponent } from  './contexts/guest/home/home.component';
import { LoginComponent } from './contexts/guest/login/login.component';
import { DashboardComponent } from './contexts/frontoffice/dashboard/dashboard.component';
import { VehicleComponent } from './contexts/frontoffice/vehicle/vehicle.component';

const routes: Routes = [
  {path:'',      component: HomeComponent},
  {path:'login', component: LoginComponent},

  {path: 'dashboard', component: DashboardComponent},
  {path: 'vehiculo/:id', component: VehicleComponent},

  {path: '**', component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
