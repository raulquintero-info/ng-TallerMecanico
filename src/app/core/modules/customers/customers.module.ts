import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MCustomersListComponent } from './m-customers-list/m-customers-list.component';
import { RouterModule } from '@angular/router';
import { PhonePipe } from '../../pipes/phone.pipe';



@NgModule({
  declarations: [
    MCustomersListComponent,
    PhonePipe
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
