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
  subTitle: string = "Listado de Notas de Venta";
  buttons = [];

  facturas: Factura[] = [];

  //paginator
  currentPage: number = 1;
  totalPages: number = 1;
  paginador: any;


  private facturaService = inject(ServicesService)
  private router = inject(Router)

  ngOnInit(): void {
    this.loadFacturas(this.currentPage - 1);



  }

  loadFacturas(page :number){
    this.facturaService.getFacturasByPage(page).subscribe({
      next: resp=>{
        this.facturas = resp.content;
        console.log('facturas', resp)
      }
    })
  }


  verFactura(idFactura: number) {
    this.router.navigateByUrl("/admin/recepcion/facturas-view/" + idFactura )
  }

  onPageChange(page: number) {
    this.loadFacturas(page - 1);

  }
}
