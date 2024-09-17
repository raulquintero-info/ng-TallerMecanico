import { Component, inject } from '@angular/core';
import { OrdenServicio } from 'src/app/core/interfaces/ordenServicio.interface';
import { Page } from 'src/app/core/interfaces/page.interface';
import { DepartamentosService } from 'src/app/core/services/departamentos.service';
import { ServicesService } from 'src/app/core/services/services.service';
import { ActivatedRoute } from '@angular/router';
import { Departamento } from 'src/app/core/interfaces/departamento.interface';

@Component({
  selector: 'app-taller-servicios-list',
  templateUrl: './taller-servicios-list.component.html',
  styleUrls: ['./taller-servicios-list.component.css']
})
export class TallerServiciosListComponent {
  estatus: any[] = [];
  statusArray: any[] = [];
  countServices: any [10] = [];
  isLoading: boolean = true;
  pdfFile: string = 'ordenesServicio'
  title: string = "Taller";
  subTitle: string = "Servicios";
  buttons = [
    // { text: "Agregar", path: "/admin/recepcion/servicios-form/0" },
  ];
  pathService = "/admin/recepcion/servicios-view";
  services: any = [];

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
        this.loadServices(1, this.currentPage)

      } else {
        this.getByStatus(status)
      }
    });


  }

  loadServices(department: number, page: number) {
    this.servicesService.getPaginatedRecepcionData(2).subscribe({
      next: resp => {
        this.services = resp.content;
        this.isLoading = false;
      },
      error: resp => {
        this.isLoading = false;
      }
    });
  }



  getByStatus(status: string) {

    this.servicesService.getByStatus(status).subscribe({
      next: resp => {
        console.log('tallerFilter', resp);
        this.services = resp;
        this.isLoading = false;

      }
    });
  }

  // getAllStatusByDpt() {
  //   this.departamentoService.getEstatusById(TALLER).subscribe({
  //     next: resp => {
  //       this.estatus = resp;
  //       console.log('status', resp);

  //     }
  //   })
  //   this.loadServices(this.currentPage - 1);
  // }

  loadAllStatusByDpt(){
    const TALLER = 2;
    this.departamentoService.getEstatusById(TALLER).subscribe({
      next: resp => {
        resp.forEach( (x: any) =>{this.statusArray.push( {
           'estatusServicio': x.estatusServicio,
           'idEstatusServicio': x.idEstatusServicio,
           'departamento': {} as Departamento
          })
          this.getByStatusAux(x.estatusServicio, x.idEstatusServicio)
        })
        console.log('status', resp);
        console.log('eestatus', this.estatus);
        console.log('statusArray',this.statusArray);
      },
      error: resp=>{
        console.log('error', resp)
      }
    })

  }

  //TODO: funcion temporal para obtener el total de servicio de cada estatus
  // impletmentar funcinalidad en backend
  getByStatusAux(status: string,statusId: number) {

    this.servicesService.getByStatus(status).subscribe({
      next: resp => {
        console.log('por status',statusId,resp.length)
        this.countServices[statusId] = ( resp.length);
        return resp.length;

      }
    });
  }

    //paginator
    onPageChange(page: number) {
      this.loadServices(1, page - 1);
    }
}
