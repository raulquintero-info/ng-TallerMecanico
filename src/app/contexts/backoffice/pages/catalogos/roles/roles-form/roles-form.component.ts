import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rol } from 'src/app/core/interfaces/rol.interface';
import { Toast } from 'src/app/core/interfaces/toast.interface';
import { RolService } from 'src/app/core/services/rol.service';

@Component({
  selector: 'app-roles-form',
  templateUrl: './roles-form.component.html',
  styleUrls: ['./roles-form.component.css']
})
export class RolesFormComponent implements OnInit {
  showSpinner: boolean = false;
  respuesta: string = '';
  messages: Toast[] = []
  params: any;
  rol: Rol = {} as Rol;
  title: string = "Catalogos";
  subTitle: string = "Agregar Marca";
  buttons = [
    { text: "Ver Marcas", path: "/admin/catalogos/marcas" },
  ];

  private rolesService = inject(RolService);
  private route = inject(ActivatedRoute);


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.rol.idRol = Number(params.get('id'))
    });

    if (this.rol.idRol > 0) {
      this.subTitle = 'Editar Marca';
      this.rolesService.getById(this.rol.idRol).subscribe({
        next: resp => {
          this.rol = resp;
        }
      })
    }
  }


  save() {
    this.showSpinner = true;
    this.respuesta = '';
    if (this.rol.idRol > 0) {
      console.log('Rol Enviada', this.rol);
      this.rolesService.createOrUpdate(this.rol).subscribe({
        next: resp => {
          this.messages.push({ title: "Sistema", timeAgo: "", body: "Registro Grabado", type: "success" })

          this.rol = resp.rol;
          this.respuesta = resp.mensaje;
          console.log('Marca Recibida', resp)
          this.showSpinner = false;
        },
        error: resp => {
          this.messages.push({ title: "Sistema", timeAgo: "", body: "El registro no se ha grabado, debido a un problema con el servidor", type: "danger" })
          console.log('update error:', resp)
          this.showSpinner = false;
        }
      })
    } else {

      console.log('rol enviado', this.rol);

      this.rolesService.createOrUpdate(this.rol).subscribe({
        next: resp => {
          this.messages.push({ title: "Sistema", timeAgo: "", body: "Registro Grabado", type: "success" })
          console.log('respUsuario', resp)
          this.showSpinner = false;
        },
        error: resp => {
          this.messages.push({ title: "Sistema", timeAgo: "", body: "El registro no se ha grabado, debido a un problema con el servidor", type: "danger" })
          console.log('create error:', resp);
          this.respuesta = resp;
          this.showSpinner = false;
        }
      });
    }


  }



}
