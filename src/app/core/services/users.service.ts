import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/customers.interface';
import { Usuario } from '../interfaces/usuario.interface';
import { Page } from '../interfaces/page.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserssService {

  url: string =  environment.api + '/api/usuarios'

  constructor(private http: HttpClient) { }


  getAll():Observable<any>{return this.http.get(this.url)};
  getPaginatedData(page: number): Observable<Page<any>> {return this.http.get<Page<any>>(this.url +`/page/${page}`)};
  get(id: number):Observable<any>{return this.http.get(this.url + '/' + id)};
  create(user: Usuario):Observable<any>{return this.http.post(this.url, user)};
  deleteById(id: number): Observable<any>{return this.http.delete(this.url + '/' + id)};


}
