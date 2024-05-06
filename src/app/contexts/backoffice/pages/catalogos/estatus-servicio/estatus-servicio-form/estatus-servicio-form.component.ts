import { Component, OnInit, inject } from '@angular/core';
import { EstatusServicio } from '../../../../../../core/interfaces/estatusServicio.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { EstatusService } from 'src/app/core/services/estatusService.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

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

  private marcasService = inject(EstatusService);
  private route = inject(ActivatedRoute);
  private formBuilder = inject(FormBuilder);

  estatusServicioForm = this.formBuilder.group({
    idEstatusServicio: [''],
    estatusServicio: ['', [Validators.required, Validators.minLength(5)]]
  });

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.estatusServicio.idEstatusServicio = Number(params.get('id'))
    });

    if (this.estatusServicio.idEstatusServicio > 0) {
      this.subTitle = 'Editar Marca';
      this.marcasService.getById(this.estatusServicio.idEstatusServicio).subscribe({
        next: resp => {
          this.estatusServicio = resp;
          this.estatusServicioForm.get("idEstatusServicio")?.setValue(resp.idEstatusServicio);
          this.estatusServicioForm.get("idEstatusServicio")?.disable();
          this.estatusServicioForm.get("estatusServicio")?.setValue(resp.estatusServicio);
        }
      })
    }
  }


  save() {
    this.showSpinner = true;
    this.respuesta = '';

    // Verificar si el formulario es válido
    if (this.estatusServicioForm.invalid) {
      // Marcar los controles del formulario como tocados para mostrar los mensajes de error
      this.estatusServicioForm.markAllAsTouched();
      this.showSpinner = false; // Detener el spinner
      return; // Detener el proceso de guardado
    }

    // Asignar los valores del formulario al objeto marca
    this.estatusServicio.estatusServicio = this.estatusServicioForm.value.estatusServicio!;

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