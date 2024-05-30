import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { Modelo } from 'src/app/core/interfaces/modelo.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { ModelossService } from 'src/app/core/services/modelos.service';
import { MarcasService } from '../../../../../../core/services/marcas.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modelos-form',
  templateUrl: './modelos-form.component.html',
  styleUrls: ['./modelos-form.component.css'],
})
export class ModelosFormComponent implements OnInit {
  showSpinner: boolean = false;
  isSaved: boolean = false;
  respuesta: string = '';
  messages: Toast[] = [];
  params: any;
  modelo: Modelo = { marca: {} as Marca } as Modelo;
  marcas: Marca[] = [];
  title: string = 'Catalogos';
  subTitle: string = 'Agregar Modelo';
  buttons = [
    // { text: "Ver Modelos", path: "/admin/catalogos/Modelos" },
  ];

  private route = inject(ActivatedRoute);
  private modelosService = inject(ModelossService);
  private marcasService = inject(MarcasService);
  private formBuilder = inject(FormBuilder);

  modeloForm = this.formBuilder.group({
    modelo: ['', [Validators.required, Validators.minLength(2)]],
    marca: [null, Validators.required], // Crear un FormControl para la marca
  });

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.modelo.idModelo = Number(params.get('id'));
    });

    if (this.modelo.idModelo > 0) {
      this.subTitle = 'Editar Modelo';
      this.modelosService.getById(this.modelo.idModelo).subscribe({
        next: (resp) => {
          console.log(resp);
          this.modelo = resp;
          // if(!this.modelo.marca)
          //   this.modelo.marca = {idMarca:1, marca: ''};
          console.log('modelo', this.modelo);

          // Cargar los datos al formulario
          this.modeloForm.patchValue({
            modelo: resp.modelo,
            marca: resp.marca.idMarca,
          });
        },
      });
    }
    this.marcasService.getAll().subscribe({
      next: (resp) => {
        this.marcas = resp;
      },
    });
  }

  save() {
    this.showSpinner = true;
    this.respuesta = '';

    // let idM = this.modelo.marca;
    // this.modelo.marca = {} as Marca;
    // this.modelo.marca.idMarca = Number(idM);
    // console.log('idMarca', idM);

    //Ajuste para guardar correctamente el id

    // Obtener el valor del campo 'departamento' del formulario
    let idMarca = this.modeloForm.get('marca')!.value;
    // Asignar el valor obtenido a this.estatusServicio.departamento.idDepartamento
    this.modelo.marca = {} as Marca;
    this.modelo.marca.idMarca = idMarca!;

    console.log('idMarca', idMarca);

    if (this.modelo.idModelo > 0) {
      console.log('Modelo enviado', this.modelo);
      this.modelosService.createOrUpdate(this.modelo).subscribe({
        next: (resp) => {
          this.messages.push({
            title: 'Sistema',
            timeAgo: '',
            body: ' Registro Grabado',
            type: 'success',
          });

          this.modelo = resp.modelo;
          this.respuesta = resp.mensaje;
          console.log('respModelo', resp);
          this.showSpinner = false;
          this.isSaved = true;
        },
        error: (resp) => {
          this.messages.push({
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
          this.messages.push({
            title: 'Sistema',
            timeAgo: '',
            body: ' Registro Grabado',
            type: 'success',
          });
          // this.Modelo.usuario = resp.usuario;
          console.log('respUsuario', resp);
          this.showSpinner = false;
        },
        error: (resp) => {
          this.messages.push({
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
}
