import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/customers.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  url: string = 'http://localhost:3000/clientes'

  constructor(private http: HttpClient) { }



  getAll():Observable<any>{return this.http.get(this.url)};
  getById(id: number):Observable<any>{return this.http.get(this.url + "?id=" + id)};
  create(customer: Customer):Observable<any>{return this.http.post(this.url, customer)};
  update(customer: Customer):Observable<any>{return this.http.put(this.url, customer)};
}
