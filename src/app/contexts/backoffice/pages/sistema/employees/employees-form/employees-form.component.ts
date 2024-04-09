import { Component, OnInit, inject } from '@angular/core';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { Rol } from 'src/app/core/interfaces/rol.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { RolService } from 'src/app/core/services/rol.service';
import { EmployeesService } from '../../../../../../core/services/employees.service';
import { Employee } from 'src/app/core/interfaces/employee.interface';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/core/interfaces/usuario.interface';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit {
  showSpinner: boolean = false;
  isSaved: boolean = false;
  respuesta: string = '';
  messages: Toast[] = [];
  title: string = "Sistema";
  subTitle: string = "Editar Empleado";
  buttons = [{ text: "Empleados", path: "/admin/sistema/empleados" }];
  customer: Customer = {} as Customer;
  roles: Rol[] = [];
  employee: Employee = {usuario: {email:''} as Usuario} as Employee;
  params: any;

  private rolesService = inject(RolService);
  private employeesService = inject(EmployeesService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.params = params);
    this.employee.idEmpleado = this.params.params.id;

    if (this.employee.idEmpleado > 0) {
      this.employeesService.getById(this.employee.idEmpleado).subscribe({
        next: (employee: Employee) => {
          console.log('employee', employee);
          employee.usuario.rol = [
            {
              "idRol": 1,
              "nombre": "ADMIN"
            }
          ]
          this.employee = employee;
        }
      })
    } else {
      this.employee.usuario.rol = [
        {
          "idRol": 1,
          "nombre": "ADMIN"
        }
      ]
    }

    this.rolesService.getAll().subscribe({
      next: (roles: Rol[]) => {
        console.log('roles', roles);
        this.roles = roles;
      }
    });


  }

  save() {

    this.showSpinner = true;
    if (this.employee.idEmpleado > 0) {
      console.log('empleado enviado', this.customer);
      this.employeesService.update(this.employee, 'ADMIN').subscribe({
        next: resp => {
          this.messages.push({ title: "Sistema", timeAgo: "", body: ' Registro Grabado', type: 'success' })
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
        cliente: this.employee,
        usuario: this.employee.usuario

      }
      console.log('cliente enviado', data);
      this.employeesService.create(data, 'ADMIN').subscribe({
        next: resp => {
          console.log('empleado resp', resp)
          this.customer = resp.empleado
          this.messages.push({ title: "Sistema", timeAgo: "", body: ' Registro Grabado', type: 'success' })
          this.showSpinner = false;
          this.isSaved = true;
        },
        error: resp => {
          console.log('create error:', resp);
          this.messages.push({ title: "Sistema", timeAgo: "", body: 'El Registro no se pudo grabar', type: 'danger' })
          this.respuesta = resp;
          this.showSpinner = false;
        }
      })
    }

    this.messages.pop()
  }


}
