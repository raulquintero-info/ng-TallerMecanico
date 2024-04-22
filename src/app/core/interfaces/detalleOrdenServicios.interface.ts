import { OrdenServicio } from "./ordenServicio.interface";

  export interface DetalleOrdenServicios{

    idDetalleOrdenServicio: number;
    descripcionServicio: string;
    ordenServicio: OrdenServicio;
  }
