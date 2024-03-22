import { Customer } from "./customers.interface";

export interface Vehiculo{
  idVehiculo: number;
  vin: string;
  matricula: string;
  imagen: string;
  color: string;
  anio_modelo: string
  cliente: Customer;
  // modelo: Modelo;

}
