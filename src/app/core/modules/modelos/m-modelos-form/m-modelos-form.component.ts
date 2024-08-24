import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { Modelo } from 'src/app/core/interfaces/modelo.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { MarcasService } from 'src/app/core/services/marcas.service';
import { ModelossService } from 'src/app/core/services/modelos.service';
import { ToastService } from '../../toast/services/toast.service';

@Component({
  selector: 'app-m-modelos-form',
  templateUrl: './m-modelos-form.component.html',
  styleUrls: ['./m-modelos-form.component.css']
})
export class MModelosFormComponent implements OnInit {
  @Input() idMarca: number = 0;
  @Output() savedModelo:EventEmitter<any> = new EventEmitter();
  @Output() cancelledModelo:EventEmitter<any> = new EventEmitter();
  showSpinner: boolean = false;
  isSaved: boolean = false;
  respuesta: string = '';
  messages: Toast[] = [];
  params: any;
  modelo: Modelo = { idModelo:0, modelo:'', marca: {} as Marca } as Modelo;
  marcas: Marca[] = [];


  private route = inject(ActivatedRoute);
  private modelosService = inject(ModelossService);
  private marcasService = inject(MarcasService);
  private formBuilder = inject(FormBuilder);
  private toastService = inject(ToastService);

  modeloForm = this.formBuilder.group({
    modelo: ['', [Validators.required, Validators.minLength(2)]],
    marca: [0, Validators.required], // Crear un FormControl para la marca
  });

  ngOnInit() {
    // this.route.paramMap.subscribe((params) => {
    //   this.modelo.idModelo = Number(params.get('id'));
    // });

    this.modelosService.idMarca.subscribe({
      next: (idMarca: number) =>{
        this.idMarca = idMarca;
        this.modeloForm.get('marca')?.setValue(this.idMarca);
        console.log('idMArca: ', this.idMarca)
        this.loadMarcas();
      }
    });


  }

  loadMarcas(){
    this.marcasService.getAll().subscribe({
      next: (resp) => {
        this.marcas = resp;
        // this.modeloForm.get('marca')?.setValue(this.idMarca);
        this.modeloForm.get('marca')?.setValue(this.idMarca);


      },
    });
  }
  save() {
    this.showSpinner = true;
    this.respuesta = '';

     // Verificar si el formulario es válido
     if (this.modeloForm.invalid) {
      // Marcar los controles del formulario como tocados para mostrar los mensajes de error
      this.modeloForm.markAllAsTouched();
      this.showSpinner = false; // Detener el spinner
      return; // Detener el proceso de guardado
    }

    // Obtener el valor del campo 'departamento' del formulario
    let idMarca = this.modeloForm.get('marca')!.value;
    let modelo = this.modeloForm.get('modelo')!.value ;
    // Asignar el valor obtenido a this.estatusServicio.departamento.idDepartamento
    this.modelo.marca = {} as Marca;
    this.modelo.marca.idMarca = idMarca!;
    this.modelo.idModelo = 0
    this.modelo.modelo =  modelo!;
    console.log('idMarca', idMarca);

    if (this.modelo.idModelo > 0) {
      console.log('Modelo enviado', this.modelo);
      this.modelosService.createOrUpdate(this.modelo).subscribe({
        next: (resp) => {

          this.savedModelo.emit(resp.modelo.idModelo);

          this.modelo = resp.modelo;
          this.respuesta = resp.mensaje;
          console.log('respModelo', resp);
          this.showSpinner = false;
          this.isSaved = true;
        },
        error: (resp) => {
          this.toastService.addMessage({
            title: 'Sistema',
            timeAgo: '',
            body: ' El Registro no se pudo grabar',
            type: 'danger',
          });
          console.log('update error:', resp);
          this.showSpinner = false;
          this.isSaved = true;
        },
      });
    } else {
      console.log('cliente enviado', this.modelo);

      this.modelosService.createOrUpdate(this.modelo).subscribe({
        next: (resp) => {

          console.log('respUsuario', resp);
          this.savedModelo.emit(resp.Modelo.idModelo);

          // this.Modelo.usuario = resp.usuario;
          this.showSpinner = false;
        },
        error: (resp) => {
          this.toastService.addMessage({
            title: 'Sistema',
            timeAgo: '',
            body: ' El Registro no se pudo grabar',
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
    this.modeloForm.markAsUntouched();
    this.cancelledModelo.emit();

  }

}
