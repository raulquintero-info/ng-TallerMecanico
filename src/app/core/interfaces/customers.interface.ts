import { Usuario } from "./usuario.interface";

export interface Customer{
  id?:number,
  idCliente: number,
  nombre: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  domicilio: string,
  telefono: string,
  usuario: Usuario,
  vehiculos: []
  }
