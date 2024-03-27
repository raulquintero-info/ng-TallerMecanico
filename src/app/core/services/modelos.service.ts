import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Modelo } from '../interfaces/modelo.interface';

@Injectable({
  providedIn: 'root'
})
export class ModelossService {


  url: string = 'http://localhost:8080/api/modelos'
  urlMarcas: string = 'http://localhost:8080/api/marcas'

  private http = inject(HttpClient);



  getAll():Observable<any>{return this.http.get(this.url)};
  getById(id: number):Observable<any>{return this.http.get(this.url + "/" + id)};
  getByIdMarca(id: number):Observable<any>{return this.http.get(this.urlMarcas + "/" + id + '/modelos')};
  delete(id: number):Observable<any>{return this.http.delete(this.url + "/" + id)};
  createOrUpdate(modelo: Modelo):Observable<any>{
    console.log('modelo enviada',modelo);
    return modelo.idModelo>0 ? this.http.put(this.url + '/' + modelo.idModelo, modelo) : this.http.post(this.url, modelo);
  };
}
