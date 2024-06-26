import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../interfaces/marca.interface';
import { EstatusServicio } from '../interfaces/estatusServicio.interface';
import { Page } from '../interfaces/page.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstatusService {


  url: string =  environment.api + '/api/estatusServicios'

  private http = inject(HttpClient);



  getAll():Observable<any>{return this.http.get(this.url)};
  getPaginatedData(page: number): Observable<Page<any>> {return this.http.get<Page<any>>(this.url +`/page/${page}`)};
  getById(id: number):Observable<any>{return this.http.get(this.url + "/" + id)};
  delete(id: number):Observable<any>{return this.http.delete(this.url + "/" + id)}
  createOrUpdate(estatusServicio: EstatusServicio):Observable<any>{
    console.log('estatus enviada',estatusServicio);
    return estatusServicio.idEstatusServicio>0 ? this.http.put(this.url + '/' + estatusServicio.idEstatusServicio, estatusServicio) : this.http.post(this.url, estatusServicio);
  };
}
