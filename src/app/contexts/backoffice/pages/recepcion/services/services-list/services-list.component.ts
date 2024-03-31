import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  buttons =[{text: 'Agregar', path: "/admin/recepcion/servicios=form/0"}];
  services: any;

  private servicesService = inject(ServicesService);
  private route = inject(ActivatedRoute);

  ngOnInit(){


    this.servicesService.getAll().subscribe({
      next: resp=>{
        this.services = resp;
        console.log('services',resp);

      }
    })

  }


}
