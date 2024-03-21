import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarPublicComponent } from './navbar-public/navbar-public.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarPublicComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    NavbarPublicComponent
  ]
})
export class PublicofficeModule { }
