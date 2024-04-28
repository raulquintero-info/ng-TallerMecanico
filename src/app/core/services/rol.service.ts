import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../interfaces/rol.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  url: string =  environment.api + '/api/roles'

  constructor(private http: HttpClient) { }



  getAll():Observable<any>{return this.http.get(this.url)};
  getById(id: number):Observable<any>{return this.http.get(this.url + "/" + id)};
  delete(id: number):Observable<any>{return this.http.delete(this.url + "/" + id)}
  createOrUpdate(rol: Rol):Observable<any>{
    console.log('Rol enviada',rol);
    return rol.idRol>0 ? this.http.put(this.url + '/' + rol.idRol, rol) : this.http.post(this.url, rol);
  };
}
