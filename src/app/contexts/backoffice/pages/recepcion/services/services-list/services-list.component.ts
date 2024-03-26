import { Component } from '@angular/core';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent {
  pathService="/admin/recepcion/servicios-view";
  title: string = 'Recepcion';
  subTitle: string = 'Listado de Servicios'




}
