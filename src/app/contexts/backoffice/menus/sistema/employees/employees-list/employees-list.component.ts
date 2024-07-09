import { Component, OnInit, inject } from '@angular/core';
import { Employee } from 'src/app/core/interfaces/employee.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { EmployeesService } from 'src/app/core/services/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  title: string = "Sistema";
  subTitle: string = "Lista de Empleado";
  buttons = [{text: "Agregar", path: "/admin/sistema/empleados-form/0"}];
  employees: Employee[] = [];
  messages: Toast[] = [];

  private employeesService = inject(EmployeesService);

  ngOnInit(){

    this.loadEmployees();

  }

  loadEmployees(){
    this.employeesService.getAll().subscribe({
      next: resp=>{
        this.employees = resp;
        console.log('empleados', resp);
      }
    })
  }

  onDeleteById(id: number){
     Swal.fire({
      title: 'Eliminar Registro',
      text: 'Desea Continuar?',
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'

    }).then( (result:any)=> {
      if (result.isConfirmed) {
        console.log('eliminar registro');
        this.deleteRow(id)
      }


    })

  }


  deleteRow(id:number){
    this.employeesService.delete(id).subscribe({
      next: resp=>{
        this.loadEmployees();
        this.messages.push({ title: "Sistema", timeAgo: "", body: ' Registro Eliminado', type: 'warning' })
      },
      error: resp=>{
        console.log('resp error', resp);
        this.messages.push({ title: "Sistema", timeAgo: "", body: ' Registro no pudo ser eliminado', type: 'danger' })
      }
    });
  }

  // onDeleteById(id: number){
  //   this.deleteById(id);
  // }

}
