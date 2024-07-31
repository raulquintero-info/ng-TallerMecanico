import { Component, OnInit, inject } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { MainLoaderService } from 'src/app/core/services/mainLoader.service';

@Component({
  selector: 'app-reporte-mensual',
  templateUrl: './reporte-mensual.component.html',
  styleUrls: ['./reporte-mensual.component.css']
})
export class ReporteMensualComponent implements OnInit {
  title: string = "Reportes";
  subTitle: string = "Reporte Mensual";
  buttons = [
    // {text: "Ver Modelos", path: "/admin/catalogos/modelos"},
  ];
  fecha: Date = new Date();
  dateRange: any;
  total: number = 0;
  average: number = 0;
  meses: any[] = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  chart: Chart | null = null;

  private mLoaderService = inject(MainLoaderService);


  ngOnInit(): void {
    // const numeroDeSemanaActual = this.numeroDeSemana(new Date());
    // console.log("El número de semana es: %d", numeroDeSemanaActual);

    this.dateRange = this.DiasPorMes(this.fecha);
    console.log(this.dateRange)


    const data = {
      labels: this.dateRange.map((x: any) => x.dia),
      datasets: [{
        label: 'Ventas Por Dia',
        data: this.dateRange.map((x: any) => x.total),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };



    // Creamos la gráfica
    this.chart = new Chart("chart", {
      type: 'line' as ChartType, // tipo de la gráfica
      data: data, // datos
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart: any = canvas.getContext('2d');


    const data1 = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        data: [50, 60, 70, 180, 190]
      }]
    }
    const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      responsive: true,
      aspectRatio: 2
    };
    const chart = new Chart(myChart, {
      type: 'pie',
      data: data1,
      options: options
    });


    setTimeout(() => {
      this.mLoaderService.setStatus('ocultar');
    }, 200);

  }


  numeroDeSemana(fecha: any) {
    const DIA_EN_MILISEGUNDOS = 1000 * 60 * 60 * 24,
      DIAS_QUE_TIENE_UNA_SEMANA = 7,
      JUEVES = 4;
    fecha = new Date(Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()));
    let diaDeLaSemana = fecha.getUTCDay(); // Domingo es 0, sábado es 6
    if (diaDeLaSemana === 0) {
      diaDeLaSemana = 7;
    }
    fecha.setUTCDate(fecha.getUTCDate() - diaDeLaSemana + JUEVES);
    let inicioDelAño: any = new Date(Date.UTC(fecha.getUTCFullYear(), 0, 1));
    const diferenciaDeFechasEnMilisegundos = fecha - inicioDelAño;
    return Math.ceil(((diferenciaDeFechasEnMilisegundos / DIA_EN_MILISEGUNDOS) + 1) / DIAS_QUE_TIENE_UNA_SEMANA);
  };



  DiasPorMes(fecha: Date) {

    let newarr = []
    let temp;
    for (let i = 1; i <= 30; i++) {
      temp = (52353 + ((Math.floor((Math.random() * 6)) * 3200)));
      newarr.push(
        { dia: i, total: temp }
      )
      this.total = this.total + temp;
    }
    this.average = this.total / 30;
    return newarr
  }

}
