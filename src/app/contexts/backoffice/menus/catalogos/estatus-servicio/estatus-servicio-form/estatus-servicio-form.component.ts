import { Component, OnInit, inject } from '@angular/core';
import { EstatusServicio } from '../../../../../../core/interfaces/estatusServicio.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { EstatusService } from 'src/app/core/services/estatusService.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Departamento } from 'src/app/core/interfaces/departamento.interface';
import { DepartamentosService } from 'src/app/core/services/departamentos.service';

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
  estatusServicio: EstatusServicio = { departamento:{} as Departamento} as EstatusServicio;
  departamentos: Departamento[]=[];

  title: string = "Catalogos";
  subTitle: string = "Agregar Estatus";
  buttons = [
    { text: "Ver Estatus", path: "/admin/catalogos/estatus-servicio" },
  ];

  private estatusService = inject(EstatusService);
  private departamentosService= inject(DepartamentosService);
  private route = inject(ActivatedRoute);
  private formBuilder = inject(FormBuilder);

  estatusServicioForm = this.formBuilder.group({
    idEstatusServicio: [''],
    estatusServicio: ['', [Validators.required, Validators.minLength(5)]],
    departamento: [null, Validators.required]
  });

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.estatusServicio.idEstatusServicio = Number(params.get('id'))
    });

    this.estatusServicioForm.get('idEstatusServicio')?.disable();
    if (this.estatusServicio.idEstatusServicio > 0) {
      this.subTitle = 'Editar Estatus';
      this.estatusService.getById(this.estatusServicio.idEstatusServicio).subscribe({
        next: resp => {
          console.log(resp);
          this.estatusServicio = resp;
          if(this.estatusServicio.departamento == null)
            this.estatusServicio.departamento = {idDepartamento:0, departamento: ''};
          console.log('estatusServicio', this.estatusServicio);

          // Cargar los datos al formulario
          this.estatusServicioForm.patchValue({
            idEstatusServicio: resp.idEstatusServicio,
            estatusServicio: resp.estatusServicio,
            departamento: resp.departamento.idDepartamento
          });
        }
      })
    }
    this.departamentosService.getAll().subscribe({
      next: resp=>{
        this.departamentos = resp;
        console.log(resp)
      }
    })


    // if (this.estatusServicio.idEstatusServicio > 0) {
    //   this.subTitle = 'Editar Marca';
    //   this.estatusService.getById(this.estatusServicio.idEstatusServicio).subscribe({
    //     next: resp => {
    //       this.estatusServicio = resp;
    //       this.estatusServicioForm.get("idEstatusServicio")?.setValue(resp.idEstatusServicio);
    //       this.estatusServicioForm.get("idEstatusServicio")?.disable();
    //       this.estatusServicioForm.get("estatusServicio")?.setValue(resp.estatusServicio);
    //     }
    //   })
    // }


  }


  save() {
    this.showSpinner = true;
    this.respuesta = '';
    this.estatusServicio.estatusServicio = this.estatusServicioForm.value.estatusServicio!;

    // Obtener el valor del campo 'departamento' del formulario
    let idDepartamento = this.estatusServicioForm.get('departamento')!.value;
    // Asignar el valor obtenido a this.estatusServicio.departamento.idDepartamento
    this.estatusServicio.departamento = {} as Departamento;
    this.estatusServicio.departamento.idDepartamento = idDepartamento!;

    console.log('idDepartamento',idDepartamento);

    if (this.estatusServicio.idEstatusServicio > 0) {
      console.log('Estatus Servicio enviado', this.estatusServicio);
      this.estatusService.createOrUpdate(this.estatusServicio).subscribe({
        next: resp => {
          this.messages.push({ title: "Sistema", timeAgo: "", body: ' Registro Grabado', type:'success' })

          this.estatusServicio = resp.estatusServicio;
          this.respuesta = resp.mensaje;
          console.log('respModelo', resp)
          this.showSpinner = false;
        },
        error: resp => {
          this.messages.push({ title: "Sistema", timeAgo: "", body: ' El Registro no se pudo grabar', type:'danger' })
          console.log('update error:', resp)
          this.showSpinner = false;
        }
      })
    } else {

      console.log('cliente enviado', this.estatusServicio);

      this.estatusService.createOrUpdate(this.estatusServicio).subscribe({
        next: resp => {
          this.messages.push({ title: "Sistema", timeAgo: "", body: ' Registro Grabado', type:'success' })
          // this.Modelo.usuario = resp.usuario;
          console.log('respUsuario', resp)
          this.showSpinner = false;
        },
        error: resp => {
          this.messages.push({ title: "Sistema", timeAgo: "", body: ' El Registro no se pudo grabar', type:'danger'  })
          console.log('create error:', resp);
          this.respuesta = resp;
          this.showSpinner = false;
        }
      })
    }
  }
  // save() {
  //   this.showSpinner = true;
  //   this.respuesta = '';

  //   // Verificar si el formulario es válido
  //   if (this.estatusServicioForm.invalid) {
  //     // Marcar los controles del formulario como tocados para mostrar los mensajes de error
  //     this.estatusServicioForm.markAllAsTouched();
  //     this.showSpinner = false; // Detener el spinner
  //     return; // Detener el proceso de guardado
  //   }

  //   // Asignar los valores del formulario al objeto marca
  //   this.estatusServicio.estatusServicio = this.estatusServicioForm.value.estatusServicio!;

  //   if (this.estatusServicio.idEstatusServicio > 0) {
  //     console.log('Estatus Enviado', this.estatusServicio);
  //     this.estatusService.createOrUpdate(this.estatusServicio).subscribe({
  //       next: resp => {
  //         this.messages.push({ title: "Sistema", timeAgo: "", body: "Registro Grabado", type: "success" })

  //         this.estatusServicio = resp.estatusServicio;
  //         this.respuesta = resp.mensaje;
  //         console.log('Marca Recibida', resp)
  //         this.showSpinner = false;
  //       },
  //       error: resp => {
  //         this.messages.push({ title: "Sistema", timeAgo: "", body: "El registro no se ha grabado, intentelo mas tarde", type: "danger" })
  //         console.log('update error:', resp)
  //         this.showSpinner = false;
  //       }
  //     })
  //   } else {

  //     console.log('cliente enviado', this.estatusServicio);

  //     this.estatusService.createOrUpdate(this.estatusServicio).subscribe({
  //       next: resp => {
  //         this.messages.push({ title: "Sistema", timeAgo: "", body: "Registro Grabado", type: "success" })
  //         console.log('respUsuario', resp)
  //         this.showSpinner = false;
  //       },
  //       error: resp => {
  //         this.messages.push({ title: "Sistema", timeAgo: "", body: "El registro no se ha grabado, intentelo mas tarde", type: "danger" })
  //         console.log('create error:', resp);
  //         this.respuesta = resp;
  //         this.showSpinner = false;
  //       }
  //     });
  //   }


  // }



}
