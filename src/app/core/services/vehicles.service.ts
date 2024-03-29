import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  url: string = 'http://localhost:8080/api/vehiculos'

  constructor(private http: HttpClient) { }



  getAll():Observable<any>{return this.http.get(this.url)};
  get(id: number):Observable<any>{return this.http.get(this.url + "/" + id)};

}
