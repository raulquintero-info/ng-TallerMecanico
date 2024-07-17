import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteAnualComponent } from './reporte-anual/reporte-anual.component';
import { ReporteMensualComponent } from './reporte-mensual/reporte-mensual.component';
import { ReportesRoutingModule } from './reportes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ReporteAnualComponent,
    ReporteMensualComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    SharedModule
  ]
})
export class ReportesModule { }
