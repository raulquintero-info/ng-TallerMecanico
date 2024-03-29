import { Component,  OnInit,  inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UnsubscriptionError } from 'rxjs';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { Rol } from 'src/app/core/interfaces/rol.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { Usuario } from 'src/app/core/interfaces/usuario.interface';
import { CustomersService } from 'src/app/core/services/customers.service';
import { RolService } from 'src/app/core/services/rol.service';

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.css']
})
export class CustomersFormComponent implements OnInit {
  showSpinner: boolean = false;
  respuesta: any;
  messages: Toast[] = []
  title: string = "Recepcion";
  subTitle: string = "Cliente Nuevo"
  buttons = [];
  customer: Customer = {
    usuario: {idUsuario: 0, email:'', password: '', rol: []} as Usuario
  } as Customer;
  roles: Rol[] = [{ idRol: 0, nombre: "test" }];
  // user: Usuario = {} as Usuario
  params: any;

  // toastService = inject(ToastService);
  private route = inject(ActivatedRoute);
  private router = inject( Router);
  private customerService = inject(CustomersService);
  private rolService = inject(RolService);

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.params = params);
    this.customer.idCliente = this.params.params.id;
    console.log('customer inicio', this.customer);
    if (this.customer.idCliente > 0) {
      this.customerService.getById(this.customer.idCliente).subscribe({
        next: resp => {
          this.customer = resp;
          this.subTitle = "Editar Cliente"
          console.log('cliente recibido', this.customer)

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
    if (this.customer.idCliente > 0) {
      console.log('cliente enviado', this.customer);
      this.customerService.update(this.customer, 'CLIENTE').subscribe({
        next: resp => {
          this.messages.push({ title: "Sistema", timeAgo: "", body: ' Registro Grabado', type:'success' })
          // this.customer.usuario = resp.usuario;
          console.log('respUsuario', resp)
          this.showSpinner = false;
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
      this.customerService.create(data, 'ADMIN').subscribe({
        next: resp => {
          this.messages.push({ title: "Sistema", timeAgo: "", body: ' Registro Grabado', type:'success' })
          // this.customer.usuario = resp.usuario;
          console.log('respUsuario', resp)
          this.showSpinner = false;
        },
        error: resp => {
          console.log('create error:', resp);
          this.respuesta = resp;
          this.showSpinner = false;
        }
      })
    }





    console.log(this.customer);

  }

}




