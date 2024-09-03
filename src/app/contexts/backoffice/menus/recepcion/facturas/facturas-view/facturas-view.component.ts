import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Factura } from 'src/app/core/interfaces/factura.interface';
import { ToastService } from 'src/app/core/modules/toast/services/toast.service';
import { CustomersService } from 'src/app/core/services/customers.service';
import { ServicesService } from 'src/app/core/services/services.service';

@Component({
  selector: 'app-facturas-view',
  templateUrl: './facturas-view.component.html',
  styleUrls: ['./facturas-view.component.css']
})
export class FacturasViewComponent implements OnInit {
  isLoadingService = true;
  factura: Factura | null = null;
  title: string = "Autopro";
  subTitle: string = "Nota de Venta";
  buttons = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private servicesService: ServicesService,
    private toastService: ToastService,
  ) { }
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id}) => {
      this.servicesService.getFacturaById(id).subscribe({
        next: (resp) => {
          console.log('servicio cargado', resp)
          this.isLoadingService = false;
          if (resp!=null){
            this.factura = resp;
            console.log(resp);
          }else {
            this.router.navigateByUrl("not-found", {skipLocationChange: true});
          }

          setTimeout(() => {
            // window.print();
          }, 1000);

        },
        error: resp=>{
          console.log('error');
          this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: "No se pudo cargar la informacion", type:'danger' })
          this.isLoadingService = false;

          this.router.navigateByUrl("not-found", {skipLocationChange: true});
        }
      } );
    });










  }

}
