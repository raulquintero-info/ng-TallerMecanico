import { Rol } from "src/app/core/interfaces/rol.interface";
import { Authority } from "./authority.interface";

export interface User{
  idUsuario: number;
  email: string;
  password: string;
  username: string;
  authorities?: Authority[];
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  enabled: boolean;
  rol: Rol[];
  role?: string;
}
