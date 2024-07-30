import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-services-pdf',
  templateUrl: './services-pdf.component.html',
  styleUrls: ['./services-pdf.component.css']
})
export class ServicesPdfComponent {

  filterStr: string = '?field=id&type=asc';
  btnSelectedName: string = 'idasc';
  urlPdf: string = environment.api + '/api/ordenesServicio/pdf'
  loaderStatus: string = '';

  onOrderBy(field: string, orderType: string){
    let btnToUnselect = document.querySelector('#' + this.btnSelectedName);
    btnToUnselect?.classList.remove('btn-verde-selected');
    btnToUnselect?.classList.remove('disabled');
    btnToUnselect?.classList.add('btn-beige');

    this.filterStr = '?field=' + field + '&type=' + orderType;
    this.btnSelectedName = field + orderType;
    let btnSelected = document.querySelector('#' + this.btnSelectedName);
    btnSelected?.classList.remove('btn-beige');
    btnSelected?.classList.add('btn-verde-selected');
    btnSelected?.classList.add('disabled');

  }

  onGeneratePdf(){

    console.log('urlPdf',  environment.api + '/api/vehiculos/pdf/' + this.filterStr);
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
