import { DetalleOrdenServicios } from "./detalleOrdenServicios.interface";
import { OrdenServicio } from "./ordenServicio.interface";
export interface FacturaView{
  idFactura: number;
  fechaFactura: Date;
  monto: number;
  detalleFactura: DetalleOrdenServicios[]|null;
  ordenServicio: OrdenServicio;
  nombre: string;
  apellidoMaterno: string;
  apellidoPaterno: string;
  telefono: string;
  domicilio: string;

  color: string;
  anioModelo: number;
  marca: string;
  matricula: string;
  modelo: string;
  tipoMotor: string;
  vin: string;

}
