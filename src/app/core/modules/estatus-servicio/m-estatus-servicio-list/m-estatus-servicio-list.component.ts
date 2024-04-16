import { Component, Input, OnDestroy, inject } from '@angular/core';
import { EstatusServicio } from '../../../interfaces/estatusServicio.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { EstatusService } from '../../../services/estatusService.service';

@Component({
  selector: 'app-m-estatus-servicio-list',
  templateUrl: './m-estatus-servicio-list.component.html',
  styleUrls: ['./m-estatus-servicio-list.component.css']
})
export class MEstatusServicioListComponent implements OnDestroy{
  messages: Toast [] = [];

  @Input() estatusServicios: EstatusServicio[] = [];


  private estatusServicioService = inject(EstatusService);

  delete(estatusServicio: EstatusServicio){

    this.estatusServicioService.delete(estatusServicio.idEstatusServicio).subscribe({
      next: resp=>{
        this.refresh();
        this.messages.push({title: "Sistema", timeAgo: "", body:"Se Ha eliminado El status de servicio: " + estatusServicio.estatusServicio, type:"success"})

      },
      error: resp=>{
        this.messages.push({title: "Sistema", timeAgo: "", body:"No ha sido posible Borrar el registro, intente mas tarde", type: "danger"})
      }
    })
  }

  refresh(){
    this.estatusServicioService.getAll().subscribe({
      next:resp=>{
        this.estatusServicios = resp;
      }
    })
  }
  ngOnDestroy(){
    this.messages;
  }

}
