import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MCustomersListComponent } from './m-customers-list/m-customers-list.component';
import { RouterModule } from '@angular/router';
import { ToastModule } from '../toast/toast.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MCustomersListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
    SharedModule
  ],
  exports:[
    MCustomersListComponent
  ]
})
export class CustomersModule { }
