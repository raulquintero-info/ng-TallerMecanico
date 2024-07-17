import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from 'src/app/core/guards/admin.guard';
import { ReporteMensualComponent } from './reporte-mensual/reporte-mensual.component';
import { ReporteAnualComponent } from './reporte-anual/reporte-anual.component';

const routes: Routes = [
  {
    path: '',
    children: [

      { path: 'reporte-anual', component: ReporteAnualComponent, canActivate: [adminGuard] },
      { path: 'reporte-mensual', component: ReporteMensualComponent, canActivate: [adminGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
