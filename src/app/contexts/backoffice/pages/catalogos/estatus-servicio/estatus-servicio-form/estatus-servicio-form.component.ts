import { Component, OnInit, inject } from '@angular/core';
import { EstatusServicio } from '../../../../../../core/interfaces/estatusServicio.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { EstatusServicioService } from 'src/app/core/services/estatusServicio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estatus-servicio-form',
  templateUrl: './estatus-servicio-form.component.html',
  styleUrls: ['./estatus-servicio-form.component.css']
})
export class EstatusServicioFormComponent implements OnInit {
  showSpinner: boolean = false;
  respuesta: string = '';
  messages: Toast[] = []
  params: any;
  estatusServicio: EstatusServicio = {} as EstatusServicio;
  title: string = "Catalogos";
  subTitle: string = "Orden de Servicio Nueva";
  buttons = [
    { text: "Ver Estatus", path: "/admin/catalogos/estatus-servicio" },
  ];

  private marcasService = inject(EstatusServicioService);
  private route = inject(ActivatedRoute);


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.estatusServicio.idEstatusServicio = Number(params.get('id'))
    });

    if (this.estatusServicio.idEstatusServicio > 0) {
      this.subTitle = 'Editar Marca';
      this.marcasService.getById(this.estatusServicio.idEstatusServicio).subscribe({
        next: resp => {
          this.estatusServicio = resp;
        }
      })
    }
  }


  save() {
    this.showSpinner = true;
    this.respuesta = '';
    if (this.estatusServicio.idEstatusServicio > 0) {
      console.log('Marca Enviada', this.estatusServicio);
      this.marcasService.createOrUpdate(this.estatusServicio).subscribe({
        next: resp => {
          this.messages.push({ title: "Sistema", timeAgo: "", body: "Registro Grabado", type: "success" })

          this.estatusServicio = resp.estatusServicio;
          this.respuesta = resp.mensaje;
          console.log('Marca Recibida', resp)
          this.showSpinner = false;
        },
        error: resp => {
          this.messages.push({ title: "Sistema", timeAgo: "", body: "El registro no se ha grabado, intentelo mas tarde", type: "danger" })
          console.log('update error:', resp)
          this.showSpinner = false;
        }
      })
    } else {

      console.log('cliente enviado', this.estatusServicio);

      this.marcasService.createOrUpdate(this.estatusServicio).subscribe({
        next: resp => {
          this.messages.push({ title: "Sistema", timeAgo: "", body: "Registro Grabado", type: "success" })
          console.log('respUsuario', resp)
          this.showSpinner = false;
        },
        error: resp => {
          this.messages.push({ title: "Sistema", timeAgo: "", body: "El registro no se ha grabado, intentelo mas tarde", type: "danger" })
          console.log('create error:', resp);
          this.respuesta = resp;
          this.showSpinner = false;
        }
      });
    }


  }



}
