import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarPublicComponent } from './navbar-public/navbar-public.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { PublicofficeRoutingModule } from './publicoffice-routing.module';



@NgModule({
  declarations: [
    NavbarPublicComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PublicofficeRoutingModule,
  ],
  exports:[
    NavbarPublicComponent
  ]
})
export class PublicofficeModule { }
