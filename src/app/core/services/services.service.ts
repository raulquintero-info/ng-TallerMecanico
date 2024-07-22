import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdenServicio } from '../interfaces/ordenServicio.interface';
import { Page } from '../interfaces/page.interface';
import { DetalleOrdenServicios } from '../interfaces/detalleOrdenServicios.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url: string =  environment.api + '/api/ordenesServicio'
  urlDetalle: string =  environment.api + '/api/detalleOrdenServicio'
  urlFacturas: string = environment.api + '/api/facturas'

  constructor(private http: HttpClient) { }



  getAll():Observable<any>{return this.http.get(this.url)};

  //TODO: crear endpoint en backend de estas peticiones
  getAllByIdVehicle(id: number):Observable<any>{return this.http.get(this.url)};
  getDetalleDeORden(){}

  getPaginatedData(page: number): Observable<Page<any>> {return this.http.get<Page<any>>(this.url +`/page/${page}`)};
  getPaginatedRecepcionData(departamentoId: number, page: number= 1): Observable<Page<any>> {return this.http.get<Page<any>>(this.url +`/departamento/${departamentoId}`)};
  getPaginatedTallerData(departamentoId: number): Observable<Page<any>> {return this.http.get<Page<any>>(this.url +`/departamento/${departamentoId}`)};
  getById(id: number):Observable<any>{return this.http.get(this.url + "/" + id)};
  getByStatus(status: string):Observable<any>{return this.http.get(this.url + "/estatus/" + status)};
  saveOrUpdate(service: OrdenServicio):Observable<any>{
    console.log('servicio enviado', service);
    return (service.idOrdenServicio>0)
      ? this.http.put(this.url + '/' + service.idOrdenServicio, service)
      : this.http.post(this.url , service)
  };
  deleteById(id: number):Observable<any>{return this.http.delete(this.url + `/${id}`)}

  deleteItem(id: number):Observable<any>{return this.http.delete(this.urlDetalle + '/' + id)};
  addItem(item: DetalleOrdenServicios): Observable<any>{return this.http.post(this.urlDetalle, item)};

  getPDF(idOrdenServicio: number):Observable<any>{return this.http.get(this.url + '/pdf')};
  generarFactura(idOrdenServicio: number): Observable<any>{return this.http.post(this.urlFacturas + '/' + idOrdenServicio, idOrdenServicio)}
  getFacturaById(idFactura: number): Observable<any>{return this.http.get(this.urlFacturas + '/' + idFactura)}

}
