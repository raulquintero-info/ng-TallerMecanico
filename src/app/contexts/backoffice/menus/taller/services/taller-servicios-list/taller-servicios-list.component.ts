import { Component, inject } from '@angular/core';
import { OrdenServicio } from 'src/app/core/interfaces/ordenServicio.interface';
import { Page } from 'src/app/core/interfaces/page.interface';
import { DepartamentosService } from 'src/app/core/services/departamentos.service';
import { ServicesService } from 'src/app/core/services/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taller-servicios-list',
  templateUrl: './taller-servicios-list.component.html',
  styleUrls: ['./taller-servicios-list.component.css']
})
export class TallerServiciosListComponent {
  estatus: any[] = [];
  isLoading: boolean = true;

  title: string = "Taller";
  subTitle: string = "Servicios";
  buttons = [{text: "Agregar", path: "/admin/recepcion/servicios-form/0'"},];
  pathService="/admin/recepcion/servicios-view";
  services: any = [];

  currentPage: number = 1;
  totalPages: number = 1;

  paginador: any;


  private servicesService = inject(ServicesService);
  private departamentoService = inject(DepartamentosService);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {

    this.getAllStatusByDpt()

    this.activatedRoute.params.subscribe(({status}) => {
      console.log('status',status);
      if(status == 'todos'){
        this.loadServices(this.currentPage )
      }else{
        this.getByStatus(status)
      }
  });


  }

  loadServices(page: number) {
    // this.servicesService
    //   .getPaginatedData(page)
    //   .subscribe((data: Page<any>) => {
    //     console.log('serviciosTaller',data.content);
    //     this.services = data.content;
    //     this.totalPages = data.totalPages;
    //     this.currentPage = data.number + 1;
    //   });
    this.servicesService.getPaginatedRecepcionData(1).subscribe({
      next: resp=>{
        this.services = resp;
        this.isLoading = false;
      },
      error: resp=>{
        this.isLoading = false;
      }
    });
  }

  onPageChange(page: number) {
    this.loadServices(page-1);

  }

  getByStatus(status: string){
    this.servicesService.getByStatus(status).subscribe({
      next: resp=>{
        console.log('tallerFilter', resp);
        this.services = resp;
      }
    });
  }

  getAllStatusByDpt(){
    const TALLER = 2;
    this.departamentoService.getEstatusById(TALLER).subscribe({
      next: resp=>{
        this.estatus = resp;
        console.log('status',resp);

      }
    })
    this.loadServices(this.currentPage-1);
  }
}
