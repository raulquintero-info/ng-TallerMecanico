import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteAnualComponent } from './reporte-anual/reporte-anual.component';
import { ReporteMensualComponent } from './reporte-mensual/reporte-mensual.component';
import { ReportesRoutingModule } from './reportes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReporteVehiculosComponent } from './reporte-vehiculos/reporte-vehiculos.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';



@NgModule({
  declarations: [
    ReporteAnualComponent,
    ReporteMensualComponent,
    ReporteVehiculosComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    SharedModule,
    FormsModule,
    NgxExtendedPdfViewerModule,

  ]
})
export class ReportesModule { }
