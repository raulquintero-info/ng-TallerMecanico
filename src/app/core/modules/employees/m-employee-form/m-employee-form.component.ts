import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/core/interfaces/employee.interface';
import { Rol } from 'src/app/core/interfaces/rol.interface';
import { Usuario } from 'src/app/core/interfaces/usuario.interface';

@Component({
  selector: 'app-m-employee-form',
  templateUrl: './m-employee-form.component.html',
  styleUrls: ['./m-employee-form.component.css']
})
export class MEmployeeFormComponent implements OnChanges {
@Input() employee: Employee = {usuario:{idUsuario: 0}as Usuario} as Employee;
@Input() roles: Rol[] = [];
@Input() showSpinner: boolean = false;
@Input() isSaved: boolean = false;


@Output() onNewEmployee:EventEmitter<any> = new EventEmitter();

private formBuild = inject(FormBuilder);

  employeeForm = this.formBuild.group({
    idEmpleado: [{value:this.employee.idEmpleado, disabled: true}],
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    aPaterno: ['', [Validators.required, Validators.minLength(3)]],
    aMaterno: ['', [Validators.required, Validators.minLength(3)]],
    rfc: ['', [Validators.required, Validators.minLength(12)]],
    curp:['', [Validators.required, Validators.minLength(18)]],
    //telefono: ['', [Validators.required, Validators.minLength(10)]],
    puesto: ['', [Validators.required, Validators.minLength(5)]],
    observaciones: ['', [Validators.required, Validators.minLength(10)]],
    role: this.employee.rol,
    usuario: {} as Usuario
  })


  ngOnChanges(changes: SimpleChanges) {
    if (changes['employee'] && changes['employee'].currentValue) {
      this.cargaDatos(changes['employee'].currentValue);
    }
  }

  cargaDatos(employee: Employee){
    this.employeeForm.patchValue({
      idEmpleado:this.employee.idEmpleado,
      username: this.employee.usuario.username,
      password: this.employee.usuario.password,
      nombre: this.employee.nombre,
      aPaterno: this.employee.apellidoPaterno,
      aMaterno: this.employee.apellidoMaterno,
      rfc: this.employee.rfc,
      curp: this.employee.curp,
      //telefono: this.employee.
      puesto: this.employee.puesto,
      observaciones: this.employee.observaciones,
      role: {idRol: 2, nombre: 'empleado'} as Rol,
      usuario: this.employee.usuario
    })
  }


emitEmployee():void {
    // Verificar si el formulario es válido
    if (this.employeeForm.invalid) {
      // Marcar los controles del formulario como tocados para mostrar los mensajes de error
      this.employeeForm.markAllAsTouched();
      this.showSpinner = false; // Detener el spinner
      return; // Detener el proceso de guardado
    }
  this.employee.idEmpleado = this.employee.idEmpleado;
  this.employee.nombre = this.employeeForm.value.nombre!;
  this.employee.apellidoPaterno = this.employeeForm.value.aPaterno!;
  this.employee.apellidoMaterno = this.employeeForm.value.aMaterno!;
  this.employee.curp = this.employeeForm.value.curp!;
  this.employee.rfc = this.employeeForm.value.rfc!;
  this.employee.puesto = this.employeeForm.value.puesto!;
  this.employee.observaciones = this.employeeForm.value.observaciones!;

  // datos usuario
  this.employee.usuario.username = this.employeeForm.value.username!;
  this.employee.usuario.password = this.employeeForm.value.password!;
  this.employee.usuario.rol[0] = this.employeeForm.value.role!;
  this.onNewEmployee.emit(this.employee);
  console.log('emit', this.employee)
}




}
