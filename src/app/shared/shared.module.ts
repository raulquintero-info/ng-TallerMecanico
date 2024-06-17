import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageTitleComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports:[
    PageTitleComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
