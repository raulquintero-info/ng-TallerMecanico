import { Usuario } from "./usuario.interface";
import { Vehiculo } from "./vehiculo.interface";

export interface Customer{
  id?:number,
  idCliente: number,
  nombre: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  domicilio: string,
  telefono: string,
  usuario: Usuario,
  vehiculos: Vehiculo[]
  }
