import { Component } from '@angular/core';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent {
  title: string = "Sistema";
  subTitle: string = "Lista de empleados";
  buttons = [{text: "Empleados", path: "/admin/sistema/empleados"}];
}
