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


@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {
  estatus: EstatusServicio[] = [];
  statusArray: String[] = [];
  isLoading: boolean = true;
  pdfFile: string = 'ordenesServicio'
  pathService = "/admin/recepcion/servicios-view";
  title: string = 'Recepcion';
  subTitle: string = 'Listado de Servicios'
  buttons = [
    //  {text: 'PDF', path: "/admin/recepcion/servicios-form/0"}
  ];
  services: OrdenServicio[] = [];

  currentPage: number = 1;
  totalPages: number = 1;

  paginador: any;


  private servicesService = inject(ServicesService);
  private departamentoService = inject(DepartamentosService);
  private activatedRoute = inject(ActivatedRoute);



  ngOnInit() {
    this.loadAllStatusByDpt()

    this.activatedRoute.params.subscribe(({status}) => {
        console.log('status',status);
        if(status == 'todos'){
          this.loadServices(1, this.currentPage )
        }else{
          this.getByStatus(status)
        }
    });

  }

  loadServices(department: number,page: number) {
    // this.servicesService
    //   .getPaginatedData(page)
    //   .subscribe((data: Page<any>) => {
    //     console.log('servicios', data.content);
    //     this.services = data.content;
    //     this.totalPages = data.totalPages;
    //     this.currentPage = data.number + 1;
    //     this.isLoading = false;

    //   });

    this.servicesService.getPaginatedRecepcionData(department, page).subscribe({
      next: (resp:any)=>{
        console.log('servicios',resp)
        this.services = resp
        this.isLoading = false;
      },
      error: resp=>{
        this.isLoading = false
      }
    });
  }

  onPageChange(page: number) {
    this.loadServices(1, page - 1);
  }

  getByStatus(status: string) {
    this.isLoading = true;
    this.servicesService.getByStatus(status).subscribe({
      next: resp => {
        console.log('por status',status,resp)
        this.services = resp;
        this.isLoading = false;

      }
    });
  }

  loadAllStatusByDpt(){
    const RECEPCION = 1
    this.departamentoService.getEstatusById(RECEPCION).subscribe({
      next: resp => {
        this.estatus = resp;
        this.estatus.forEach(x=>{this.statusArray.push( x.estatusServicio)})
        console.log('status', resp);
        console.log(this.statusArray)
      },
      error: resp=>{
        console.log('error', resp)
      }
    })

  }

}
