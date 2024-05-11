import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Page } from '../interfaces/page.interface';
import { Departamento } from '../interfaces/departamento.interface';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  url: string =  environment.api + '/api/departamentos'

  private http = inject(HttpClient);



  getAll():Observable<any>{return this.http.get(this.url)};
  getPaginatedData(page: number): Observable<Page<any>> {return this.http.get<Page<any>>(this.url +`/page/${page}`)};
  getById(id: number):Observable<any>{return this.http.get(this.url + "/" + id)};
  getEstatusById(id: number):Observable<any>{return this.http.get(this.url + "/" + id + '/estatus')};
  delete(id: number):Observable<any>{return this.http.delete(this.url + "/" + id)}
  createOrUpdate(departamento: Departamento):Observable<any>{
    console.log('departamento enviado',departamento);
    return departamento.idDepartamento>0 ? this.http.put(this.url + '/' + departamento.idDepartamento, departamento) : this.http.post(this.url, departamento);
  };

}
