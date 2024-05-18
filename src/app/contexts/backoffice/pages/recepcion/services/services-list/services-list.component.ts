import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { Modelo } from 'src/app/core/interfaces/modelo.interface';
import { OrdenServicio } from 'src/app/core/interfaces/ordenServicio.interface';
import { Page } from 'src/app/core/interfaces/page.interface';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';
import { ServicesService } from 'src/app/core/services/services.service';
import { EstatusServicio } from 'src/app/core/interfaces/estatusServicio.interface';
import { DepartamentosService } from 'src/app/core/services/departamentos.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit{
  estatus: any[] = [];
  pathService="/admin/recepcion/servicios-view";
  title: string = 'Recepcion';
  subTitle: string = 'Listado de Servicios'
  buttons =[
    // {text: 'Agregar', path: "/admin/recepcion/servicios-form/0"}
  ];
  services: OrdenServicio[] = [
    // {
    //   estatusServicio: {} as EstatusServicio,
    //   vehiculo:{modelo: {marca: {} as Marca } as Modelo} as Vehiculo
    // } as OrdenServicio
  ];

  currentPage: number = 1;
  totalPages: number = 1;

  paginador: any;


  private servicesService = inject(ServicesService);
  private departamentoService = inject(DepartamentosService);
  private route = inject(ActivatedRoute);

  ngOnInit(){
    const RECEPCION = 1
    this.departamentoService.getEstatusById(RECEPCION).subscribe({
      next: resp=>{
        this.estatus = resp;
        console.log('status',resp);

      }
    })

    this.loadServices(this.currentPage-1);

  }

  loadServices(page: number) {
    this.servicesService
      .getPaginatedData(page)
      .subscribe((data: Page<any>) => {
        console.log('servicios', data.content);
        this.services = data.content;
        this.totalPages = data.totalPages;
        this.currentPage = data.number + 1;
      });
  }

  onPageChange(page: number) {
    this.loadServices(page-1);

  }

  getByStatus(status: string){
    this.servicesService.getByStatus(status).subscribe({
      next: resp=>{
        this.services = resp;
      }
    });
  }

}
