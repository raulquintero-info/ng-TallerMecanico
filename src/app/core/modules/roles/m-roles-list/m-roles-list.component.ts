import { Component, Input, inject } from '@angular/core';
import { Rol } from 'src/app/core/interfaces/rol.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { RolService } from 'src/app/core/services/rol.service';

@Component({
  selector: 'app-m-roles-list',
  templateUrl: './m-roles-list.component.html',
  styleUrls: ['./m-roles-list.component.css']
})
export class MRolesListComponent {
@Input() roles: Rol[] = [];
@Input() path: string = '';
messages: Toast [] = [];

private rolesService = inject(RolService)

delete(rol: Rol){

  this.rolesService.delete(rol.idRol).subscribe({
    next: resp=>{
      this.refresh();
      this.messages.push({title: "Sistema", timeAgo: "", body:"Se Ha eliminado el rol: " + rol.nombre, type:"success"})

    },
    error: resp=>{
      this.messages.push({title: "Sistema", timeAgo: "", body:"No ha sido posible Borrar el registro, intente mas tarde", type: "danger"})
    }
  })
}

refresh(){
  this.rolesService.getAll().subscribe({
    next:resp=>{
      this.roles = resp;
    }
  })
}
ngOnDestroy(){
  this.messages;
}

}
