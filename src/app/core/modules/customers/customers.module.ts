import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MCustomersListComponent } from './m-customers-list/m-customers-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MCustomersListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    MCustomersListComponent
  ]
})
export class CustomersModule { }
