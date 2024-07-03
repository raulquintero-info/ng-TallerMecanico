import { Component, OnInit, inject } from '@angular/core';
import { Customer } from 'src/app/core/interfaces/customers.interface';
import { Rol } from 'src/app/core/interfaces/rol.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { RolService } from 'src/app/core/services/rol.service';
import { EmployeesService } from '../../../../../../core/services/employees.service';
import { Employee } from 'src/app/core/interfaces/employee.interface';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/core/interfaces/usuario.interface';
import { ToastService } from 'src/app/core/modules/toast/services/toast.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit {
  showSpinner: boolean = false;
  isSaved: boolean = false;
  respuesta: string = '';
  title: string = "Sistema";
  subTitle: string = "Editar Empleado";
  buttons = [{ text: "Empleados", path: "/admin/sistema/empleados" }];
  roles: Rol[] = [];
  employee: Employee = {usuario: {idUsuario: 0,email:''} as Usuario} as Employee;
  params: any;

  private rolesService = inject(RolService);
  private employeesService = inject(EmployeesService);
  private route = inject(ActivatedRoute);
  private toastService = inject(ToastService);
  private  formBuild = inject(FormBuilder);



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
              "nombre": "EMPLEADO"
            }
          ]
          this.employee = employee;
          console.log('empleado', this.employee)
        }
      })
    } else {
      this.employee.usuario.rol = [
        {
          "idRol": 1,
          "nombre": "EMPLEADO"
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

  save(employee: Employee) {



    this.showSpinner = true;
    if (employee.idEmpleado > 0) {
      console.log('empleado enviado', employee);
      this.employeesService.update(employee, 'ADMIN').subscribe({
        next: resp => {
          this.employee = resp.empleado
          this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: ' Registro Grabado', type: 'success' })
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

      //preparando informacion pra enviar al endpoint
      let data = {
        usuario: employee.usuario,
        empleado: employee,
      }
      data.empleado.usuario = {} as Usuario;
      console.log('empleado enviado', data);
      this.employeesService.create(data, 'EMPLEADO').subscribe({
        next: resp => {
          console.log('empleado resp', resp)
          this.employee = resp.Empleado
          this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: ' Registro Grabado', type: 'success' })
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

  }

  delete(id: number){
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'

    }).then(function () {

      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )

    })
    // this.deleteConfirmed(id);
  }
  deleteConfirmed(id: number){
    this.employeesService.delete(id).subscribe({
      next: resp=>{
        this.toastService.addMessage({ title: "Sistema", timeAgo: "", body: 'El Registro ha sido borrado', type: 'warning' })

      }
    });
  }

  onNewEmployee(employee: Employee):void{
    this.employee = employee;
    this.save(employee);
    console.log('empleado grabado',employee)
  }

  prepareEmployeeToSave(){

  }
}



// {
//   "idCliente": 42,
//   "nombre": "nuevo",
//   "apellidoPaterno": "usuario",
//   "apellidoMaterno": "user",
//   "domicilio": "desconocido",
//   "telefono": "6865554444",
//   "usuario": {
//       "idUsuario": 35,
//       "email": null,
//       "password": null,
//       "rol": []
//   },
//   "vehiculos": null
// }

// {
//   "employee": {
//       "usuario": {
//           "idUsuario": 0,
//           "email": "root",
//           "rol": [
//               {
//                   "idRol": 1,
//                   "nombre": "EMPLEADO"
//               }
//           ],
//           "password": "12345"
//       },
//       "idEmpleado": "0",
//       "nombre": "root",
//       "apellidoPaterno": "admin",
//       "apellidoMaterno": "aministrador",
//       "rfc": "dsfsdf234234sdf",
//       "curp": "6865554444",
//       "puesto": "tecnico",
//       "observaciones": "sin observaciones"
//   },
//   "usuario": {
//       "idUsuario": 0,
//       "email": "root",
//       "rol": [
//           {
//               "idRol": 1,
//               "nombre": "EMPLEADO"
//           }
//       ],
//       "password": "12345"
//   }
// }
