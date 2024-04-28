import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from '../interfaces/customers.interface';
import { Employee } from '../interfaces/employee.interface';
import { Page } from '../interfaces/page.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  url: string = environment.api +'/api/empleados';
  // url_create: string = "http://localhost:8080/api/registroUsuarioCliente";

  private http = inject(HttpClient);


  getAll():Observable<any>{return this.http.get(this.url)};
  getPaginatedData(page: number): Observable<Page<any>> {return this.http.get<Page<any>>(this.url +`/page/${page}`)};
  getById(id: number):Observable<any>{return this.http.get(this.url + "/" + id)};
  create(employee: any, roleName: string):Observable<any>{return this.http.post(this.url+ '?role=' + roleName, employee)};
  update(employee: Employee, rol: string):Observable<any>{return this.http.put(this.url + '/' + employee.idEmpleado + '?role=' + rol, employee)};
  delete(id: number):Observable<any>{return this.http.delete(this.url + "/" + id)}


}
