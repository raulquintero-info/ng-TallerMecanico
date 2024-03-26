import { Rol } from "./rol.interface";

export interface Usuario{
  idUsuario: number,
  email: string,
  password: string,
  rol: Rol[],
}
