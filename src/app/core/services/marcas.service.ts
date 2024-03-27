import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../interfaces/marca.interface';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {


  url: string = 'http://localhost:8080/api/marcas'

  private http = inject(HttpClient);



  getAll():Observable<any>{return this.http.get(this.url)};
  getById(id: number):Observable<any>{return this.http.get(this.url + "/" + id)};
  delete(id: number):Observable<any>{return this.http.delete(this.url + "/" + id)}
  createOrUpdate(marca: Marca):Observable<any>{
    console.log('marca enviada',marca);
    return marca.idMarca>0 ? this.http.put(this.url + '/' + marca.idMarca, marca) : this.http.post(this.url, marca);
  };
}
