import { Component } from '@angular/core';

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

}
