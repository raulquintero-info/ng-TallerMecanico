import { Component } from '@angular/core';

@Component({
  selector: 'app-taller-servicios-list',
  templateUrl: './taller-servicios-list.component.html',
  styleUrls: ['./taller-servicios-list.component.css']
})
export class TallerServiciosListComponent {
  title: string = "Catalogo";
  subTitle: string = "Marcas";
  buttons = [
    {text: "Agregar", path: "/admin/taller/servicios-form/0"},
  ];
  pathService="/admin/recepcion/servicios-view";

}
