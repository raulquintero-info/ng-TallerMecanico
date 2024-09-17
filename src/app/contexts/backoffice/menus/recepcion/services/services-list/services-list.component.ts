import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { Modelo } from 'src/app/core/interfaces/modelo.interface';
import { OrdenServicio } from 'src/app/core/interfaces/ordenServicio.interface';
import { Page } from 'src/app/core/interfaces/page.interface';
import { Vehiculo } from 'src/app/core/interfaces/vehiculo.interface';
import { ServicesService } from 'src/app/core/services/services.service';
import { EstatusServicio } from 'src/app/core/interfaces/estatusServicio.interface';
import { DepartamentosService } from 'src/app/core/services/departamentos.service';
import { Departamento } from 'src/app/core/interfaces/departamento.interface';


@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {
  estatus: EstatusServicio[] = [];
  statusArray: EstatusServicio[] = [];
  countServices: any[10] = [];
  isLoading: boolean = true;
  pdfFile: string = ''
  pathService = "/admin/recepcion/servicios-view";
  title: string = 'Recepcion';
  subTitle: string = 'Listado de Servicios'
  buttons = [
    { text: 'PDF *', path: "/admin/recepcion/servicios-pdf" }
  ];
  services: OrdenServicio[] = [];

  //paginator
  currentPage: number = 1;
  totalPages: number = 1;
  paginador: any;




  private servicesService = inject(ServicesService);
  private departamentoService = inject(DepartamentosService);
  private activatedRoute = inject(ActivatedRoute);



  ngOnInit() {
    this.loadAllStatusByDpt()

    this.activatedRoute.params.subscribe(({ status }) => {
      console.log('status', status);
      if (status == 'todos') {
        this.loadServices(1, this.currentPage-1)
      } else {
        this.getByStatus(status)
      }
    });

  }

  loadServices(department: number, page: number) {
    this.servicesService.getPaginatedRecepcionData(department, page).subscribe({
      next: (resp: any) => {
        console.log('servicios', resp)
        this.services = resp.content;
        this.isLoading = false;
        this.totalPages = resp.totalPages;
        this.currentPage = resp.number + 1;
      },
      error: resp => {
        this.isLoading = false
      }
    });
  }



  getByStatus(status: string) {
    this.isLoading = true;
    this.servicesService.getByStatus(status).subscribe({
      next: resp => {
        console.log('por status', status, resp)
        this.services = resp;
        this.isLoading = false;

      }
    });
  }

  loadAllStatusByDpt() {
    const RECEPCION = 1
    this.departamentoService.getEstatusById( RECEPCION).subscribe({
      next: resp => {
        resp.forEach((x: any) => {
          this.statusArray.push({
            'estatusServicio': x.estatusServicio,
            'idEstatusServicio': x.idEstatusServicio,
            'departamento': {} as Departamento
          })
          this.getByStatusAux(x.estatusServicio, x.idEstatusServicio)
        })

      },
      error: resp => {
        console.log('error', resp)
      }
    })

  }

  //TODO: funcion temporal para obtener el total de servicio de cada estatus
  // impletmentar funcinalidad en backend
  getByStatusAux(status: string, statusId: number) {

    this.servicesService.getByStatus(status).subscribe({
      next: resp => {
        console.log('por status', statusId, resp.length)
        this.countServices[statusId] = (resp.length);
        return resp.length;

      }
    });
  }


  //paginator
  onPageChange(page: number) {
    this.loadServices(1, page - 1);
  }

}
