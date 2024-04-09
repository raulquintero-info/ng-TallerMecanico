import { Component, OnInit, inject } from '@angular/core';
import { Employee } from 'src/app/core/interfaces/employee.interface';
import { EmployeesService } from 'src/app/core/services/employees.service';

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

  private employeesService = inject(EmployeesService);

  ngOnInit(){

    this.employeesService.getAll().subscribe({
      next: resp=>{
        this.employees = resp;
      }
    })


  }

}
