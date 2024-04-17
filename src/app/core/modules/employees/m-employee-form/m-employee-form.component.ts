import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from 'src/app/core/interfaces/employee.interface';

@Component({
  selector: 'app-m-employee-form',
  templateUrl: './m-employee-form.component.html',
  styleUrls: ['./m-employee-form.component.css']
})
export class MEmployeeFormComponent {
@Input() employee: Employee = {} as Employee;
@Input() showSpinner: boolean = false;
@Input() isSaved: boolean = false;

@Output()
onNewEmployee:EventEmitter<Employee> = new EventEmitter();

emitEmployee():void {
  this.onNewEmployee.emit(this.employee);
}




}
