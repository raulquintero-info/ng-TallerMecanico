import { Component, OnInit, inject } from '@angular/core';
import { Factura } from '../../../../../../core/interfaces/factura.interface';
import { ServicesService } from 'src/app/core/services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facturas-list',
  templateUrl: './facturas-list.component.html',
  styleUrls: ['./facturas-list.component.css']
})
export class FacturasListComponent implements OnInit {
  isLoadingService = true;
  title: string = "Reportes";
  subTitle: string = "Listado de Facturas";
  buttons = [];

  facturas: Factura[] = [];


  private facturaService = inject(ServicesService)
  private router = inject(Router)

  ngOnInit(): void {

    this.facturaService.getFacturas().subscribe({
      next: resp=>{
        this.facturas = resp;
        console.log('facturas', resp)
      }
    })

  }



  verFactura(idFactura: number) {
    this.router.navigateByUrl("/admin/recepcion/facturas-view/" + idFactura )
  }
}
