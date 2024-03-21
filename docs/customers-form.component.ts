import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/core/interfaces/customers.interface';
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
  params: any;

  customerForm = this.formBuilder.group({
    // idCliente:[0, []],
    usuario:['', [Validators.required, Validators.email]],
    password:['', [Validators.required]],
    nombre:['', [Validators.required]],
    apellidoPaterno:['', [Validators.required]],
    apellidoMaterno:['', []],
    domicilio:['', []],
    telefono:['', []],

  })

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserssService,
    private customerService: CustomersService
  ){}

  // public get idCliente(){return this.customerForm.controls.idCliente;}
  public get usuario(){return this.customerForm.controls.usuario;}
  public get password(){return this.customerForm.controls.password;}
  public get nombre(){return this.customerForm.controls.nombre;}
  public get apellidoPaterno(){return this.customerForm.controls.nombre;}
  public get apellidoMaterno(){return this.customerForm.controls.nombre;}
  public get domicilio(){return this.customerForm.controls.nombre;}
  public get telefono(){return this.customerForm.controls.nombre;}

  ngOnInit(){
    this.route.paramMap.subscribe(params => this.params = params);
    this.customer.idCliente = this.params.params.id;
    if(this.customer.idCliente>0){
      this.customerService.get(this.customer.idCliente).subscribe({
        next: resp=>{

         console.log(resp)

        }
      })
    }
  }


  save(){
    // console.log(this.customerForm.value)
    this.showSpinner =true;
    if (this.customerForm.valid){
    let c = this.customerForm.value;
    this.customer.idCliente = this.params.params.id;
    this.customer.usuario = {idUsuario: 0, email: c.usuario!, password: c.password!};
    this.customer.nombre = c.nombre!;
    this.customer.apellidoPaterno = c.apellidoPaterno!;
    this.customer.domicilio = c.domicilio!;
    this.customer.telefono = c.telefono!

    this.userService.create(this.customer.usuario).subscribe({
      next: resp=>{
        this.customer.usuario = resp.usuario;
        console.log('respUsuario',resp)
        this.customerService.create(this.customer).subscribe({
          next: resp=>{
            this.customer.usuario = resp.usuario;
          },
          error: resp=>{
            console.log(resp)
          }
        })
      }
    })




  }else{
    this.customerForm.markAllAsTouched();
    alert("error")
  }
  console.log(this.customer);
    this.showSpinner =false;

  }


  }




