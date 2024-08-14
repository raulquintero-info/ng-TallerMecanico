import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MainLoaderService } from 'src/app/core/services/mainLoader.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporte-vehiculos',
  templateUrl: './reporte-vehiculos.component.html',
  styleUrls: ['./reporte-vehiculos.component.css']
})
export class ReporteVehiculosComponent implements OnInit{

  filterStr: string = '';
  btnSelectedName: string = 'idasc';
  urlPdf: string = environment.api + '/api/vehiculos/pdf';
  loaderStatus: string = '';
  // TODO: codigo para quitar guiones en la fecha
  startDate: string = new Date().toISOString().slice(0,10).replace(/-/g,"-")  ;
  endDate: string = new Date().toISOString().slice(0,10).replace(/-/g,"-")  ;

  private mLoaderService = inject(MainLoaderService);

  ngOnInit(): void {
    this.mLoaderService.setStatus('ocultar');
    this.urlPdf = environment.api + '/api/vehiculos/atendidosPdf?fechaInicio='+ this.startDate +'&fechaFin=' + this.endDate;

  }


  onGeneratePdf(){

    // if(this.startDat/e<this.endDate){
      this.filterStr = '?fechaInicio='+ this.startDate +'&fechaFin=' + this.endDate ;
    // }
    this.urlPdf= environment.api + '/api/vehiculos/atendidosPdf' + this.filterStr;
    console.log('urlPdf',  environment.api + '/api/vehiculos/atendidosPdf' + this.filterStr);
  }

  showError(){
    // this.loaderStatus = "ocultar"
    Swal.fire({
      title: 'Error al cargar Archivo',
      text: 'Error de Sistema',
      // icon: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Continuar'

    })

  }

  ocultarLoader(){
    this.loaderStatus = "ocultar"

  }

}
