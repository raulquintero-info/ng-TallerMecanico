import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MServicesListComponent } from './m-services-list/m-services-list.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MServicesListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MServicesListComponent
  ]
})
export class ServicesModule { }
