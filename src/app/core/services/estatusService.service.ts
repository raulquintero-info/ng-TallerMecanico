import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../interfaces/marca.interface';
import { EstatusServicio } from '../interfaces/estatusServicio.interface';

@Injectable({
  providedIn: 'root'
})
export class EstatusService {


  url: string = 'http://localhost:8080/api/estatusServicios'

  private http = inject(HttpClient);



  getAll():Observable<any>{return this.http.get(this.url)};
  getById(id: number):Observable<any>{return this.http.get(this.url + "/" + id)};
  delete(id: number):Observable<any>{return this.http.delete(this.url + "/" + id)}
  createOrUpdate(estatusServicio: EstatusServicio):Observable<any>{
    console.log('estatus enviada',estatusServicio);
    return estatusServicio.idEstatusServicio>0 ? this.http.put(this.url + '/' + estatusServicio.idEstatusServicio, estatusServicio) : this.http.post(this.url, estatusServicio);
  };
}
