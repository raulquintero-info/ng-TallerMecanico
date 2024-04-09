import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../interfaces/vehiculo.interface';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  url: string = 'http://localhost:8080/api/vehiculos'

  constructor(private http: HttpClient) { }



  getAll():Observable<any>{return this.http.get(this.url)};
  get(id: number):Observable<any>{return this.http.get(this.url + "/" + id)};
  deleteById(id: number):Observable<any>{return this.http.delete(this.url + '/' +id)};
  saveOrUpdate(vehicle: Vehiculo):Observable<any>{
    console.log('idV',vehicle.idVehiculo)
    return (vehicle.idVehiculo == 0) ? this.http.post(this.url, vehicle) : this.http.put(this.url + '/' + vehicle.idVehiculo, vehicle)
  };
}
