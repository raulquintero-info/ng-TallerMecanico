import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/modules/auth/interfaces/user.interface';
import { LoginService } from 'src/app/core/modules/auth/services/login.service';
import { Employee } from '../../../core/interfaces/employee.interface';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { CustomersService } from 'src/app/core/services/customers.service';

@Component({
  selector: 'app-navbar-back',
  templateUrl: './navbar-back.component.html',
  styleUrls: ['./navbar-back.component.css']
})
export class NavbarBackComponent implements OnInit {
  word: string ='';
  customers: Customer[] = [];
  titleBar: String = "Taller Mecánico"
  userLoginOn: boolean = false;
  userData: User = { "username":"", authorities:[{}] } as User;


  constructor(private loginService: LoginService, private router: Router, private customersService: CustomersService){}
  ngOnInit() {

    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      }
    });

    this.loginService.currentUserData.subscribe({
      next: (userData) => {
        this.userData = userData
      }
    })
    console.log('hola');
    this.searchCustomer();
  }


  searchCustomer(){
      console.log(this.word);
      this.customersService.getAll().subscribe({
        next: (resp: any)=>{
          console.log(resp)
          this.customers = resp;
        }
      })
  }

  selCustomer(customer: Customer){
    this.customersService.setCurrentCustomer(customer);
    this.router.navigateByUrl('/admin/recepcion/clientes-view/' + customer.idCliente)
  }

  login(){
    this.router.navigateByUrl('/login');
  }
  logout(){
    this.loginService.logout();
    this.router.navigateByUrl('/');
  }



}
