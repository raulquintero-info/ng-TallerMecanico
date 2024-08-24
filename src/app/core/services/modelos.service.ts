import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Modelo } from '../interfaces/modelo.interface';
import { Page } from '../interfaces/page.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModelossService {


  url: string =  environment.api + '/api/modelos'
  urlMarcas: string =  environment.api + '/api/marcas'

  idMarca: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private http = inject(HttpClient);




  setIdMarca(status:number){
    this.idMarca.next(status);
  }

  currentIdMarca(): Observable<number> {
    return this.idMarca
  }



  getAll():Observable<any>{return this.http.get(this.url)};
  getPaginatedData(page: number): Observable<Page<any>> {return this.http.get<Page<any>>(this.url +`/page/${page}`)};
  getById(id: number):Observable<any>{return this.http.get(this.url + "/" + id)};
  getByIdMarca(id: number):Observable<any>{return this.http.get(this.urlMarcas + "/" + id + '/modelos')};
  delete(id: number):Observable<any>{return this.http.delete(this.url + "/" + id)};
  createOrUpdate(modelo: Modelo):Observable<any>{
    console.log('modelo enviada',modelo);
    return modelo.idModelo>0 ? this.http.put(this.url + '/' + modelo.idModelo, modelo) : this.http.post(this.url, modelo);
  };
}
