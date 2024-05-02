import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/core/interfaces/employee.interface';

@Component({
  selector: 'app-m-employee-form',
  templateUrl: './m-employee-form.component.html',
  styleUrls: ['./m-employee-form.component.css']
})
export class MEmployeeFormComponent implements OnChanges {
@Input() employee: Employee = {} as Employee;
@Input() showSpinner: boolean = false;
@Input() isSaved: boolean = false;

@Output()
onNewEmployee:EventEmitter<Employee> = new EventEmitter();

private formBuild = inject(FormBuilder); 

  employeeForm = this.formBuild.group({
    idEmpleado: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    aPaterno: ['', [Validators.required, Validators.minLength(3)]],
    aMaterno: ['', [Validators.required, Validators.minLength(3)]],
    rfc: ['', [Validators.required, Validators.minLength(12)]],
    curp:['', [Validators.required, Validators.minLength(18)]],
    //telefono: ['', [Validators.required, Validators.minLength(10)]],
    puesto: ['', [Validators.required, Validators.minLength(5)]],
    observaciones: ['', [Validators.required, Validators.minLength(10)]],
  })


  ngOnChanges(changes: SimpleChanges) {
    if (changes['employee'] && changes['employee'].currentValue) {
      this.cargaDatos(changes['employee'].currentValue);
    }
  }

  cargaDatos(employee: Employee){
    this.employeeForm.patchValue({
      email: this.employee.usuario.email,
      password: this.employee.usuario.password,
      nombre: this.employee.nombre,
      aPaterno: this.employee.apellidoPaterno,
      aMaterno: this.employee.apellidoMaterno,
      rfc: this.employee.rfc,
      curp: this.employee.curp,
      //telefono: this.employee.
      puesto: this.employee.puesto,
      observaciones: this.employee.observaciones
    })
  }


emitEmployee():void {
  this.onNewEmployee.emit(this.employee);
}




}
