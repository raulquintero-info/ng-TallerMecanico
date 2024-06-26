import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RouterModule } from '@angular/router';
import { PhonePipe } from './pipes/phone.pipe';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    PageTitleComponent,
    PaginationComponent,
    PhonePipe,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports:[
    PageTitleComponent,
    PaginationComponent,
    PhonePipe,
    LoadingSpinnerComponent,

  ]
})
export class SharedModule { }
