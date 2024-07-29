import { DetalleOrdenServicios } from "./detalleOrdenServicios.interface";
import { OrdenServicio } from "./ordenServicio.interface";

export interface Factura{
  idFactura: number;
  fechaFactura: Date;
  monto: number;
  detalleFactura: DetalleOrdenServicios[]|null;
  ordenServicio: OrdenServicio;

}
