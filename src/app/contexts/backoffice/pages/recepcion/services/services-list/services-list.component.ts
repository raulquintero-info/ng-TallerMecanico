import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'src/app/core/interfaces/page.interface';
import { ServicesService } from 'src/app/core/services/services.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit{
  pathService="/admin/recepcion/servicios-view";
  title: string = 'Recepcion';
  subTitle: string = 'Listado de Servicios'
  buttons =[
    // {text: 'Agregar', path: "/admin/recepcion/servicios-form/0"}
  ];
  services: any;

  currentPage: number = 1;
  totalPages: number = 1;

  paginador: any;


  private servicesService = inject(ServicesService);
  private route = inject(ActivatedRoute);

  ngOnInit(){


    // this.servicesService.getAll().subscribe({
    //   next: resp=>{
    //     this.services = resp;
    //     console.log('services',resp);

    //   }
    // })

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

}
