import { Component, OnInit, inject } from '@angular/core';
import { EstatusServicio } from 'src/app/core/interfaces/estatusServicio.interface';
import { EstatusServicioService } from 'src/app/core/services/estatusServicio.service';

@Component({
  selector: 'app-estatus-servicio-list',
  templateUrl: './estatus-servicio-list.component.html',
  styleUrls: ['./estatus-servicio-list.component.css']
})
export class EstatusServicioListComponent implements OnInit{
  estatusServicios: EstatusServicio[] = [];
  title: string = "Catalogo";
  subTitle: string = "Estatus de Servicio";
  buttons = [
    // {text: "Ver Modelos", path: "/admin/catalogos/modelos"},
    {text: "Agregar", path: "/admin/catalogos/estatus-servicio-form/0"},
  ];

  private estatusServicioService =  inject(EstatusServicioService);


  ngOnInit(){
    this.estatusServicioService.getAll().subscribe({
      next: resp=>{
        console.log('estatus de servicio', resp);
        this.estatusServicios = resp;
      }
    })
  }

}
