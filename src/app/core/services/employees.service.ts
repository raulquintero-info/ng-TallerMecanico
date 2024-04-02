import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from '../interfaces/customers.interface';
import { Employee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  url: string = 'http://localhost:8080/api/empleados';
  // url_create: string = "http://localhost:8080/api/registroUsuarioCliente";

  private http = inject(HttpClient);


  getAll():Observable<any>{return this.http.get(this.url)};
  getById(id: number):Observable<any>{return this.http.get(this.url + "/" + id)};
  create(employee: any, roleName: string):Observable<any>{return this.http.post(this.url+ '?role=' + roleName, employee)};
  update(employee: Employee, rol: string):Observable<any>{return this.http.put(this.url + '/' + employee.idEmpleado + '?role=' + rol, employee)};
  delete(id: number):Observable<any>{return this.http.delete(this.url + "/" + id)}


}
