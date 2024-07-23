import { ExpressionStatement } from '@angular/compiler';
import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/core/modules/toast/services/toast.service';
import { VehiclesService } from 'src/app/core/services/vehicles.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewer-pdf',
  templateUrl: './viewer-pdf.component.html',
  styleUrls: ['./viewer-pdf.component.css']
})
export class ViewerPdfComponent implements OnInit {

protected pdfFile: any ;
loaderStatus: string ="";

private route = inject(ActivatedRoute);
private router = inject(Router);

ngOnInit(): void {
  this.route.paramMap.subscribe((params) => {
    console.log('params', params)
    this.pdfFile = params.get('pdfFile');
    if(this.pdfFile=="")
      this.router.navigateByUrl("not-found", {skipLocationChange: true})
    console.log('params', this.pdfFile)

  });
}


showError(){
  this.loaderStatus = "ocultar"
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
