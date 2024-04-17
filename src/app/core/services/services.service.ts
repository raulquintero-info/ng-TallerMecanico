import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdenServicio } from '../interfaces/ordenServicio.interface';
import { Page } from '../interfaces/page.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url: string = 'http://localhost:8080/api/ordenesServicio'

  constructor(private http: HttpClient) { }



  getAll():Observable<any>{return this.http.get(this.url)};
  getPaginatedData(page: number): Observable<Page<any>> {return this.http.get<Page<any>>(this.url +`/page/${page}`)};
  getById(id: number):Observable<any>{return this.http.get(this.url + "/" + id)};
  saveOrUpdate(service: OrdenServicio):Observable<any>{
    return (service.idOrdenServicio>0)
      ? this.http.put(this.url + '/' + service.idOrdenServicio, service)
      : this.http.post(this.url , service)
  };



}
