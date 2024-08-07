import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, ChartType } from 'chart.js/auto';
import { MainLoaderService } from 'src/app/core/services/mainLoader.service';
import { ServicesService } from 'src/app/core/services/services.service';

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
  dataOfMonth: any;
  monthSelected: string ="2024-08"
  total: number = 0;
  average: number = 0;
  meses: any[] = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  chart: Chart | null = null;

  private mLoaderService = inject(MainLoaderService);
  private servicesService = inject(ServicesService);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    // const numeroDeSemanaActual = this.numeroDeSemana(new Date());
    // console.log("El número de semana es: %d", numeroDeSemanaActual);

    this.activatedRoute.params.subscribe(({year,month}) => {
      console.log('year', year, month)
      if(year>1900 && month>0 && month<=12){
        this.monthSelected = year + '-' + ("0" + (month)).slice(-2)
      } else {
        year=2024;
        month=8;
      }
      this.loadReport(year, month);
    });
    // this.dateRange = this.DiasPorMes(this.fecha);


    setTimeout(() => {
      this.mLoaderService.setStatus('ocultar');
    }, 200);

  }

  updateData(){
    console.log(this.monthSelected);
    let temp = this.monthSelected.split("-");
    this.loadReport(temp[0], temp[1]);
  }

  loadReport(year: string, month: string){
    this.servicesService.getFacturasByMonth(year, month).subscribe({
        next: data=>{
          this.dataOfMonth = data;
          this.total = this.dataOfMonth.reduce((a: any, b: any) => a + b.total, 0)

          const params = {
            labels: data.map((x: any) => x.day),
            datasets: [{
              label: 'Ventas Por Dia',
              data: data.map((x: any) => x.total),
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          };
          console.log('data retrieved',data, params)



          // Creamos la gráfica
          this.chart?.destroy();
          this.chart = new Chart("chart", {
            type: 'line' as ChartType, // tipo de la gráfica
            data: params, // datos
            options: {
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
      }
    })
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
