import { Component, inject } from '@angular/core';
import { Page } from 'src/app/core/interfaces/page.interface';
import { ServicesService } from 'src/app/core/services/services.service';

@Component({
  selector: 'app-taller-servicios-list',
  templateUrl: './taller-servicios-list.component.html',
  styleUrls: ['./taller-servicios-list.component.css']
})
export class TallerServiciosListComponent {
  title: string = "Taller";
  subTitle: string = "Servicios";
  buttons = [
    {text: "Agregar", path: "/admin/recepcion/servicios-form/0'"},

  ];
  pathService="/admin/recepcion/servicios-view";

  services: any;

  currentPage: number = 1;
  totalPages: number = 1;

  paginador: any;


  private servicesService = inject(ServicesService);

  ngOnInit() {

    this.loadServices(this.currentPage-1);
  }

  loadServices(page: number) {
    this.servicesService
      .getPaginatedData(page)
      .subscribe((data: Page<any>) => {
        console.log('serviciosTaller',data.content);
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
        console.log('tallerFilter', resp);
        this.services = resp;
      }
    });
  }

}
