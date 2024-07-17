import { Component } from '@angular/core';

@Component({
  selector: 'app-reporte-anual',
  templateUrl: './reporte-anual.component.html',
  styleUrls: ['./reporte-anual.component.css']
})
export class ReporteAnualComponent {
  title: string = "Reportes";
  subTitle: string = "Reporte Anual";
  buttons = [
    // {text: "Ver Modelos", path: "/admin/catalogos/modelos"},
    // {text: "Agregar", path: "/admin/catalogos/tipos-motor-form/0"},
  ];
}
