import { DetalleOrdenServicios } from "./detalleOrdenServicios.interface";
import { Employee } from "./employee.interface";
import { EstatusServicio } from "./estatusServicio.interface";
import { Vehiculo } from "./vehiculo.interface";

export interface OrdenServicio{
  idOrdenServicio: number;
  factura: number;
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
