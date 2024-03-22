import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/customers.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  urlTemp: string = 'http://localhost:3000'
  url: string = 'http://localhost:8080/api/clientes'

  constructor(private http: HttpClient) { }



  getAll():Observable<any>{return this.http.get(this.url)};
  getById(id: number):Observable<any>{return this.http.get(this.url + "/" + id)};
  //todo: actualizar url , en espera de integracion de spring security
  getCurrentUser():Observable<any>{return this.http.get(this.urlTemp+'/currentuser')};
  create(customer: Customer):Observable<any>{return this.http.post(this.url, customer)};
  update(customer: Customer):Observable<any>{return this.http.put(this.url, customer)};

  //todo: cambiar la ruta para obtener los vehiculos del cliente actual, en esperea de spring security
  getVehicles():Observable<any>{return this.http.get(this.url+'/1/vehiculos')};
  getVehiclesByCustomerId(id: number):Observable<any>{return this.http.get(this.url + `/${id}/vehiculos`)}

}
