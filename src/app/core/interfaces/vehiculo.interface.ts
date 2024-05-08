import { Customer } from "./customers.interface";
import { Modelo } from "./modelo.interface";
import { OrdenServicio } from "./ordenServicio.interface";
import { TipoMotor } from "./tipoMotor.interface";

export interface Vehiculo{
  idVehiculo: number;
  vin: string;
  matricula: string;
  imagen: string;
  color: string;
  anioModelo: string
  kilometraje: string;
  cliente: Customer;
  modelo: Modelo;
  tipoMotor: TipoMotor;
  ordenServicio: OrdenServicio[];
}
