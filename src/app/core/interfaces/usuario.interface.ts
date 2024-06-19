import { Customer } from "./customers.interface";
import { Rol } from "./rol.interface";

export interface Usuario{
  idUsuario: number,
  email: string,
  username:string,
  password: string,
  rol: Rol[],
  customer?: Customer
}
