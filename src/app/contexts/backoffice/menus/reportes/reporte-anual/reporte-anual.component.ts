import { Component, inject } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { MainLoaderService } from 'src/app/core/services/mainLoader.service';
import { ServicesService } from 'src/app/core/services/services.service';

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
  ];
  meses: any[] = [
    'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'
  ];
  // Atributo que almacena los datos del chart
  chart: Chart | null = null;

  private mLoaderService = inject(MainLoaderService);
  private facturaService = inject(ServicesService);

  ngOnInit() {
    // this.dateRange = this.DoceMeses(this.fecha);

    this.dateRange = this.dateRange12Months();
    this.facturaService.getFacturasDateRange(this.dateRange[0], this.dateRange[1])
      .subscribe({
        next: (resp: []) => {
          this.dateRange = resp;
          this.total = this.dateRange.reduce((a: any, b: any) => a + b.total, 0)
          this.average = this.total / 12;
          console.log(resp)
          this.setGraphData(this.calculateData(resp));
        }
      })


    console.log(this.dateRange)
  }

  calculateData(data: []): [] {

    return [];
  }

  setGraphData(data: []) {
    const params = {
      labels: this.dateRange.map((x: any) => this.meses[x.month - 1]),
      datasets: [{
        label: 'Venta Por Mes',
        data: this.dateRange.map((x: any) => x.total),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };


    // Creamos la gráfica
    this.chart = new Chart("chart", {
      type: 'line' as ChartType, // tipo de la gráfica
      data: params // datos
    });
  }

  dateRange12Months() {
    let fecha = new Date();
    let utlimoDia = 32 - new Date(fecha.getFullYear(),fecha.getMonth(), 32).getDate();
    let fechaFin = fecha.getFullYear() + '-' + ("0" + (fecha.getMonth() + 1)).slice(-2) + '-' + utlimoDia;
    let pastYear = fecha.getFullYear() - 1;
    fecha = new Date(fecha.getFullYear(), Number(("0" + (fecha.getMonth() + 1)).slice(-2)), 0);

    fecha.setFullYear(pastYear);

    let fechaInicio = fecha.getFullYear()
      + "-"
      + ("0" + (fecha.getMonth() + 2)).slice(-2)
      + "-01";

    console.log(fechaInicio, fechaFin);
    return [fechaInicio, fechaFin]
  }


  // TODO: genera error al mandar fecha como parametro
  // ya no se ocupa esta funcion, solo era para generar datos ficticios
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
      temp = (5353 * (Math.floor(Math.random() * 4) + 5));
      newarr.push(
        { mes: this.meses[mesInicio - 1] + ' ' + anoInicio, month: mesInicio - 1, year: anoInicio, total: temp }
      )
      this.total = this.total + temp;
      if (mesInicio == 12) {
        mesInicio = 0
        anoInicio++
      }
      mesInicio++
    }
    this.average = this.total / 12;
    return newarr
  }


}
