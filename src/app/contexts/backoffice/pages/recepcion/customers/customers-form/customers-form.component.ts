import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { Usuario } from 'src/app/core/interfaces/usuario.interface';
import { User } from 'src/app/core/modules/auth/interfaces/user.interface';
import { CustomersService } from 'src/app/core/services/customers.service';
import { UserssService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.css']
})
export class CustomersFormComponent implements OnInit{
  showSpinner: boolean = false;
  customer: Customer = {} as Customer ;
  user: Usuario = {} as Usuario
  params: any;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserssService,
    private customerService: CustomersService
  ){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => this.params = params);
    this.customer.idCliente = this.params.params.id;
    if(this.customer.idCliente>0){
      this.customerService.getById(this.customer.idCliente).subscribe({
        next: resp=>{
          this.customer = resp[0];
          this.user = this.customer.usuario;
         console.log(this.customer)

        }
      })
    }
  }


  save(){
    this.showSpinner =true;

    this.customerService.create(this.customer).subscribe({
      next: resp=>{
        this.customer.usuario = resp.usuario;
        console.log('respUsuario',resp)

      }
    })





  console.log(this.customer);
    this.showSpinner =false;

  }


  }




