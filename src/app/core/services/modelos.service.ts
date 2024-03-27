import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Modelo } from '../interfaces/modelo.interface';

@Injectable({
  providedIn: 'root'
})
export class ModelossService {


  url: string = 'http://localhost:8080/api/modelos'

  private http = inject(HttpClient);



  getAll():Observable<any>{return this.http.get(this.url)};
  getById(id: number):Observable<any>{return this.http.get(this.url + "/" + id)};
  delete(id: number):Observable<any>{return this.http.delete(this.url + "/" + id)};
}
