import { Employee } from "./employee.interface"
import { Rol } from "./rol.interface";
import { Usuario } from "./usuario.interface"

export interface EmployeeToSave {

  usuario: Usuario,
  empleado: {
    idEmpleado: number;
    nombre: string;
    rfc: string;
    apellidoMaterno: string;
    apellidoPaterno: string;
    curp: string;
    nss: string;
    observaciones: string;
    puesto: string;
    // usuario: Usuario;
    // rol:Rol[]
  }
}
