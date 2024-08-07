import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from '../interfaces/customers.interface';
import { Page } from '../interfaces/page.interface';
import { environment } from 'src/environments/environment';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  urlAuth: string = environment.api + '/api/auth';
  url: string = environment.api + '/api/clientes' ; //'http://localhost:8080/api/clientes';
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
    console.log('set cliente', customer);
    customer.vehiculos = [];
    this.currentCustomerData.next(customer);
    localStorage.setItem('customer', customer ? JSON.stringify(customer) : '');
  }

  getAll():Observable<any>{return this.http.get(this.url)};
  getPaginatedData(page: number): Observable<Page<any>> {return this.http.get<Page<any>>(this.url +`/page/${page}`)};
  getById(id: number):Observable<any>{return this.http.get(this.url + "/" + id)};
  search(word: string):Observable<any>{return this.http.get(this.url + '/buscar?searchTerm=' + word)};
  create(customer: any, roleName: string):Observable<any>{return this.http.post(this.url+ '?role=' + roleName, customer)};
  update(customer: Customer, rol: string):Observable<any>{return this.http.put(this.url + '/' + customer.idCliente + '?role=' + rol, customer)};
  delete(id: number):Observable<any>{return this.http.delete(this.url + "/" + id)}

  getVehiclesByCustomerId(id: number):Observable<any>{return this.http.get(this.url + `/${id}/vehiculos`)}

  getcustomersPdf(params: string ){return this.http.get(this.url + '/pdf' + params)}
}
