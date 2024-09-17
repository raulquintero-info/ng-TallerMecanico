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

  //FEATURES: crear endpoint en backend de estas peticiones
  // getDetalleDeORden(){}

  getAll():Observable<any>{return this.http.get(this.url)};
  getAllByIdVehicle(id: number):Observable<any>{return this.http.get(this.url)};
  getPaginatedData(page: number): Observable<Page<any>> {return this.http.get<Page<any>>(this.url +`/page/${page}`)};
  getPaginatedRecepcionData(departamentoId: number, page: number= 1): Observable<Page<any>> { return this.http.get<Page<any>>(this.url +`/departamento/${departamentoId}/page/${page}` ) };
  getPaginatedTallerData(departamentoId: number): Observable<Page<any>> {return this.http.get<Page<any>>(this.url +`/departamento/${departamentoId}`)};
  getById(id: number):Observable<any>{return this.http.get(this.url + "/" + id)};
  getByStatus(status: string):Observable<any>{return this.http.get(this.url + "/estatus/" + status)};
  deleteById(id: number):Observable<any>{return this.http.delete(this.url + `/${id}`)}
  deleteItem(id: number):Observable<any>{return this.http.delete(this.urlDetalle + '/' + id)};
  addItem(item: DetalleOrdenServicios): Observable<any>{return this.http.post(this.urlDetalle, item)};
  getPDF(idOrdenServicio: number):Observable<any>{return this.http.get(this.url + '/pdf')};
  saveOrUpdate(service: OrdenServicio):Observable<any>{
    return (service.idOrdenServicio>0)
      ? this.http.put(this.url + '/' + service.idOrdenServicio, service)
      : this.http.post(this.url , service)
  };





  //Notas de ventas ( antes llamadas Facturas)
  // TODO: crear servicio propio para facturas
  generarFactura(idOrdenServicio: number): Observable<any>{return this.http.post(this.urlFacturas + '/' + idOrdenServicio, idOrdenServicio)}
  getFacturaById(idFactura: number): Observable<any>{return this.http.get(this.urlFacturas + '/' + idFactura)}
  getFacturas():Observable<any>{return this.http.get(this.urlFacturas)}
  getFacturasByPage(page: number):Observable<any>{return this.http.get(this.urlFacturas + `/page/${page}`)}
  getFacturasByMonth(year: String, month: String): Observable<any> { return this.http.get(this.urlFacturas + '/ventas-por-dia?year=' + year + '&month=' + month) }
  getFacturasDateRange(fechaInicio: String, fechaFin: String): Observable<any> {
    return this.http.get(this.urlFacturas + '/ventas-por-mes?fechaInicio=' + fechaInicio + '&fechaFin=' + fechaFin)
  }
}
