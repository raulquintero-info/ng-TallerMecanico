import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UnsubscriptionError } from 'rxjs';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { Rol } from 'src/app/core/interfaces/rol.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { Usuario } from 'src/app/core/interfaces/usuario.interface';
import { ToastService } from 'src/app/core/modules/toast/services/toast.service';
import { CustomersService } from 'src/app/core/services/customers.service';
import { RolService } from 'src/app/core/services/rol.service';

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.css']
})
export class CustomersFormComponent implements OnInit {
  showSpinner: boolean = false;
  isSaved: boolean = false;
  respuesta: any;
  title: string = "Recepcion";
  subTitle: string = "Cliente Nuevo"
  buttons = [];
  customer: Customer = {
    usuario: { idUsuario: 0, email: '', password: '', rol: [] } as Usuario
  } as Customer;
  roles: Rol[] = [{ idRol: 0, nombre: "test" }];
  // user: Usuario = {} as Usuario
  params: any;


  // toastService = inject(ToastService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private customersService = inject(CustomersService);
  private rolService = inject(RolService);
  private toastService = inject(ToastService);
  private  formBuild = inject(FormBuilder);

  customersForm = this.formBuild.group({
    idCliente: [''],
    email : ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    apellidoPat: ['', [Validators.required, Validators.minLength(2)]],
    apellidoMat: ['', [Validators.required, Validators.minLength(2)]],
    domicilio: ['', [Validators.required, Validators.minLength(10)]],
    telefono: ['', [Validators.required, Validators.minLength(10)]],
  })

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.params = params);
    this.customer.idCliente = this.params.params.id;
    console.log('customer inicio', this.customer);
    if (this.customer.idCliente > 0) {
      this.customersService.getById(this.customer.idCliente).subscribe({
        next: resp => {
          this.customer = resp;
          this.customer.vehiculos =[];
          this.subTitle = "Editar Cliente"
          console.log('cliente recibido', this.customer)

          this.customersForm.patchValue({
            email: this.customer.usuario.email,
            nombre: this.customer.nombre,
            apellidoPat: this.customer.apellidoPaterno,
            apellidoMat: this.customer.apellidoMaterno,
            domicilio: this.customer.domicilio,
            telefono: this.customer.telefono
          });

        },
        error: resp => {
          this.subTitle = 'hubo un problema con la informacion de este registro'
        }
      })
    }
    this.rolService.getAll().subscribe({
      next: resp => {
        this.roles = resp;
        console.log('roles', resp);
      }
    })

  }


  save() {

    this.showSpinner = true;

    // Verificar si el formulario es válido
    if (this.customersForm.invalid) {
      // Marcar los controles del formulario como tocados para mostrar los mensajes de error
      this.customersForm.markAllAsTouched();
      this.showSpinner = false; // Detener el spinner
      return; // Detener el proceso de guardado
    }
    // asignar valores del formulario

    //datos cliente
    this.customer.nombre = this.customersForm.value.nombre!;
    this.customer.apellidoPaterno = this.customersForm.value.apellidoPat!;
    this.customer.apellidoMaterno = this.customersForm.value.apellidoMat!;
    this.customer.domicilio = this.customersForm.value.domicilio!;
    this.customer.telefono = this.customersForm.value.telefono!;

    // datos usuario
    this.customer.usuario.email = this.customersForm.value.email!;
    this.customer.usuario.password = this.customersForm.value.password!;


    if (this.customer.idCliente > 0) {
      this.customer.usuario.rol.push({ idRol: 1, nombre: 'CLIENTE' } as Rol);
      console.log('cliente enviado', this.customer);
      this.customersService.update(this.customer, 'CLIENTE').subscribe({
        next: resp => {
          this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: ' Registro Actualizado', type: 'success' })
          // this.customer.usuario = resp.usuario;
          console.log('respUsuario', resp)
          this.showSpinner = false;
          this.isSaved = true;
        },
        error: resp => {
          console.log('update error:', resp)
          this.showSpinner = false;
        }
      })
    } else {

      let data = {
        cliente: this.customer,
        usuario: this.customer.usuario

      }
      console.log('cliente enviado', data);
      this.customersService.create(data, 'CLIENTE').subscribe({
        next: resp => {
          console.log('customer resp', resp)
          this.customer = resp.Cliente;
          this.customersService.setCurrentCustomer(resp.Cliente);
          this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: ' Registro Grabado', type: 'success' })
          // this.customer.usuario = resp.usuario;
          console.log('respUsuario', resp)
          this.showSpinner = false;
          this.isSaved = true;
        },
        error: resp => {
          console.log('create error:', resp);
          this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: 'El Registro no se pudo grabar', type: 'danger' })
          this.respuesta = resp;
          this.showSpinner = false;
        }
      })
    }





    console.log(this.customer);

  }

}




