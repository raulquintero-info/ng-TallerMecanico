import { Component } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-reporte-anual',
  templateUrl: './reporte-anual.component.html',
  styleUrls: ['./reporte-anual.component.css']
})
export class ReporteAnualComponent {
  fecha: Date = new Date();
  dateRange: any;
  total: number = 0;
  average: number = 0;
  title: string = "Reportes";
  subTitle: string = "Reporte Anual";
  buttons = [
    // {text: "Ver Modelos", path: "/admin/catalogos/modelos"},
    // {text: "Agregar", path: "/admin/catalogos/tipos-motor-form/0"},
  ];
  meses: any[] = [
    'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'
  ];
  // Atributo que almacena los datos del chart
  chart: Chart |null = null;

ngOnInit(){
  this.dateRange = this.DoceMeses(this.fecha);
  console.log(this.dateRange)


  const data = {
    labels: this.dateRange.map((x: any)=>x.mes),
    datasets: [{
      label: 'Venta Por Mes',
      data: this.dateRange.map((x:any)=> x.total),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };



  // Creamos la gráfica
  this.chart = new Chart("chart", {
    type: 'line' as ChartType, // tipo de la gráfica
    data: data // datos
  });

  var Navidad = "2024-02-01T07:00:00.000+00:00";
  console.log(Navidad.substring(5,7)); // 11


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
    let temp;
    for (let i = 0; i < 12; i++) {
      temp = (5353 * (Math.floor(Math.random() * 4) + 5)) ;
      newarr.push(
        {mes: this.meses[mesInicio-1] + ' ' + anoInicio,month: mesInicio -1, year: anoInicio, total: temp}
        )
        this.total = this.total + temp;
      if (mesInicio == 12) {
        mesInicio = 0
        anoInicio++
      }
      mesInicio++
    }
    this.average = this.total/12;
    return newarr
  }


}
