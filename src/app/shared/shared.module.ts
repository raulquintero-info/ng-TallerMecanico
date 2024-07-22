import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RouterModule } from '@angular/router';
import { PhonePipe } from './pipes/phone.pipe';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DaysagoPipe } from './pipes/daysago';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewerPdfComponent } from './pages/viewer-pdf/viewer-pdf.component';



@NgModule({
  declarations: [
    PageTitleComponent,
    PaginationComponent,
    PhonePipe,
    DaysagoPipe,
    LoadingSpinnerComponent,
    ProfileComponent,
    ViewerPdfComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,


  ],
  exports:[
    PageTitleComponent,
    PaginationComponent,
    PhonePipe,
    DaysagoPipe,
    LoadingSpinnerComponent,

  ]
})
export class SharedModule { }
