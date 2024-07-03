import { Component, OnInit, inject } from '@angular/core';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { Employee } from 'src/app/core/interfaces/employee.interface';
import { User } from 'src/app/core/modules/auth/interfaces/user.interface';
import { LoginService } from 'src/app/core/modules/auth/services/login.service';
import { CustomersService } from 'src/app/core/services/customers.service';
import { EmployeesService } from 'src/app/core/services/employees.service';

@Component({
  selector: 'shared-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title: string = "";
  subTitle: string = "Mi Perfil";
  buttons = [/* { text: "Agregar", path: "/admin/profile/..." } */];
  user: User = {} as User;
  employee: Employee = {} as Employee;
  customer: Customer = {} as Customer;
  private loginService = inject(LoginService);
  private employeesService = inject(EmployeesService);
  private customersService = inject(CustomersService);

  ngOnInit(): void {
    this.getCurrentUser()
  }

  getCurrentUser(){
    this.loginService.currentUser().subscribe({
      next: (user: User) => {
        this.user = user;
        if(user.idEmpleado>0) this.getEmployeeInfo(user.idEmpleado);
        else this.getCustomerInfo(user.idCliente);
      }
    });
  }

  getEmployeeInfo(id: number){
    this.employeesService.getById(id).subscribe({
      next: (employee:Employee)=>{this.employee = employee;}
    })
  }
  getCustomerInfo(id: number){
    this.customersService.getById(id).subscribe({
      next: (customer: Customer)=>{this.customer = customer;}
    })
  }

}
