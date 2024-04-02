import { Component, Input, inject } from '@angular/core';
import { Employee } from 'src/app/core/interfaces/employee.interface';

@Component({
  selector: 'app-m-employees-list',
  templateUrl: './m-employees-list.component.html',
  styleUrls: ['./m-employees-list.component.css']
})
export class MEmployeesListComponent {
    @Input() employees: Employee [] = [];
    @Input() pathService: String = "";


  employeeView(id: number){



  }


  }

