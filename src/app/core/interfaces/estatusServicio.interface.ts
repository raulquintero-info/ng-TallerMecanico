import { Departamento } from "./departamento.interface";

export interface EstatusServicio{
  idEstatusServicio: number;
  estatusServicio: string;
  departamento: Departamento;
}
