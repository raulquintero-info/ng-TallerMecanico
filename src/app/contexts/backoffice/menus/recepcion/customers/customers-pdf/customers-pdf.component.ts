import { Component, OnInit, inject } from '@angular/core';
import { MainLoaderService } from 'src/app/core/services/mainLoader.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customers-pdf',
  templateUrl: './customers-pdf.component.html',
  styleUrls: ['./customers-pdf.component.css']
})
export class CustomersPdfComponent implements OnInit{

  filterStr: string = '?field=id&type=asc';
  btnSelectedName: string = 'idasc';
  urlPdf: string = environment.api + '/api/clientes/pdf'
  loaderStatus: string = '';

  private mLoaderService = inject(MainLoaderService);

  ngOnInit(): void {
    this.mLoaderService.setStatus('ocultar');

  }

  onOrderBy(field: string, orderType: string){
    let btnToUnselect = document.querySelector('#' + this.btnSelectedName);
    btnToUnselect?.classList.remove('btn-verde-selected');
    btnToUnselect?.classList.remove('disabled');
    btnToUnselect?.classList.add('btn-beige');

    // http://localhost:8080/api/clientes/pdf?orderBy=id&orderDirection=asc
    this.filterStr = '?orderBy=' + field + '&orderDirection=' + orderType;
    this.btnSelectedName = field + orderType;
    let btnSelected = document.querySelector('#' + this.btnSelectedName);
    btnSelected?.classList.remove('btn-beige');
    btnSelected?.classList.add('btn-verde-selected');
    btnSelected?.classList.add('disabled');

  }

  onGeneratePdf(){

    console.log('urlPdf',  environment.api + '/api/clientes/pdf' + this.filterStr);
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
