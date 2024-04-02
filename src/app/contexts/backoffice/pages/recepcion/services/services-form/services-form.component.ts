import { Component } from '@angular/core';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.css']
})
export class ServicesFormComponent {
  title: string = 'Recepcion';
  subTitle: string = 'Crear Servicio'
  buttons =[{text: 'Servicios', path: "/admin/recepcion/servicios-form/0"}];
}
