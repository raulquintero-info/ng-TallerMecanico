import { Component, OnInit, inject } from '@angular/core';
import { EstatusServicio } from 'src/app/core/interfaces/estatusServicio.interface';
import { EstatusService } from 'src/app/core/services/estatusService.service';

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

  private estatusService =  inject(EstatusService);


  ngOnInit(){
    this.estatusService.getAll().subscribe({
      next: resp=>{
        console.log('estatus de servicio', resp);
        this.estatusServicios = resp;
      }
    })
  }

}
