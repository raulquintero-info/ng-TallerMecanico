import { Component } from '@angular/core';

@Component({
  selector: 'app-reporte-mensual',
  templateUrl: './reporte-mensual.component.html',
  styleUrls: ['./reporte-mensual.component.css']
})
export class ReporteMensualComponent {
  title: string = "Reportes";
  subTitle: string = "Reporte Mensual";
  buttons = [
    // {text: "Ver Modelos", path: "/admin/catalogos/modelos"},
    // {text: "Agregar", path: "/admin/catalogos/tipos-motor-form/0"},
  ];
}
