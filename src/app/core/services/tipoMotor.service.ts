import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoMotor } from '../interfaces/tipoMotor.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoMotorService {


  url: string =  environment.api + '/api/tiposMotor';

  private http = inject(HttpClient);



  getAll():Observable<any>{return this.http.get(this.url)};
  getById(id: number):Observable<any>{return this.http.get(this.url + "/" + id)};
  delete(id: number):Observable<any>{return this.http.delete(this.url + "/" + id)}
  createOrUpdate(tipoMotor: TipoMotor):Observable<any>{
    console.log('tipo motor enviada',tipoMotor);
    return tipoMotor.idTipoMotor>0 ? this.http.put(this.url + '/' + tipoMotor.idTipoMotor, tipoMotor) : this.http.post(this.url, tipoMotor);
  };
}
