import { Marca } from "./marca.interface";

export interface Modelo {
  idModelo: number;
  modelo: string;
  marca: Marca;
}
