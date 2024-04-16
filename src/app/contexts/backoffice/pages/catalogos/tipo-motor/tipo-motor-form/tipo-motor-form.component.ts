import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TipoMotor } from 'src/app/core/interfaces/tipoMotor.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { TipoMotorService } from 'src/app/core/services/tipoMotor.service';

@Component({
  selector: 'app-tipo-motor-form',
  templateUrl: './tipo-motor-form.component.html',
  styleUrls: ['./tipo-motor-form.component.css']
})
export class TipoMotorFormComponent  implements OnInit {
  showSpinner: boolean = false;
  respuesta: string = '';
  messages: Toast[] = []
  params: any;
  tipoMotor: TipoMotor = {} as TipoMotor;
  title: string = "Catalogos";
  subTitle: string = "Agregar Tipo de Motor";
  buttons = [
    { text: "Ver Tipos de Motor", path: "/admin/catalogos/tipos-motor" },
  ];

  private tipoMotorService = inject(TipoMotorService);
  private route = inject(ActivatedRoute);
  private formBuilder = inject(FormBuilder);

  tipoMotorForm = this.formBuilder.group({
    idTipoMotor: [''],
    tipoMotor: ['', [Validators.required, Validators.minLength(5)]]
  });


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.tipoMotor.idTipoMotor = Number(params.get('id'))
    });

    if (this.tipoMotor.idTipoMotor > 0) {
      this.subTitle = 'Editar Tipo de Motor';
      this.tipoMotorService.getById(this.tipoMotor.idTipoMotor).subscribe({
        next: resp => {
          this.tipoMotor = resp;
          this.tipoMotorForm.get('idTipoMotor')?.setValue(resp.idTipoMotor);
          this.tipoMotorForm.get('idTipoMotor')?.disable();
          this.tipoMotorForm.get( 'tipoMotor' )?.setValue(resp.tipoMotor);
        }
      })
    }
  }


  save() {
    this.showSpinner = true;
    this.respuesta = '';

    // Verificar si el formulario es válido
    if (this.tipoMotorForm.invalid) {
      // Marcar los controles del formulario como tocados para mostrar los mensajes de error
      this.tipoMotorForm.markAllAsTouched();
      this.showSpinner = false; // Detener el spinner
      return; // Detener el proceso de guardado
    }

    // Asignar los valores del formulario al objeto marca
    this.tipoMotor.tipoMotor = this.tipoMotorForm.value.tipoMotor!;

    if (this.tipoMotor.idTipoMotor > 0) {
      console.log('TipoMotor Enviado', this.tipoMotor);
      this.tipoMotorService.createOrUpdate(this.tipoMotor).subscribe({
        next: resp => {
          this.messages.push({ title: "Sistema", timeAgo: "", body: "Registro Grabado", type: "success" })

          // this.tipoMotor = resp.tipoMotor;
          this.respuesta = resp.mensaje;
          console.log('TipoMotor Recibida', resp)
          this.showSpinner = false;
        },
        error: resp => {
          this.messages.push({ title: "Sistema", timeAgo: "", body: "El registro no se ha grabado", type: "danger" })
          console.log('update error:', resp)
          this.showSpinner = false;
        }
      })
    } else {

      console.log('tipo motor enviado', this.tipoMotor);

      this.tipoMotorService.createOrUpdate(this.tipoMotor).subscribe({
        next: resp => {
          this.messages.push({ title: "Sistema", timeAgo: "", body: "Registro Grabado", type: "success" })
          console.log('respTipoMotor', resp)
          this.showSpinner = false;
        },
        error: resp => {
          this.messages.push({ title: "Sistema", timeAgo: "", body: "El registro no se ha grabado", type: "danger" })
          console.log('create error:', resp);
          this.respuesta = resp;
          this.showSpinner = false;
        }
      });
    }


  }



}
