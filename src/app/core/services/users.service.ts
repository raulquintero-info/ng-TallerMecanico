import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/customers.interface';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UserssService {

  url: string = 'http://localhost:8080/api/usuarios'

  constructor(private http: HttpClient) { }


  getAll():Observable<any>{return this.http.get(this.url)};
  get(id: number):Observable<any>{return this.http.get(this.url + '/' + id)};
  create(user: Usuario):Observable<any>{return this.http.post(this.url, user)};



}
