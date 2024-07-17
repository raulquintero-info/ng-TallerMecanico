import { DetalleOrdenServicios } from "./detalleOrdenServicios.interface";

export interface Factura{
  idFactura: number;
  fechaFactura: Date;
  monto: number;
  detalleFactura: DetalleOrdenServicios[]|null;

}
