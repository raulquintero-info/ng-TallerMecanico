import { Component } from '@angular/core';

@Component({
  selector: 'app-reporte-anual',
  templateUrl: './reporte-anual.component.html',
  styleUrls: ['./reporte-anual.component.css']
})
export class ReporteAnualComponent {
  fecha: Date = new Date();
  dateRange: any;
  title: string = "Reportes";
  subTitle: string = "Reporte Anual";
  buttons = [
    // {text: "Ver Modelos", path: "/admin/catalogos/modelos"},
    // {text: "Agregar", path: "/admin/catalogos/tipos-motor-form/0"},
  ];
  meses: any[] = [
    'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'
  ];


ngOnInit(){
  this.dateRange = this.DoceMeses(this.fecha);
  console.log(this.DoceMeses(this.dateRange))
}

  // TODO: genera error al mandar fecha como parametro
   DoceMeses(fecha: Date) {
    let anoInicio = this.fecha.getFullYear() - 1;
    let mesInicio;
    switch (this.fecha.getMonth()) {
      case 11:
        mesInicio = 1
        anoInicio = anoInicio + 1
        break;
      case 12:
        mesInicio = 2
        anoInicio = anoInicio + 1
        break;
      default:
        mesInicio = this.fecha.getMonth() + 2
        break;
    }
    let newarr = []
    for (let i = 0; i < 12; i++) {
      newarr.push({month: mesInicio -1, year: anoInicio})
      if (mesInicio == 12) {
        mesInicio = 0
        anoInicio++
      }
      mesInicio++
    }
    return newarr
  }


}
