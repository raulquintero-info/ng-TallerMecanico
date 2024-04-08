import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from '../interfaces/customers.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  urlTemp: string = 'http://localhost:3000';
  url: string = 'http://localhost:8080/api/clientes';
  // url_create: string = "http://localhost:8080/api/registroUsuarioCliente";

  private http = inject(HttpClient);

  currentCustomerData: BehaviorSubject<Customer> = new BehaviorSubject<Customer>({} as Customer)

  get currentCustomer(): Observable<Customer>{
    return this.currentCustomerData.asObservable();
  }

  getCurrentCustomer(){
    let currentCustomerData: any;

    currentCustomerData = localStorage.getItem('customer');
    currentCustomerData = JSON.parse(currentCustomerData);
    console.log('check if', currentCustomerData)
    if (currentCustomerData){
      this.currentCustomerData.next(currentCustomerData);
    } else{
      this.currentCustomerData.next({} as Customer);
    }

  }
  setCurrentCustomer(customer: Customer) {
    customer.vehiculos = [];
    this.currentCustomerData.next(customer);
    localStorage.setItem('customer', customer ? JSON.stringify(customer) : '');
  }

  getAll():Observable<any>{return this.http.get(this.url)};
  getById(id: number):Observable<any>{return this.http.get(this.url + "/" + id)};
  search(word: string):Observable<any>{return this.http.get(this.url + '/buscar?searchTerm=' + word)};
  //todo: actualizar url , en espera de integracion de spring security
  getCurrentUser():Observable<any>{return this.http.get(this.urlTemp+'/currentuser')};
  create(customer: any, roleName: string):Observable<any>{return this.http.post(this.url+ '?role=' + roleName, customer)};
  update(customer: Customer, rol: string):Observable<any>{return this.http.put(this.url + '/' + customer.idCliente + '?role=' + rol, customer)};
  delete(id: number):Observable<any>{return this.http.delete(this.url + "/" + id)}

  //todo: cambiar la ruta para obtener los vehiculos del cliente actual, en esperea de spring security
  getVehicles():Observable<any>{return this.http.get(this.url+'/1/vehiculos')};
  getVehiclesByCustomerId(id: number):Observable<any>{return this.http.get(this.url + `/${id}/vehiculos`)}

}
