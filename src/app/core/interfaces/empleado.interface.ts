import { Usuario } from "./usuario.interface";

export interface empleado{
  idEmpleado: number;
  nombre: string;
  rfc: string;
  apellidoMaterno: string;
  apellidoPaterno: string;
  curp: string;
  nss: string;
  observaciones: string;
  puesto: string;
  ususario: Usuario;
}
