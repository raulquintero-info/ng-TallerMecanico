import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { MarcasService } from 'src/app/core/services/marcas.service';
import { ToastService } from '../../toast/services/toast.service';

@Component({
  selector: 'app-m-marcas-form',
  templateUrl: './m-marcas-form.component.html',
  styleUrls: ['./m-marcas-form.component.css']
})
export class MMarcasFormComponent implements OnInit {


  @Input() showSpinner: boolean = false;
  @Input() idMarca: number = 0
  @Output() savedMarca:EventEmitter<any> = new EventEmitter();
  @Output() cancelledMarca:EventEmitter<any> = new EventEmitter();

  respuesta: string = '';
  marca: Marca = {} as Marca;

  private formBuilder = inject(FormBuilder);
  private marcasService = inject(MarcasService);
  private toastService = inject(ToastService);


  marcaForm = this.formBuilder.group({
    idMarca: [''],
    marca: ['', [Validators.required, Validators.minLength(2)]]
  });

  ngOnInit(): void {
    this.marcaForm.get('idMarca')?.disable();
    if (this.idMarca > 0) {
      this.marcasService.getById(this.idMarca).subscribe({
        next: (resp) => {
          console.log('respMArca', resp)
          this.marca = resp;
          this.marcaForm.get('idMarca')?.setValue(resp.idMarca);
          this.marcaForm.get('marca')?.setValue(resp.marca);
        },
      });
    } else {
      this.marcaForm.get('idMarca')?.setValue('0');

    }
  }

  toNumber(valor: any){
    return parseInt(valor);

  }

  save() {
    this.showSpinner = true;
    this.respuesta = '';

    // Verificar si el formulario es válido
    if (this.marcaForm.invalid) {
      // Marcar los controles del formulario como tocados para mostrar los mensajes de error
      this.marcaForm.markAllAsTouched();
      this.showSpinner = false; // Detener el spinner
      return; // Detener el proceso de guardado
    }

    // Asignar los valores del formulario al objeto marca
    this.marca.marca = this.marcaForm.value.marca!;

    if (Number(this.marca.idMarca) > 0) {
      console.log('Marca Enviada', this.marca);
      this.marcasService.createOrUpdate(this.marca).subscribe({
        next: (resp) => {
          console.log('respuesta',resp);
          this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: ' Registro Grabado', type: 'success' })
          this.savedMarca.emit(resp.Marca.idMarca);

          this.marca = resp.marca;
          this.respuesta = resp.mensaje;
          console.log('Marca Recibida', resp);
          this.showSpinner = false;
        },
        error: (resp) => {
          this.toastService.addMessage({
            title: 'Sistema',
            timeAgo: '',
            body: 'El registro no se ha grabado, debido a un problema con el servidor',
            type: 'danger',
          });
          console.log('update error:', resp);
          this.showSpinner = false;
        },
      });
    } else {
      console.log('marca enviado', this.marca);

      this.marcasService.createOrUpdate(this.marca).subscribe({
        next: (resp) => {
          this.savedMarca.emit(resp.Marca.idMarca);
          //el mensaje de confirmacion es lanzado desde el componente principal
          console.log('respUsuario', resp);
          this.showSpinner = false;
        },
        error: (resp) => {
          this.toastService.addMessage({
            title: 'Sistema',
            timeAgo: '',
            body: 'El registro no se ha grabado, debido a un problema con el servidor',
            type: 'danger',
          });
          console.log('create error:', resp);
          this.respuesta = resp;
          this.showSpinner = false;
        },
      });
    }
  }

  onCancel(){
    this.cancelledMarca.emit();

  }

}
