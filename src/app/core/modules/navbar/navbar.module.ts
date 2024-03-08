import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavfrontComponent } from './navfront/navfront.component';
// import { NavbackComponent } from './navback/navback.component';
import { RouterModule } from '@angular/router';
import { NavbackComponent } from './navback/navback.component';



@NgModule({
  declarations: [
    NavfrontComponent,
    NavbackComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    NavbackComponent,
    NavfrontComponent,
  ]
})
export class NavbarModule { }
