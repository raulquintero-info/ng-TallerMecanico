import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../interfaces/marca.interface';
import { Page } from '../interfaces/page.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {


  url: string =  environment.api + '/api/marcas'

  private http = inject(HttpClient);



  getAll():Observable<any>{return this.http.get(this.url)};
  getPaginatedData(page: number): Observable<Page<any>> {return this.http.get<Page<any>>(this.url +`/page/${page}`)};
  getById(id: number):Observable<any>{return this.http.get(this.url + "/" + id)};
  getModelosById(id: number):Observable<any>{return this.http.get(this.url + "/" + id + '/modelos')};
  delete(id: number):Observable<any>{return this.http.delete(this.url + "/" + id)}
  createOrUpdate(marca: Marca):Observable<any>{
    console.log('marca enviada',marca);
    return marca.idMarca>0 ? this.http.put(this.url + '/' + marca.idMarca, marca) : this.http.post(this.url, marca);
  };
}
