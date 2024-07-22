import { DetalleOrdenServicios } from "./detalleOrdenServicios.interface";
import { Employee } from "./employee.interface";
import { EstatusServicio } from "./estatusServicio.interface";
import { Factura } from "./factura.interface";
import { Vehiculo } from "./vehiculo.interface";

export interface OrdenServicio{
  idOrdenServicio: number;
  factura: Factura | null;
  idFactura: number;
  fechaOrden: string;
  kilometraje: string;
  vehiculo?: Vehiculo
  vehiculos?: Vehiculo
  falla: string;
  observaciones: string;
  comentarios: string;
  estatusServicio: EstatusServicio;
  detalleOrdenServicios: DetalleOrdenServicios[];
  empleado: Employee
}
