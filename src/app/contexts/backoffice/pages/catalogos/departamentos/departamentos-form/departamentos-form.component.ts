import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Departamento } from 'src/app/core/interfaces/departamento.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { DepartamentosService } from 'src/app/core/services/departamentos.service';

@Component({
  selector: 'app-departamentos-form',
  templateUrl: './departamentos-form.component.html',
  styleUrls: ['./departamentos-form.component.css']
})
export class DepartamentosFormComponent implements OnInit{
  showSpinner: boolean = false;
  respuesta: string = '';
  messages: Toast[] = [];
  params: any;
  departamento: Departamento = {} as Departamento;
  title: string = 'Catalogos';
  subTitle: string = 'Agregar Departamento';
  buttons = [{ text: 'Ver Departamentos', path: '/admin/catalogos/departamento' }];

  private departamentosService = inject(DepartamentosService);
  private route = inject(ActivatedRoute);
  private formBuilder = inject(FormBuilder);

  departamentoForm = this.formBuilder.group({
    idDepartamento: [''],
    departamento: ['', [Validators.required, Validators.minLength(2)]]
  });

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.departamento.idDepartamento = Number(params.get('id'));
    });

    this.departamentoForm.get('idDepartamento')?.disable();
    if (this.departamento.idDepartamento > 0) {
      this.subTitle = 'Editar Departamento';
      this.departamentosService.getById(this.departamento.idDepartamento).subscribe({
        next: (resp) => {
          this.departamento = resp;
          this.departamentoForm.get('idDepartamento')?.setValue(resp.idDepartamento);
          this.departamentoForm.get('idDepartamento')?.disable();
          this.departamentoForm.get('departamento')?.setValue(resp.departamento);
        },
      });
    }
  }


  save() {
    this.showSpinner = true;
    this.respuesta = '';

    // Verificar si el formulario es válido
    if (this.departamentoForm.invalid) {
      // Marcar los controles del formulario como tocados para mostrar los mensajes de error
      this.departamentoForm.markAllAsTouched();
      this.showSpinner = false; // Detener el spinner
      return; // Detener el proceso de guardado
    }

    // Asignar los valores del formulario al objeto marca
    this.departamento.departamento = this.departamentoForm.value.departamento!;

    if (this.departamento.idDepartamento > 0) {
      console.log('Departamento Enviado', this.departamento);
      this.departamentosService.createOrUpdate(this.departamento).subscribe({
        next: (resp) => {
          this.messages.push({
            title: 'Sistema',
            timeAgo: '',
            body: 'Registro Grabado',
            type: 'success',
          });

          this.departamento = resp.departamento;
          this.respuesta = resp.mensaje;
          console.log('Departamento Recibido', resp);
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
      console.log('cliente enviado', this.departamento);

      this.departamentosService.createOrUpdate(this.departamento).subscribe({
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
