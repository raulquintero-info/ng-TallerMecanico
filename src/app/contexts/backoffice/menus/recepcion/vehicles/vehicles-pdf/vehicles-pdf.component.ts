import { Component, OnInit, inject } from '@angular/core';
import { MainLoaderService } from 'src/app/core/services/mainLoader.service';
import { VehiclesService } from 'src/app/core/services/vehicles.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehicles-pdf',
  templateUrl: './vehicles-pdf.component.html',
  styleUrls: ['./vehicles-pdf.component.css']
})
export class VehiclesPdfComponent implements OnInit{

  filterStr: string = '';
  btnSelectedName: string = 'idasc';
  urlPdf: string = environment.api + '/api/vehiculos/pdf'
  loaderStatus: string = '';
  yearSelected: string = '';
  marcaSelected: string="";

  private mLoaderService = inject(MainLoaderService);
  private vehicleService = inject(VehiclesService);

  ngOnInit(): void {
    this.mLoaderService.setStatus('ocultar');

  }


  onGeneratePdf(){

    if(Number(this.yearSelected)>1900 && this.marcaSelected!=''){
      this.filterStr = '?anioModelo=' + this.yearSelected + '&marca=' + this.marcaSelected ;
    }else if(Number(this.yearSelected)>1900 && this.marcaSelected==''){
      this.filterStr = '?anioModelo=' + this.yearSelected;
    } else if(Number(this.yearSelected)<1900 && this.marcaSelected!=''){
      this.filterStr = '?marca=' + this.marcaSelected;
    }else if(Number(this.yearSelected)<1900 && this.marcaSelected==''){
      this.filterStr = '';
    }
    this.urlPdf= environment.api + '/api/vehiculos/pdf' + this.filterStr;
    console.log('urlPdf',  environment.api + '/api/vehiculos/pdf' + this.filterStr);
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
