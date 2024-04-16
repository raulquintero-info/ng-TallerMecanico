import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { MarcasService } from 'src/app/core/services/marcas.service';

@Component({
  selector: 'app-marcas-form',
  templateUrl: './marcas-form.component.html',
  styleUrls: ['./marcas-form.component.css'],
})
export class MarcasFormComponent implements OnInit {
  showSpinner: boolean = false;
  respuesta: string = '';
  messages: Toast[] = [];
  params: any;
  marca: Marca = {} as Marca;
  title: string = 'Catalogos';
  subTitle: string = 'Agregar Marca';
  buttons = [{ text: 'Ver Marcas', path: '/admin/catalogos/marcas' }];

  private marcasService = inject(MarcasService);
  private route = inject(ActivatedRoute);
  private formBuilder = inject(FormBuilder);

  marcaForm = this.formBuilder.group({
    idMarca: [''],
    marca: ['', [Validators.required, Validators.minLength(2)]]
  });

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.marca.idMarca = Number(params.get('id'));
    });

    if (this.marca.idMarca > 0) {
      this.subTitle = 'Editar Marca';
      this.marcasService.getById(this.marca.idMarca).subscribe({
        next: (resp) => {
          this.marca = resp;
          this.marcaForm.get('idMarca')?.setValue(resp.idMarca);
          this.marcaForm.get('idMarca')?.disable();
          this.marcaForm.get('marca')?.setValue(resp.marca);
        },
      });
    }
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

    if (this.marca.idMarca > 0) {
      console.log('Marca Enviada', this.marca);
      this.marcasService.createOrUpdate(this.marca).subscribe({
        next: (resp) => {
          this.messages.push({
            title: 'Sistema',
            timeAgo: '',
            body: 'Registro Grabado',
            type: 'success',
          });

          this.marca = resp.marca;
          this.respuesta = resp.mensaje;
          console.log('Marca Recibida', resp);
          this.showSpinner = false;
        },
        error: (resp) => {
          this.messages.push({
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
      console.log('cliente enviado', this.marca);

      this.marcasService.createOrUpdate(this.marca).subscribe({
        next: (resp) => {
          this.messages.push({
            title: 'Sistema',
            timeAgo: '',
            body: 'Registro Grabado',
            type: 'success',
          });
          console.log('respUsuario', resp);
          this.showSpinner = false;
        },
        error: (resp) => {
          this.messages.push({
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
}
